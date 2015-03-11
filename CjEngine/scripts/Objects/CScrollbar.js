/**
 * Created by KURWINDALLAS on 05.12.2014.
 */

extend(CScrollbar, CObj, true);

//pos = 0...ph
Object.defineProperty(CScrollbar.prototype, 'pos', {
    get: function () {
        return this._pos;
    },
    set: function (value) {

        if (value < 0)//this.toucher.height / 2)
            value = 0;//this.toucher.height / 2;

        if (value > this.ph - this.toucher.height / 2)
            value = this.ph - this.toucher.height / 2;
        this._pos = value;

        var touchervalue = value;

        this.toucher.y =this.toucher.height / 2 + (this.ph0 - this.toucher.height)*( touchervalue/(this.ph)) - this.ph0/2;// - this.ph0*(value/this.ph);
       /* if (this.toucher.y < this.toucher.height / 2 - this.ph0/2)
            this.toucher.y = this.toucher.height / 2 - this.ph0/2;
*/
        this.container.y = -this.ph0/2 - (value)*this.posScale;
    }
});



CScrollbar.prototype.updateHeight = function()
{
    this.ph = this.container.height;
}


CScrollbar.prototype.clear = function()
{
    for (var i = 0; i < this.container.children.length; ++i)
    {
        if (this.container.children[i].destroy)
        {
            this.container.children[i].destroy();

        } else
        {
            this.container.removeChild(this.container.children[i]);
            i--;
        }
    }
}

CScrollbar.prototype.destroy = function()
{
    this.toucher.mousedown = null;
    this.toucher.mouseup = null;
    this.toucher.mousemove = null;
    this.toucher.mouseupoutside = null;
    this.toucher.scrollbar = null;
    this.toucher = null;
    this.bar.mousedown = null;
    this.bar.scrollbar = null;
    this.bar = null;
    this.container = null;
    this.sbMask = null;

    CObj.prototype.destroy.call(this);
}


CScrollbar.prototype.onWheel = function(e)
{
    e.stopPropagation();
    e.stopImmediatePropagation();
    this.pos += e.deltaY / 3;
}

function CScrollbar(in_x,in_y,textname,ww, hh, clipbg, clipscrollline, clipscrolltoucher, dw) {

    var bgpanel = "shop back.png";
    if (clipbg) bgpanel= clipbg;

    CObj.apply(this, [in_x, in_y, null, null]);

    this.gfx = new PIXI.DisplayObjectContainer();
    this.gui = true;
    this.pw = ww;
    this.ph = hh;
    this.ph0 = hh;
    if (!dw) dw = 0;
//    this.gfx.width = this.pw;
 //   this.gfx.height = this.ph;

    //this.gfx.parent.removeChild(this.gfx);
    SM.inst.fg.addChildAt(this.gfx, 0);

    var sbTexName = "scroll line element.png";
    if (clipscrollline) sbTexName= clipscrollline;
    var sbToucher = "scroll.png";
    if (clipscrolltoucher) sbToucher= clipscrolltoucher;
    var scrWidth = 8;

    var obj = this;
    this.gfx.interactive = true;
    this.gfx.mouseover = function()
    {
        obj.mover = true;
    }
    this.gfx.mouseout = function()
    {
        obj.mover = false;
    }

    this.bg = new PIXI.Sprite(PIXI.Texture.fromFrame(bgpanel));
    this.bg.width = this.pw + dw;
    this.bg.height = this.ph + dw;
    this.bg.anchor.x = 0.5;
    this.bg.anchor.y = 0.5;
    this.gfx.addChild(this.bg);
    this.updateGraphics();
    this.toucher = new PIXI.Sprite(PIXI.Texture.fromFrame(sbToucher));
    this.toucher.width = scrWidth;
    this.toucher.anchor.x = 0.5;
    this.toucher.anchor.y = 0.5;
    this.toucher.x = this.pw / 2 - scrWidth / 2;

    this.toucher.interactive = true;
    this.toucher.scrollbar = this;


    this.toucher.mousedown = function(a)
    {
        this.pressed = true;
    }

    this.toucher.mouseup = function(a)
    {
        this.pressed = false;
    }
    this.toucher.mouseupoutside = this.toucher.mouseup;

    this.toucher.mousemove = function(a)
    {
        if (this.pressed && this.scrollbar)
        {
            this.scrollbar.pos = a.global.y / SCR_SCALE - this.scrollbar.y + this.scrollbar.ph / 2;
        }
    }

    this.bar = new PIXI.Sprite(PIXI.Texture.fromFrame(sbTexName));
    this.bar.width = scrWidth;
    this.bar.height = this.ph;
    this.bar.anchor.x = 0.5;
    this.bar.anchor.y = 0.5;
    this.bar.x = this.pw / 2 - scrWidth / 2;
    this.bar.interactive = true;
    this.bar.scrollbar = this;
    this.bar.mousedown = function(a)
    {
        this.scrollbar.pos = a.global.y / SCR_SCALE - this.scrollbar.y + this.scrollbar.ph / 2;
        this.scrollbar.toucher.pressed = true;
    }

    this.container = new PIXI.DisplayObjectContainer();
    this.container.x = -this.pw/2;
    this.container.y = -this.ph/2;
   this.sbMask =  new PIXI.Graphics();
    this.sbMask.beginFill();
    this.sbMask.drawRect(-this.pw/2, -this.ph/2, this.pw, this.ph);
    this.sbMask.endFill();
    this.container.mask = this.sbMask;
    this.gfx.addChild(this.sbMask);
    this.gfx.addChild(this.container);
    this.gfx.addChild(this.bar);
    this.gfx.addChild(this.toucher);
    this.pos =0;
    this.posScale = 1;
    this.x = in_x;
    this.y = in_y;
};