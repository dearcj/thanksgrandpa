<?php 
require_once __DIR__.'/backendmysql/connection.php';
require_once __DIR__.'/backendmysql/login_api.php';
$str = $_SERVER['QUERY_STRING'];
parse_str($str, $url);
$viewer_id = $url['viewer_id'];//
$auth_key = $url['auth_key'];
$resp = doLogin($viewer_id, $pdo, $secret_key, $auth_key);
$str = json_encode($resp, JSON_UNESCAPED_UNICODE);
$str = str_replace('+', '@', $str);
setcookie("LOGIN_DATA", $str);
?>

<html>

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,
    user-scalable=no, initial-scale=0.5, minimum-scale=0.5, maximum-scale=1, user-scalable=0"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <meta content="yes" name="apple-mobile-web-app-capable">

    <title>ThanksGrandpa</title>

    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }
    </style>

</head>
<body>
<script>window.MOBILE = false;</script>
<script src="//vk.com/js/api/xd_connection.js?2" type="text/javascript"></script>
<script src="libs/jquery-2.1.3.js"></script>
<script src="libs/jquery.mousewheel.js"></script>
<script src="libs/soundjs-NEXT.min.js"></script>
<script src="res/snd/flashaudioplugin-0.6.0.min.js"></script>
<script src="libs/GreenSock/easing/EasePack.js"></script>
<script src="libs/GreenSock/TweenMax.min.js"></script>
<script src="libs/vec2.min.js"></script>
<script src="libs/pixi.min.js"></script>
<script src="libs/pixi-spine.js"></script>
<script src="libs/gzip-min.js"></script>
<script src="libs/vkadman.min.js" charset="utf-8"></script>
<script src="libs/preroll.js" charset="utf-8"></script>
</body>


<!--<script src="CjEngine/scripts/obf/all.min.js"></script>-->
<script src="CjEngine/scripts/obf/all.min.js"></script>


<!--
<script src="CjEngine/scripts/Utils/ZSound.js"></script>
<script src="CjEngine/scripts/Utils/LevelManager.js"></script>
<script src="CjEngine/scripts/Utils/Utils.js"></script>
<script src="CjEngine/scripts/Stages/StageManager.js"></script>
<script src="CjEngine/scripts/Stages/CustomStage.js"></script>
<script src="CjEngine/scripts/Stages/GameStage.js"></script>
<script src="CjEngine/scripts/Stages/Credits.js"></script>
<script src="CjEngine/scripts/Stages/AchStage.js"></script>
<script src="CjEngine/scripts/Stages/CharStage.js"></script>
<script src="CjEngine/scripts/Stages/ShopStage.js"></script>
<script src="CjEngine/scripts/Stages/ComixStage.js"></script>

<script src="CjEngine/scripts/Utils/ZPool.js"></script>
<script src="CjEngine/scripts/Objects/CObj.js"></script>
<script src="CjEngine/scripts/Objects/CBomb.js"></script>
<script src="CjEngine/scripts/Objects/CButton.js"></script>
<script src="CjEngine/scripts/Objects/ZCJoint.js"></script>
<script src="CjEngine/scripts/Objects/CTextField.js"></script>
<script src="CjEngine/scripts/Objects/Notification.js"></script>
<script src="CjEngine/scripts/Objects/CNotArrow.js"></script>
<script src="CjEngine/scripts/Objects/CHPBar.js"></script>
<script src="CjEngine/scripts/LiveObjects/CLiveObj.js"></script>
<script src="CjEngine/scripts/LiveObjects/CPlayer.js"></script>
<script src="CjEngine/scripts/Objects/CBullet.js"></script>
<script src="CjEngine/scripts/Objects/FloorObj.js"></script>
<script src="CjEngine/scripts/Objects/LauncherBG.js"></script>
<script src="CjEngine/scripts/Objects/CGrenade.js"></script>
<script src="CjEngine/scripts/Objects/CPlane.js"></script>
<script src="CjEngine/scripts/Objects/CKey.js"></script>

<script src="CjEngine/scripts/Monsters/CMonster.js"></script>
<script src="CjEngine/scripts/Monsters/JumpMon.js"></script>
<script src="CjEngine/scripts/Monsters/CDrone.js"></script>
<script src="CjEngine/scripts/Monsters/CDrone2.js"></script>
<script src="CjEngine/scripts/Monsters/CObstacle.js"></script>
<script src="CjEngine/scripts/Monsters/CBarrel.js"></script>
<script src="CjEngine/scripts/Monsters/Boss1.js"></script>
<script src="CjEngine/scripts/Monsters/Boss2.js"></script>
<script src="CjEngine/scripts/Monsters/MM.js"></script>
<script src="CjEngine/scripts/Monsters/BonusMonGnome.js"></script>
<script src="CjEngine/scripts/Monsters/CBoosterDrone.js"></script>


<script src="CjEngine/scripts/Objects/CBoosterBox.js"></script>
<script src="CjEngine/scripts/Objects/CCoin.js"></script>
<script src="CjEngine/scripts/Objects/CScrollbar.js"></script>
<script src="CjEngine/scripts/Objects/CircleBar.js"></script>
<script src="CjEngine/scripts/Utils/CEActionGUI.js"></script>

<script src="CjEngine/scripts/Weapons/CWeapon.js"></script>
<script src="CjEngine/scripts/Weapons/CPistol.js"></script>
<script src="CjEngine/scripts/Weapons/CQueueGun.js"></script>
<script src="CjEngine/scripts/Weapons/CLaser.js"></script>
<script src="CjEngine/scripts/Weapons/CGrenadeLauncher.js"></script>
<script src="CjEngine/scripts/Weapons/WeapBalance.js"></script>

<script src="CjEngine/scripts/Boosters/CBooster.js"></script>
<script src="CjEngine/scripts/Boosters/CDoubleBooster.js"></script>
<script src="CjEngine/scripts/Boosters/CHeartBooster.js"></script>
<script src="CjEngine/scripts/Boosters/CMagnetBooster.js"></script>
<script src="CjEngine/scripts/Boosters/CSupermanBooster.js"></script>
<script src="CjEngine/scripts/Boosters/CTabletsBooster.js"></script>

<script src="CjEngine/scripts/Utils/PlayerData.js"></script>
<script src="CjEngine/scripts/Utils/dbinit.js"></script>
<script src="CjEngine/scripts/Utils/PauseTimer.js"></script>
<script src="CjEngine/scripts/Utils/PhotoUploader.js"></script>

<script src="CjEngine/scripts/Utils/resizeend.coffee.js"></script>

<script src="CjEngine/scripts/Main/gamefile.js"></script><!---->
<!---->
</html>