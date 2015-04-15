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

$platformid = $token['vkid'];
$userid = $token['userid'];

if ($method == "INSERT")
{
	$res = insertJSON($pdo, $table, $id, $userid);
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
