/**
 * Created by KURWINDALLAS on 17.11.2014.
 */
extend(CBullet, CObj, true);

function CBullet(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, null, in_body]);
    this.gfx = new PIXI.DisplayObjectContainer();

    this.visualWidth = 20;
    this.visualVel = 7;
    this.bhead = new PIXI.Sprite(PIXI.Texture.fromFrame("head.png"));
    this.bhead.anchor.x = 0.5;
    this.bhead.anchor.y = 0.5;
    this.bhead.blendMode = PIXI.blendModes.ADD;
    this.bhead.width = this.visualWidth;
    //this.bhead.x -= 1;
    this.bmiddle = new PIXI.Sprite(PIXI.Texture.fromFrame("center.png"));
    this.bmiddle.width = this.visualWidth;
    this.bmiddle.anchor.x = 0.5;
    this.bmiddle.anchor.y = 0.5;
    this.bmiddle.blendMode = PIXI.blendModes.ADD;
    this.bsheylf = new PIXI.Sprite(PIXI.Texture.fromFrame("shleyf.png"));
    this.bsheylf.width = this.visualWidth;
    this.bsheylf.anchor.x = 0.5;
    this.bsheylf.anchor.y = 0.5;
    this.bsheylf.blendMode = PIXI.blendModes.ADD;
    this.gfx.addChild(this.bhead);
    this.gfx.addChild(this.bmiddle);
    this.gfx.addChild(this.bsheylf);
    SM.inst.ol.addChild(this.gfx);
    this.dmg = 10;
    if (!CBullet.list) CBullet.list = [];
    CBullet.list.push(this);
}

CBullet.prototype.updateBulletSpeed = function()
{
    this.bhead.width = this.visualWidth;
    this.bmiddle.width = this.visualWidth;
    this.bsheylf.width = this.visualWidth;
    this.bmiddle.height = 5 + this.visualVel / 2 + 1;
    this.bhead.y = -this.bmiddle.height / 2 - this.bhead.height / 2 + 2 ;
    this.bsheylf.height = 5 + this.visualVel / 2;
    this.bsheylf.y = this.bmiddle.height / 2 + this.bsheylf.height / 2 ;

}

CBullet.prototype.collide = function (obj2)
{
    if (this.prevVictim != obj2) {
        obj2.dealDamage(this.dmg);

        var fx = pool.Pop("blood");
        if (fx)
        {
            var obj = new CObj(this.x, this.y, null);
            fx.loop = false;
            fx.gotoAndStop(0);
            fx.gotoAndPlay(0);
            obj.gfx = fx;
            obj.updateGraphics();
            SM.inst.fg.addChild(fx);

            fx.animationSpeed = 0.55;
            this.updateGraphics();
            obj.gfx.onComplete = function () {
              //  setTimeout( function() {
                if (obj.gfx) {
                   // obj.gfx.gotoAndStop(0);
                    if (obj.gfx)
                        pool.Push(obj.gfx);
                    obj.destroy();
                    //  obj.gfx.parent.removeChild(obj.gfx);
                  //  var inx = obj.gfx.parent.children.indexOf(obj.gfx);
                  //  obj.gfx.parent.children.splice(inx, 1);
                   // rp(obj.gfx);
                    //obj.gfx = null;
                }
            //    }, 15);
            };
        }

        this.life--;
        if (this.life <= 0)
            this.destroy();
        this.prevVictim = obj2;
    }
}


CBullet.prototype.destroy = function()
{
    this.prevVictim = null;
    var inx = CBullet.list.indexOf(this);
   if (inx >= 0) CBullet.list.splice(inx, 1);
   CObj.prototype.destroy.call(this);
}

CBullet.prototype.process = function() {

    this.visualVel += 29.5;
    this.visualWidth -= 0.7;
    this.updateBulletSpeed(this.visualVel);

    CObj.prototype.process.call(this);
}