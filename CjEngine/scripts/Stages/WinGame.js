/**
 * Created by KURWINDALLAS on 09.09.2014.
 */
/**
 * Created by KURWINDALLAS on 21.08.2014.
 */
/**
 * Created by Михаил on 27.06.2014.
 */

function WinGame() {
    CustomStage.apply(this);
}

extend(WinGame, CustomStage);

WinGame.prototype.onShow = function() {
    this.doProcess = false;
    CustomStage.prototype.onShow.call(this);

    LevelManager.loadLevel("wingame", this.onShowContinue);
}

WinGame.prototype.onShowContinue = function()
{
    winGameStage.doProcess = true;


    var bgname = "BG2";
    var bg = new CObj(SCR_WIDTH / 2, SCR_HEIGHT / 2, bgname);
    bg.gfx.parent.removeChild(bg.gfx);
    bg.gfx.width = SCR_WIDTH;
    bg.gfx.height = SCR_HEIGHT;
    SM.inst.ol.addChildAt(bg.gfx, 0);



    CObj.getById("totalscore").text = LevelManager.totalScore().toString();

    CObj.getById("gomenu").click = function()
    {
        SM.inst.openStage(mainMenu);
    }
}

WinGame.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
    TweenMax.killAll();
}

WinGame.prototype.process = function() {
    world.step(gameStage.invFR);

    Generator.resetElectricity();

    if (Generator.gens) {
        var genLen = Generator.gens.length;
        if (Generator.gens)
            for (var i = 0; i < genLen; ++i) {
                Generator.gens[i].genProcess();
            }
    }
    var objLen = CObj.objects.length;
    for (var i = 0; i < objLen; ++i)
    {
        if (CObj.objects[i].isConductor && CObj.objects[i] != this.dragObject)
            CObj.objects[i].setElectricity(CObj.objects[i].sElectricity);
    }

    CObj.processAll();
}