<?php
require 'vkapi.class.php';
try
{


$api_id = 4654201;
$secret_key = 'qV6RXByT51TBnwGZX8Py'; // Защищенный ключ приложения

//$api_id = 3824852;
//$secret_key = 'CIoXBH0UcOkIhrEiR9rt'; // Защищенный ключ приложения

$params = array(
	        'client_id' => $api_id,
	        'client_secret' => $secret_key,
	        'grant_type' => 'client_credentials',
	        'v' => "5.28"
	    );

$token = json_decode(file_get_contents('https://oauth.vk.com/access_token' . '?' . urldecode(http_build_query($params))), true);

print ($token["access_token"]);

$pdo = new PDO("dblib:host=te1gwbas4s.database.windows.net;dbname=thanksdad_db",
                "crazyjuice","girkinLOH1");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$statement = $pdo->prepare("select TOP 10 vkapi from thanksdad.tb_notifications");
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

$VK = new vkapi($api_id, $secret_key);//'access_token'=>$token["access_token"],
$resp = $VK->api('secure.sendNotification', array('uid'=>'2882845', 'message'=>$msg));
$answer = json_encode($resp);
print($answer);
//print_r ($result);
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
