/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CDoubleBooster, CBooster, true);

function CDoubleBooster(x,y,gfx) {
    CBooster.apply(this, [x,y,gfx]);
    this.duration = 30;
    this.key = "D";
    this.activate = true;
}

CDoubleBooster.prototype.onActivate = function()
{
    if (!gameStage.player) return;
    CBooster.prototype.onActivate.call(this);

    var b = this;

    gameStage.player.double = true;

    TweenMax.delayedCall(this.duration, function(){
        gameStage.player.double = false;
    });

}
