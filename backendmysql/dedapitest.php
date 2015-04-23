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
$res = readJSON($pdo, "tb_items", 'F800A350-EE15-4F1C-9CCF-050B775A4CD9', '68AFAEDC-B3E0-401E-9E1A-E272084F2E11');
var_dump($res);
echo $res;
*/
/*
$res = insertJSON($pdo, "tb_players", array('platformid' => $vkid,
			'money' => 0,
			'crystals' => 0,
			'xp' => 0,
			'lvl' => 1,
			'energy' => 10, 
			'maxdistance' => 0));
			var_dump($res);
echo $res;
*/


//$data = json_decode('{"id":"F800A350-EE15-4F1C-9CCF-050B775A4CD9","ref":"282617259","vkapi":"282617259","xp":256.9404239766083","userId":"Custom:F800A350-EE15-4F1C-9CCF-050B775A4CD9","money":9639,"crystals":1000,"maxdistance":918,"lvl":3,"energy":10,"name":"Геннадий","last_name":"Геннадич","rank":2467,"keys":null,"platformid":"282617259"}');
$table = 'tb_players';
$method = 'UPDATE';
$data = array(
			'money' => 20000,
			'crystals' => 2000,
			'xp' => 0,
			'lvl' => 1,
			'energy' => 10, 
			'maxdistance' => 0);
//$id  = '78F6F7CE-28E3-4AEA-B143-2BBB2CBEA54D';
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
$data = array('id' => '0B97B8DF-372A-4230-BD08-FCB8E7453BE1', 'equipped' => true);
$method = 'BUY_ITEM';
$jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2a2lkIjoiMjg4Mjg0NSIsInVzZXJpZCI6Ijc4RjZGN0NFLTI4RTMtNEFFQS1CMTQzLTJCQkIyQ0JFQTU0RCJ9.3e2eO6RCwDPodk2no56Exd8US24dH5XocIR2ZGx-lDk";
buyItem($pdo, array('id' => '0B97B8DF-372A-4230-BD08-FCB8E7453BE1', 'equipped' => true), $userid);
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
	$res = updateJSON($pdo, $table, $data, $userid, $id);
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
