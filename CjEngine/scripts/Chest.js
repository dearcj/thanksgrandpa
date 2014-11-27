/**
 * Created by KURWINDALLAS on 12.07.2014.
 */
extend(Chest, CObj, true);

function Chest(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.amount = 1000;
}

Chest.prototype.setElectricity = function(state){
    CObj.prototype.setElectricity.call(this, state);

    if (state && !this.preDestroy) {
        this.preDestroy = true;
        //this.destroy();
        PlayerData.inst.score += this.amount;
        gameStage.updateScore();

        Coin.generateTextParticle(this);

        ZSound.Play("unlock");
        var t = this;
        if (CObj.checkType(this.gfx, PIXI.MovieClip)) this.gfx.gotoAndStop(1);
        new TweenMax(this.gfx, 0.8, {alpha: 0, ease: Linear.easeNone, onComplete: function() {t.destroy();}});
        //TweenMax.delayedCall(0.25, function () {t.destroy();});
    }
    //this.destroy();
    this.sElectricity = state;
}
