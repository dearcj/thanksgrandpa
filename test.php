<?php 
require_once __DIR__.'/backend/connection.php';
require_once __DIR__.'/backend/login_api.php';
$userid = 'F800A350-EE15-4F1C-9CCF-050B775A4CD9';
if ($userid)
{
$t1 =microtime(true);
$p_events = readJSON($pdo, "tb_edevent_player", $userid);
$t2 =microtime(true);
echo $t2 - $t1;
$p_items = readJSON($pdo, "tb_item_player", $userid);
$t1 =microtime(true);
echo $t1 - $t2;
$p_achs	= readJSON($pdo, "tb_ach_player", $userid);
echo $t2 - $t1;

echo json_encode($p_items, JSON_UNESCAPED_UNICODE);
echo json_encode($p_achs, JSON_UNESCAPED_UNICODE);
echo json_encode($p_events, JSON_UNESCAPED_UNICODE);

}
?>
