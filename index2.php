<?php require_once __DIR__.'/backend/connection.php';require_once __DIR__.'/backend/login_api.php';$str = $_SERVER['QUERY_STRING'];$loadstr = '?api_url=https://api.vk.com/api.php&api_id=4654201&api_settings=271367&viewer_id=282617259&viewer_type=2&sid=5454960f4c10c897f33a5a5d29be6c1f47aa3504ee89f73e735d179678699314c46c010120feb32aff0c9&secret=abd8c680f5&access_token=f358788296b94ea98c74f09970b9b231c7948131421efc397c4ad0ba1f408d88abc16923e618b7d8c709e&user_id=282617259&group_id=0&is_app_user=1&auth_key=2137a9d0fc43567443f46f68a3a63868&language=0&parent_language=0&ad_info=ElsdCQNUQ1NlAgZeHEVUXiN2ClZzBx5pU1BXIgZUJlIEAWcgAUoLQg==&is_secure=1&ads_app_id=4654201_0aed0ff0598f69c604&referrer=unknown&lc_name=043c35c6&hash=';parse_str($loadstr,$url);$viewer_id = $url['viewer_id'];$auth_key = $url['auth_key'];$resp = doLogin($viewer_id, $pdo, $secret_key, $auth_key);$userid = $resp['playerItem']['id'];if ($userid){$p_events = readJSON($pdo, "tb_edevent_player", $userid);$p_items = readJSON($pdo, "tb_item_player", $userid);$p_achs	= readJSON($pdo, "tb_ach_player", $userid);setcookie("ITEMS", json_encode($p_items, JSON_UNESCAPED_UNICODE));setcookie("ACHS", json_encode($p_achs, JSON_UNESCAPED_UNICODE));setcookie("EVENTS", json_encode($p_events, JSON_UNESCAPED_UNICODE));}$str = json_encode($resp, JSON_UNESCAPED_UNICODE);$str = str_replace('+', '@', $str);setcookie("LOGIN_DATA", $str);?><html><head>    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width,    user-scalable=no, initial-scale=0.5, minimum-scale=0.5, maximum-scale=1, user-scalable=0"/>    <meta name="apple-mobile-web-app-capable" content="yes"/>    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>    <meta content="yes" name="apple-mobile-web-app-capable">    <title>ThanksGrandpa</title>    <style>        body {            margin: 0;            padding: 0;            background-color: #ffffff;        }    </style></head><body><script>window.MOBILE = false;</script><script src="//vk.com/js/api/xd_connection.js?2" type="text/javascript"></script><script src="libs/jquery-2.1.3.js"></script><script src="libs/jquery.mousewheel.js"></script><script src="libs/soundjs-NEXT.min.js"></script><script src="res/snd/flashaudioplugin-0.6.0.min.js"></script><script src="libs/GreenSock/easing/EasePack.js"></script><script src="libs/GreenSock/TweenMax.min.js"></script><script src="libs/vec2.min.js"></script><script src="libs/pixi.js"></script><!--<script type="text/javascript" src="//ad.mail.ru/static/vkadman.min.js" charset="utf-8"></script><script type="text/javascript" src="//js.appscentrum.com/scr/preroll.js" charset="utf-8"></script> --></body><!--<script src="CjEngine/scripts/obf/all.min.js"></script>--><script src="CjEngine/scripts/all.js"></script><!--<script src="CjEngine/scripts/Utils/ZSound.js"></script><script src="CjEngine/scripts/Utils/LevelManager.js"></script><script src="CjEngine/scripts/Utils/Utils.js"></script><script src="CjEngine/scripts/Stages/StageManager.js"></script><script src="CjEngine/scripts/Stages/CustomStage.js"></script><script src="CjEngine/scripts/Stages/GameStage.js"></script><script src="CjEngine/scripts/Stages/Credits.js"></script><script src="CjEngine/scripts/Stages/AchStage.js"></script><script src="CjEngine/scripts/Stages/CharStage.js"></script><script src="CjEngine/scripts/Stages/ShopStage.js"></script><script src="CjEngine/scripts/Stages/ComixStage.js"></script><script src="CjEngine/scripts/Utils/ZPool.js"></script><script src="CjEngine/scripts/Objects/CObj.js"></script><script src="CjEngine/scripts/Objects/CBomb.js"></script><script src="CjEngine/scripts/Objects/CButton.js"></script><script src="CjEngine/scripts/Objects/ZCJoint.js"></script><script src="CjEngine/scripts/Objects/CTextField.js"></script><script src="CjEngine/scripts/Objects/Notification.js"></script><script src="CjEngine/scripts/Objects/CNotArrow.js"></script><script src="CjEngine/scripts/Objects/CHPBar.js"></script><script src="CjEngine/scripts/LiveObjects/CLiveObj.js"></script><script src="CjEngine/scripts/LiveObjects/CPlayer.js"></script><script src="CjEngine/scripts/Objects/CBullet.js"></script><script src="CjEngine/scripts/Objects/FloorObj.js"></script><script src="CjEngine/scripts/Objects/LauncherBG.js"></script><script src="CjEngine/scripts/Objects/CGrenade.js"></script><script src="CjEngine/scripts/Objects/CPlane.js"></script><script src="CjEngine/scripts/Objects/CKey.js"></script><script src="CjEngine/scripts/Monsters/CMonster.js"></script><script src="CjEngine/scripts/Monsters/JumpMon.js"></script><script src="CjEngine/scripts/Monsters/CDrone.js"></script><script src="CjEngine/scripts/Monsters/CDrone2.js"></script><script src="CjEngine/scripts/Monsters/CObstacle.js"></script><script src="CjEngine/scripts/Monsters/CBarrel.js"></script><script src="CjEngine/scripts/Monsters/Boss1.js"></script><script src="CjEngine/scripts/Monsters/Boss2.js"></script><script src="CjEngine/scripts/Monsters/MM.js"></script><script src="CjEngine/scripts/Monsters/BonusMonGnome.js"></script><script src="CjEngine/scripts/Monsters/CBoosterDrone.js"></script><script src="CjEngine/scripts/Objects/CBoosterBox.js"></script><script src="CjEngine/scripts/Objects/CCoin.js"></script><script src="CjEngine/scripts/Objects/CScrollbar.js"></script><script src="CjEngine/scripts/Objects/CircleBar.js"></script><script src="CjEngine/scripts/Utils/CEActionGUI.js"></script><script src="CjEngine/scripts/Weapons/CWeapon.js"></script><script src="CjEngine/scripts/Weapons/CPistol.js"></script><script src="CjEngine/scripts/Weapons/CQueueGun.js"></script><script src="CjEngine/scripts/Weapons/CLaser.js"></script><script src="CjEngine/scripts/Weapons/CGrenadeLauncher.js"></script><script src="CjEngine/scripts/Weapons/WeapBalance.js"></script><script src="CjEngine/scripts/Boosters/CBooster.js"></script><script src="CjEngine/scripts/Boosters/CDoubleBooster.js"></script><script src="CjEngine/scripts/Boosters/CHeartBooster.js"></script><script src="CjEngine/scripts/Boosters/CMagnetBooster.js"></script><script src="CjEngine/scripts/Boosters/CSupermanBooster.js"></script><script src="CjEngine/scripts/Boosters/CTabletsBooster.js"></script><script src="CjEngine/scripts/Utils/PlayerData.js"></script><script src="CjEngine/scripts/Utils/dbinit.js"></script><script src="CjEngine/scripts/Utils/PauseTimer.js"></script><script src="CjEngine/scripts/Utils/PhotoUploader.js"></script><script src="CjEngine/scripts/Utils/resizeend.coffee.js"></script><script src="CjEngine/scripts/Main/gamefile.js"></script><!----><!----></html>