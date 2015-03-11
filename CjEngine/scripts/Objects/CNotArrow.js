/**
 * Created by KURWINDALLAS on 29.07.2014.
 */
extend(CNotArrow, CObj, true);

function CNotArrow(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'objectsToPoint, ';
}


CNotArrow.prototype.process = function()
{
    var dx = this.x - this.basePositionX;
    var dy = this.y - this.basePositionY;
    var d = Math.sqrt(dx*dx + dy*dy);
    if (d != 0) {
        dx /= d;
        dy /= d;
        this.rotation = Math.atan2(dx, dy);
    }
   this.x = this.left;
   this.y = this.top;

    CObj.prototype.process.call(this);
}

CNotArrow.prototype.init = function()
{
    this.gfx = new PIXI.DisplayObjectContainer();
    this.updateGraphics();
    var v = new PIXI.Sprite(PIXI.Texture.fromFrame("arrow1.png"));
    v.anchor.x = 0.5;
    v.anchor.y = 0;
    new TweenMax(v, 2, {y: v.y - 15, yoyo: true, repeat: -1});
    this.gfx.addChild(v);
    SM.inst.fg.addChild(this.gfx);

    this.basePositionX = this.x;
    this.basePositionY = this.y;

    var objectsToPoint = this.objectsToPoint.split(";");
    var objList = [];
    var obj;
    for (var i = 0; i < objectsToPoint.length; ++i)
    {
        obj = CObj.getById(objectsToPoint[i]);
        if (obj) objList.push({left: obj.x, top: obj.y});

    }
    this.left = objList[0].left;
    this.top = objList[0].top;
    this.x = objList[0].left;
    this.y = objList[0].top;
    new TweenMax(this, 3, {  bezier:
   {
       curviness:1,
       values:objList
   },  ease: Linear.easeNone, repeat: -1, yoyo: true});
};