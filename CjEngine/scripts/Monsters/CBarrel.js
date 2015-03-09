/**
 * Created by KURWINDALLAS on 05.03.2015.
 */
extend(CBarrel, CObstacle, true);

function CBarrel(in_x,in_y,animname,cr_bar){
    CObstacle.apply(this,[in_x,in_y,animname,true]);
}

CBarrel.prototype.kill = function () {
    if (this.doRemove) return;
    this.destroy();
    CGrenade.makeBoom(this.x, this.y, this.dmgExpl, 350);
}
