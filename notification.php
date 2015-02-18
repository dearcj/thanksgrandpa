<?php
require 'vkapi.class.php';
try
{

$api_id = 4654201;
$secret_key = 'qV6RXByT51TBnwGZX8Py'; // Защищенный ключ приложения

$VK = new vkapi($api_id, $secret_key);

$params = array(
	        'client_id' => $api_id,
	        'client_secret' => $secret_key,
	        'grant_type' => "client_credentials'
	    );

$token = json_decode(file_get_contents('https://oauth.vk.com/access_token' . '?' . urldecode(http_build_query($params))), true);

print ($token);

$pdo = new PDO("dblib:host=te1gwbas4s.database.windows.net;dbname=thanksdad_db",
                "crazyjuice","girkinLOH1");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$statement = $pdo->prepare("select * from thanksdad.tb_notifications");
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
   $msg = "Приветики";
print($ids);
$resp = $VK->api('secure.sendNotification', array('user_id'=>'282617259', 'timestamp'=>time(), 'random'=>rand(0, 999999999), 'message'=>$msg));
$answer = json_encode($resp);
print($answer);
//print_r ($result);
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
