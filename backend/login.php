<?php
require 'jwt_helper.php';
require 'connection.php';
try
{
$vkid = $_POST['vkid'];
$vkid = '2882845';
if (!$vkid) return;

$statement = $pdo->prepare("select TOP 1 platformid, id from thanksdad.tb_players WHERE platformid = " . $pdo->quote($vkid));
$statement->execute();
$result = $statement->fetchAll();
   if (count($result > 0))
   {
	   $userid = $result[0]['id'];
   }  

$token = array();
$token['vkid'] = $vkid;
$token['userid'] = $userid;
echo JWT::encode($token, 'secret_server_key');

}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
