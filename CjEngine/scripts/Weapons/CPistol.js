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
    var fireAngle = gameStage.player.fireAngle + Math.random()*this.backupStats.acc;
   var vx = Math.cos(fireAngle);
 var vy = Math.sin(fireAngle);
    //
    //

    var xx =
        gameStage.player.firePointX + vx*gameStage.player.bulletStart;
    var yy = gameStage.player.firePointY+ vy* gameStage.player.bulletStart;
    var fx = new PIXI.Sprite(PIXI.Texture.fromFrame("fxblink.png"));
    fx.x = xx;
    fx.y = yy;
    fx.rotation = fireAngle;
    SM.inst.fg.addChild(fx);

    TweenMax.delayedCall(0.1, function (){fx.parent.removeChild(fx);});

    var b = new CBullet(xx, yy, "bomb1");
    b.dmg = this.damage;
    b.rotation = Math.PI / 2 + fireAngle;
    b.vx = vx*40.5;
    b.vy = vy*40.5;
    b.colGroup = CG_BULLET;
    b.colMask = CG_MONSTER;
  return r;
}

