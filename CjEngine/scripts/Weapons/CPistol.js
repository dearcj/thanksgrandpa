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
 var b = new CBullet(gameStage.player.x + vx * gameStage.player.bulletStart, gameStage.player.y + vy* gameStage.player.bulletStart, "bomb1");
    b.dmg = this.damage;
    b.rotation = Math.PI / 2 + fireAngle;
    b.vx = vx*40.5;
    b.vy = vy*40.5;
    b.colGroup = CG_BULLET;
    b.colMask = CG_MONSTER;
  return r;
}

