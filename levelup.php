<?php
require 'vkapi.class.php';
try
{

$uid = $_POST['uid'];
$lev = $_POST['lev'];

$api_id = 4654201;
$secret_key = 'qV6RXByT51TBnwGZX8Py'; // Защищенный ключ приложения

$api_id = 3824852;
$secret_key = 'CIoXBH0UcOkIhrEiR9rt'; // Защищенный ключ приложения

$params = array(
	        'client_id' => $api_id,
	        'client_secret' => $secret_key,
	        'grant_type' => 'client_credentials',
	        'v' => "5.28"
	    );

$token = json_decode(file_get_contents('https://oauth.vk.com/access_token' . '?' . urldecode(http_build_query($params))), true);

$VK = new vkapi($api_id, $secret_key);//,
$resp = $VK->api('secure.setUserLevel', array('access_token'=>$token["access_token"], 'user_id'=>$uid, 'level'=>$lev));
$answer = json_encode($resp);
print($answer);
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
