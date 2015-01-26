/**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(FloorObj, CObj, true);

function FloorObj(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    if (this.gfx) {
        this.gfx.parent.removeChild(this.gfx);
        SM.inst.ol.addChildAt(this.gfx, 0);
    }
}

FloorObj.prototype.process = function()
{
    var floorLine = this.y - this.gfx.height / 2;
        //var monLen = CObj.objects.length;
        for (var i = 0; i < CObj.objects.length; ++i) {
            var o = CObj.objects[i];
            if (CObj.checkType(o, CMonster)) {
                if (o.vy > 0 && o.y + o.radius / 2 > floorLine) {
                    o.destroy();
                }
            }
            if (CObj.checkType(o, CCoin) && o.y + o.radius / 2 > floorLine - 50) {
                if (o.vy > 0)
                o.vy = -o.vy*0.5;
            }
    }
}