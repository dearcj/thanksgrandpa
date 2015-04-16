<?php
require 'jwt_helper.php';
require 'connection.php';
require 'savescript.php';
try
{
$jwtToken = $_POST['token'];
$method = $_POST['method'];
$data = $_POST['data'];
$table = $_POST['table'];
$id = $_POST['id'];
if (!$jwtToken) die();
$token = JWT::decode($jwtToken);

error_log("DATA=".$data, 3 ,"/var/tmp/my-errors.log");

$platformid = $token['vkid'];
$userid = $token['userid'];

error_log($platformid.$userid, 3 ,"/var/tmp/my-errors.log");


if ($method == "INSERT")
{
	$res = insertJSON($pdo, $table, $data, null);
} else 
if ($method == "READ")
{
	$res = readJSON($pdo, $table, $id, $userid);
} else 
if ($method == "UPDATE")
{
	$res = updateJSON($pdo, $table, $id, $userid);
} 
echo $res;
}
catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
