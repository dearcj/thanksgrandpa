/**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(CMonster, CLiveObj, true);

function CMonster(in_x,in_y,textname,cr_bar){
    CLiveObj.apply(this,[in_x,in_y,textname,null]);
    this.radius = 50;
    this.colGroup = CG_MONSTER;
    this.colMask = CG_PLAYER;
    this.highCoef = 1;
    this.jumpTimeCoef = 1;
    if (!CMonster.list) CMonster.list = [];
    CMonster.list.push(this);
    this.maxHp = 50;
    this.hp = this.maxHp;
    if (cr_bar == true || cr_bar == null) {
        this.bar = new CHPBar(in_x, in_y, "barHpBG");
        this.bar.upperImage = "textureHP";
        this.bar.init();
        this.bar.gfx.scale.x = 0.1;
        this.bar.gfx.scale.y = 0.2;
        this.bar.prop = 1;
    }
    this.process();
    this.dmg = 0.5;
}

CMonster.prototype.collide = function (obj2)
{

    if (!this.hitDone) {
        obj2.dealDamage(this.dmg);
        this.hitDone = true;
    }
}

CMonster.prototype.process = function()
{
    if (this.bar) {
        this.bar.x = this.x - this.bar.gfx.width * 0.5 - 10;
        this.bar.y = this.y - this.radius * 1.5;
    }
    CLiveObj.prototype.process.call(this);
}

CMonster.prototype.kill = function()
{
    if (this.prekilled) return;
    for (var i = 0; i < 5; ++i)
    {
        if (Math.random() > 0.3) continue;
        var c = new CCoin(this.x, this.y, 4);
        var maxvx = 20 + Math.random()*10;
        c.vx = maxvx;
      //  new TweenMax(c, 0.4, {vx: maxvx});
        c.vy = -20*(Math.random());
    }
    this.prekilled = true;

    PlayerData.inst.gainExp(this.xp);

    var parent = this.gfx.parent;
    parent.removeChild(this.gfx);

    this.gfx = new CObj.createMovieClip("bloodblow");
    this.gfx.anchor.x = 0.5;
    this.gfx.anchor.y = 0.5;
    this.gfx.scale.x = 1.8;
    this.gfx.scale.y = 1.8;
    this.gfx.animationSpeed = 0.6;
    parent.addChild(this.gfx);
    this.gfx.loop = false;
    this.gfx.gotoAndPlay(0);
    var f = this;
    this.gfx.onComplete =
    function (){
        CLiveObj.prototype.kill.call(f);
    };
    this.updateGraphics();


    //new TweenMax(this.gfx, 0.7, {currentFrame: this.gfx.totalFrames, onComplete: CLiveObj.prototype.kill.call, onCompleteParams: [this]});
    //TweenMax.delayedCall(0.7, , [this]);

}

CMonster.prototype.destroy = function()
{
    if (this.doRemove) return;

    if (this.bar)
        this.bar.destroy();

    var inx = CMonster.list.indexOf(this);
    CMonster.list.splice(inx, 1);
    CObj.prototype.destroy.call(this);
}


CMonster.prototype.longJump = function()
{
    this.gravityEnabled = true;
    this.jumpTimeCoef = 1;
   var t = 2.2*this.jumpTimeCoef;
    this.gravPower = 0.12;
    this.vy = -this.gravPower*t*20;
    this.allowTrackSpeed = false;
    new TweenMax(this, t, {x: 50, ease: Linear.easeIn});
  //  new TweenMax(this, 1.7*this.jumpTimeCoef, { y: this.y - 220*(this.highCoef + Math.random()*0.1), yoyo: true, repeat: 1, ease: Quad.easeInOut, onComplete: function(){x.gravityEnabled = true;}} );
}