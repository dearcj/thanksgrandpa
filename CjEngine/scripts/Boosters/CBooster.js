/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CBooster, CObj, true);

function CBooster(x,y,gfx) {
    CObj.apply(this, [x,y, gfx, null]);
    this.activate = null;
}

