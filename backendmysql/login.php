<?php
header('Content-type: text/json; charset=UTF-8');
require_once 'connection.php';
require_once 'login_api.php';

$vkid = $_POST['vkid'];
$mobileKey = $_POST['mobileKey'];

//if ($argv[0]) $vkid = $argv[0];
$resp = mobileLogin($vkid, $pdo, $secret_key, $mobileKey);
$str = json_encode($resp, JSON_UNESCAPED_UNICODE);
echo $str;
?>