<?php 
// Показывать всю информацию, по умолчанию INFO_ALL

require_once __DIR__.'/backendmysql/connection.php';
require_once __DIR__.'/backendmysql/login_api.php';
$userid = 'F800A350-EE15-4F1C-9CCF-050B775A4CD9';
if ($userid)
{
$p = readJSON($pdo, "tb_achs", $userid);
$desc =  $p[4]['desc'];
$s = iconv('utf-8', 'windows-1252', $desc);
// Преобразуем строку из однобайтной кодировки обратно в utf-8, выдав её за windows-1251
$s = iconv('windows-1251', 'utf-8', $s);

echo $s;
//echo json_encode($p, JSON_UNESCAPED_UNICODE);
/*$p_items = readJSON($pdo, "tb_item_player", $userid);
$t1 =microtime(true);
echo $t1 - $t2;
$p_achs	= readJSON($pdo, "tb_ach_player", $userid);
echo $t2 - $t1;

echo json_encode($p_items, JSON_UNESCAPED_UNICODE);
echo json_encode($p_achs, JSON_UNESCAPED_UNICODE);
echo json_encode($p_events, JSON_UNESCAPED_UNICODE);
*/
}
?>
