/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CSupermanBooster, CBooster, true);

function CSupermanBooster(x,y,gfx) {
    CBooster.apply(this, [x,y,gfx]);
    this.duration = 15;
    this.key = "S";
    this.activate = true;
}

CSupermanBooster.prototype.onActivate = function()
{
    if (!gameStage.player) return;
    if (gameStage.player.jumping) return;
    CBooster.prototype.onActivate.call(this);

    var b = this;
    new TweenMax(gameStage.player, 0.84, {y: 200, ease: Linear.easeOut, onComplete: function()
    {
        gameStage.player.vy = -2;
        var ticks = 24;
        new TweenMax(gameStage.player, b.duration/ticks, {vy: 2, yoyo:true, repeat: ticks, ease: Sine.easeInOut});

    }});
    gameStage.player.jumping = true;
    gameStage.player.gravityEnabled = false;
    gameStage.player.jumpBoost = false;

    TweenMax.delayedCall(this.duration, function(){
        gameStage.player.jumping = false;
        gameStage.player.gravityEnabled = true;
        rp(b.fire1);
        rp(b.fire2);
        rp(b.fire3);
        b.fire1 = null;
        b.fire2 = null;
        b.fire3 = null;
        b.onDeactivate();
    });

    this.fire1 = CObj.createMovieClip("firesmall");
    this.fire1.x = -314;
    this.fire1.y = -100;
    this.fire1.scale.x = 3;
    this.fire1.scale.y = 3;
    this.fire1.loop = true;
    this.fire1.gotoAndPlay(0);
    gameStage.player.gfx.addChildAt(this.fire1, 0);

    this.fire2 = CObj.createMovieClip("firesmall");
    this.fire2.x = -140;
    this.fire2.y = 20;
    this.fire2.scale.x = 3;
    this.fire2.scale.y = 3;
    this.fire2.loop = true;
    this.fire2.gotoAndPlay(0);
    gameStage.player.gfx.addChildAt(this.fire2, 0);
    this.fire3 = CObj.createMovieClip("firesmall");
    this.fire3.x = 85;
    this.fire3.y = 20;
    this.fire3.scale.x = 3;
    this.fire3.scale.y = 3;
    this.fire3.loop = true;
    this.fire3.gotoAndPlay(0);
    gameStage.player.gfx.addChildAt(this.fire3,0);
    gameStage.player.state.setAnimationByName(0, "idle", true);


}

