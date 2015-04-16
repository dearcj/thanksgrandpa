<?php
require 'jwt_helper.php';
require 'connection.php';
require 'savescript.php';

$jwtToken = $_POST['token'];
$method = $_POST['method'];
$data = $_POST['data'];
$table = $_POST['table'];
$id = $_POST['id'];

/*
$data = '{"id":"78F6F7CE-28E3-4AEA-B143-2BBB2CBEA54D","__createdAt":"2015-03-31 09:46:47.464 +00:00","__updatedAt":"2015-04-09 22:29:23.609 +00:00","__deleted":"1","ref":"2882845","vkapi":"2882845","xp":"659.3935154046127","createDate":"2015-03-31 09:46:47.034 +00:00","updateDate":"2015-04-02 21:33:49.694 +00:00","userId":"Custom:78F6F7CE-28E3-4AEA-B143-2BBB2CBEA54D","money":"1500","crystals":"360","maxdistance":"916","lvl":"7","energy":"10","rank":"9","combodate":"2015-03-31 09:54:27.233 +00:00","keys":100,"platformid":"2882845"}';
$table = 'tb_players';
$method = 'UPDATE';
$id  = null;
$jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2a2lkIjoiMjg4Mjg0NSIsInVzZXJpZCI6Ijc4RjZGN0NFLTI4RTMtNEFFQS1CMTQzLTJCQkIyQ0JFQTU0RCJ9.3e2eO6RCwDPodk2no56Exd8US24dH5XocIR2ZGx-lDk";
*/

$data = '1000';
$table = 'tb_players';
$method = 'UPDATE_SCORE';
$id  = null;
$jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2a2lkIjoiMjg4Mjg0NSIsInVzZXJpZCI6Ijc4RjZGN0NFLTI4RTMtNEFFQS1CMTQzLTJCQkIyQ0JFQTU0RCJ9.3e2eO6RCwDPodk2no56Exd8US24dH5XocIR2ZGx-lDk";


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
