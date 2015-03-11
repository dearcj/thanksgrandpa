/**
 * Created by KURWINDALLAS on 22.11.2014.
 */
extend(CPistol, CWeapon, true);

function CPistol(_id, _name, _desc,  __params,__gfx, _upgrades)
{
    CWeapon.apply(this, [_id, _name, _desc,  __params,__gfx, _upgrades]);
}

CPistol.prototype.mouseUp = function() {
    this.lastShot -= this.delay*0.3;
}

CPistol.prototype.shot = function()
{
   var r = CWeapon.prototype.shot.call(this);
    if (!r) return;
    var fireAngle = gameStage.player.fireAngle + (superRand(6) - 0.5)*this.acc;
   var vx = Math.cos(fireAngle);
  var vy = Math.sin(fireAngle);

    var xx =
        gameStage.player.firePointX;
    var yy = gameStage.player.firePointY - 14;
    var fx = crsp("fxblink.png");
    fx.x = xx + vx * 50;
    fx.y = yy + vy*50;
    fx.rotation = fireAngle;
    fx.blendMode = PIXI.blendModes.ADD;
    SM.inst.fg.addChild(fx);

    TweenMax.delayedCall(0.03, function (){fx.parent.removeChild(fx);});
    gameStage.player.vx = -0.5;
    var b = new CBullet(xx, yy, "bomb1");
    b.life = this.life;
    b.dmg = this.damage;
    b.rotation = Math.PI / 2 + fireAngle;
    b.visualWidth = this.visualWidth
    b.dw = this.dw;
    b.vx = vx*this.speed;
    b.vy = vy*this.speed;
    b.colGroup = CG_BULLET;
    b.colMask = CG_MONSTER;
  return r;
};