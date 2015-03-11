/**
 * Created by KURWINDALLAS on 21.08.2014.
 */

function Credits() {
    CustomStage.apply(this);
}

extend(Credits, CustomStage);

Credits.prototype.onShow = function() {
    this.doProcess = false;
    CustomStage.prototype.onShow.call(this);

    LevelManager.loadLevel("credits", this.onShowContinue);
}

Credits.prototype.onShowContinue = function()
{
    credStage.doProcess = true;
    gameStage.createPools();

    var bgname = "BG2";

    var bg = new CObj(SCR_WIDTH / 2, SCR_HEIGHT / 2, bgname);
    bg.gfx.parent.removeChild(bg.gfx);
    bg.gfx.width = SCR_WIDTH;
    bg.gfx.height = SCR_HEIGHT;
    SM.inst.ol.addChildAt(bg.gfx, 0);

    var cd1 = CObj.getById("cd1");
    var cd2 = CObj.getById("cd2");
    var cd3 = CObj.getById("cd3");
    var cd4 = CObj.getById("cd4");
    cd1.gfx.alpha = 0.01;
    cd2.gfx.alpha = 0.01;
    cd3.gfx.alpha = 0.01;
    cd4.gfx.alpha = 0.01;
    cd1.gfx.scale.x = 0.01;
    cd2.gfx.scale.x = 0.01;
    cd3.gfx.scale.x = 0.01;
    cd4.gfx.scale.x = 0.01;
    cd1.gfx.scale.y = 0.01;
    cd2.gfx.scale.y = 0.01;
    cd3.gfx.scale.y = 0.01;
    cd4.gfx.scale.y = 0.01;

    var angle = 0.1;
    cd1.rotation = -angle;
    cd2.rotation = -angle;
    cd3.rotation = -angle;
    cd4.rotation = -angle;
    new TweenMax(cd1.gfx.scale, 0.7, {delay: 0.8, x: 1, y: 1});
    new TweenMax(cd1.gfx, 0.7, {delay: 0.8, alpha: 1.});
    new TweenMax(cd1, 0.7, {delay: 0.8, rotation: 0, yoyo:true, repeat: 2});

    new TweenMax( cd2.gfx.scale,0.7, {delay: 0.9, x: 1, y: 1});
    new TweenMax(cd2.gfx, 0.7, {delay: 0.9, alpha: 1.});
    new TweenMax(cd2, 0.7, {delay: 0.9, rotation: 0, yoyo:true, repeat: 2});

    new TweenMax(cd3.gfx.scale, 0.7, {delay: 0.8 + 2, x: 1, y: 1});
    new TweenMax(cd3.gfx, 0.7, {delay: 0.8 + 2, alpha: 1.});
    new TweenMax(cd3, 0.7, {delay: 0.8 + 2, rotation: 0, yoyo:true, repeat: 2});

    new TweenMax( cd4.gfx.scale,0.7, {delay: 0.9 + 2, x: 1, y: 1});
    new TweenMax(cd4.gfx, 0.7, {delay: 0.9 + 2, alpha: 1.});
    new TweenMax(cd4, 0.7, {delay: 0.9 + 2, rotation: 0, yoyo:true, repeat: 2});

    CObj.getById("bback").click = function()
    {
        SM.inst.openStage(mainMenu);

    }



    TweenMax.delayedCall(0.6, function() {CObj.getById("wall5").destroy();} );
}


Credits.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
    TweenMax.killAll();
}

Credits.prototype.process = function() {
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
};