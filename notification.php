<?php
require 'vkapi.class.php';
try
{
$pdo = new PDO("dblib:host=te1gwbas4s.database.windows.net;dbname=thanksdad_db",
                "crazyjuice","girkinLOH1");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$api_id = 4654201;
$secret_key = 'qV6RXByT51TBnwGZX8Py'; // Защищенный ключ приложения

$VK = new vkapi($api_id, $secret_key);


$statement = $pdo->prepare("select * from thanksdad.tb_notifications");
$statement->execute();
$ids = "";
$result = $statement->fetchAll();
   foreach($result as $item) {
    if (ids != "")
    {
    ids .= ",";
    }
    ids .= $item["vkapi"];
   }
print($ids);
$resp = $VK->api('secure.sendNotification', array('uids'=>$id, timestamp=>time(), random=>rand(0, 999999999), $msg));
$answer = json_encode($resp);
print($answer);
print_r ($result);
}
catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
