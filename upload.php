<?php
header("Content-Type: application/json; encoding=utf-8");
require_once 'Zend/Http/Client.php';
$input = $_POST;

$url = $_POST['uploadUrl'];
//$url = "http://cs623321.vk.com/upload.php?act=do_add&mid=282617259&aid=-14&gid=0&hash=056af4e8fb95b8bc22e91e243fb44d04&rhash=8f1395a8705d5ebf6ee91fe79c70b6a3&swfupload=1&api=1&wallphoto=1";
$photo = $_POST['photo'];
//if (isset($_POST['uploadUrl'])) {
// создаем объект клиента
$client = new Zend_Http_Client($url);
$client->setMethod(Zend_Http_Client::POST);
//$client->setParameterPost('photo', $photo);
$imagePathname = 'http://www.dedgame.ru/logo_ingame.png';
$client->setFileUpload($imagePathname, 'photo');
echo $client['photo'];
echo $client->photo;
echo $client->$photo;
$result = $client->request();
echo $result->getBody();
//}
?>