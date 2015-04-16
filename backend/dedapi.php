<?php
require 'jwt_helper.php';
require 'connection.php';
require 'savescript.php';

$jwtToken = $_POST['token'];
$method = $_POST['method'];
$data = $_POST['data'];
$table = $_POST['table'];
$id = $_POST['id'];

if (!$jwtToken) die();
$token = JWT::decode($jwtToken);
if (!$token) die();

$platformid = $token['vkid'];
$userid = $token['userid'];

if ($method == "INSERT")
{
	$res = insertJSON($pdo, $table, $data, null);
} else 
if ($method == "READ")
{
	$res = readJSON($pdo, $table, $userid, $id);
} else 
if ($method == "UPDATE")
{
	$res = updateJSON($pdo, $table, $data, null, $userid, $id);
} 
echo _json_encode($res);
?>
