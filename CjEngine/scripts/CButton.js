/**
 * Created by KURWINDALLAS on 13.07.2014.
 */
extend(CButton, CObj, true);

function CButton(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'text,fontFamily,fontSize,align';
}


CButton.prototype.destroy = function()
{
    CObj.prototype.destroy.call(this);
    this.textField.parent.removeChild(this.textField);
    this.textField = null;
    this.click = null;
}




Object.defineProperty(CButton.prototype, 'click', {
    get: function () {
        return this._click;
    },
    set: function (value) {
        this._click = value;
        if (!value)
        {
            this.gfx.tap = null;
            this.gfx.click = null;
        } else
        if (this.gfx)
        {

            var btnclick = function()
            {
                if (stage.getChildAt(stage.children.length - 1).trans)
                {
                    return;
                }

                ZSound.Play("CLICK");

                if (value)
                    value();
            }
            if (this.postCreatedContainer) {
                this.textField.tap = btnclick;
                this.textField.click = btnclick;
            }
            this.gfx.tap = btnclick;
            this.gfx.click = btnclick;
        }
    }
});

Object.defineProperty(CButton.prototype, 'text', {
    get: function () {
        return this._text;
    },
    set: function (value) {
        this._text = value;
        if (this.gfx && this.textField) {
            var tf = this.textField;
            tf.text = value;
            tf.updateText();
            var b = tf.getLocalBounds();
            tf.x = -b.width / 2;
            tf.y = -b.height;
            this.updateGraphics(true);

        }
    }
});

CButton.prototype.updateGraphics=function()
{
    if (this.doRemove) return;
    CObj.prototype.updateGraphics.call(this);
    if (this.gfx && this.textField) {
       // if (!window.iphone3) {
       //     this.textField.scale.x = this.gfx.scale.x;
        //    this.textField.scale.y = this.gfx.scale.y;
     //   }
/*
        {

            this.textField.x = -this.gfx.width / 2 + this.textField.width / 2;// - this.gfx.width * 0.25;
            this.textField.y = -this.gfx.height / 2 + this.textField.height*0.7;// + this.textField.height / 4;// - this.gfx.height * 0.25;

        } else
*/
        if (!this.addToSameLayer)
      {
            this.textField.x = this.gfx.x - this.textField.width / 2;// - this.gfx.width * 0.25;
            this.textField.y = this.gfx.y - this.textField.height * 0.7;// + this.textField.height / 4;// - this.gfx.height * 0.25;
        }
    }
}

CButton.prototype.init = function(){
    CObj.prototype.init.call(this);
    if (!this.gfx)
    {
        this.gfx = new PIXI.DisplayObjectContainer();
        this.postCreatedContainer = true;
        this.updateGraphics();
    }
    this.gfx.interactive = true;
    this.align = "center";
    this.fontSize = parseInt(this.fontSize);
    this.textField = CTextField.createTextField(this);
    if  (this.postCreatedContainer)
    this.textField.interactive = true;
    //this.getText();
    if (this.text)
    this.text = this.text.toUpperCase();
    //this.text = this.text;

    if (this.isClip)
    this.gfx.gotoAndStop(0);
    var tf = this.textField;
    var f = this.gfx;
    this.baseScaleX = f.scale.x;
    this.baseScaleY = f.scale.y;
    var bsX = this.baseScaleX;
    var bsY = this.baseScaleY;
    this.updateGraphics();
       this.gfx.mouseover = function (evt) {
        TweenMax.killTweensOf(f.scale);
        new TweenMax(f.scale, 0.6, {y: bsY+0.05, ease: Elastic.easeOut} );
        new TweenMax(f.scale, 0.4, {x: bsX+0.05, ease: Elastic.easeOut} );
        new TweenMax(tf.scale, 0.6, {y: 1+0.1, ease: Elastic.easeOut} );
        new TweenMax(tf.scale, 0.4, {x: 1+0.1, ease: Elastic.easeOut} );

    }
    this.gfx.mouseout = function (evt) {
        if (f.currentFrame)
        f.gotoAndStop(1);
        new TweenMax(f.scale, 0.3, {x: bsX, y: bsY, ease: Elastic.easeOut} );
        new TweenMax(tf.scale, 0.3, {x: 1, y: 1, ease: Elastic.easeOut} );
    }

    if (!this.addToSameLayer)
    SM.inst.fontLayer.addChild(this.textField); else
    this.gfx.addChild(this.textField);
    //tf.tint = 0x6666FF;
}