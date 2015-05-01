<?php
require_once 'vkapi.class.php';
require_once 'connection.php';
require_once 'savescript.php';
try
{
$api_id = 4654201;
$secret_key = 'qV6RXByT51TBnwGZX8Py'; // Защищенный ключ приложения

/*$api_id = 3824852;
$secret_key = 'CIoXBH0UcOkIhrEiR9rt'; // Защищенный ключ приложения
*/

$params = array(
	        'client_id' => $api_id,
	        'client_secret' => $secret_key,
	        'grant_type' => 'client_credentials',
	        'v' => "5.28"
	    );

$token = json_decode(file_get_contents('https://oauth.vk.com/access_token' . '?' . urldecode(http_build_query($params))), true);


$statement = $pdo->prepare("select value from thanksdad.tb_metrics where name = 'notMsgIndex'");
$statement->execute();
$notMsgIndex = $statement->fetch(PDO::FETCH_ASSOC)['value'];
echo $notMsgIndex;


$statement = $pdo->prepare("select value from thanksdad.tb_metrics where name = 'notSkip'");
$statement->execute();
$notSkip = $statement->fetch(PDO::FETCH_ASSOC)['value'];
echo $notSkip;


/*$statement = $pdo->prepare("select TOP ".$n. " vkapi from thanksdad.tb_notifications");
$statement->execute();
$ids = "";
$result = $statement->fetchAll();
   foreach($result as $item) {
    $strapi = (string)$item["vkapi"];
    if ($ids != "")
    {
    $ids .= ",";
    }
    $ids .= $strapi;
   }
   $msg = "Скорее возвращайся в игру! https://vk.com/app4654201";
print($ids);

$statement = $pdo->prepare("delete TOP (".$n.") from thanksdad.tb_notifications");
$statement->execute();
*/
/*
$msg = "Скорее возвращайся в игру! У нас много интересного";
$VK = new vkapi($api_id, $secret_key);//'access_token'=>$token["access_token"],
$resp = $VK->api('secure.sendNotification', array('uid'=>'2882845', 'message'=>$msg));
$answer = json_encode($resp);
print($answer);
*/

ini_set("log_errors", 1);
ini_set("error_log", "/tmp/php-error.log");
error_log( "Hello, errors!" );
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
