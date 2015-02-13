/**
 * Created by Михаил on 26.06.2014.
 */
function GameStage() {
    this.invFR = 1 / FRAME_RATE;
}

extend(GameStage, CustomStage);

Object.defineProperty(GameStage.prototype, 'worldSpeed', {
    get: function () {
        return this._worldSpeed;
    },
    set: function (value) {
        this._worldSpeed = value;
        var objlen = CObj.objects.length;
        for (var i = 0; i < objlen; ++i) {
            //////////////////////////FAIL CHECK
            if (CObj.objects[i].gfx && CObj.checkType(CObj.objects[i].gfx, PIXI.MovieClip)) {
                CObj.objects[i].gfx.animationSpeed = value * CObj.objects[i].fps / FRAME_RATE;
            }
        }
    }
});

GameStage.prototype.createHPBar = function (x, y, max) {
    var bar = new CObj(x, y);
    var t = PIXI.Texture.fromFrame("health dead.png");

    bar.gfx = new PIXI.DisplayObjectContainer();
    var lower = new PIXI.TilingSprite(t, (t.width) - 0.5, (t.height - 0.5));
    bar.id = "hpbar";
    lower.width = max * t.width;
    bar.gfx.addChild(lower);
    bar.updateGraphics();

    var tupper = PIXI.Texture.fromFrame("health.png");
    var upperBar = new PIXI.TilingSprite(tupper, tupper.width - 0.5, tupper.height - 0.5);
    upperBar.height = tupper.height - 1;
    upperBar.width = max * tupper.width;
    bar.gfx.addChild(upperBar);

    SM.inst.fg.addChild(bar.gfx);

    bar.tweenProp = function (ratio) {
        this.gfx.getChildAt(1).width = this.gfx.getChildAt(0).width * ratio;
    }
}


GameStage.prototype.createCircle = function (w, x, y, r) {
    var s = new PIXI.Graphics();

    var n = 100;
    var d = Math.PI * 2 / n;
    var a = 0;
    var xn;
    var yn;
    s.moveTo(0, 0);
    for (var i = 0; i < n; ++i) {
        xn = x + Math.cos(a) * r;
        yn = y + Math.sin(a) * r;
        a += d;
        s.lineTo(xn, yn);
        s.moveTo(xn, yn)
    }
    return s;
}


GameStage.prototype.process = function () {
    /*   if (this.doPhys)
     world.step(this.invFR*this._worldSpeed);
     */

    CObj.processAll();

    var d = Math.floor(LauncherBG.inst.distance);
    gameStage.distText.text = d.toString();
    MM.inst.process();
}

GameStage.prototype.onHide = function (newStage) {

    gameStage.menuBtn = null;
    gameStage.player = null;
    gameStage.barXP = null;
    gameStage.floor = null;
    if (gameStage.winDelayedCall) {
        gameStage.winDelayedCall.kill(false);
        gameStage.winDelayedCall = null;
    }
    gameStage.losing = false;
    gameStage.scoreObj = null;
    gameStage.preWinText = null;
    gameStage.curweapon = null;

    gameStage.ammobar = null;
    gameStage.ammoico = null;


    TweenMax.killAll(true, true, true);
    CustomStage.prototype.onHide.call(this, null);

    /*    var inx = CObj.objects.indexOf(LauncherBG.inst);
     CObj.objects.splice(inx, 1);*/
    CObj.destroyAll();
    gameStage.preWinText = null;

    gameStage.dragObject = null;

    stage.touchmove = null;
    stage.mousemove = null;
    stage.mousedown = null;
    stage.touchstart = null;
    stage.mouseup = null;
    stage.touchend = null;

    if (gameStage.pauseSprite) {
        gameStage.pauseSprite.parent.removeChild(gameStage.pauseSprite);
        gameStage.pauseTexture.destroy(true);
        gameStage.pauseTexture = null;
        gameStage.pauseSprite = null;
    }
    gameStage.distText = null;
    gameStage;
}

GameStage.prototype.loseGame = function () {

}

GameStage.prototype.remGfx = function (obj) {
    if (!obj) return;
    if (obj.parent) {
        obj.parent.removeChild(obj);
    }
}

GameStage.prototype.updateXP = function()
{
    gameStage.barXP.prop = PlayerData.inst.playerItem.xp / PlayerData.inst.xpLevel[PlayerData.inst.playerItem.lvl].xp;
}

GameStage.prototype.updateItems = function () {
    var k = 0;

    var btns = [{key: "a", gfx: "1boost_button.png"},
        {key: "s", gfx: "2boost_button.png"},
        {key: "d", gfx: "3boost_button.png"}];

    gameStage.curweapon = w_rifle;
    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i) {
        var item = PlayerData.inst.getItemById(PlayerData.inst.items_enabled[i].id_item);
        if (item.type == tBoost) {
            var boostClass;
            if (item.name == "Double") boostClass = CDoubleBooster;
            if (item.name == "Health") boostClass = CHeartBooster;
            if (item.name == "Magnet") boostClass = CMagnetBooster;
            if (item.name == "MarioStar") boostClass = CSupermanBooster;
            if (item.name == "Tablets") boostClass = CTabletsBooster;
            var b = new boostClass(30 + 50*k, SCR_HEIGHT - 40, null);

            b.gfx = crsp(item.gfx);
            b.gfx.scale.x = 0.3;
            b.gfx.scale.y = 0.3;
            b.updateGraphics();

            var icobtn;
            if (b.activate == null)
            {
                b.gfx.tint = 0x778822;
            } else
            {
                var x = btns.shift();
                if (x)
                {
                    b.key = x.key;
                    icobtn = crsp(x.gfx);
                    icobtn.scale.x = 3;
                    icobtn.scale.y = 3;
                    icobtn.y = 82;
                    icobtn.x = -50;
                    b.gfx.addChild(icobtn);
                }

            }

            SM.inst.guiLayer.addChild(b.gfx);
            k++;
        }

        if (item.type == tWeapon && PlayerData.inst.items_enabled[i].equipped)
        {
            if (item.name == "Rifle")
                gameStage.curweapon = w_rifle;
            if (item.name == "PPS")
                gameStage.curweapon = w_pps;
            if (item.name == "AK-74")
                gameStage.curweapon = w_ak74;
            if (item.name == "Minigun")
                gameStage.curweapon = w_minigun;
            if (item.name == "Grenade Launcher")
                gameStage.curweapon = w_pistol;
            if (item.name == "Plazma Cannon")
                gameStage.curweapon = w_laser;
        }
    }
}

GameStage.prototype.shAfterLife = function () {
    var cb = new CircleBar(SCR_WIDTH / 2, SCR_HEIGHT / 2);
    cb.init("bodrost cover.png",  "bodrost bar.png",  "bodrost bar bg.png");
    SM.inst.guiLayer.addChild(cb.gfx);


    removeafterlife = function () {
        if (!gainbgsprite)
        console;
        gainbgsprite.parent.removeChild(gainbgsprite);
        bodrtext.parent.removeChild(bodrtext);
        tf.parent.removeChild(tf);
        cb.gfx.visible = false;
    }

    openScoreWnd = function () {
        removeafterlife();
        LevelManager.loadLevel("levelgameover", gameStage.openEndWindowLoaded, SM.inst.guiLayer);
    }


    new TweenMax(cb, 3, {pos: 1, onComplete: openScoreWnd});
    var bodrtext = new PIXI.Sprite(PIXI.Texture.fromFrame("bodrost text.png"));
    bodrtext.anchor.x = 0.5;
    bodrtext.anchor.y = 0.5;
    bodrtext.x = SCR_WIDTH / 2;
    bodrtext.y = SCR_HEIGHT / 2 - 108;
    SM.inst.guiLayer.addChild(bodrtext);

    cb.gfx.interactive = true;

    cb.gfx.click = function () {
        if (PlayerData.inst.playerItem.crystals > price) {
            TweenMax.killTweensOf(cb);
            removeafterlife();
            gameStage.removeFade();
            gameStage.unpause();
            gameStage.state = "game";
            PlayerData.inst.playerItem.crystals -= price;
            gameStage.player.reveal();
            PlayerData.inst.savePlayerData();

            new TweenMax(LauncherBG.inst, 2, {maxVelocity: LauncherBG.inst.preVelocity});

        }
    }
    var bsX = cb.gfx.scale.x;
    var bsY = cb.gfx.scale.y;
    cb.gfx.mouseover = function (evt) {
        TweenMax.killTweensOf(cb.gfx.scale);
        cb.gfx.tint = CButton.tintColor;
        new TweenMax(cb.gfx.scale, 0.6, {y: bsY+0.05, ease: Elastic.easeOut} );
        new TweenMax(cb.gfx.scale, 0.4, {x: bsX+0.05, ease: Elastic.easeOut} );
    }
    cb.gfx.mouseout = function (evt) {
        cb.gfx.tint = 0xffffff;
        new TweenMax(cb.gfx.scale, 0.3, {x: bsX, y: bsY, ease: Elastic.easeOut} );
    }
    var gainbgsprite = new PIXI.Sprite(PIXI.Texture.fromFrame("bodrost star.png"));
    gainbgsprite.anchor.x = 0.5;
    gainbgsprite.anchor.y = 0.5;
    gainbgsprite.x = SCR_WIDTH / 2;
    gainbgsprite.y = SCR_HEIGHT / 2 + 120;
    SM.inst.guiLayer.addChild(gainbgsprite);

    var price = Math.round(1 + (LauncherBG.inst.distance / 500));
    var tf = CTextField.createTextField({text: price.toString(), fontSize: 22, align: "center"});
    tf.tint = 0x333333;
    tf.updateText();
    tf.x = 8 + SCR_WIDTH / 2;
    tf.y = SCR_HEIGHT / 2 + 107;
    SM.inst.guiLayer.addChild(tf);
}


GameStage.prototype.openEndWindowLoaded = function () {

    function addLine(num) {
        var l = -70;
        var space = CObj.getById("div").y + 10;
        var d = 44;
        var tf1 = new CTextField(SCR_WIDTH / 2 - 100 + l, space + num * d);
        tf1.text = (num + 1).toString() + ".";
        tf1.fontSize = 18;
        tf1.init();
        tf1.id = "tf" + (num + 1).toString() + "1";

        var tf2 = new CTextField(SCR_WIDTH / 2 + l, space + num * d);
        tf2.text = "---";
        tf2.align = "center";
        tf2.fontSize = 18;
        tf2.init();
        tf2.id = "tf" + (num + 1).toString() + "2";

        var tf3 = new CTextField(SCR_WIDTH / 2 + 85 + l, space + num * d);
        tf3.text = "---";
        tf3.fontSize = 18;
        tf3.init();
        tf3.id = "tf" + (num + 1).toString() + "3";
    }

    CObj.getById("tfmon").text = PlayerData.inst.score.toString();
    CObj.getById("tfprev").text = Math.round(LauncherBG.inst.distance).toString() + " м";

    var rec = Math.round(PlayerData.inst.playerItem.maxdistance);
    if (LauncherBG.inst.distance > PlayerData.inst.playerItem.maxdistance) {
        rec = Math.round(LauncherBG.inst.distance);
    }
    CObj.getById("tfrec").text = rec.toString() + " м";
    CObj.getById("bmenu").click = function () {
        gameStage.doProcess = true;

        SM.inst.openStage(charStage);
    };

    for (var i = 1; i <= 5; ++i) {
        CObj.getById("b" + i.toString()).gfx.visible = false;
        CObj.getById("b" + i.toString()).text = "";
    }

    PlayerData.inst.playerItem.money += PlayerData.inst.score;
    PlayerData.inst.playerItem.maxdistance = rec;
    PlayerData.inst.savePlayerData();


    for (var i = 0; i < 5; ++i) {
        addLine(i);
    }


    azureclient.invokeApi("get_scores", {
        body: {filter: vkparams.friendsIngameIDs, take: 5, skip: scoreStage.skip},
        method: "post"
    }).done(function (results) {
        var arr = results.result;

        for (var i = 0; i < Math.min(5, arr.length); ++i) {
            CObj.getById("tf" + (i + 1).toString() + "2").text = arr[i].name + " " + arr[i].last_name;
            CObj.getById("tf" + (i + 1).toString() + "3").text = arr[i].maxdistance.toString();
            if (rec > arr[i].maxdistance) {
                CObj.getById("b" + (i + 1).toString()).gfx.visible = true;
                CObj.getById("b" + (i + 1).toString()).text = "Я тебя уделал";

                function setClick(i, friendObject) {
                    CObj.getById("b" + (i + 1).toString()).click = function () {
                        VK.api("wall.post", {
                            owner_id: vkparams.viewerid,
                            message: friendObject.name + " " + friendObject.last_name + ", я тебя уделал!",
                            attachments: ["photo2882845_347400805", "https://vk.com/app4654201"]
                        }, function (data) {

                        });
                    }
                }
                setClick(i, arr[i]);
            }

        }

        for (var j = i; j < 5; ++j) {
            CObj.getById("b" + (j + 1).toString()).gfx.visible = true;
            CObj.getById("b" + (j + 1).toString()).text = "Пригласить в игру";
            CObj.getById("b" + (j + 1).toString()).click = function () {
                VK.callMethod("showInviteBox");
            }
        }
    }, function (error) {

    });
}


GameStage.prototype.sessionEnd = function () {
    if (gameStage.state == "game") {
        gameStage.state = "endsession";
        gameStage.pause();
        gameStage.fadeScreen();
        gameStage.shAfterLife();
    }
}

GameStage.prototype.updateWindowLevWin = function () {
    ZSound.Play("levelWIN");
    gameStage.doPhys = false;
}



GameStage.prototype.updateScore = function () {
    if (gameStage.scoreObj)
        gameStage.scoreObj.text = PlayerData.inst.score.toString();
}

// event.type должен быть keypress
function getChar(event) {
    if (event.which == null) {  // IE
        if (event.keyCode < 32) return null; // спец. символ
        return String.fromCharCode(event.keyCode)
    }

    if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
    }

    return null; // спец. символ
}

GameStage.prototype.doKeyDown = function (evt) {
    console.log("KEY DOWN");
    if (gameStage.state != "game") return;
    console.log("EVENT IS = " + evt.toString() + "WINDOW.event = " + window.event);

    evt = evt || window.event;
    var c = getChar(evt);

    if (CBooster.list)
    for (var i = 0; i < CBooster.list.length; ++i)
    {
        if (CBooster.list[i].key == c && CBooster.list[i].activate)
        {
            CBooster.list[i].activate();
        }
    }

    console.log("EVT.WHICH" + evt.which.toString());

    if (evt.which == 87)
    {
        if (gameStage.player)
        gameStage.player.onJump();
    }
}

GameStage.prototype.doKeyUp = function (evt) {

    if (gameStage.state != "game") return;
    evt = evt || window.event;
    var c = getChar(evt);
    if (evt.which == 87) {
        if (gameStage.player)
        gameStage.player.jumpboost = false;
    }
}


GameStage.prototype.onShow = function () {
    CustomStage.prototype.onShow.call(this);

    window.addEventListener("keydown", this.doKeyDown, false);
    window.addEventListener("keypress", this.doKeyDown, false);
    window.addEventListener("keyup", this.doKeyUp, false);

    this.state = "game";
    this.doProcess = false;

    LauncherBG.inst = new LauncherBG(0, 0);
    LauncherBG.inst.addLevel("plantPart2");

    for (var i = 0; i < 2500; ++i)
        LauncherBG.inst.process(true);
    LauncherBG.inst.distance = 0;

    MM.inst.init();

    LevelManager.loadLevel("hud", gameStage.onShowContinue, SM.inst.guiLayer);
}


//NO "THIS" IN CURRENT CONTEXT
GameStage.prototype.onShowContinue = function () {
    gameStage.doProcess = true;
    gameStage.stepSize = gameStage.invFR;
    gameStage.doPhys = true;

    var xxx = gameStage.createCircle(20, 100, 100, 100);
    SM.inst.guiLayer.addChild(xxx);

    var floorHeight = 120;
    gameStage.floor = new FloorObj(SCR_WIDTH / 2, SCR_HEIGHT - floorHeight / 2, null);
    gameStage.floor.gfx = new PIXI.DisplayObjectContainer();
    gameStage.floor.gfx.width = SCR_WIDTH;
    gameStage.floor.gfx.height = floorHeight;
    gameStage.floor.gfx.visible = false;

    gameStage.createHPBar(10, 5, 5);

    gameStage.updateItems();

    gameStage.ammobar = CObj.getById("ammot");
    gameStage.ammoico = CObj.getById("ammoico");
    gameStage.reloadBar = new CircleBar(gameStage.ammoico.x, gameStage.ammoico.y);
    gameStage.reloadBar.init("recharge icon.png", "recharge icon bar.png", "recharge icon.png");
    gameStage.reloadBar.pos = 0.5;
    gameStage.reloadBar.gfx.visible = false;
    SM.inst.guiLayer.addChild(gameStage.reloadBar.gfx);
    gameStage.player = new CPlayer(140, SCR_HEIGHT - 160);
    gameStage.player.gfx.pivot.y = -190;
    gameStage.player.gfx.scale.x = 0.22;
    gameStage.player.gfx.scale.y = 0.22;
    SM.inst.fg.addChild(gameStage.player.gfx);

    gameStage.barXP = CObj.getById("barxp");

    gameStage.player.updateAppearence(true, true, "idle");

    TweenMax.delayedCall(1.3, function(){
        if (gameStage.player)
            gameStage.player.gfx.skeleton.setAttachment("head", "head1");
    });

    gameStage.player.weapon.updateAmmo();

    gameStage.player.process();

    gameStage.scoreObj = CObj.getById("score");
    gameStage.updateScore();
    gameStage.worldSpeed = 1;

    gameStage.createPools();
    gameStage.distText = CObj.getById("dist");

    gameStage.menuBtn = CObj.getById("menu");
    gameStage.menuBtn.click = function () {
        if (!gameStage.doProcess) return;
        if (!gameStage.doPhys) return;
        for (var i = 0; i < SM.inst.fontLayer.children.length; ++i) {
            SM.inst.fontLayer.children[i].visible = false;
        }

        gameStage.state = "paused";
        gameStage.pause();
        gameStage.fadeScreen();

        TweenMax.killTweensOf(gameStage.menuBtn, true);
        LevelManager.loadLevel("levelmenu", gameStage.makePause, SM.inst.guiLayer);
    }

    stage.touchstart = function (md) {
        gameStage.fireState = true;
    }

    stage.touchend = function (md) {
        gameStage.fireState = false;
    }

    stage.mousemove = stage.touchmove;
    stage.mousedown = stage.touchstart;
    stage.mouseup = stage.touchend;
    gameStage.updateXP();
    /*
     gameStage.muteBtn = CObj.getById("mutebtn");
     gameStage.updateSoundBtn(gameStage.muteBtn);


     gameStage.muteBtn.click = function () {
     if (ZSound.available)
     ZSound.Mute(); else
     ZSound.UnMute();

     dataStorage.soundEnabled = ZSound.available;
     updateDS();
     gameStage.updateSoundBtn(gameStage.muteBtn);
     }
     */
    //  gameStage.sessionEnd();
}

GameStage.prototype.makePause = function () {

        removePause = function()
        {
            gameStage.state = "game";
            gameStage.doProcess = true;
            LevelManager.removeLastLevel();
            LevelManager.objs = null;
            gameStage.doPhys = true;
            gameStage.unpause();
            gameStage.removeFade();
        }

     CObj.getById("brestart").click = function () {
        removePause();
        SM.inst.openStage(gameStage);
     };

    CObj.getById("bresume").click = function () {
        removePause();
    }

    CObj.getById("blevs").click = function () {
        removePause();
        SM.inst.openStage(charStage);
    }
}

GameStage.prototype.createPools = function () {
    if (pool.Size("textParticle") == 0)
        pool.Fill("textParticle", 20, function () {
            var c = new CTextField(0, 0);
            c.fontFamily = 0;
            c.fontSize = 25;
            c.align = "center";

            c.gfx = CTextField.createTextField(c);
            c.gfx.scale.x *= window.addScale;
            c.gfx.scale.y *= window.addScale;
            return c;
        });

    if (pool.Size("coinCollect") == 0)
        pool.Fill("coinCollect", 15, function () {
            var c = CObj.createMovieClip("coinCollect");
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            return c;
        });


    if (pool.Size("expl") == 0)
        pool.Fill("expl", 5, function () {
            var c = new CObj(0, 0);
            c.gfx = CObj.createMovieClip("expl");
            c.gfx.anchor.x = 0.5;
            c.gfx.anchor.y = 0.5;
            c.gfx.scale.x = 1.55;
            c.gfx.scale.y = 1.55;
            return c;
        });

    if (pool.Size("chickeneffect") == 0)
        pool.Fill("chickeneffect", 3, function () {
            var c = CObj.createMovieClip("chickeneffect");
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            c.scale.x *= window.addScale;
            c.scale.y *= window.addScale;
            return c;
        });
}

GameStage.prototype.removeFade = function () {
    TweenMax.killTweensOf(gameStage.pauseSprite);
    gameStage.pauseSprite.parent.removeChild(gameStage.pauseSprite);
    gameStage.pauseSprite = null;

    PIXI.Texture.removeTextureFromCache(gameStage.pauseTexture);
    gameStage.pauseTexture.destroy();
    gameStage.pauseTexture = null;


}

GameStage.prototype.fadeScreen = function () {
    gameStage.pauseTexture = new PIXI.RenderTexture(SCR_WIDTH, SCR_HEIGHT);
    gameStage.pauseSprite = new PIXI.Graphics();//PIXI.Sprite(gameStage.pauseTexture);
    gameStage.pauseSprite.beginFill(0x55FFDD, 0.4);
    gameStage.pauseSprite.drawRect(0, 0, SCR_WIDTH, SCR_HEIGHT);
    gameStage.pauseSprite.endFill();
    gameStage.pauseSprite.alpha = 0;
    gameStage.pauseSprite.blendMode = PIXI.blendModes.DIFFERENCE;
    new TweenMax(gameStage.pauseSprite, 1.1, {alpha: 1, ease: Elastic.easeOut});
    SM.inst.guiLayer.addChild(gameStage.pauseSprite);
}



GameStage.prototype.unpause = function () {
    gameStage.doProcess = true;

    if (gameStage.player)
        gameStage.player.gfx.autoUpdate = true;

    window.focus();
    TweenMax.resumeAll();
}

GameStage.prototype.pause = function () {
    if (!gameStage.doProcess) return;

    gameStage.doProcess = false;

    if (gameStage.player)
        gameStage.player.gfx.autoUpdate = false;

    TweenMax.pauseAll();
}

GameStage.prototype.updateSoundBtn = function (btn) {


    if (ZSound.available)
        btn.gfx.gotoAndStop(0); else
        btn.gfx.gotoAndStop(1);
}
