copy /b ^
Utils\Utils.js + ^
Utils\ZSound.js + ^
Utils\LevelManager.js + ^
Stages\StageManager.js + ^
Stages\CustomStage.js + ^
Stages\MainMenu.js + ^
Stages\LevSel.js + ^
Stages\GameStage.js + ^
Stages\Credits.js + ^
Stages\WinGame.js + ^
Stages\AchStage.js + ^
Stages\CharStage.js + ^
Stages\ShopStage.js + ^
Stages\ScoreStage.js + ^
Stages\ComixStage.js + ^
Utils\ZPool.js + ^
Objects\CObj.js + ^
Objects\CBomb.js + ^
Objects\CButton.js + ^
Objects\ZCJoint.js + ^
Objects\CTextField.js + ^
Objects\CNotArrow.js + ^
Objects\CHPBar.js + ^
LiveObjects\CLiveObj.js + ^
LiveObjects\CPlayer.js + ^
Objects\CBullet.js + ^
Objects\FloorObj.js + ^
Objects\LauncherBG.js + ^
Objects\CGrenade.js + ^
Objects\CPlane.js + ^
Objects\CKey.js + ^
Monsters\CMonster.js + ^
Monsters\JumpMon.js + ^
Monsters\CDrone.js + ^
Monsters\CDrone2.js + ^
Monsters\CObstacle.js + ^
Monsters\CBarrel.js + ^
Monsters\Boss1.js + ^
Monsters\Boss2.js + ^
Monsters\MM.js + ^
Monsters\BonusMonGnome.js + ^
Objects\CCoin.js + ^
Objects\CScrollbar.js + ^
Objects\CircleBar.js + ^
Utils\CEActionGUI.js + ^
Weapons\CWeapon.js + ^
Weapons\CPistol.js + ^
Weapons\CQueueGun.js + ^
Weapons\CLaser.js + ^
Weapons\CGrenadeLauncher.js + ^
Weapons\WeapBalance.js + ^
Boosters\CBooster.js + ^
Boosters\CDoubleBooster.js + ^
Boosters\CHeartBooster.js + ^
Boosters\CMagnetBooster.js + ^
Boosters\CSupermanBooster.js + ^
Boosters\CTabletsBooster.js + ^
Utils\PlayerData.js + ^
Utils\dbinit.js + ^
Utils\init.js + ^
Utils\PhotoUploader.js + ^
Utils\PauseTimer.js + ^
Main\gamefile.js ^
all.js
java -jar compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS all.js --process_jquery_primitives --create_source_map source.map > all.min.js