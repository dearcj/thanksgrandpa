<?php
require 'jwt_helper.php';
require 'connection.php';
require 'savescript.php';
try
{
$vkid = $_POST['vkid'];
$vkid = '2882845';
if (!$vkid) return;

$strFindPlayer = "select * from thanksdad.tb_players WHERE platformid = " . $pdo->quote($vkid);
$statement = $pdo->prepare($strFindPlayer);
$statement->execute();
$result = $statement->fetchAll();
   if ($result && count($result > 0))
   {
	   $userid = $result[0]['id'];
      echo 'LOGIN USER WITH ID = ' . $userid;
	}  else
   {
    echo 'REGISTER NEW USER';
	
	$res= insertJSON($pdo, "tb_players", null, array('platformid' => $vkid,
    'money' => 0,
    'crystals' => 0,
    'xp' => 0,
    'lvl' => 1,
    'energy' => 10, 
	'maxdistance' => 0));
	
	if ($res)
	{
		$statement = $pdo->prepare($strFindPlayer);
		$statement->execute();
        $playerItem = $statement->fetchAll()[0];
		$userid = $playerItem["id"];
	} else die();
   }

   if (!$userid) die();
	$token = array(
		'vkid' => $vkid,
		'userid' => $userid
	);

$tokenJWT = JWT::encode($token, $secret_key);
$response = array('tokeJWT' => $tokenJWT, 'playerItem' => $playerItem);
echo json_encode($response);

var_dump(readJSON($pdo, 'tb_ach_player', $userid));
}
catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
