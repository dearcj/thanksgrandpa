<?php
require 'jwt_helper.php';
require 'connection.php';
require 'savescript.php';

$jwtToken = $_POST['token'];
$method = $_POST['method'];
$data = $_POST['data'];
$table = $_POST['table'];


/*
$data = json_decode('{"id":"78F6F7CE-28E3-4AEA-B143-2BBB2CBEA54D","__createdAt":"2015-03-31 09:46:47.464 +00:00","__updatedAt":"2015-04-16 23:25:09.023 +00:00","__deleted":"1","ref":"2882845","vkapi":"2882845","xp":959.39351540461,"createDate":"2015-03-31 09:46:47.034 +00:00","updateDate":"Fri Apr 17 2015 02:30:22 GMT+0300 (FLE Daylight Time)","userId":"Custom:78F6F7CE-28E3-4AEA-B143-2BBB2CBEA54D","money":1500,"crystals":378,"maxdistance":916,"lvl":7,"energy":10,"name":"Юрий","last_name":"Дорогой","rank":1499,"combodate":"2015-03-31 09:54:27.233 +00:00","keys":null,"platformid":"2882845"}');
$table = 'tb_players';
$method = 'UPDATE';
//$id  = '78F6F7CE-28E3-4AEA-B143-2BBB2CBEA54D';
$jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2a2lkIjoiMjg4Mjg0NSIsInVzZXJpZCI6Ijc4RjZGN0NFLTI4RTMtNEFFQS1CMTQzLTJCQkIyQ0JFQTU0RCJ9.3e2eO6RCwDPodk2no56Exd8US24dH5XocIR2ZGx-lDk";
*/

/*
$data = '1000';
$table = 'tb_players';
$method = 'UPDATE_SCORE';
$id  = null;
$jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2a2lkIjoiMjg4Mjg0NSIsInVzZXJpZCI6Ijc4RjZGN0NFLTI4RTMtNEFFQS1CMTQzLTJCQkIyQ0JFQTU0RCJ9.3e2eO6RCwDPodk2no56Exd8US24dH5XocIR2ZGx-lDk";
*/

/*
$data = array('take'=>10, 'skip'=>0,'filter'=>"'4EA93A3F-6A42-4C1F-A003-24C247C695B4','C049BF3A-CF33-4307-87A5-2C79583DBBF4'" );
$method = 'GET_SCORES';
$id  = null;
$jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2a2lkIjoiMjg4Mjg0NSIsInVzZXJpZCI6Ijc4RjZGN0NFLTI4RTMtNEFFQS1CMTQzLTJCQkIyQ0JFQTU0RCJ9.3e2eO6RCwDPodk2no56Exd8US24dH5XocIR2ZGx-lDk";
*/


/*
$data = array('id' => '20D318C0-4633-41D0-B406-FD34485A88BE', 'equipped' => true);
$method = 'BUY_ITEM';
$jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2a2lkIjoiMjg4Mjg0NSIsInVzZXJpZCI6Ijc4RjZGN0NFLTI4RTMtNEFFQS1CMTQzLTJCQkIyQ0JFQTU0RCJ9.3e2eO6RCwDPodk2no56Exd8US24dH5XocIR2ZGx-lDk";
*/

if (!$jwtToken) die();
$token = JWT::decode($jwtToken, $secret_key);
if (!$token) die();

$platformid = $token->vkid;
$userid = $token->userid;

if ($method == "INSERT")
{
	$res = insertJSON($pdo, $table, $data);
} else 
if ($method == "READ")
{
	$res = readJSON($pdo, $table, $userid, $data);
} else 
if ($method == "UPDATE")
{
	$res = updateJSON($pdo, $table, $data,  $userid, $id);
} 
 else 
if ($method == "UPDATE_SCORE")
{
	$res = updateScore($pdo,  $data,  $userid);
}
 else 
if ($method == "GET_SCORES")
{
	$res = getScores($pdo,  $data,  $userid);
}
 else 
if ($method == "BUY_ITEM")
{
	$res = buyItem($pdo, $data, $userid);
}
echo json_encode($res, JSON_UNESCAPED_UNICODE);
?>
