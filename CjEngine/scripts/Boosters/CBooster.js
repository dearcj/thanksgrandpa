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
}

CBooster.prototype.destroy = function()
{
    CObj.prototype.destroy.call(this);
}