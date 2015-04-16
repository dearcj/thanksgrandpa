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
		$filterstr = " WHERE ".implode(",",$filter);
	} else
	$filterstr = "";
	return $filterstr;
}

function readJSON($conn, $table, $userid, $id)
{
	$f = playerFilter($conn, $table, $userid, $id);
	$wholequery = "SELECT * FROM thanksdad.".$table.$f;
	$statement = $conn->prepare($wholequery);
	$statement->execute();
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	return $result;
}

function getScores($conn, $data, $userid)
{
	$decr = json_decode($data);
	
	$take = $decr->take;
	$skip = $decr->skip;
	$filter = $decr->filter;
	//SELECT id, maxdistance  from thanksdad.tb_players WHERE id IN ('4EA93A3F-6A42-4C1F-A003-24C247C695B4', 'C049BF3A-CF33-4307-87A5-2C79583DBBF4') ORDER BY maxdistance DESC OFFSET 0 ROWS FETCH NEXT 20 ROWS ONLY 
	$wholequery = "SELECT platformid, id, maxdistance, lvl FROM thanksdad.tb_players ";
	if ($filter)
	{
		$wholequery = $wholequery." WHERE id IN (".$filter."),";
	}
	$wholequery = $wholequery." ORDER BY maxdistance DESC OFFSET ".$skip." ROWS FETCH NEXT .".$take.". ROWS ONLY ";
	echo $wholequery; 
	$statement = $conn->prepare($wholequery);
	$statement->execute();
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	return $result;
}

function updateScore($conn, $curdist, $userid)
{
	$wholequery = "SELECT COUNT(*) FROM thanksdad.tb_players WHERE maxdistance > ".$curdist;
	echo $wholequery;
	$statement = $conn->prepare($wholequery);
	$statement->execute();
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	var_dump($result);
	$rank	= 	$result[0][""];
	$wholequery = "UPDATE thanksdad.tb_players SET rank = ".$rank." WHERE id = ".$conn->quote($userid);
	echo $wholequery;
	$statement = $conn->prepare($wholequery);
	$statement->execute();
}



function insertJSON($conn, $table, $jsonString, $jsonEncoded)
{
	if (!$jsonEncoded)
	{
		$obj = json_decode($jsonString);
	} else $obj = $jsonEncoded;
	
	foreach($obj as $key => $value){
	//	if ($value == null) continue;
		$sqlkeys[] = $key; 
		$sqlvalues[] = (is_numeric($value)) ? "$value" : $conn->quote($value); 
	}
$valuesstr = implode(",",$sqlvalues);
$keystr = implode(",",$sqlkeys);
$wholestr = "INSERT INTO thanksdad.".$table." (".$keystr.") VALUES (".$valuesstr .");";
$statement = $conn->prepare($wholestr);
$res = $statement->execute();
//print($wholestr);

$statement = null;
return $res;
}

function updateJSON($conn, $table, $jsonString, $jsonEncoded, $userid, $id)
{
	if (!$jsonEncoded)
	{
		$obj = json_decode($jsonString);
	} else $obj = $jsonEncoded;
	
	foreach($obj as $key => $value){
		if ($value == '') continue;
		$sql[] = (is_numeric($value)) ? "$key = $value" : "$key = " . $conn->quote($value); 
	}
	$f = playerFilter($conn, $table, $userid, $id);
$sqlclause = implode(",",$sql);
$wholestr = "UPDATE thanksdad.".$table." SET $sqlclause ".$f;
//echo $wholestr;
$statement = $conn->prepare($wholestr);
$statement->execute();
$result = $statement->fetchAll(PDO::FETCH_ASSOC);
$statement = null;
var_dump($result);
return $result;
}
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
