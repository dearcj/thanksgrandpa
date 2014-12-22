/**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(CMonster, CLiveObj, true);

function CMonster(in_x,in_y,textname,in_body){
    CLiveObj.apply(this,[in_x,in_y,textname,in_body]);
    this.radius = 50;
    this.colGroup = CG_MONSTER;
    this.colMask = CG_PLAYER;
    this.highCoef = 1;
    this.jumpTimeCoef = 1;
    if (!CMonster.list) CMonster.list = [];
    CMonster.list.push(this);
    this.maxHp = 50;
    this.hp = this.maxHp;
    this.bar = new CHPBar(in_x, in_y, "barHpBG");
    this.bar.upperImage = "textureHP";
    this.bar.init();
    this.bar.gfx.scale.x = 0.1;
    this.bar.gfx.scale.y = 0.2;
    this.bar.prop = 1;
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
    this.bar.x = this.x - this.bar.gfx.width * 0.5 - 10;
    this.bar.y = this.y - this.radius*1.5;
    CLiveObj.prototype.process.call(this);
}

CMonster.prototype.kill = function()
{
    if (this.prekilled) return;
    for (var i = 0; i < 5; ++i)
    {
        var c = new CCoin(this.x, this.y, "coin");
        c.vx = 20*(Math.random() - 0.5);
        c.vy = -20*(Math.random());
    }
    this.prekilled = true;

    var parent = this.gfx.parent;
    parent.removeChild(this.gfx);

    this.gfx = new CObj.CreateMovieClip("bloodblow");
    this.gfx.anchor.x = 0.5;
    this.gfx.anchor.y = 0.5;
    this.gfx.scale.x = 1.5;
    this.gfx.scale.y = 1.5;
    this.gfx.animationSpeed = 0.66;
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
    var x = this;
    new TweenMax(this, 5*this.jumpTimeCoef, {x: 50, ease: Linear.easeIn});
    new TweenMax(this, 2.1*this.jumpTimeCoef, { y: this.y - 240*(this.highCoef + Math.random()*0.1), yoyo: true, repeat: 1, ease: Quad.easeInOut, onComplete: function(){x.gravityEnabled = true;}} );
}