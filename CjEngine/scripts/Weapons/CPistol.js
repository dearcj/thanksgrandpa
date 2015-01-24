/**
 * Created by KURWINDALLAS on 22.11.2014.
 */
extend(CPistol, CWeapon, true);

function CPistol(_id, _name, _desc,  __params,__gfx, _upgrades)
{
    CWeapon.apply(this, [_id, _name, _desc,  __params,__gfx, _upgrades]);
}


CPistol.prototype.shot = function()
{
   var r = CWeapon.prototype.shot.call(this);
    if (!r) return;
    var fireAngle = -this.recoilValue / 200 + gameStage.player.fireAngle + Math.random()*this.backupStats.acc;
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

    var b = new CBullet(xx, yy, "bomb1");
    b.life = this.life;
    b.dmg = this.damage;
    b.rotation = Math.PI / 2 + fireAngle;
    b.vx = vx*40.5;
    b.vy = vy*40.5;
    b.colGroup = CG_BULLET;
    b.colMask = CG_MONSTER;
  return r;
}

