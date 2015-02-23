/**
 * Created by KURWINDALLAS on 22.02.2015.
 */

extend(CGrenade, CBullet, true);

function CGrenade(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, null, in_body]);
    this.gfx = crsp("b_bullet04.png");
    LauncherBG.inst.ol.addChild(this.gfx);
    this.radius = 35;
    if (!CBullet.list) CBullet.list = [];
    CBullet.list.push(this);
}


CGrenade.prototype.collide = function (obj2)
{


        var fx = pool.Pop("expl");
        if (fx) {
            var obj = new CObj(this.x, this.y, null);
            fx.loop = false;
            fx.gotoAndStop(0);
            fx.gotoAndPlay(0);
            obj.gfx = fx;
            obj.updateGraphics();
            SM.inst.fg.addChild(fx);
            obj.rotation = (Math.random() - 0.5);
            fx.animationSpeed = 0.85;
            this.updateGraphics();
            obj.gfx.onComplete = function () {
                setTimeout(function () {
                    if (obj.gfx) pool.Push(obj.gfx);
                    rp(obj.gfx);
                    obj.gfx = null;
                    obj.destroy();
                }, 0);
            };
        }

        var sd = 350*350;
        var l = CMonster.list.length;
        for (var i = 0; i < l; ++i)
        {
            var m = CMonster.list[i];
            var dx = m.x - this.x;
            var dy = m.y - this.y;
            if (dx*dx + dy*dy < sd)
            {
                var d = Math.sqrt(sd);
                m.dealDamage(this.dmg*(sd + 0.01 / 350));
            }
            if (m.doRemove)
            {
                i--;
                l--;
            }
        }

        this.destroy();

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