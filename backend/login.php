<?php
header('Content-type: text/json; charset=UTF-8');
require_once 'jwt_helper.php';
require_once 'connection.php';
require_once 'savescript.php';
require_once 'json.php';
require_once 'login_api.php';

$vkid = $_POST['vkid'];
if ($argv[0]) $vkid = $argv[0];
$resp = doLogin($vkid);
$str = json_encode($resp, JSON_UNESCAPED_UNICODE);
echo $str;
?>