<?php
try
{

function _json_encode($val)
{
    if (is_string($val)) return '"'.addslashes($val).'"';
    if (is_numeric($val)) return $val;
    if ($val === null) return 'null';
    if ($val === true) return 'true';
    if ($val === false) return 'false';

    $assoc = false;
    $i = 0;
    foreach ($val as $k=>$v){
        if ($k !== $i++){
            $assoc = true;
            break;
        }
    }
    $res = array();
    foreach ($val as $k=>$v){
        $v = _json_encode($v);
        if ($assoc){
            $k = '"'.addslashes($k).'"';
            $v = $k.':'.$v;
        }
        $res[] = $v;
    }
    $res = implode(',', $res);
    return ($assoc)? '{'.$res.'}' : '['.$res.']';
}

function playerFilter($conn, $table, $userid, $id)
{
	if ($table == "tb_ach_player" || $table == "tb_item_player" || $table == "tb_edevent_player")
	{
		$filter[] = "id_player = " . $conn->quote($userid);
	}
	
	if ($table == "tb_players")
	{
		$filter[] = "id = " . $conn->quote($userid);
	} else
	if ($id != null)
	{
		$filter[] = "id = " . $conn->quote($id);	
	}
	
	if (count($filter) > 0)
 	{
		$filterstr = " WHERE ".implode(" AND ",$filter);
	} else
	$filterstr = "";
	return $filterstr;
}


function finalizeScore($conn, $data, $userid)
{
	$deltadist = 450;
	$deltascore = 300;
	$dist = $data['dist']; 
	$score = $data['score'];
	$res = readJSON($conn, "tb_players", $userid);
	$prevdate = $res[0]['lastcheckdate'];
	$curscore = $res[0]['score'];
	$curmoney = $res[0]['money'];
	$prevdist = $res[0]['maxdistance'];
	$curdist = $res[0]['curdist'];

	//$money = (float)$curmoney + (float)$score;

	if (abs($dist - $curdist) < $deltadist)
	{
		//echo "SCORE FINALIZE OK";
		$md = $dist;
		if ((float)$prevdist > (float)$md) $md = $prevdist;
		updateJSON($conn, 'tb_players', array('score'=> '0', 'lastcheckdate' => null, 'curdist'=> '0', 'maxdistance'=>round($md)), $userid);					
	} //else echo "CAN'T FINALIZE SCORE";
}

function resetRunProgress($conn, $data, $userid)
{
	$date_currstr = date('Y-m-d H:i:s');
	updateJSON($conn, 'tb_players', array('score'=> "0", 'lastcheckdate' => $date_currstr, 'curdist'=>'0'), $userid);
}


function updateRunProgress($conn, $data, $userid)
{
	$deltasec = 12;
	$deltadist = 450;
	$deltascore = 300;
	$dist = $data['dist']; 
	$score = $data['score'];
	$res = readJSON($conn, "tb_players", $userid);
	$prevdate = $res[0]['lastcheckdate'];
	//echo "PREV DATE ".$prevdate;
	if ($prevdate) 
	{
		$prevdatetime = strtotime( $prevdate );
		$prevdate = date('Y-m-d H:i:s', $prevdatetime);
	}
	$curscore = $res[0]['score'];
	$curdist = $res[0]['curdist'];

	$date_currstr = date('Y-m-d H:i:s');
	//echo "NOW ".$date_currstr;
	if ($prevdate)
	{
	//	echo 'DATE CURR TIME'.strtotime($date_currstr);
	//	echo 'PREV DATE TIME'.$prevdatetime;
		$since_start = strtotime($date_currstr) - $prevdatetime;
	//	echo 'DIFFERENCE'.$since_start;
		
		if ($since_start > $deltasec)
		{
		//	echo "DIST DIFF        ".abs($dist - $curdist);
		//	echo "SCORE DIFF        ".abs($score - $curscore) ;
			if (abs($dist - $curdist) < $deltadist)
			{
			//	echo "NEXT SUBMIT";
				updateJSON($conn, 'tb_players', array('score'=> (string)$score, 'lastcheckdate' => $date_currstr, 'curdist'=> (string)$dist), $userid);			
			}
		} else 
		{
		//	echo "TOO FREQUENTLY";
		}
	}
/*	else 
	{
		echo "FIRST SUBMIT";
		updateJSON($conn, 'tb_players', array('score'=> 0, 'lastcheckdate' => $date_currstr, 'curdist'=>0), $userid);
	}
	*/
}

function buyItem($conn, $data, $userid)
{
	$id = $data['id'];
	$eq = $data['equipped'];
	$itemplquery = "SELECT id FROM thanksdad.tb_item_player WHERE id_player = ".$conn->quote($userid).' AND id_item ='.$conn->quote($id);
	$statement = $conn->prepare($itemplquery);
	$statement->execute();
	$itemalready = $statement->fetchAll(PDO::FETCH_ASSOC);
	if ($itemalready[0]) 
	{	
		echo "ALREADY HAVE ITEM";
		return;
	}
	
	$plscript = "SELECT money, crystals, lvl FROM thanksdad.tb_players WHERE id = ".$conn->quote($userid);
	$statement = $conn->prepare($plscript);
	$statement->execute();
	$res = $statement->fetchAll(PDO::FETCH_ASSOC);
	$player = $res[0];
	if ($player == null) return false;
	
	$res = readJSON($conn, "tb_items", $userid, $id);
	$item = $res[0];
	if ($item == null) {
		echo "NO SUCH ITEM";
		return;
	}
	
	//var_dump($item);
	//var_dump($player);
	if ($player['lvl'] >= $item['reqlvl'])
	{
		if ($player['money'] >= $item['price'])
		{
			$player['money'] -= $item['price'];
		} else
		{	
			echo "NOT ENOUGH MONEY";
			return;
		}
	} else 
	{
		if ($player['crystals'] >= $item['pricecrys'])
		{
			$player['crystals'] -= $item['pricecrys'];
		}
		else 
		{	
			echo "NOT ENOUGH CRYSTALS";
			return;
		}
	}

	try{
		$conn->beginTransaction();
		insertJSON($conn, "tb_item_player", array('id_player'=> $userid, 'id_item' => $id, 'equipped'=>"1"));
		updateJSON($conn, "tb_players", $player, $userid);
		$conn->commit();
		return $player;
	} 
	catch (PDOException $e) {
		$conn->rollBack();
		print "Error!: " . $e->getMessage() . "<br/>";
		die();
	}
}

function readJSON($conn, $table, $userid, $id)
{
	$f = playerFilter($conn, $table, $userid, $id);
	$wholequery = "SELECT * FROM thanksdad.".$table.$f;
	//echo $wholequery;
	$statement = $conn->prepare($wholequery);
	$statement->execute();
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	return $result;
}

function getScores($conn, $data, $userid)
{
	$take = $data['take'];
	$skip = $data['skip'];
	$filter = $data['filter'];
	//SELECT id, maxdistance  from thanksdad.tb_players WHERE id IN ('4EA93A3F-6A42-4C1F-A003-24C247C695B4', 'C049BF3A-CF33-4307-87A5-2C79583DBBF4') ORDER BY maxdistance DESC OFFSET 0 ROWS FETCH NEXT 20 ROWS ONLY 
	$wholequery = "SELECT platformid, id, maxdistance, lvl, name, last_name FROM thanksdad.tb_players ";
	if ($filter)
	{
		$wholequery = $wholequery." WHERE platformid IN (".$filter.")";
	}
	$wholequery = $wholequery." ORDER BY maxdistance DESC LIMIT ".$take." OFFSET ".$skip;
	//echo $wholequery;
	$statement = $conn->prepare($wholequery);
	$statement->execute();
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	return $result;
}

function updateScore($conn, $curdist, $userid)
{
	$wholequery = "SELECT maxdistance FROM thanksdad.tb_players WHERE id =  ".$conn->quote($userid);
	$statement = $conn->prepare($wholequery);
	$statement->execute();
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	$curdist = $result[0]['maxdistance'];
	
	$wholequery = "SELECT COUNT(*) as total FROM thanksdad.tb_players WHERE maxdistance > ".$curdist;
	//echo $wholequery;
	$statement = $conn->prepare($wholequery);
	$statement->execute();
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	$rank	= 	$result[0]['total'];
	$wholequery = "UPDATE thanksdad.tb_players SET rank = ".$rank." WHERE id = ".$conn->quote($userid);
	//echo $wholequery;
	$statement = $conn->prepare($wholequery);
	$statement->execute();
	return $rank;
}

function insertJSON($conn, $table, $jsonEncoded, $enabledTables)
{
	$obj = $jsonEncoded;
	if ($enabledTables && !in_array($table, $enabledTables)) return;
	
	foreach($obj as $key => $value){
	//	if ($value == null) continue;
		if ($key == 'desc') $key = '`'.$key.'`'; 
		$sqlkeys[] = $key; 
		$sqlvalues[] = (is_numeric($value)) ? "$value" : $conn->quote($value); 
	}
	$valuesstr = implode(",",$sqlvalues);
	$keystr = implode(",",$sqlkeys);

	$statement = $conn->prepare("SELECT UUID()");
	$statement->execute();
	$res = $statement->fetch(PDO::FETCH_ASSOC);
	$uuid = $res['UUID()'];
	$wholequery = "INSERT INTO thanksdad.".$table." (id,".$keystr.") VALUES (".$conn->quote($uuid).",".$valuesstr .");";
	$statement = $conn->prepare($wholequery);
	$res = $statement->execute();
	$statement = null;
	return $uuid;
}

function updateJSON($conn, $table, $data, $userid, $id, $bannedColumns)
{
	$obj = $data;
	
	if ($userid == null)
	{
		if ($table == 'tb_players') return;
	}
	
	foreach($obj as $key => $value){
		if ($bannedColumns && in_array($key, $bannedColumns)) continue;
		if ($key == 'desc') $key = '`'.$key.'`'; 
		if ($value == '') continue;
		$sql[] = (is_numeric($value)) ? "$key = $value" : "$key = " . $conn->quote($value); 
	}
	
	$f = playerFilter($conn, $table, $userid, $id);
	if ($f == "") return;
	$sqlclause = implode(",",$sql);

	$wholequery = "update thanksdad.".$table." SET $sqlclause ".$f;
	//echo $wholequery;
$statement = $conn->prepare($wholequery);

$statement->execute();
//$result = $statement->fetchAll(PDO::FETCH_ASSOC);
$statement = null;
return true;
}
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
