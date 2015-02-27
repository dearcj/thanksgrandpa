/**
 * Created by KURWINDALLAS on 22.02.2015.
 */

extend(CGrenade, CBullet, true);

function CGrenade(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, null, in_body]);
    this.gfx = crsp("Granata.png");
    this.gfx.scale.x = 0.5;
    this.gfx.scale.y = 0.5;
    LauncherBG.inst.ol.addChild(this.gfx);
    this.radius = 35;

    if (!CBullet.list) CBullet.list = [];
    CBullet.list.push(this);

    var t = this;
    TweenMax.delayedCall(0.05, function(){t.addSmoke();});
}

CGrenade.prototype.addSmoke = function (obj2) {
    if (this.doRemove) return;
    var t = this;
    TweenMax.delayedCall(0.02, function(){t.addSmoke();});
    var fx = pool.Pop("smoke");
    if (!fx) return;
    var o = new CObj(this.x, this.y, null);
    o.gfx = fx;
    o.updateGraphics();
    fx.alpha = 1;
    LauncherBG.inst.ol.addChild(o.gfx);
    new TweenMax(o.gfx, 0.2, {alpha: 0, onComplete: function(){
        if (o.gfx) {
            pool.Push(o.gfx);
            o.destroy();
        }
    }});
}

CGrenade.makeBoom = function (x, y, dmg, dist)
{
    ZSound.Play("grenade");

    var fx = pool.Pop("expl");
    if (fx) {
        var obj = new CObj(x, y, null);
        fx.loop = false;
      //  fx.gotoAndStop(0);
        fx.gotoAndPlay(0);
        obj.gfx = fx;
        obj.updateGraphics();
        SM.inst.fg.addChild(fx);
        obj.rotation = (Math.random() - 0.5);
        fx.animationSpeed = 0.85;
        obj.updateGraphics();
        obj.gfx.onComplete = function () {
            if (obj.gfx) {
                // obj.gfx.gotoAndStop(0);
                if (obj.gfx) {
                    pool.Push(obj.gfx);
                    obj.destroy();
                }
            }
        };
    }

    var sd = dist*dist;
    var l = CMonster.list.length;

    for (var i = 0; i < l; ++i)
    {
        var m = CMonster.list[i];
        var dx = m.x - x;
        var dy = m.y - y;
        if (dx*dx + dy*dy < sd)
        {
            var d = Math.sqrt(sd);
            m.dealDamage(dmg*((d + 0.01) / dist));
        }
        if (m.doRemove)
        {
            i--;
            l--;
        }
    }

    var smalld = (dist*0.5)*(dist*0.5);
    if (this.owner != gameStage.player)
    {
        var dx = gameStage.player.x - x;
        var dy = gameStage.player.y - y;
        if (dx*dx + dy*dy < smalld)
        {
            gameStage.player.dealDamage(1);
        }
    }
}


CGrenade.prototype.collide = function (obj2)
{
    if (obj2 != this.owner) {
        CGrenade.makeBoom(this.x, this.y, this.dmg, 350)
        this.destroy();
    }
}


CGrenade.prototype.destroy = function()
{
    CBullet.prototype.destroy.call(this);
}

CGrenade.prototype.process = function() {
    CObj.prototype.process.call(this);

    if (!this.doRemove && this.y > gameStage.floor.y - 60)
    {
        this.vy = - this.vy*0.7;

        if (Math.abs(this.vy)< 5)
        this.collide(null);
    }
}