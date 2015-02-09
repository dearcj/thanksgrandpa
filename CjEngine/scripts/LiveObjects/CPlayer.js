/**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(CPlayer, CLiveObj, true);

function CPlayer(in_x,in_y,textname,in_body){
    CLiveObj.apply(this,[in_x,in_y,null,in_body]);

    this.gravPower = 0.81;
    this.gfx = this.createDedGraphics();
    this.fireAngle = 0;
    this.weapon = gameStage.curweapon;
    this.bar = CObj.getById("hpbar");
    this.ammobar = gameStage.ammobar;
    this.colGroup = CG_PLAYER;
    this.nullPhase = 0;
    this.maxHp = 5;
    this.hp = this.maxHp;
    this.startPlayerX = this.x;
    this.y += 10;
    this.baseY = this.y;
    this.offsetY = -20;
    this.radius = this.gfx.width / 2 - 20;
    this.sMoving = 1;
    this.sDying = 2;
    this.state = this.sMoving;
    this.allowFlowMove = true;
}

CPlayer.prototype.updateAppearence = function(showGun, showBoard, anim, overrideGun, overrideHat) {

    if (anim)
    this.gfx.state.setAnimationByName(0, anim, true);

    if (showBoard)
        this.gfx.skeleton.setAttachment("board", "board"); else
        this.gfx.skeleton.setAttachment("board", null);

    var hatSlot = null;
    var gunSlot = "gun0";

    if (showGun)
    {
        for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
        {
            if (PlayerData.inst.items_enabled[i].equipped)
            {
                var item = PlayerData.inst.getItemById(PlayerData.inst.items_enabled[i].id_item);
                if (item.type == tApp + tHat) hatSlot = item.gfx;
                if (item.type == tWeapon) gunSlot = item.gfx;
            }
        }

    } else
        this.gfx.skeleton.setAttachment("gun", null);

    if (overrideGun)
        gunSlot =  overrideGun;

        this.gfx.skeleton.setAttachment("gun", gunSlot);

    if (overrideHat)
        hatSlot = overrideHat;

    this.gfx.skeleton.setAttachment("hat", hatSlot);
}

CPlayer.prototype.createDedGraphics = function()
{

    var g = new PIXI.Spine("imgtps/skeleton.json");

    g.skeleton.setSkinByName('perded');
    g.state.setAnimationByName(0, "idle", true);
    this.gunBone = g.skeleton.findSlot("gun");

    this.rshSlot = g.skeleton.findSlot("r_shoulder");
    this.lshSlot = g.skeleton.findSlot("l_shoulder");
    g.scale.x = 0.3;
    g.scale.y = 0.3;

    g.stateData.setMixByName("idle", "jump", 0.2);
    g.stateData.setMixByName("jump", "idle", 0.4);

    this.bulletStart = 40;

    return g;
}


CPlayer.prototype.reveal = function()
{
    this.hp = 2;
    this.invulnerable = false;
    this.state = this.sMoving;
    this.revealTime = new Date().getTime();
    this.gfx.state.setAnimationByName(0, "idle", true);
}

CPlayer.prototype.onJump = function()
{
 //   this.kill(); return;
    if (this.state == this.sMoving
    && !this.jumping) {
        this.jumping = true;
        this.jumpboost = true;
        this.gfx.state.setAnimationByName(0, "jump", false);
        this.gravityEnabled = true;
        this.vy = -13;
    }
}

CPlayer.prototype.kill = function()
{
    //this.destroy();
    if (this.state == this.sMoving) {
        this.state = this.sDying;
        this.invulnerable = true;
        var lbg = LauncherBG.inst;
        lbg.preVelocity = lbg.maxVelocity;
        new TweenMax(lbg, 2, {maxVelocity: 0.5});
        this.gfx.state.setAnimationByName(0, "defeated", false);
        TweenMax.delayedCall(2.57, gameStage.sessionEnd);
    }
}

CPlayer.prototype.destroy = function()
{
    if (this.jumpTween) this.jumpTween.kill();
    this.jumpTween = null;
    CLiveObj.prototype.destroy.call(this);
    gameStage.player = null;
}

CPlayer.prototype.jump = function()
{
    if (this.jumpTween && this.jumpTween.isActive()) return;
    this.jumpTween = new TweenMax(this, 0.55, {y: 140., yoyo: true, repeat: 1, ease: Cubic.easeOut});
}

CPlayer.prototype.process = function()
{



    if (SM.inst.currentStage == gameStage && gameStage.doProcess) {

        if (this.vy > 0 && this.y > this.baseY - 30) {
            this.jumping = false;
        }

        if (this.vy > 0 && this.y > this.baseY)
        {
            this.vy = 0;
            this.jumping = false;
            this.y = this.baseY;
            this.gravityEnabled = false;
            if (this.state != this.sDying)
                this.gfx.state.setAnimationByName(0, "idle", true);
        }

        if (this.jumping) {
            if (this.jumpboost && this.vy < 0)
                this.vy *= 1.048;

            if (this.vy < -17) {
                this.jumpboost = false;
                this.vy = -17;
            }
        }


        gameStage.ammoico.x = this.x-80;
        gameStage.ammoico.y = this.y-50;

        gameStage.ammobar.x = gameStage.ammoico.x + 25;
        gameStage.ammobar.y = gameStage.ammoico.y - 21;
        gameStage.reloadBar.x = gameStage.ammoico.x;
        gameStage.reloadBar.y = gameStage.ammoico.y;

        if (gameStage.fireState && window.mouseY < SCR_HEIGHT - 40) {
            this.fire();
        }

        if (this.weapon)
            this.weapon.process();

        if (this.allowFlowMove && (!this.jumpTween || !this.jumpTween.isActive())) {
            this.freq = 800;
            this.nullPhase += 22;
            this.x = this.startPlayerX + Math.sin((this.nullPhase) / this.freq) * 30;
        }

        var dx = 0;
        var dy = 0;
        var da = 0;
        if (gameStage.curweapon == w_rifle) {
            dx = 220;
            dy = 20;
        }else
        if (gameStage.curweapon == w_pps) {
            dx = -45;
            dy = 280;
            da = -Math.PI / 20;
        }else
        if (gameStage.curweapon == w_minigun)
        {
            dy = 310;
            dx = -68;
            da = Math.PI / 7.5;
        }
        var p = this.gunBone.currentSprite.toGlobal({x:dy, y: -dx});
      //  p = this.gunBone.currentSprite.parent.toGlobal(p);
        this.firePointX = p.x/SCR_SCALE;
        this.firePointY = p.y/SCR_SCALE;

        var mx = window.mouseX;
        var my = window.mouseY;
        if (mx < this.firePointX) mx = this.firePointX;
        if (my > SCR_HEIGHT - 50) my = SCR_HEIGHT - 50;

        var bangle = Math.atan2(this.y - my, this.x - mx);

        this.fireAngle = Math.PI + bangle ;
        var newAngle = this.fireAngle+Math.PI / 2 + da;
       // if ((!this.handTween || !this.handTween.isActive())) {

        if (this.state == this.sMoving) {
            this.rshSlot.data.boneData.rotation = 270 - 180 * newAngle / Math.PI + 25;
            this.lshSlot.data.boneData.rotation = 270 - 180 * newAngle / Math.PI - 10;
        }
       // this.gunBone.data.boneData.rotation =  270 -180*newAngle / Math.PI;
        //this.dedLeftHand.rotation = newAngle + 0.13;
            //this.dedRightHand.rotation = newAngle;
      //  }

    }
    CLiveObj.prototype.process.call(this);
}


CPlayer.prototype.dealDamage = function(dmg)
{
    var t = new Date().getTime();
    if (t - this.revealTime < 2000) return;

    if (this.invulnerable) return;

    for (var i = 0; i < this.gfx.skeleton.slots.length; ++i)
    {
        this.gfx.skeleton.slots[i].r = 1;
        this.gfx.skeleton.slots[i].g = 0;
        this.gfx.skeleton.slots[i].b = 0;
    }

    var f = this.gfx;
    TweenMax.delayedCall(0.2, function ()
    {
        for (var i = 0; i < f.skeleton.slots.length; ++i)
        {
            f.skeleton.slots[i].r = 1;
            f.skeleton.slots[i].g = 1;
            f.skeleton.slots[i].b = 1;
        }

    });

    this.gfx.skeleton.setAttachment("head", "head4");
    TweenMax.delayedCall(0.7, function(){
        if (gameStage.player)
        gameStage.player.gfx.skeleton.setAttachment("head", "head1");
    });

    var pl = this;
    this.allowFlowMove = false;
    new TweenMax(this, 0.6, {x: Math.max(this.x - 50,80), repeat: 1, yoyo: true, onComplete: function(){pl.allowFlowMove = true;}});
    //  this.tweenColor(this.gfx);
/*    if   (!TweenMax.isTweening(this.gfx.children[0])) {
       for (var i = 0; i < this.gfx.children.length; ++i) {
            if (this.dedWeaponContainer == this.gfx.children[i]) continue;
            new TweenMax(this.gfx.children[i], 0.1, {ease: Linear.ease, tint: 0xff0000, repeat: 1, yoyo: true});
        }
    }*/

    if (this.hp - dmg < 0) this.hp = 0; else
        this.hp = this.hp - dmg;
}


CPlayer.prototype.fire = function()
{
    if (!gameStage.menuBtn.over)
    {
        if (this.state == this.sMoving && this.weapon.shot())
        {
            /*    if (this.handTween)
             this.handTween.kill();
             */
            //  var time = 0.5* this.weapon.delay / 1000;
            //  new TweenMax(w, time, {x: -5, rotation: -0.04, yoyo: true, repeat: 1});
            /*    this.handTween = new TweenMax(this.dedLeftHand, time, { rotation: this.dedLeftHand.rotation-0.04, yoyo: true, repeat: 1});
             new TweenMax(this.dedRightHand, time, { rotation: this.dedRightHand.rotation-0.04, yoyo: true, repeat: 1});
             */  }
    }
}
