<?php

require_once 'jwt_helper.php';
require_once 'connection.php';
require_once 'savescript.php';
require_once 'json.php';

function doLogin($vkid, $pdo, $secret_key, $auth_key)
{
	$api_id = '4654201';
	$app_secret = 'qV6RXByT51TBnwGZX8Py';
	if (!$vkid || $vkid == '') return "NO USER ID";
	echo $api_id+'_'+$vkid+'_'+$app_secret;
	echo md5($api_id+'_'+$vkid+'_'+$app_secret);
	if (md5($api_id+'_'+$vkid+'_'+$app_secret) != $auth_key) return "INCORRECT AUTH KEY";
	$strFindPlayer = "select * from thanksdad.tb_players WHERE platformid = " . $pdo->quote($vkid);
	$statement = $pdo->prepare($strFindPlayer);

	$statement->execute();
	$result = $statement->fetchAll(PDO::FETCH_ASSOC);
	if ($result && count($result > 0))
	{
		$userid = $result[0]['id'];
		$playerItem = $result[0];
		$registered = false;
		//echo 'LOGIN USER WITH ID = ' . $userid;
	}  else
	{
		$registered = true;
		try{
			$pdo->beginTransaction();
			//	echo 'REGISTER NEW USER';
			$res= insertJSON($pdo, "tb_players", array('platformid' => $vkid,
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
				$playerItem = $statement->fetchAll(PDO::FETCH_ASSOC)[0];
				$userid = $playerItem["id"];
				$achs = readJSON($pdo, 'tb_achs', $userid);
				//CREATING ACHS
				foreach($achs as $ach){
					$plach = array('id_ach' => $ach["id"],
					'id_player' => $userid,
					'progress' => 0);
					insertJSON($pdo, "tb_ach_player",  $plach);
				} 
				$events = readJSON($pdo, 'tb_edevent', $userid);
				foreach($events as $event){
					$plevent = array('id_edevent' => $event["id"],
					'id_player' => $userid);
					insertJSON($pdo, "tb_edevent_player",  $plevent);
				} 
			} else throw new Exception('Cant add player record');
			$pdo->commit();
		}
		catch (PDOException $e) {
			$pdo->rollBack();
			print "Error!: " . $e->getMessage() . "<br/>";
			die();
		}
	}

	if ($userid == null) throw new Exception('No user id');

	$token = array(
	'vkid' => $vkid,
	'userid' => $userid
	);

	$tokenJWT = JWT::encode($token, $secret_key);
	$resp = array('registered' => $registered,'tokenJWT' => $tokenJWT, 'playerItem' => $playerItem);
	return $resp;
}



?>