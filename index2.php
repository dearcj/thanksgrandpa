<?php require_once __DIR__.'/backendmysql/connection.php';require_once __DIR__.'/backendmysql/login_api.php';$str = $_SERVER['QUERY_STRING'];$loadstr = '?api_url=https://api.vk.com/api.php&api_id=4654201&api_settings=271367&viewer_id=282617259&viewer_type=2&sid=5454960f4c10c897f33a5a5d29be6c1f47aa3504ee89f73e735d179678699314c46c010120feb32aff0c9&secret=abd8c680f5&access_token=f358788296b94ea98c74f09970b9b231c7948131421efc397c4ad0ba1f408d88abc16923e618b7d8c709e&user_id=282617259&group_id=0&is_app_user=1&auth_key=2137a9d0fc43567443f46f68a3a63868&language=0&parent_language=0&ad_info=ElsdCQNUQ1NlAgZeHEVUXiN2ClZzBx5pU1BXIgZUJlIEAWcgAUoLQg==&is_secure=1&ads_app_id=4654201_0aed0ff0598f69c604&referrer=unknown&lc_name=043c35c6&hash=';parse_str($loadstr,$url);$viewer_id = $url['viewer_id'];$auth_key = $url['auth_key'];echo "VIEWERID".$viewer_id;echo "secret".$secret_key;echo "auth".$auth_key;$resp = doLogin($viewer_id, $pdo, $secret_key, $auth_key);$userid = $resp['playerItem']['id'];/*if ($userid){$p_events = readJSON($pdo, "tb_edevent_player", $userid);$p_items = readJSON($pdo, "tb_item_player", $userid);$p_achs	= readJSON($pdo, "tb_ach_player", $userid);setcookie("ITEMS", json_encode($p_items, JSON_UNESCAPED_UNICODE));setcookie("ACHS", json_encode($p_achs, JSON_UNESCAPED_UNICODE));setcookie("EVENTS", json_encode($p_events, JSON_UNESCAPED_UNICODE));}*/var_dump($resp);$str = json_encode($resp, JSON_UNESCAPED_UNICODE);echo $str;$str = str_replace('+', '@', $str);setcookie("LOGIN_DATA", $str);?>