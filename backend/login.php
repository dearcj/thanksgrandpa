﻿<?php
require 'jwt_helper.php';
require 'connection.php';
require 'savescript.php';
try
{
$vkid = $_POST['vkid'];
$vkid = '2882845abbu';
if (!$vkid) return;

$statement = $pdo->prepare("select TOP 1 platformid, id from thanksdad.tb_players WHERE platformid = " . $pdo->quote($vkid));
$statement->execute();
$result = $statement->fetchAll();
echo $result;
   if (count($result > 0))
   {
	   $userid = $result[0]['id'];
   }  else
   {

	   $res= insertJSON("tb_players", null, array('platformid' => $vkid,
    'money' => 0,
    'crystals' => 0,
    'xp' => 0,
    'lvl' => 1,
    'energy' => 10, 
	'maxdistance' => 0));
	  echo($res);
   }

$token = array();
$token['vkid'] = $vkid;
$token['userid'] = $userid;
echo JWT::encode($token, $secret_key);

}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
