/**
 * Created by Михаил on 27.06.2014.
 */

function LevSel() {
    CustomStage.apply(this);
}

extend(LevSel, CustomStage);

LevSel.prototype.onShow = function() {
    CustomStage.prototype.onShow.call(this);

    ZSound.PlayMusic("trackmenu");


    LevelManager.loadLevel("levelselect", this.onShowContinue);
}

LevSel.prototype.onShowContinue = function()
{
    var lastCompleted = dataStorage.completedLevels;

    if (lastCompleted < 0) lastCompleted = 0;


    CObj.getById("btnmenu").click = function ()
    {
        SM.inst.openStage(mainMenu);
    }

  //  lastCompleted = 500;
    for (var i = 1; i <= 40; ++i){
        var btn = CObj.getById("btn"+ i.toString());
        btn.gfx.levelNum = i;
        btn.click = levelClick;
        btn.textField.visible = true;
        btn.lock = new PIXI.Sprite(PIXI.Texture.fromFrame("locklevel.png"));
        btn.lock.scale.x = 0.35;
        btn.lock.scale.y = 0.35;
        btn.lock.anchor.x = 0.5;
        btn.lock.anchor.y = 0.5;
        btn.lock.visible = false;
        btn.gfx.addChild(btn.lock);
        if (i > lastCompleted + 1)
        {
            btn.click = null;
            btn.gfx.tint = 0x999999;
            btn.textField.visible = false;
            btn.lock.visible = true;
        }
        var vspace = 22;
        var star1 = new CObj(btn.x-32, btn.y + vspace);
        star1.gfx = CObj.createMovieClip("star0001");
        star1.gfx.interactive = false;
        star1.gfx.scale.x = 0.4* window.addScale;
        star1.gfx.scale.y = 0.4* window.addScale;
        star1.gfx.anchor.x = 0.5;
        star1.gfx.anchor.x = 0.5;
        SM.inst.guiLayer.addChild(star1.gfx);
        var star2 = new CObj(btn.x, btn.y + vspace);
        star2.gfx = CObj.createMovieClip("star0001");
        star2.gfx.interactive = false;
        star2.gfx.scale.x = 0.4* window.addScale;
        star2.gfx.scale.y = 0.4* window.addScale;
        star2.gfx.anchor.x = 0.5;
        star2.gfx.anchor.x = 0.5;
        SM.inst.guiLayer.addChild(star2.gfx);
        var star3 = new CObj(btn.x + 32, btn.y + vspace);
        star3.gfx = CObj.createMovieClip("star0001");
        star3.gfx.interactive = false;
        star3.gfx.scale.x = 0.4* window.addScale;
        star3.gfx.scale.y = 0.4* window.addScale;
        star3.gfx.anchor.x = 0.5;
        star3.gfx.anchor.x = 0.5;
        SM.inst.guiLayer.addChild(star3.gfx);

        var stars =  dataStorage["lvlst" + i.toString()];
        if (!stars) stars = 0;
        if (stars == 1)
        {
           star1.gfx.gotoAndStop(1);
        }
        if (stars == 2)
        {
            star1.gfx.gotoAndStop(1);
            star2.gfx.gotoAndStop(1);
        }
        if (stars == 3)
        {
            star1.gfx.gotoAndStop(1);
            star2.gfx.gotoAndStop(1);
            star3.gfx.gotoAndStop(1);
        }
    }
}

function levelClick(evt){
    gameStage.currentLevel = evt.target.levelNum;
    SM.inst.openStage(gameStage);
}

LevSel.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

LevSel.prototype.process = function() {
    CObj.processAll();
};