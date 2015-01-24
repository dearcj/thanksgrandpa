/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CSupermanBooster, CBooster, true);

function CSupermanBooster(x,y,gfx) {
    CBooster.apply(this, [x,y,gfx]);
}