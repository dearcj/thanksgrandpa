/**
 * Created by KURWINDALLAS on 09.03.2015.
 */
extend(CPlane, CObj, true);

function CPlane(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.shleif1 = crsp("plane_trace1");
    this.shleif2 = crsp("plane_trace2");
    this.shleif1.rotation = Math.PI;
    this.shleif2.rotation = Math.PI;
    this.shleif1.x = -this.shleif1.width / 2;
    this.shleif2.x = -this.shleif2.width / 2;
    this.gfx.addChild(this.shleif1);
    this.gfx.addChild(this.shleif2);
    this.alpha = 1;
    new TweenMax(this, 4, {alpha : 0, yoyo:true, repeat: -1, ease: Sine.easeInOut});
}

CPlane.generateProperty('alpha', {
    defaultValue: 1,
    get: function () {
        return this._alpha;
    },
    set: function (value) {
        this._alpha = value;
        this.shleif1.alpha = value;
        this.shleif2.alpha = 1 - value;
    }
});


