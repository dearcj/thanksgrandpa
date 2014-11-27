/**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(CPlayer, CLiveObj, true);

function CPlayer(in_x,in_y,textname,in_body){
    CLiveObj.apply(this,[in_x,in_y,textname,in_body]);
    this.fireAngle = 0;
    this.weapon = w_pistol;
    this.bar = CObj.getById("hpbar");
    this.ammobar = CObj.getById("ammobar");
    this.colGroup = CG_PLAYER;
    this.nullPhase = 0;
    this.startPlayerX = this.x;
    this.radius = this.gfx.width / 2;
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

//    new TweenMax(body.position, 0.55, {y: 140., yoyo: true, repeat: 1, ease: Cubic.easeOut});

}

CPlayer.prototype.process = function()
{
    if (!this.jumpTween || !this.jumpTween.isActive())
    {
        this.freq = 800;
        this.nullPhase += 22;
        this.x = this.startPlayerX + Math.sin((this.nullPhase) / this.freq) * 30;

    }
    CLiveObj.prototype.process.call(this);
}

CPlayer.prototype.fire = function()
{
    this.weapon.shot();

}
