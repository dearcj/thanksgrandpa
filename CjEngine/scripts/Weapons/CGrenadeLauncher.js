extend(CGrenadeLauncher, CWeapon, true);

function CGrenadeLauncher(_id, _name, _desc,  __params,__gfx, _upgrades)
{
    CWeapon.apply(this, [_id, _name, _desc,  __params,__gfx, _upgrades]);
}


CGrenadeLauncher.prototype.shot = function()
{
    var r = CWeapon.prototype.shot.call(this);
    if (!r) return;
    var fireAngle = gameStage.player.fireAngle + Math.random()*this.backupStats.acc;
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

    var b = new CGrenade(xx, yy);
    b.owner = gameStage.player;
    b.life = this.life;
    b.dmg = this.damage;
    b.rotation = Math.PI / 2 + fireAngle;
    b.av = 0.2;
    b.vx = vx*17.5;
    b.vy = vy*17.5;
    b.gravityEnabled = true;
    b.colGroup = CG_BULLET;
    b.colMask = CG_MONSTER;
    return r;
}

