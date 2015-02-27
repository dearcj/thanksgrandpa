/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CBooster, CObj, true);

function CBooster(x,y,gfx) {
    CObj.apply(this, [x,y, gfx, null]);

    if (!CBooster.list)
    CBooster.list = [];
    CBooster.list.push(this);
    this.activate = null;
  //  this.removeBoosterItem();
}

CBooster.prototype.destroy = function()
{
    CObj.prototype.destroy.call(this);
}

CBooster.prototype.onDeactivate = function() {
    rp(this.tf);
    this.tf = null;
    this.gfx.alpha = 0.5;
}
CBooster.prototype.removeBoosterItem = function() {

    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i) {
        if (PlayerData.inst.items_enabled[i].id == this.ieid) break;
    }

    if (i < PlayerData.inst.items_enabled.length)
        PlayerData.inst.items_enabled.splice(this.ieid, 1);

    azureclient.invokeApi("removeitem", {
        body: {iditemplayer: this.ieid},
        method: "post"
    });
}

CBooster.prototype.onActivate = function() {
    this.activate = false;

    this.startTime = window.time;
    this.lastTick = 0;
    this.tf = CTextField.createTextField({tint: "0x333333", text: "AAASA", fontSize: 48, align: "center"});
    this.tf.x = this.tf.width / 2;
    this.tf.y = 12;
    this.gfx.addChild(this.tf);



}

CBooster.prototype.process = function()
{
    if (this.tf) {
        if (window.time - this.lastTick > 1000) {
            this.lastTick = window.time;
            var secs = Math.round(this.duration - (window.time - this.startTime) / 1000);
            this.tf.text = secs.toString();
            this.tf.updateText();
        }
        this.tf.x = -this.tf.width / 2;
    }
}