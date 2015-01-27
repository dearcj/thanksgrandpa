/**
 * Created by KURWINDALLAS on 23.11.2014.
 */
extend(CCoin, CObj, true);

function CCoin(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.gravityEnabled = true;
    this.colGroup = 1;
    this.colMask = CG_PLAYER;
    this.gravPower = 0.7;
    this.radius = 15;

    if (!CCoin.coins) CCoin.coins = [];
    CCoin.coins.push(this);
}
CCoin.prototype.process = function ()
{
    CObj.prototype.process.call(this);

    if (this.gravityEnabled)
    this.vx = -7;
}

CCoin.prototype.collide = function(obj2)
{
    if (this.doRemove) return;
    PlayerData.inst.score += this.amount;
    gameStage.updateScore();
    this.destroy();
}
