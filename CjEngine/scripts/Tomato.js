/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
extend(Tomato, CObj, true);

function Tomato(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
}

Tomato.prototype.process = function()
{
    CObj.prototype.process.call(this);

    //this.body.applyDamping(0.4);
   // this.body.angle *= 0.92;
}

Tomato.prototype.init = function()
{
    CObj.prototype.init.call(this);
    this.body.allowRotation = true;
}

Tomato.prototype.process = function()
{
    CObj.prototype.process.call(this);

    if (this.y > SCR_HEIGHT + 200)
    {
        this.mechanicalDestroy = false;
        this.destroy();

    }
    if (this.x > 0 && this.y > 0 && this.x < SCR_WIDTH && this.height < SCR_HEIGHT)
    {

    if (this.body.velocity[1] > 300 && !this.slowMo)
    {
    //    gameStage.stepSize = 0.001;
        new TweenMax(gameStage, 0.7, {worldSpeed: 0.12, yoyo: true, repeat: 1, ease: Quad.easeOut});

        this.slowMo = true;
    }
    }

}


Tomato.prototype.destroy = function()
{
    if (!this.mechanicalDestroy)
    {
        gameStage.loseGame();

    //  this.gfx

    var not = pool.Pop("expl");
    if (not) {
        not.x = this.x;
        not.y = this.y;
        not.gfx.animationSpeed = 0.85;
        not.gfx.gotoAndPlay(0);
        not.gfx.loop = false;

        not.gfx.scale.x = 1.55;
        not.gfx.scale.y = 1.55;
        not.updateGraphics();
        if (not.gfx.parent)
            not.gfx.parent.removeChild(not.gfx);

        SM.inst.ol.addChild(not.gfx);

        not.gfx.onComplete = function () {
            setTimeout( function() {
                not.gfx.parent.removeChild(not.gfx);
                pool.Push(not);
            }, 15, not);
        };
    }

    var g = this.gfx;
    var baseScaleX = g.scale.x;
    var baseScaleY = g.scale.y;
    new TweenMax(g.scale, 0.2, {y: 1.4*baseScaleY, x:0.6*baseScaleX});
    new TweenMax(g.scale, 0.15, {delay: 0.2, x: 1.4*baseScaleX, y: 0.6*baseScaleY});
    g.parent.removeChild(g);
    SM.inst.ol.addChild(g);
    new TweenMax(g, 0.07, {delay: 0.35 - 0.07,alpha: 0., onComplete: function() {g.parent.removeChild(g);} });
    new TweenMax(g, 0.35, { y: g.y - 35, rotation: g.rotation + 10.05,  ease: Linear.easeIn});

    this.gfx = null;
    }

    CObj.prototype.destroy.call(this);

}

Tomato.prototype.setElectricity = function(state){
    if (state && !this.preDestroy) {
        this.preDestroy = true;
        //this.destroy();
        var t = this;
        TweenMax.delayedCall(0.25, function () {t.destroy();});
    }
    CObj.prototype.setElectricity.call(this, state);
    //this.destroy();
 //   this.sElectricity = state;
}


