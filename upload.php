<?php
header("Content-Type: application/json; encoding=utf-8");
require_once 'Zend/Http/Client.php';

$url = $_POST['uploadUrl'];
//$url = "http://cs623321.vk.com/upload.php?act=do_add&mid=282617259&aid=-14&gid=0&hash=056af4e8fb95b8bc22e91e243fb44d04&rhash=8f1395a8705d5ebf6ee91fe79c70b6a3&swfupload=1&api=1&wallphoto=1";
$url = "http://cs623321.vk.com/upload.php?act=do_add&mid=282617259&aid=-14&gid=0&hash=056af4e8fb95b8bc22e91e243fb44d04&rhash=8f1395a8705d5ebf6ee91fe79c70b6a3&swfupload=1&api=1&wallphoto=1";
$photo = $_POST['photo'];
$photo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAUUlEQVQoU+2Ruw2AMBBDfdNRhIoBKELFNkhpGBbb3AqXOnb9JH/iuF+TBClUFe0atgzZVRaxnU9i6TqLaH2Y0lzsPWN/2Xeq84JrV8carDbYD1GbePmy20hTAAAAAElFTkSuQmCC';

$client = new Zend_Http_Client($url);
$client->setMethod(Zend_Http_Client::POST);
$photodecoded = base64_decode($photo);
//echo $photodecoded;
//$client->setParameterPost('photo', $photo);
//$imagePathname = 'http://www.dedgame.ru/logo_ingame.png';
//$client->setFileUpload($imagePathname, 'photo');
echo $photodecoded;
$client->setFileUpload("15x15.png", 'photo', $photodecoded, 'image/png');
//$client->setRawData($photodecoded, 'text/xml')->request('POST');

$result = $client->request();
echo $result->getBody();
//}
?>