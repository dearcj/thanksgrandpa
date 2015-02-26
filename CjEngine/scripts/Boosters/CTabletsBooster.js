/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CTabletsBooster, CBooster, true);

function CTabletsBooster(x,y,gfx) {
    CBooster.apply(this, [x,y, gfx]);

    this.lastUse  = 0;
    this.delay = 20000;
    this.activate = function()
    {
        if (window.time - this.lastUse < this.delay) return;
        if (!gameStage.player) return;
        this.lastUse = window.time;
        gameStage.player.invulnerable = true;
        var p = gameStage.player;
        p.blink = true;
        var prevVel = LauncherBG.inst.maxVelocity;
        p.superMode = true;

        new TweenMax(LauncherBG.inst, 4, {maxVelocity: LauncherBG.inst.maxVelocity + 25, ease: Linear.easeOut});
        TweenMax.delayedCall(4.3, function(){
            new TweenMax(LauncherBG.inst, 1.3, {maxVelocity: prevVel, ease: Linear.easeOut});
            TweenMax.delayedCall(0.6, function(){

                p.superMode = false;
                p.resetBlink();
                p.invulnerable = false;
                p.blink = false;
            });
        })
        //    gameStage.slowMoCoef = 0.5;
     //   var f = gameStage;
    }
}