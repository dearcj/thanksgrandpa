/**
 * Created by KURWINDALLAS on 29.07.2014.
 */
/**
 * Created by KURWINDALLAS on 13.07.2014.
 */
extend(Notification, CObj, true);

function Notification(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'text,fontFamily,fontSize,align,destroyAfter, ';
}


Notification.prototype.destroy = function()
{
    if (this.doRemove) return;

    CObj.prototype.destroy.call(this);
    this.textField.parent.removeChild(this.textField);
    this.textField = null;
    this.click = null;
}

Object.defineProperty(Notification.prototype, 'text', {
    get: function () {
        return this._text;
    },
    set: function (value) {
        this._text = value;
        if (this.gfx && this.textField) {
            var tf = this.textField;
            tf.setText(value);
            tf.updateText();
            var b = tf.getLocalBounds();
            tf.x = -b.width / 2;
            tf.y = -b.height;
            this.updateGraphics();
        }
    }
});

Notification.prototype.updateGraphics=function()
{
    if (this.doRemove) return;
    CObj.prototype.updateGraphics.call(this);
    if (this.gfx) {

       // var b = this.gfx.getLocalBounds();
     //   this.textField.x = this.gfx.x - this.textField.width / 2;// - this.gfx.width * 0.25;
      //  this.textField.y = this.gfx.y - this.textField.height + this.textField.fs*this.textField.breaks;// - this.gfx.height * 0.25;

        if (!window.iphone3) {
        //    this.textField.scale.x = this.gfx.scale.x;
        //    this.textField.scale.y = this.gfx.scale.y;
        }
    }
}


Notification.removeNot = function(obj) {
    if (obj.doRemove) return;
    if (obj.preRemove) return;
    obj.preRemove = true;
    new TweenMax(obj.textField, 0.6, {alpha: 0});
    new TweenMax(obj.gfx, 0.6, {alpha: 0, onComplete: function (){obj.destroy();}});
}

Notification.prototype.init = function(){
    CObj.prototype.init.call(this);
    this.gfx.interactive = true;
    this.align = "left";
    this.fontSize = 20;//parseInt(this.fontSize);
    this.textField = CTextField.createTextField(this);
    this.gfx.addChild(this.textField);
    this.getText();
    this.text = this.text;

    var f = this.gfx;
    this.baseScaleX = f.scale.x;
    this.baseScaleY = f.scale.y;
    var bsX = this.baseScaleX;
    var bsY = this.baseScaleY;
    this.updateGraphics();
    var dis = this;
    this.gfx.click = function (){
        Notification.removeNot(dis);
    };
    this.gfx.tap = this.gfx.click;
    TweenMax.delayedCall(this.destroyAfter / 1000., Notification.removeNot, [dis]);
    this.rotation = -0.05;
    new TweenMax(this, 0.7, {rotation: 0.05, ease: Linear.easeNone, yoyo: true, repeat: -1});
    new TweenMax(this.gfx.scale, 0.7, {x: this.gfx.scale.x + 0.06, y: this.gfx.scale.y + 0.06, yoyo: true, repeat: -1});

}