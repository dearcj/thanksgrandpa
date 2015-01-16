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
}
CCoin.prototype.process = function ()
{
    CObj.prototype.process.call(this);

    this.vx = -7;
}

CCoin.prototype.collide = function(obj2)
{
    if (this.doRemove) return;
    PlayerData.inst.score += 100;
    gameStage.updateScore();
    this.destroy();
}
