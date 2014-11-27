/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
extend(Coin, CObj, true);

function Coin(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.amount = 100;
}

Coin.prototype.onContactBegin = function(b) {
    //  if (gameStage.dragObject && b.userData == gameStage.dragObject) return;
    if (b.userData != gameStage.dragObject && this.preDestroy == undefined)
    {
        this.preDestroy = true;
        this.onGet();
    }
}


Coin.prototype._destroy = function() {
    //  if (gameStage.dragObject && b.userData == gameStage.dragObject) return;
    CObj.prototype._destroy.call(this);
    //this.rotatingSprites.parent.removeChild(this.rotatingSprites);
}

Coin.generateTextParticle = function(cobj)
{
    var not = pool.Pop("textParticle");
    if (not) {
        not.x = cobj.x;
        not.y = cobj.y;
        not.gfx.alpha = 1;
        not.text = cobj.amount.toString();
        SM.inst.fontLayer.addChild(not.gfx);
        var totalTime = 0.85;

        new TweenMax(not.gfx, 0.3, {delay: totalTime - 0.3, alpha: 0, ease: Linear.easeIn});
        new TweenMax(not, totalTime, {y: not.y - 80, ease: Linear.easeIn, onComplete: function () {
            rp(not.gfx);
            pool.Push(not);
        }});
    }
}

Coin.prototype.onGet = function()
{
    PlayerData.inst.score += this.amount;
    gameStage.updateScore();

    var coinGfx = pool.Pop("coinCollect");
    if (!coinGfx)
    this.destroy(); else
    {
        rp(coinGfx);
        rp(this.gfx);
         SM.inst.ol.addChild(coinGfx);
        this.gfx = coinGfx;
        this.updateGraphics();
        var coin = this;
        coinGfx.animationSpeed = 0.6;
        coinGfx.loop = false;
        coinGfx.gotoAndPlay(0);
        this.gfx.onComplete = function () {
            setTimeout( function() {
                if (coin.gfx) pool.Push(coin.gfx);
                rp(coin.gfx);
                coin.gfx = null;
                coin.destroy();
            }, 15, coin);


        };

    }
    Coin.generateTextParticle(this);
    ZSound.Play("collectMoney");
}

Coin.prototype.process = function()
{
    CObj.prototype.process.call(this);
    this.rotatingSprites.rotation += 0.05*gameStage._worldSpeed;

    this.y = this.baseY + Math.sin(new Date() / 200. + ((this.baseY % 50) / 5))*6;
}

Coin.prototype.onContactEnd = function(b) {


}

Coin.prototype.init = function(state){
    CObj.prototype.init.call(this);
    this.sensor = true;
    this.body.mass = 0;
    this.gfx.width = 40;
    this.gfx.height = 40;
    this.baseY = this.y;
    this.rotatingSprites = new PIXI.Sprite(PIXI.Texture.fromFrame("monetabg.png"));
    this.rotatingSprites.scale.x = 0.95;
    this.rotatingSprites.scale.y = 0.95;
    this.rotatingSprites.anchor.x = 0.5;
    this.rotatingSprites.anchor.y = 0.5;
    this.gfx.addChild(this.rotatingSprites);
  //  this.gfx.gotoAndPlay(0);
    this.gfx.gotoAndPlay(Math.round(this.x / 50) % 8);
   // TweenMax.to();

}
