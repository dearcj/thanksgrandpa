﻿<?php
header("Content-Type: application/json; encoding=utf-8");
require 'jwt_helper.php';
require 'connection.php';
require 'savescript.php';

$vkid = $_POST['vkid'];
if (!$vkid) return;

$strFindPlayer = "select * from thanksdad.tb_players WHERE platformid = " . $pdo->quote($vkid);
$statement = $pdo->prepare($strFindPlayer);
try
{
	$statement->execute();
	$result = $statement->fetchAll();
	if ($result && count($result > 0))
	{
		$userid = $result[0]['id'];
		$playerItem = $result[0];
		//echo 'LOGIN USER WITH ID = ' . $userid;
	}  else
	{
		//echo 'REGISTER NEW USER';
		
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
			$achs = readJSON($pdo, 'tb_achs', $userid);
			//var_dump($achs);
			foreach($achs as $ach){
				//var_dump($ach);
				
				$plach = array('id_ach' => $ach["id"],
				'id_player' => $userid,
				'progress' => 0);
				//var_dump($plach);
				
				insertJSON($pdo, "tb_ach_player", null, $plach);
			} 
			
		} else die();
	}
	$pdo->commit();

	if (!$userid) die();
	$token = array(
	'vkid' => $vkid,
	'userid' => $userid
	);

	$tokenJWT = JWT::encode($token, $secret_key);
	$response = array('tokenJWT' => $tokenJWT, 'playerItem' => $playerItem);
	echo json_encode($response);
}
catch (PDOException $e) {
	$pdo->rollBack();
	print "Error!: " . $e->getMessage() . "<br/>";
	die();
}
?>
