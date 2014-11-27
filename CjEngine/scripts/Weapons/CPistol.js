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
    var b = new CBullet(gameStage.player.x, gameStage.player.y, "bomb1");
    b.dmg = this.damage;
    b.gfx.scale.x = 0.3;
    b.gfx.scale.y = 0.3;
    b.vx = Math.cos(gameStage.player.fireAngle)*30;
    b.vy = Math.sin(gameStage.player.fireAngle)*30;
    b.colGroup = CG_BULLET;
    b.colMask = CG_MONSTER;
}

