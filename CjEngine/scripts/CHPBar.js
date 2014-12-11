/**
 * Created by KURWINDALLAS on 17.11.2014.
 */
extend(CHPBar, CObj, true);

function CHPBar(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.PublicFields += 'upperImage,space,tile, ';
    prop = 1;
}


CHPBar.prototype.destroy = function()
{
    if (this.doRemove) return;

    this.gfx.removeChild(this.upperImageClip);
    this.upperImageClip = null;

    CObj.prototype.destroy.call(this);
}



Object.defineProperty(CHPBar.prototype, 'prop', {
    get: function () {
        return this._prop;
    },
    set: function (value) {
        if (this.doRemove) return;
        this._prop = value;
        var w = (1/this.gfx.scale.x)*this._prop*(this.gfx.width - 2*this.space);
        if (this.tile)
        w = Math.round(w / this.upperImageClip.texture.width + 1) * this.upperImageClip.texture.width;
        this.upperImageClip.width = w;
        this.upperImageClip.x = this.space;
        this.upperImageClip.y = 0;
    }
    }
);

CHPBar.prototype.tweenProp = function(newProp)
{
    // TweenMax.killChildTweensOf(this, true);
    new TweenMax(this, 0.8, {prop: newProp, ease: Cubic.easeOut});
}

CHPBar.prototype.init = function()
{
    if (!this.gfx) this.gfx = new PIXI.DisplayObjectContainer(); else
    {
       this.gfx.anchor.x = 0;
          this.gfx.anchor.y = 0;
    }
    this.x -= this.gfx.width*0.5;
    if (!this.space) this.space = 0;
    if (this.upperImage)
    {
        var tex = PIXI.Texture.fromFrame(this.upperImage + ".png");
        if (this.tile) {
            this.upperImageClip = new PIXI.TilingSprite(tex, tex.width, tex.height);
        } else
            this.upperImageClip = new PIXI.Sprite(tex);

        this.upperImageClip.anchor.x = 0;
        this.upperImageClip.anchor.y = 0.;
        this.upperImageClip.height -= this.space;
        this.gfx.addChild(this.upperImageClip);
    }
    this.y -= this.gfx.height / 2;
    this.gfx.pivot.y -= tex.height / 2;
    this.prop = 1;
  //  new TweenMax(this, 10.8, {prop: 0., repeat:-1, ease: Linear.easeNone});
    CObj.prototype.init.call(this);
}