/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CMagnetBooster, CBooster, true);

function CMagnetBooster(x,y,gfx) {
    CBooster.apply(this, [x,y,gfx]);
    CMagnetBooster.mindist = 300*300;
}

CMagnetBooster.prototype.process = function()
{
    if (gameStage.player && CCoin.coins) {
        var len = CCoin.coins.length;
        for (var i = 0; i < len; ++i) {
            var dx = CCoin.coins[i].x - gameStage.player.x;
            var dy = CCoin.coins[i].y - gameStage.player.y;
            if (dx*dx + dy*dy < CMagnetBooster.mindist)
            {
                var l = Math.sqrt(dx*dx + dy*dy);
                dx /= l;
                dy /= l;
                CCoin.coins[i].vx -= dx*1.5;
                CCoin.coins[i].vy -= dy*1.5;

            }
        }
    }
};