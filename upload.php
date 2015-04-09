<?php
header("Content-Type: application/json; encoding=utf-8");
require_once 'Zend/Http/Client.php';

$url = $_POST['uploadUrl'];
$photo = $_POST['photo'];

$client = new Zend_Http_Client($url);
$client->setMethod(Zend_Http_Client::POST);
$photodecoded = base64_decode($photo);
//echo $photodecoded;
//$client->setParameterPost('photo', $photo);
//$imagePathname = 'http://www.dedgame.ru/logo_ingame.png';
//$client->setFileUpload($imagePathname, 'photo');
$client->setFileUpload("15x15.png", 'photo', $photodecoded, 'image/png');
//$client->setRawData($photodecoded, 'text/xml')->request('POST');

$result = $client->request();
echo $result->getBody();
//}
?>