extend(Boss1, CMonster, true);

function Boss1(in_x,in_y,animname,cr_bar){
    this.hitTestCircles = [{x: 10, y: 0,r: 60}, {x:10,y: -130,r: 60}, {x:0, y: -260,r: 60}];
    CMonster.apply(this,[in_x,in_y,null,null]);
    this.gfx = new PIXI.Spine(animname);
  //  g.skeleton.setSkinByName('perded');
    this.gfx.state.setAnimationByName(0, "idle", true);
    this.gfx.scale.x = 0.48;
    this.gfx.scale.y = 0.48;
    this.updateGraphics();
    this.maxHp = 800;
    this.xp = 300;
    this.hp = this.maxHp;
    this.bar.gfx.width *= 2;
    this.barOffsetY = - 360;
    LauncherBG.inst.ol.addChild(this.gfx);
    var t = this;
    this.fireDelay = 1.75;
 //   TweenMax.delayedCall(this.fireDelay, function(){t.fireBullet();})

    this.b1 = this.gfx.skeleton.findSlot("b_bullet1");
    this.b2 = this.gfx.skeleton.findSlot("b_bullet2");

    this.gfx.stateData.setMixByName("idle", "shot", 0.2);
    this.gfx.stateData.setMixByName("shot", "idle", 0.1);
    TweenMax.delayedCall(1, function (){t.fire()});
}

Boss1.prototype.fire = function()
{
    this.gfx.state.setAnimationByName(0, "shot", false);
    var t = this;
    TweenMax.delayedCall(0.5, function () {this.fireBullet();}, [1]);
    TweenMax.delayedCall(0.9, function () {this.fireBullet();},[2]);
    TweenMax.delayedCall(1.1, function () {this.goIdle();});
}
Boss1.prototype.goIdle = function() {
    this.gfx.state.setAnimationByName(0, "idle", true);
}


Boss1.prototype.fireBullet = function(b)
{
    if (this.doRemove) return;
    if (b == 1)
    var slot = this.b1; else
    slot = this.b2;

//    var p = this.gfx.toGlobal({x:slot.bone.x, y: slot.bone.y});
    var p = slot.currentSprite.toGlobal({x:0, y:0});
    this.firePointX = p.x/SCR_SCALE;
    this.firePointY = p.y/SCR_SCALE;
    var b = new CMonster(this.firePointX, this.firePointY, null, false);
    b.gfx = CObj.createMovieClip("b_bullet");
    b.gfx.animationSpeed = 0.5;
    b.gfx.play();
    LauncherBG.inst.ol.addChild(b.gfx);
    b.gfx.scale.x = 0.8;
    b.gfx.scale.y = 0.8;
    b.maxHp = 50;
    b.hp = b.maxHp;
    b.xp = 5;
    b.radius = 25;
    b.av = 0.1*(Math.random() - 0.5);
    b.spawnCoins= false;
    b.gravityEnabled = true;
    b.jumpTimeCoef = 1;
    var pow = (1 + 0.4*(Math.random() - 0.5));
    b.gravPower = (0.16 + Math.random()*0.1)*pow;
    b.vy = -b.gravPower*20*pow;
    b.allowTrackSpeed = false;
    new TweenMax(b, 2 + Math.random()*0.3, {x: -100, ease: Linear.easeIn});
    var t = this;
    TweenMax.delayedCall(this.fireDelay, function(){t.fireBullet();})
}

Boss1.prototype.showUpAnimation = function()
{
    var t = this;
    new TweenMax(this, 3, {x: this.x - 450, onComplete: function()
    {
        new TweenMax(t, 5, {x: t.x + 80, yoyo: true, repeat: -1});
    }});
}

Boss1.prototype.destroy = function()
{
    CMonster.prototype.destroy.call(this);

    MM.inst.currentBoss = null;
}