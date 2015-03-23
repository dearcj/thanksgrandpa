<?php
header("Content-Type: application/json; encoding=utf-8");
$input = $_POST;

 require_once 'Zend/Http/Client.php';

if (isset($_POST['uploadUrl'])) {
// создаем объект клиента
$url = $_POST['uploadUrl'];

$client = new Zend_Http_Client($url);
$client->setMethod(Zend_Http_Client::POST);
$imagePathname = APPLICATION_PATH . 'logo_ingame.jpg';
$client->setFileUpload($imagePathname, 'photo');
$result = $client->request();
if ($result->isError()) {
echo $result->getStatus();
} else {
echo $result->getBody();
} 
?>