<?php
require 'jwt_helper.php';
require 'connection.php';
require 'savescript.php';

$jwtToken = $_POST['token'];
$method = $_POST['method'];
$data = $_POST['data'];
$table = $_POST['table'];
$id = $_POST['id'];


$data = json_decode('{"id":"301786C3-E6BA-4CF8-ADD5-BE2CCF356E90","__createdAt":"2015-03-31 09:46:48.245 +00:00","__updatedAt":"2015-04-16 18:55:35.445 +00:00","__deleted":"0","id_edevent":"505A0266-322A-422D-A429-EA768DBDB9C8","id_player":"78F6F7CE-28E3-4AEA-B143-2BBB2CBEA54D","lastused":"2015-04-16T23:08:18.637Z","reward_ready":false}');
$table = 'tb_edevent_player';
$method = 'UPDATE';
$id  = '301786C3-E6BA-4CF8-ADD5-BE2CCF356E90';
$jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2a2lkIjoiMjg4Mjg0NSIsInVzZXJpZCI6Ijc4RjZGN0NFLTI4RTMtNEFFQS1CMTQzLTJCQkIyQ0JFQTU0RCJ9.3e2eO6RCwDPodk2no56Exd8US24dH5XocIR2ZGx-lDk";


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
$data = null;
$method = 'BUY_ITEM';
$id  = '3F416BFA-8F49-4279-BF26-B5D8BA92A690';//'105A3B3C-160C-4355-AB38-9F107DB5A831'
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
	$res = readJSON($pdo, $table, $userid, $id);
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
	$res = buyItem($pdo,  $data,  $userid, $id);
}
echo json_encode($res, JSON_UNESCAPED_UNICODE);
?>
