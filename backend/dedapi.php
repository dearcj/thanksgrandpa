<?php
require 'jwt_helper.php';
require 'connection.php';
require 'savescript.php';

$jwtToken = $_POST['token'];
$method = $_POST['method'];
$data = $_POST['data'];
$table = $_POST['table'];
$id = $_POST['id'];

$data = '{"id":"78F6F7CE-28E3-4AEA-B143-2BBB2CBEA54D","__createdAt":"2015-03-31 09:46:47.464 +00:00","__updatedAt":"2015-04-09 22:29:23.609 +00:00","__deleted":"1","ref":"2882845","vkapi":"2882845","xp":"659.3935154046127","createDate":"2015-03-31 09:46:47.034 +00:00","updateDate":"2015-04-02 21:33:49.694 +00:00","userId":"Custom:78F6F7CE-28E3-4AEA-B143-2BBB2CBEA54D","money":"1500","crystals":"360","maxdistance":"916","lvl":"7","energy":"10","rank":"9","combodate":"2015-03-31 09:54:27.233 +00:00","keys":null,"platformid":"2882845"}';
$table = 'tb_players';
$method = 'UPDATE';
$id  = null;
$jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2a2lkIjoiMjg4Mjg0NSIsInVzZXJpZCI6Ijc4RjZGN0NFLTI4RTMtNEFFQS1CMTQzLTJCQkIyQ0JFQTU0RCJ9.3e2eO6RCwDPodk2no56Exd8US24dH5XocIR2ZGx-lDk";

if (!$jwtToken) die();
$token = JWT::decode($jwtToken, $secret_key);
if (!$token) die();

$platformid = $token->vkid;
$userid = $token->userid;

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
