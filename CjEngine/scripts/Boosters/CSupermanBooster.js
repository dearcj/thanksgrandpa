/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CSupermanBooster, CBooster, true);

function CSupermanBooster(x,y,gfx) {
    CBooster.apply(this, [x,y,gfx]);


    this.activate = function ()
    {
        gameStage.player.invulnerable = true;
        LauncherBG.inst.maxVelocity += speedBonus;
        TweenMax.delayedCall(5, function (){
            LauncherBG.inst.maxVelocity -= speedBonus;
            gameStage.player.invulnerable = false;
        })


    }
}