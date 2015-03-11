/**
 * Created by KURWINDALLAS on 14.07.2014.
 */
extend(CBomb, CObj, true);

function CBomb(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.PublicFields += "power,";
    this.radiusMax = 300;
}

CBomb.prototype.explode = function()
{
    if (this.doRemove) return;
    var objlen = CObj.objects.length;
    var pp1 = new vec2.create();
    var pp2 = new vec2.create();
    ZSound.Play("rocketboom");

    var gfx = pool.Pop("expl");
    if (gfx) {
        var not = new CObj(this.x, this.y);
        not.x = this.x;
        not.y = this.y;
        not.gfx.animationSpeed = 0.85;
        not.gfx.gotoAndPlay(0);
        not.gfx.loop = false;

        not.gfx.scale.x = 1.55*window.addScale;
        not.gfx.scale.y = 1.55*window.addScale;
        not.updateGraphics();
        if (not.gfx.parent)
            not.gfx.parent.removeChild(not.gfx);

        SM.inst.ol.addChild(not.gfx);

        not.gfx.onComplete = function () {
           // setTimeout( function() {
                if (not.gfx) {
                    not.destroy();
                    pool.Push(not.gfx);
                }
            //}, 15, not);
        };
    }

    for (var i = 0; i < objlen; ++i)
    {
       if (CObj.objects[i].sensor || CObj.objects[i] == this || (!CObj.objects[i].body) || (CObj.objects[i].body.type != p2.Body.DYNAMIC)) continue;
       pp1[0] = this.x;
       pp1[1] = this.y;

       pp2[0] = CObj.objects[i].x;
       pp2[1] = CObj.objects[i].y;
       vec2.sub(pp1, pp1, pp2);

        var sl = vec2.sqrLen(pp1);
        var sr = this.radiusMax*this.radiusMax;
       if (sl > sr) continue;
        var len = Math.sqrt(sl);
        pp1[0] /= len;
        pp1[1] /= len;

        var powDist = 1 - (len + 2) / this.radiusMax;
        if (powDist < 0) powDist = 0;
        powDist = Math.pow(powDist, 1.4);
        vec2.scale(pp1, pp1, this.power*4500*(powDist));
         CObj.objects[i].body.force[0] -= pp1[0];
        CObj.objects[i].body.force[1] -= pp1[1];
    }

    this.destroy();
}

CBomb.prototype.setElectricity = function(state)
{
    CObj.prototype.setElectricity.call(this)
    if (state)this.explode();
};