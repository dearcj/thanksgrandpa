extend(CHeartBooster, CBooster, true);

function CHeartBooster(x,y,gfx) {
    CBooster.apply(this, [x,y,gfx]);
}