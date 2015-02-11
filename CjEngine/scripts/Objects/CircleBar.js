/**
 * Created by KURWINDALLAS on 25.12.2014.
 */
/**
 * Created by KURWINDALLAS on 10.12.2014.
 */
extend(CircleBar, CObj, true);

function CircleBar(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
}

CircleBar.generateProperty('pos', {
    defaultValue: 1,
    get: function () {
        return this._pos;
    },
    set: function (value) {

        if (value < 0)
            value = 0;

        if (value > 1)
            value = 1;
        this._pos = value;

        this.mask.clear();
        var r = this.radius;
        var angle = Math.PI * 2 * value;
        var cx = Math.cos(angle - Math.PI / 2)*r;
        var cy = Math.sin(angle - Math.PI / 2)*r;

        var points = [0, -r, 0,0];

        if (angle < Math.PI / 2)
        {
            points.push(cx, cy);
        } else
        if (angle < Math.PI)
        {
            points.push(cx, cy);
            points.push(r, 0);
        } else
        if (angle < 3 * Math.PI / 2)
        {
            points.push(cx, cy);
            points.push(0, r);
            points.push(r, 0);
        } else
        {
            points.push(cx, cy);
            points.push(-r, 0);
            points.push(0, r);
            points.push(r, 0);
        }

        this.mask.beginFill(0xffffffff);
        this.mask.drawPolygon(points);
        this.mask.endFill();
    }
});


CircleBar.prototype.destroy = function()
{
    this.ico = null;
    this.progressbg = null;
    this.progressfore = null;
    CObj.prototype.destroy.call(this);
}


CircleBar.prototype.process= function()
{
    CObj.prototype.process.call(this);
}

CircleBar.prototype.init = function(cover, barup, bardown)
{
    this.gfx = new PIXI.DisplayObjectContainer();
    this.ico = crsp(cover);


    this.progressbg = crsp(bardown);
    this.progressfore = crsp(barup);
    this.mask = new PIXI.Graphics();

    this.gfx.addChild(this.ico);
    this.radius = this.gfx.width * 1.5;
    this.gfx.addChild(this.progressbg);
    this.gfx.addChild(this.progressfore);
    this.gfx.addChild(this.mask);
//    this.gfx.anchor.x = 0.5;
 //   this.gfx.anchor.y = 0.5;
    this.progressfore.mask = this.mask;
    this.pos = 0;
    this.updateGraphics();
}