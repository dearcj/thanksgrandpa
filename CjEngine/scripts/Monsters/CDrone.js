
extend(CDrone, CMonster, true);

function CDrone(in_x,in_y,animname,cr_bar){
    CMonster.apply(this,[in_x,in_y,animname, cr_bar]);

    var t = this;
    new TweenMax.delayedCall(1, function(){t.spawnGrenade();});
}

CDrone.prototype.spawnGrenade = function()
{
    if (this.doRemove) return;


    var b = new CGrenade(this.x, this.y + 60);
    b.owner = this;
    b.life = 10;
    b.dmg = 40;
    b.rotation = Math.PI / 2;
    b.av = 0.2;
    b.vx = -3;
    b.gfx.tint = 0xff0000;
    b.gravityEnabled = true;
    b.colGroup = CG_GROUND;
    b.colMask = CG_PLAYER;

    var t = this;
    new TweenMax.delayedCall(1, function(){t.spawnGrenade();});
}
CDrone.prototype.process = function()
{


    CMonster.prototype.process.call(this);
}