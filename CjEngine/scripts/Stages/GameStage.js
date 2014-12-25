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
        for (var i = 0; i < objlen; ++i)
        {
            //////////////////////////FAIL CHECK
            if (CObj.objects[i].gfx && CObj.checkType(CObj.objects[i].gfx, PIXI.MovieClip))
            {
                CObj.objects[i].gfx.animationSpeed = value * CObj.objects[i].fps / FRAME_RATE;
            }
        }
    }
});


GameStage.prototype.createHPBar = function( x, y, max)
{
    var bar = new CObj(x,y);
    var t = PIXI.Texture.fromFrame("health dead.png");

    bar.gfx = new PIXI.DisplayObjectContainer();
    var lower = new PIXI.TilingSprite(t, t.width, t.height);
    bar.id = "hpbar";
    lower.width = max * t.width;
    bar.gfx.addChild(lower);
    bar.updateGraphics();

    var tupper = PIXI.Texture.fromFrame("health.png");
    var upperBar = new PIXI.TilingSprite(tupper, tupper.width, tupper.height);
     upperBar.width = max * tupper.width;
    bar.gfx.addChild(upperBar);

    SM.inst.fg.addChild(bar.gfx);

    bar.tweenProp = function (ratio)
    {
        bar.gfx.getChildAt(1).width = bar.gfx.getChildAt(1).texture.width*ratio*max;
    }
}


GameStage.prototype.createCircle = function(w, x, y, r)
{
    var s = new PIXI.Graphics();

    var n = 100;
    var d = Math.PI * 2 / n;
    var a = 0;
    var xn; var yn;
    s.moveTo(0, 0)
    for (var i = 0; i < n; ++i)
    {
        xn = x + Math.cos(a)*r;
        yn = y + Math.sin(a)*r;
        a += d;
        s.lineTo(xn, yn);
        s.moveTo(xn, yn)
    }
    return s;
}


GameStage.prototype.process = function()
{
    if (this.doPhys)
    world.step(this.invFR*this._worldSpeed);

    if (gameStage.fireState && window.mouseY < SCR_HEIGHT - 40)
    {
        gameStage.player.fire();
    }
    CObj.processAll();

    var d = Math.floor(LauncherBG.inst.distance);
    gameStage.distText.text = d.toString();
    MM.inst.process();
}

GameStage.prototype.onHide = function(newStage) {

    gameStage.player = null;

    gameStage.floor = null;
    if (gameStage.winDelayedCall)
    {
        gameStage.winDelayedCall.kill(false);
        gameStage.winDelayedCall = null;
    }
    gameStage.losing = false;
    gameStage.scoreObj = null;
    gameStage.preWinText = null;

    TweenMax.killAll(true, true, true);
    CustomStage.prototype.onHide.call(this, null);

    var inx = CObj.objects.indexOf(LauncherBG.inst);
    CObj.objects.splice(inx, 1);
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
        gameStage.pauseTexture.destroy();
        gameStage.pauseTexture = null;
        gameStage.pauseSprite = null;
    }
    gameStage.distText =null;
}

GameStage.prototype.loseGame = function() {

}

GameStage.prototype.remGfx = function(obj)
{
    if (!obj) return;
    if (obj.parent)
    {
        obj.parent.removeChild(obj);
    }
}

GameStage.prototype.sessionEnd = function()
{
   gameStage.fadeScreen();
   gameStage.pause();
   LevelManager.loadLevel("levelgameover", gameStage.updateWindowLevWin, SM.inst.guiLayer);
}

GameStage.prototype.updateWindowLevWin = function()
{
    ZSound.Play("levelWIN");

    gameStage.doPhys = false;

}

GameStage.prototype.removeFromToolsObject = function(obj)
{
    var len = gameStage.toolContainer.children.length;
    for (var i = 0; i < len; ++i)
    {
        if (gameStage.toolContainer.children[i].gameobject == obj)
        {
            break;
        }
    }

    if (i < len)
    {
        var ch = gameStage.toolContainer.children[i];
        ch.interactive = false;
        new TweenMax(ch, 0.33, {alpha: 0.5, y: ch.y - 100, onComplete: gameStage.remGfx, onCompleteParams: [ch]});
    }

    for (var j = i + 1; j < len; ++j)
    {
        ch = gameStage.toolContainer.children[j];
        new TweenMax(ch, 0.5, {x: ch.x - this.secretIngridient, ease: TweenMax.LINEAR});
    }
}



GameStage.prototype.updateScore = function()
{
    if (gameStage.scoreObj)
    gameStage.scoreObj.text = PlayerData.inst.score.toString() + "$";
}

GameStage.prototype.minusScore = function()
{
    if (!gameStage.doProcess) return;
    PlayerData.inst.score -= 15;
    gameStage.updateScore();

    gameStage.scoreTimeoutID = TweenMax.delayedCall(1., gameStage.minusScore);
}

// event.type должен быть keypress
function getChar(event) {
    if (event.which == null) {  // IE
        if (event.keyCode < 32) return null; // спец. символ
        return String.fromCharCode(event.keyCode)
    }

    if (event.which!=0 && event.charCode!=0) { // все кроме IE
        if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
    }

    return null; // спец. символ
}

GameStage.prototype.doKeyDown = function(evt) {
    evt = evt || window.event;
    var c = getChar(evt);
    if (evt.which == 87)
   gameStage.player.jump();
}

GameStage.prototype.onShow = function() {
    CustomStage.prototype.onShow.call(this);

  //  window.parent.addEventListener("keydown", this.doKeyDown, false );
    window.addEventListener("keydown", this.doKeyDown, false );
    gameStage.currentLevel = 1;

    this.doProcess = false;
    var bgname = "BG2";
    if (gameStage.currentLevel > 26)
    {
        bgname = "BG3"
    } else
    if (gameStage.currentLevel > 13)
    {
        bgname = "BG4"
    }

   /* var bg = new CObj(SCR_WIDTH / 2, SCR_HEIGHT / 2, bgname);
    bg.gfx.parent.removeChild(bg.gfx);
    bg.gfx.width = SCR_WIDTH;
    bg.gfx.height = SCR_HEIGHT;
    SM.inst.ol.addChildAt(bg.gfx, 0);
*/
    LevelManager.loadLevel("hud", gameStage.onLoadEnd, SM.inst.guiLayer);


    LauncherBG.inst.addLevel("plantPart2");
    for (var i =0; i < 2500; ++i)
    LauncherBG.inst.process();
    LauncherBG.inst.distance = 0;
    CObj.objects.push(LauncherBG.inst);

    MM.inst.monsterQueue = MM.inst.levels[0];

}


GameStage.prototype.makePause = function() {
    gameStage.doPhys = false;


    CObj.getById("bresume").click = function () {
        while (LevelManager.objs.length > 0) {
            LevelManager.objs[0].destroy();
            LevelManager.objs.splice(0, 1);
        }
        LevelManager.objs = null;
        gameStage.doPhys = true;

        TweenMax.resumeAll();


        for (var i = 0; i < SM.inst.fontLayer.children.length; ++i) {
            SM.inst.fontLayer.children[i].visible = true;
        }

        gameStage.pauseSprite.parent.removeChild(gameStage.pauseSprite);
        gameStage.pauseTexture.destroy();
        gameStage.pauseTexture = null;
        gameStage.pauseSprite = null;
        CObj.getById("menu").gfx.mouseout(null);
    }

    CObj.getById("blevs").click = function () {
        SM.inst.openStage(levSel);
    }

    CObj.getById("bmore").click = window.openSponsorWindow;
}

GameStage.prototype.createPools = function() {
    if (pool.Size("textParticle") == 0)
        pool.Fill("textParticle", 20, function() {
            var c = new CTextField(0, 0);
            c.fontFamily = 0;
            c.fontSize = 25;
            c.align = "center";

            c.gfx = CTextField.createTextField(c);
            c.gfx.scale.x *= window.addScale;
            c.gfx.scale.y *= window.addScale;
            return c;});

    if (pool.Size("coinCollect") == 0)
        pool.Fill("coinCollect", 15, function() {
            var c = CObj.CreateMovieClip("coinCollect");
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            return c;});


    if (pool.Size("expl") == 0)
        pool.Fill("expl", 5, function() {
            var c = new CObj(0, 0);
            c.gfx = CObj.CreateMovieClip("expl");
            c.gfx.anchor.x = 0.5;
            c.gfx.anchor.y = 0.5;
            c.gfx.scale.x = 1.55;
            c.gfx.scale.y = 1.55;
            return c;});

    if (pool.Size("chickeneffect") == 0)
        pool.Fill("chickeneffect", 3, function() {
            var c =CObj.CreateMovieClip("chickeneffect");
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            c.scale.x *= window.addScale;
            c.scale.y *= window.addScale;
            return c;});
}

GameStage.prototype.fadeScreen = function()
{
    gameStage.pauseTexture = new PIXI.RenderTexture(SCR_WIDTH, SCR_HEIGHT);
    gameStage.pauseTexture.render(stage);
    gameStage.pauseSprite  = new PIXI.Sprite(gameStage.pauseTexture);
    /*gameStage.pauseSprite.beginFill(0x5599AA, 0.4);
    gameStage.pauseSprite.drawRect(0, 0, SCR_WIDTH, SCR_HEIGHT);
    gameStage.pauseSprite.endFill();*/
    SM.inst.guiLayer.addChild(gameStage.pauseSprite);
}

//NO "THIS" IN CURRENT CONTEXT
GameStage.prototype.onLoadEnd = function()
{
    gameStage.doProcess = true;
    gameStage.stepSize = gameStage.invFR;
    gameStage.doPhys = true;
 //   CObj.getById("level").getText();
  //  CObj.getById("level").text = "УРОВЕНЬ " + gameStage.currentLevel.toString();

    var xxx = gameStage.createCircle(20, 100, 100, 100);
    SM.inst.guiLayer.addChild(xxx);

    var floorHeight = 120;
    gameStage.floor = new FloorObj(SCR_WIDTH / 2, SCR_HEIGHT - floorHeight / 2, null);
    gameStage.floor.gfx = new PIXI.DisplayObjectContainer();
    gameStage.floor.gfx.width = SCR_WIDTH;
    gameStage.floor.gfx.height = floorHeight;
    gameStage.floor.gfx.visible = false;

    gameStage.createHPBar(10, 5, 5);

    gameStage.player = new CPlayer(110, gameStage.floor.y - floorHeight / 2 - 50, "");
    gameStage.player.gfx.scale.x = 0.8;
    gameStage.player.gfx.scale.y = 0.8;
    SM.inst.fg.addChild( gameStage.player.gfx);

    gameStage.scoreObj = CObj.getById("score");
    gameStage.updateScore();
    gameStage.worldSpeed = 1;

    gameStage.createPools();
    gameStage.distText = CObj.getById("dist");

    CObj.getById("restart").click = function () {
        SM.inst.openStage(gameStage);
    }

    var menuBtn = CObj.getById("menu");
    menuBtn.click = function () {
        if (! gameStage.doProcess) return;
        if (!gameStage.doPhys) return;
        for (var i = 0; i < SM.inst.fontLayer.children.length; ++i)
        {
            SM.inst.fontLayer.children[i].visible = false;
        }
        TweenMax.pauseAll();

        gameStage.fadeScreen();

        TweenMax.killTweensOf(menuBtn, true);
        LevelManager.loadLevel("levelmenu", gameStage.makePause, SM.inst.guiLayer);
    }

    CObj.getById("timeout").gfx.visible = false;
    CObj.getById("timeout").text = "";

    CObj.getById("levels").click = function () {
        SM.inst.openStage(charStage);
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
    gameStage.sessionEnd();

}

GameStage.prototype.pause = function()
{
    if (! gameStage.doProcess) return;
    gameStage.doProcess = false;
    //if (!gameStage.doPhys) return;
    for (var i = 0; i < SM.inst.fontLayer.children.length; ++i)
    {
        SM.inst.fontLayer.children[i].visible = false;
    }
    TweenMax.pauseAll();
}

GameStage.prototype.updateSoundBtn = function(btn)
{
    if (ZSound.available)
        btn.gfx.gotoAndStop(0); else
        btn.gfx.gotoAndStop(1);
}
