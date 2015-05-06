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

	$messages = array('Дед скучает, возвращайся!',
	"Скорее возвращайся в игру!",
	"Время проучить интернет троллей!",
	"У нас новые ордена! Возвращайся!",
	"Доступны ежедневные действия, заходи в игру!",
	"У нас большие обновления в честь Дня Победы! Заходи в игру!", 
	"Докажи, что деды воевали не зря!",
	"Школьники обижают ветеранов в День Победы! Ты можешь остановить это!");

	$statement = $pdo->prepare("select value from thanksdad.tb_metrics where name = 'notMsgIndex'");
	$statement->execute();
	$notMsgIndex = $statement->fetch(PDO::FETCH_ASSOC)['value'];
	echo $notMsgIndex;

	$notMsgIndex = $notMsgIndex + 1;

	if ($notMsgIndex >= count($messages)) $notMsgIndex = 0;

	$msg = $messages[(int)$notMsgIndex];
	echo $msg;

	$statement = $pdo->prepare("select value from thanksdad.tb_metrics where name = 'notSkip'");
	$statement->execute();
	$notSkip = $statement->fetch(PDO::FETCH_ASSOC)['value'];
	echo $notSkip;
	$notSkip = $notSkip + 100;


	$statement = $pdo->prepare("update thanksdad.tb_metrics set value = $notSkip where name = 'notSkip'");
	$statement->execute();
	$statement = $pdo->prepare("update thanksdad.tb_metrics set value = $notMsgIndex where name = 'notMsgIndex'");
	$statement->execute();
	
	$statement = $pdo->prepare("select platformid from tb_players order by updateDate asc limit 100 offset $notSkip");
	$statement->execute();
	$results = $statement->fetchAll(PDO::FETCH_ASSOC);
	
	$s = '';
	foreach ($results as $value)
	{	
		if ($s != '') $s = $s.',';
		$s = $s.$value['platformid'];
	}
	
	echo $s;
	
	$VK = new vkapi($api_id, $secret_key);//'access_token'=>$token["access_token"],
	$resp = $VK->api('secure.sendNotification', array('user_ids'=>$s, 'message'=>$msg));
	$answer = json_encode($resp);

	ini_set("log_errors", 1);
	ini_set("error_log", "/tmp/php-error.log");
	error_log( $answer );
	
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
}
catch (PDOException $e) {

	print "Error!: " . $e->getMessage() . "<br/>";
	die();
}
?>
