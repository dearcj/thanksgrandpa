/**
 * Created by KURWINDALLAS on 25.01.2015.
 */
extend(CLaser, CWeapon, true);

function CLaser(_id, _name, _desc,  __params,__gfx, _upgrades)
{
    CWeapon.apply(this, [_id, _name, _desc,  __params,__gfx, _upgrades]);

    this.laserClip = new PIXI.DisplayObjectContainer();
    this.lineClip = new PIXI.DisplayObjectContainer();
    this.particlesClip = new PIXI.DisplayObjectContainer();
    this.laserClip.addChild(this.particlesClip);
    this.laserClip.addChild(this.lineClip);
    SM.inst.fg.addChild(this.laserClip);
    //this.gfx.addChild(this.ropeClip);
    this.updateLaserLen(0);
    this.maxL = 0;
    this.lastPart = 0;
}

CLaser.prototype.updateLaserLen = function(l)
{
    while (this.lineClip.height < l)
    {
        var newSeg = new PIXI.Sprite(PIXI.Texture.fromFrame("laser.png"));
        newSeg.anchor.x = 0.5;
        newSeg.anchor.y = 0.5;
        newSeg.width = newSeg.width + Math.random()*0.18;
        newSeg.x = 0;//(Math.random() - 0.5)*1;
        this.lineClip.addChild(newSeg);
        newSeg.y = this.lineClip.height - 0.5;
        newSeg.blendMode = PIXI.blendModes.ADD;
    }

    while (this.lineClip.height > l + 10)
    {
        this.lineClip.removeChildAt(this.lineClip.children.length - 1);
    }
}

CLaser.prototype.process = function()
{
    CWeapon.prototype.process.call(this);

    var t = (new Date()).getTime();
    if (t - this.lastShot > this.delay)
    {
        this.firing = false;
    }

    if (this.firing)
    {
        var fireAngle = gameStage.player.fireAngle;
        var vx = Math.cos(fireAngle);
        var vy = Math.sin(fireAngle);

        var xx = gameStage.player.firePointX;
        var yy = gameStage.player.firePointY - 14;

        this.updateLaserLen(this.maxL);
        this.laserClip.rotation = fireAngle - Math.PI / 2;
        this.laserClip.x = xx;
        this.laserClip.y = yy;

        if (t - this.lastPart > 120)
        {
            this.lastPart = t;
            var part = crsp("laserparticle");
            part.y = 0;
            part.x = 0;
            part.blendMode = PIXI.blendModes.ADD;

            this.particlesClip.addChild(part);
        }

        for (var i = 0; i < this.particlesClip.children.length; ++i)
        {
            var scale = 1 - Math.abs(this.maxL / 2 - this.particlesClip.children[i].y) / (this.maxL / 2) ;
            if (scale < 0.3) scale = 0.3;
            this.particlesClip.children[i].scale.x = scale;
            this.particlesClip.children[i].scale.y = -scale;
            this.particlesClip.children[i].x = 3*(Math.cos((this.particlesClip.children[i].y*2 + t) / 1000));
            var dy = 25*Math.abs(Math.cos((this.particlesClip.children[i].y*2 + t) / 800));
            this.particlesClip.children[i].y += dy;
            if (this.particlesClip.children[i].y > this.maxL)
            {
                this.particlesClip.removeChildAt(i);
                i--;
            }


        }

        //xy1 xy2 - line
        //xy3 - object
        var y2 = yy + vy*10000;
        var x2 = xx + vx*10000;

        if (CMonster.list)
        for (var i = 0; i < CMonster.list.length; ++i)
        {
            var x3 = CMonster.list[i].x;
            var y3 = CMonster.list[i].y;
            var k = ((y2-yy) * (x3-xx) - (x2-xx) * (y3-yy)) / ((y2-yy)*(y2-yy) + (x2-xx)*(x2-xx));
            var x4 = x3 - k * (y2-yy);
            var y4 = y3 + k * (x2-xx);
            var dxx = x3 - x4;
            var dyy = y3 - y4;
            if (dxx*dxx + dyy*dyy < CMonster.list[i]._sqr)
            {
                CMonster.list[i].dealDamage(1);
            }
        }


        //COLLISION WITH CIRCLES
            //RENDER LASER
            //CHECK LASER
        this.laserClip.visible = true;
    } else this.laserClip.visible = false;
}


CLaser.prototype.shot = function()
{

    var r = CWeapon.prototype.shot.call(this);
    if (!r) return;
    if (!this.firing)
    {
        this.maxL = 0;
        new TweenMax(this, 0.6, {maxL: 1000});

     this.firing = true;
    }
    /*var fireAngle = -this.recoilValue / 200 + gameStage.player.fireAngle + Math.random()*this.backupStats.acc;
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
    */
}



/*
CPlayer.prototype.shootRope = function(dx, dy)
{
    if (this.doRemove) return;
    if (this.joint) return;

    this.stopShoot();
    {
        var bod = new
            p2.Body(
            {
                mass: 1,
                fixedRotation: true
            });

        bod.motionState = p2.Body.DYNAMIC;
        var c = new p2.Rectangle(2,35);
        bod.addShape(c);

        var l = Math.sqrt(dx*dx + dy*dy);
        dx /= l;
        dy /= l;

        bod.x = this.x;
        bod.y = this.y-100;
        this.ropedx = dx;
        this.ropedy = dy;
        this.ropedist = 40;
        this.rope = new CObj(this.x, this.y, "", bod);

        this.rope.x = this.x + this.ropedist*this.ropedx;
        this.rope.y = this.y + this.ropedist*this.ropedy;

        this.rope.rotation = Math.PI / 2 + Math.atan2(dy, dx);
        CObj.setCG(this.rope.body, world.cgDYNAMIC, world.cgSTATIC);
        // CObj.setDefaultCG(this.rope.body);
        this.rope.sensor = true;
        // world.removeBody(this.rope.body);
        var p = this;


        this.rope.onContactBegin = function(b, ce)
        {
            if (p.doRemove || !p.rope) return;

            var nx = p.rope.x + 20*p.ropedx;
            var ny = p.rope.y + 20*p.ropedy;
            p.endropex = nx;
            p.endropey = ny;
            var a1 = [0,0];
            var a2 = [0,0];
            // p.body.toLocalFrame(a1, p.rope.body.position);
            b.toLocalFrame(a2, [nx,ny]);
            p.joint = new p2.DistanceConstraint(p.body, b, {
                localAnchorA: a1,
                localAnchorB: a2,
                maxForce: 4000, collideConnected: true, worldPivot: [p.rope.body.x, p.rope.body.y]});
            p.joint.setStiffness(500);
            p.joint.setRelaxation(2);
            world.addConstraint(p.joint);
            if (p.rope) {
                p.rope.destroy();
                p.rope = null;
            }
        };
        this.ropeClip = new PIXI.DisplayObjectContainer();
        SM.instance.ol.addChildAt(this.ropeClip, 4);
        //this.gfx.addChild(this.ropeClip);
        this.updateRopeLen(0);
        this.rope.onContactEnd = function(b, ce)
        {

        };
    }
}

CPlayer.prototype.stopShoot = function()
{
    if (this.rope) {
        this.rope.destroy();
        this.rope = null;
    }

    if (this.ropeClip && this.ropeClip.parent)
        this.ropeClip.parent.removeChild(this.ropeClip);

    this.ropeLen = undefined;
    if (this.joint)
    {
        world.removeConstraint(this.joint);
        this.joint = null;
    }
}



CPlayer.prototype.makeBomb = function()
{
    if (!this.joint) return;
    if (this.ropeLen > 80) return;

    var b = new CBomb(this.endropex, this.endropey, "bomb");
    b.gfx.scale.x = 0.8;
    b.gfx.scale.y = 0.8;
    var o = b.gfx.scale;
    new TweenMax(o, 0.15, {x: 1., y: 1., yoyo:true, repeat: 7});
    TweenMax.delayedCall(1., function(){b.explode();});
    this.canFire = false;
}

CPlayer.prototype.process = function()
{
    if (this.doRemove) return;

    if (this.y > gameStage.cameraDeathLine + SCR_HEIGHT)
    {
        gameStage.loseGame();
    }


    if (this.rope) {
        this.ropedist += 40.5;
        if  (this.ropedist > 1000) this.stopShoot();else {
            this.rope.x = this.x + this.ropedist * this.ropedx;
            this.rope.y = this.y + this.ropedist * this.ropedy;
            this.updateRopeLen(this.ropedist);
            var angle = Math.atan2(this.ropedy, this.ropedx);
        }
    }

    if (this.joint && this.joint.removed) this.stopShoot();

    if (this.joint)
    {


        this.joint.distance -= 5;
        if (this.joint.distance < 10)
        {
            this.joint.distance = 10;
        }

        var p1 = [0,0];
        this.joint.bodyA.toWorldFrame(p1, this.joint.localAnchorA);

        var p2 = [0,0];
        this.joint.bodyB.toWorldFrame(p2, this.joint.localAnchorB);

        p2[0] -= p1[0];
        p2[1] -= p1[1];
        var l = Math.sqrt(p2[0]*p2[0] + p2[1]*p2[1]);
        this.ropeLen = l;
        p2[0] /= l;
        p2[1] /= l;
        var angle = Math.atan2( p2[1],  p2[0]);
        //    this.joint.lowerLimit -= 0.05;
        this.updateRopeLen(l);
    }

    if (this.ropeClip) {
        this.ropeClip.rotation = angle - Math.PI / 2;
        this.ropeClip.x = this.gfx.x;
        this.ropeClip.y = this.gfx.y;
    }

    CObj.prototype.process.call(this);
}
    */