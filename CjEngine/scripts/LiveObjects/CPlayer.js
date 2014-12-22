/**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(CPlayer, CLiveObj, true);

function CPlayer(in_x,in_y,textname,in_body){
    CLiveObj.apply(this,[in_x,in_y,null,in_body]);

    this.gfx = this.createDedGraphics();
    this.fireAngle = 0;
    this.weapon = w_pistol;
    this.bar = CObj.getById("hpbar");
    this.ammobar = CObj.getById("ammobar");
    this.colGroup = CG_PLAYER;
    this.nullPhase = 0;
    this.maxHp = 5;
    this.hp = 5;
    this.startPlayerX = this.x;
    this.radius = this.gfx.width / 2;
}

CPlayer.prototype.createDedGraphics = function()
{
    var g = new PIXI.DisplayObjectContainer();

    this.dedLeftHand = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight 2 arm.png"));
    this.dedBody = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight body.png"));
    this.dedHead = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight head.png"));
    this.dedWeaponContainer = new PIXI.DisplayObjectContainer();
    this.dedWeapon = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight weapon.png"));
    this.dedRightHand = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight 1 arm.png"));
    this.dedBoard = new PIXI.Sprite(PIXI.Texture.fromFrame("ded fight board.png"));

    this.bulletStart = this.dedWeapon.width / 2;

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

}

CPlayer.prototype.kill = function()
{
    this.destroy();
    gameStage.doLevelComplete();
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

    if (SM.inst.currentStage == gameStage) {
        if (!this.jumpTween || !this.jumpTween.isActive()) {
            this.freq = 800;
            this.nullPhase += 22;
            this.x = this.startPlayerX + Math.sin((this.nullPhase) / this.freq) * 30;
        }

        this.fireAngle = Math.PI + Math.atan2(this.gfx.y - window.mouseY, this.gfx.x - window.mouseX);
        var newAngle = this.fireAngle + Math.PI / 12;
       // if ((!this.handTween || !this.handTween.isActive())) {
            this.dedLeftHand.rotation = newAngle + 0.13;
            this.dedRightHand.rotation = newAngle;
      //  }

        this.dedWeaponContainer.rotation = newAngle;
    }

    CLiveObj.prototype.process.call(this);
}


CPlayer.prototype.dealDamage = function(dmg)
{
    for (var i = 0; i < this.gfx.children.length; ++i) {
        if (this.dedWeaponContainer == this.gfx.children[i]) continue;
        new TweenMax(this.gfx.children[i], 0.2, {tint: 0xff0000, repeat: 1, yoyo: true});
    }
    this.hp = this.hp - dmg;
}


CPlayer.prototype.fire = function()
{
    if (this.weapon.shot())
    {
        if (this.handTween)
        this.handTween.kill();
        var w =
        this.dedWeaponContainer.getChildAt(0);
        var time = 0.5* this.weapon.delay / 1000;
        new TweenMax(w, time, {x: -5, rotation: -0.04, yoyo: true, repeat: 1});
        this.handTween = new TweenMax(this.dedLeftHand, time, { rotation: this.dedLeftHand.rotation-0.04, yoyo: true, repeat: 1});
        new TweenMax(this.dedRightHand, time, { rotation: this.dedRightHand.rotation-0.04, yoyo: true, repeat: 1});

    }

}
