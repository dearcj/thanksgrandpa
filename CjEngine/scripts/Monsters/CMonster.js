/**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(CMonster, CLiveObj, true);

function CMonster(in_x,in_y,textname,cr_bar){
    CLiveObj.apply(this,[in_x,in_y,textname,null]);
    this.radius = 50;
    this.xp = 1;
    this.colGroup = CG_MONSTER;
    this.colMask = CG_PLAYER;
    this.highCoef = 1;
    this.jumpTimeCoef = 1;
    if (!CMonster.list) CMonster.list = [];
    CMonster.list.push(this);
    this.maxHp = 50;
    this.spawnCoins = true;
    this.coinAmount = 4;
    this.hp = this.maxHp;
    if (cr_bar == true || cr_bar == null) {
        this.bar = new CHPBar(in_x, in_y, "health bar empty");
        this.bar.upperImage = "health bar full";
        this.bar.init();
    //    this.bar.gfx.scale.x = 0.1;
     //   this.bar.gfx.scale.y = 0.2;
        this.bar.prop = 1;
        this.barOffsetY = 0;
        this.barOffsetX = 0;
    }
    this.process();
    this.dmg = 1;
}

CMonster.prototype.collide = function (obj2)
{
    if (this.prekilled || this.doRemove) return;
    if (!this.hitDone) {
        obj2.dealDamage(this.dmg);
        if (!obj2.invulnerable) {
            this.hitDone = true;
        }
    }
}

CMonster.prototype.process = function()
{
    if (this.bar) {
        this.bar.x = this.x - this.bar.gfx.width * 0.5 - 10+ this.barOffsetX;
        this.bar.y = this.y - this.radius * 1.5 + this.barOffsetY;
    }

    if (this.y > 470 && this.rollLeave)
    {
        this.av -= 0.01;
        if (this.av < -0.2) this.av = -0.2;
        this.gravityEnabled = false;
        new TweenMax(this, 0.7, {vx: -20});
        this.vy = 0;
    }
    CLiveObj.prototype.process.call(this);
}


CMonster.prototype.kill = function()
{
    if (!this) return;
    if (this.prekilled) return;

    if (this.spawnCoins) {
        var coinCount = 5;
        if (gameStage.player.doubleBooster)coinCount = 10;
        for (var i = 0; i < coinCount; ++i) {
            if (Math.random() > 0.3) continue;
            CCoin.spawnCoin(this.x, this.y, this.coinAmount);
        }
    }
    this.prekilled = true;

    if (this.bar) {
        new TweenMax(this.bar.gfx, 0.2, {width: this.bar.gfx.width*3, height: 0});//.width
        //this.bar.gfx.visible = false;
    }


    PlayerData.inst.progressAch("Gold medal 10", 1/100, false);
    PlayerData.inst.progressAch("Gold medal 11", 1/200, false);


    PlayerData.inst.gainExp(this.xp);

    var parent = this.gfx.parent;
    parent.removeChild(this.gfx);
    var bloodgfx = pool.Pop("bloodblow");
    var f = this;
    if (bloodgfx) {
        this.gfx = bloodgfx;
        this.gfx.anchor.x = 0.5;
        this.gfx.anchor.y = 0.5;
        this.gfx.scale.x = 1.8;
        this.gfx.scale.y = 1.8;
        this.gfx.animationSpeed = 0.6;
        this.updateGraphics();
        parent.addChild(this.gfx);
        this.gfx.loop = false;
        this.gfx.gotoAndPlay(0);
        this.gfx.onComplete =
            function () {
                if (f.gfx) {
                    // obj.gfx.gotoAndStop(0);
                    if (f.gfx)
                        pool.Push(f.gfx);
                    f.destroy();
                }
            };
    } else
        CLiveObj.prototype.kill.call(f);

    this.updateGraphics();
  //
}

CMonster.prototype.destroy = function()
{
    if (this.doRemove) return;

    if (this.bar)
        this.bar.destroy();
    this.bar = null;
    var inx = CMonster.list.indexOf(this);
    CMonster.list.splice(inx, 1);
    CObj.prototype.destroy.call(this);
}

CMonster.prototype.longJump = function(diff, gravPower, slowSpeed, fastSpeed, easeTime, powRand)
{
    var diff = 1;
    this.gravityEnabled = true;
    this.jumpTimeCoef = 1;
    if (!powRand) powRand = 0;
    var pow = (1 + powRand);
  //  var t = 2*this.jumpTimeCoef/pow;
    this.gravPower = (gravPower + 0.025*diff)*pow;
    this.vy = -this.gravPower*40*pow;
    this.allowTrackSpeed = false;
    this.gravityEnabled = true;

    var obj = this;
    this.vx = fastSpeed - diff;
    new TweenMax(this, easeTime, {vx: slowSpeed - diff, yoyo: true, repeat: 1});
  //  new TweenMax(this, 1.2, {y: 150, repeat: 1, yoyo:true, onComplete: function(){obj.vy = 3; obj.gravityEnabled = true;}});
  //  new TweenMax(this, 1.7*this.jumpTimeCoef, { y: this.y - 220*(this.highCoef + Math.random()*0.1), yoyo: true, repeat: 1, ease: Quad.easeInOut, onComplete: function(){x.gravityEnabled = true;}} );
};