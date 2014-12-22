/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
extend(CTextField, CObj, true);

function CTextField(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'text,fontFamily,fontSize,align,tint, ';
}

CTextField.prototype._destroy = function(){
    CObj.prototype._destroy.call(this);
}

Object.defineProperty(CTextField.prototype, 'text', {
    get: function () {
        return this._text;
    },
    set: function (value) {

        this._text = value.toUpperCase();
        if (this.gfx) {
            this.gfx.text = value;
            this.gfx.updateText();
            var b = this.gfx.getLocalBounds();

            if (this.align == "center")
            {
                this.offsetX = (-b.width / 2)*window.addScale;
            } else
            if (this.align == "right")
            {
                this.offsetX = (-b.width)*window.addScale;
            } else {
                this.offsetX = 0;
            }
            this.offsetY = -b.height;
            this.updateGraphics(true);
       }
    }
});

CTextField.hashCode = function (str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

CTextField.convertSpaces = function(a)
{
    var c = a.match(/==/g);
    if (c)
        breaks = c.length;

    return a.replace(/==/g, '\n');
}

CTextField.createTextField = function(obj) {
    var inx = 0;
    for (var s in PIXI.BitmapText.fonts) {
        if (!obj.fontFamily || inx == obj.fontFamily) {
            font = PIXI.BitmapText.fonts[s];
        //    font.lineHeight *= 0.98;
            break;
        }
        inx++;
    }

        if (!obj.fontSize || obj.fontSize == undefined)
        obj.fontSize = 30/window.addScale;
    else
     obj.fontSize /= window.addScale;
    ///if (obj.fontSize < 60) obj.fontSize = 60;
    var fontParam = obj.fontSize + "px " + font.font;
    if (!obj.align || obj.align == "") obj.align = "left";

    var breaks = 0;
    if (obj.text) {
        obj.text = CTextField.convertSpaces(obj.text);
    }

    var pt = new PIXI.BitmapText(obj.text, {font: fontParam, align: "center"});
    pt.align = "center";
    if (obj.tint != "0xffffff" && obj.tint != undefined)
    pt.tint = parseInt(obj.tint);
    pt.breaks = breaks;
    pt.fs = obj.fontSize;
    return pt;
}

CTextField.prototype.init = function(){
    CObj.prototype.init.call(this);

    this.gfx = CTextField.createTextField(this);
    this.gfx.scale.x *= window.addScale;
    this.gfx.scale.y *= window.addScale;
    this.text = this.text;
   // this.text = this.text;
  //  this.getText();
/*    if (this.text)

        this.text = this.text;*/
    this.updateGraphics();

    SM.inst.fontLayer.addChild(this.gfx);
}