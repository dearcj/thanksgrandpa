/**
 * Created by KURWINDALLAS on 23.11.2014.
 */
extend(CCoin, CObj, true);

function CCoin(in_x,in_y,amount) {
    CObj.apply(this, [in_x, in_y, null, null]);
    this.gravityEnabled = true;
    this.colGroup = 1;
    this.colMask = CG_PLAYER;
    this.gravPower = 0.7;
    this.radius = 15;
    this.gfx = CObj.createMovieClip("coin");
    this.gfx.scale.x = 0.7;
    this.gfx.scale.y = 0.7;
    this.gfx.animationSpeed = 0.25;
    this.gfx.play();
    SM.inst.ol.addChild(this.gfx);
    this.updateGraphics();
    this.amount = amount;

    this.allowTrackSpeed = true;

    if (!CCoin.coins) CCoin.coins = [];
    CCoin.coins.push(this);
}
CCoin.prototype.process = function ()
{
    CObj.prototype.process.call(this);

    if (this.gravityEnabled)
    this.vx = -7;
}

CCoin.spawnCoin = function(x, y, a)
{
    var c = new CCoin(x, y, a);
    c.vx = 20 + Math.random()*10;
    c.vy = -20*(Math.random());
}

CCoin.prototype.collide = function(obj2)
{
    if (this.isCollected) return;

    this.isCollected = true;
    PlayerData.inst.score += this.amount;
    gameStage.updateScore();

    this.gravityEnabled = false;
    this.vx = 0;
    this.vy = 0;
    this.allowTrackSpeed = false;
    var coinGfx = pool.Pop("coinCollect");
    if (!coinGfx)
        this.destroy(); else
    {
        rp(coinGfx);
        rp(this.gfx);

        coinGfx.loop = false;
        coinGfx.gotoAndStop(0);
        coinGfx.gotoAndPlay(0);
        this.gfx = coinGfx;
        this.updateGraphics();

        SM.inst.fg.addChild(coinGfx);
        var coin = this;
        coinGfx.animationSpeed = 0.5;
        this.updateGraphics();
        this.gfx.onComplete = function () {
            setTimeout( function() {
                if (coin.gfx) pool.Push(coin.gfx);
                rp(coin.gfx);
                coin.gfx = null;
                coin.destroy();
            }, 0, coin);
        };

    }
  //  Coin.generateTextParticle(this);
  //  ZSound.Play("collectMoney")
//



    //new TweenMax(this.gfx, 0.3, {alpha: 0, onComplete: this.destroy, scaleX: 10, scaleY: 10});
    //new TweenMax(this.gfx.scale, 0.3, {x: this.gfx.scale.x*1.3, y: this.gfx.scale.y*1.3});
    //this.destroy();
}
