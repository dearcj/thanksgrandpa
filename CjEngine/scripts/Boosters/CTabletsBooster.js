/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CTabletsBooster, CBooster, true);


function CTabletsBooster(x,y,gfx) {
    CBooster.apply(this, [x,y, gfx]);
    this.duration = 4;
    this.key = "A";
    this.activate = true;

}

CTabletsBooster.prototype.onActivate = function()
{
    CBooster.prototype.onActivate.call(this);
        if (!gameStage.player) return;


        this.lastUse = window.time;
        gameStage.player.invulnerable = true;
        var p = gameStage.player;
        p.blink = true;
        var prevVel = LauncherBG.inst.maxVelocity;
        p.superMode = true;

    var b = this;
        new TweenMax(LauncherBG.inst, this.duration, {maxVelocity: LauncherBG.inst.maxVelocity + 25, ease: Linear.easeOut});
        TweenMax.delayedCall(this.duration+0.3, function(){
            new TweenMax(LauncherBG.inst, 1.3, {maxVelocity: prevVel, ease: Linear.easeOut});
            TweenMax.delayedCall(0.9, function(){
                b.onDeactivate();
                p.superMode = false;
                p.resetBlink();
                p.invulnerable = false;
                p.blink = false;
            });
        })
        //    gameStage.slowMoCoef = 0.5;
        //   var f = gameStage;

}

