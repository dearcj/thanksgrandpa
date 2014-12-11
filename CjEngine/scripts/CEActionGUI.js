/**
 * Created by KURWINDALLAS on 10.12.2014.
 */
extend(CEActionGUI, CObj, true);

function CEActionGUI(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
}

Object.defineProperty(CEActionGUI.prototype, 'pos', {
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
        var r = 58;
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

CEActionGUI.prototype.destroy = function()
{
    this.progressbg = null;
    this.progressfore = null;
    CObj.prototype.destroy.call(this);
}


CEActionGUI.prototype.init = function()
{
    this.gfx = new PIXI.Sprite(PIXI.Texture.fromFrame("action bg.png"));
    this.progressbg = new PIXI.Sprite(PIXI.Texture.fromFrame("progress bg.png"));
    this.progressbg.anchor.x = 0.5;
    this.progressbg.anchor.y = 0.5;
    this.progressfore = new PIXI.Sprite(PIXI.Texture.fromFrame("progress fore.png"));
    this.progressfore.anchor.x = 0.5;
    this.progressfore.anchor.y = 0.5;
    this.mask = new PIXI.Graphics();
    this.gfx.addChild(this.progressbg);
    this.gfx.addChild(this.progressfore);
    this.gfx.addChild(this.mask);
    this.gfx.anchor.x = 0.5;
    this.gfx.anchor.y = 0.5;
    this.progressfore.mask = this.mask;
    this.pos = 0.;
    new TweenMax(this, 5, {pos: 1, yoyo: true,repeat: -1});
    this.updateGraphics();
}