/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CTabletsBooster, CBooster, true);

function CTabletsBooster(x,y,gfx) {
    CBooster.apply(this, [x,y, gfx]);


    this.activate = function()
    {
    //    gameStage.slowMoCoef = 0.5;
     //   var f = gameStage;
     //   TweenMax.delayedCall(3, function(){f.slowMoCoef = 1})
    }
}