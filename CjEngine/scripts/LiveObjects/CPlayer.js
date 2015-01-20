/**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(CPlayer, CLiveObj, true);

function CPlayer(in_x,in_y,textname,in_body){
    CLiveObj.apply(this,[in_x,in_y,null,in_body]);

    this.gravPower = 0.77;
    this.gfx = this.createDedGraphics();
    this.fireAngle = 0;
    this.weapon = w_pistol;
    this.bar = CObj.getById("hpbar");
    this.ammobar = CObj.getById("ammot");
    this.colGroup = CG_PLAYER;
    this.nullPhase = 0;
    this.maxHp = 5;
    this.hp = 5;
    this.startPlayerX = this.x;
    this.baseY = this.y;
    this.radius = this.gfx.width / 2;
}



CPlayer.prototype.createDedGraphics = function()
{
    var g = new PIXI.Spine("imgtps/skeleton.json");

    g.skeleton.setSkinByName('perded');
    g.scale.x = 0.3;
    g.scale.y = 0.3;
   // g.state.setAnimationByName(0, "breath", true);
    this.gunBone = g.skeleton.findBone("gun");

    this.rshSlot = g.skeleton.findSlot("r_shoulder");
    this.lshSlot = g.skeleton.findSlot("l_shoulder");

    g.skeleton.setAttachment("gun", null)
    g.skeleton.setAttachment("hat", null)

    this.bulletStart = 40;

    return g;

/*
    this.dedLeftHand = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight 2 arm.png"));
    this.dedBody = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight body.png"));
    this.dedHead = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight head.png"));
    this.dedWeaponContainer = new PIXI.DisplayObjectContainer();
    this.dedRightHand = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight 1 arm.png"));
    this.dedBoard = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight board.png"));


    this.dedBody.anchor.x = 0.5;
    this.dedBody.anchor.y = 0.5;
    this.dedHead.anchor.x = 0.5;
    this.dedHead.anchor.y = 0.5;
    this.dedHead.y = - 67;
    this.dedHead.x = 27;

    this.dedBoard.anchor.x = 0.5;
    this.dedBoard.anchor.y = 0.5;
    this.dedBoard.y = 62;

    this.dedLeftHand.pivot.y = 10;
    this.dedLeftHand.pivot.x = 5;
    this.dedLeftHand.y = -35;
    this.dedLeftHand.x = 2;
    this.dedRightHand.y = -38;
    this.dedRightHand.x = - 20;

    this.dedWeaponContainer.x = -17;
    this.dedWeaponContainer.y = -47;

    g.addChild(this.dedLeftHand);
    g.addChild(this.dedBoard);
    g.addChild(this.dedBody);
    g.addChild(this.dedHead);
    this.dedWeaponContainer.addChild(this.dedWeapon);
    g.addChild(this.dedWeaponContainer);
    g.addChild(this.dedRightHand);


    return g;
*/
}

CPlayer.prototype.kill = function()
{
    this.destroy();
    gameStage.sessionEnd();
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
    if (this.vy > 0 && this.y > this.baseY)
    {
        {
            this.vy = 0;
            gameStage.jumping = false;
            this.y = this.baseY;
            this.gravityEnabled = false;
            this.gfx.state.setAnimationByName(0, "idle", true);

        }
    }

    this.firePointX =this.x;
    this.firePointY =this.y + this.gfx.pivot.y*this.gfx.scale.y


    /*for (var i = 0; i < this.gfx.spineData.bones.length; ++i)
    {
        this.gfx.skeleton.bones[i].scaleX = SCR_SCALE;
        this.gfx.skeleton.bones[i].scaleY = SCR_SCALE;

    }*/

    if (SM.inst.currentStage == gameStage) {
        if (!this.jumpTween || !this.jumpTween.isActive()) {
            this.freq = 800;
            this.nullPhase += 22;
            this.x = this.startPlayerX + Math.sin((this.nullPhase) / this.freq) * 30;
        }


        var mx = window.mouseX;
        var my = window.mouseY;
        if (mx < this.firePointX) mx = this.firePointX;
        if (my > SCR_HEIGHT - 50) my = SCR_HEIGHT - 50;
        var bangle = Math.atan2(this.firePointY - my, this.firePointX - mx);

        this.fireAngle = Math.PI + bangle;
        var newAngle = this.fireAngle + Math.PI / 12;
       // if ((!this.handTween || !this.handTween.isActive())) {
        this.gunBone.rotation =  -180*newAngle / Math.PI;

        this.rshSlot.data.boneData.rotation =  270 - 180*newAngle / Math.PI;
        this.lshSlot.data.boneData.rotation =  270 - 180*newAngle / Math.PI;
        //this.dedLeftHand.rotation = newAngle + 0.13;
            //this.dedRightHand.rotation = newAngle;
      //  }

    }

    CLiveObj.prototype.process.call(this);
}




CPlayer.prototype.dealDamage = function(dmg)
{

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

    })
  //  this.tweenColor(this.gfx);
/*    if   (!TweenMax.isTweening(this.gfx.children[0])) {
       for (var i = 0; i < this.gfx.children.length; ++i) {
            if (this.dedWeaponContainer == this.gfx.children[i]) continue;
            new TweenMax(this.gfx.children[i], 0.1, {ease: Linear.ease, tint: 0xff0000, repeat: 1, yoyo: true});
        }
    }*/
    this.hp = this.hp - dmg;
}


CPlayer.prototype.fire = function()
{
    if (this.weapon.shot())
    {
        if (this.handTween)
        this.handTween.kill();

      //  var time = 0.5* this.weapon.delay / 1000;
      //  new TweenMax(w, time, {x: -5, rotation: -0.04, yoyo: true, repeat: 1});
    /*    this.handTween = new TweenMax(this.dedLeftHand, time, { rotation: this.dedLeftHand.rotation-0.04, yoyo: true, repeat: 1});
        new TweenMax(this.dedRightHand, time, { rotation: this.dedRightHand.rotation-0.04, yoyo: true, repeat: 1});
  */  }

}
