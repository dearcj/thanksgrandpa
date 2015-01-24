/**
 * Created by KURWINDALLAS on 22.01.2015.
 */
extend(CQueueGun, CWeapon, true);

function CQueueGun(_id, _name, _desc,  __params,__gfx, _upgrades)
{
    CWeapon.apply(this, [_id, _name, _desc,  __params,__gfx, _upgrades]);
    this.queueLife = 0;
}

CQueueGun.prototype.reload = function()
{
    CWeapon.prototype.reload.call(this);
    this.queueLife = this.queue;
}

CQueueGun.prototype.process = function()
{
    CWeapon.prototype.process.call(this);

    var t = (new Date()).getTime();
    if (this.queueLife > 0 &&  (this.state != this.sReload) && (t - this.lastShot >= this.queueDelay))
    {
        var d = this.delay;
        this.delay = this.queueDelay;
        this.shot(true);
        this.delay = d;
    }
}

CQueueGun.prototype.resetParams = function()
{
    CWeapon.prototype.resetParams.call(this);

    this.queue = this.backupStats.queue;
    this.queueDelay = this.backupStats.queueDelay;
}

CQueueGun.prototype.shot = function(queueShot)
{

    var r = CWeapon.prototype.shot.call(this);
    if (!r) return;

    if (this.queueLife > 0) this.queueLife--;

    if (!queueShot) {
        if (this.queueLife > 0) return; else if (this.queueLife == 0 && !queueShot)
            this.queueLife = this.queue;
    }

    var fireAngle = -this.recoilValue / 200 + gameStage.player.fireAngle + Math.random()*this.backupStats.acc;
    var vx = Math.cos(fireAngle);
    var vy = Math.sin(fireAngle);
    //
    //
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