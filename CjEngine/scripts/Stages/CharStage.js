
function CharStage() {
    CustomStage.apply(this);
}

extend(CharStage, CustomStage);

CharStage.prototype.onShow = function() {
    this.doProcess = false;
    CustomStage.prototype.onShow.call(this);
   LevelManager.loadLevel("levchar", this.onShowContinue);
}

CharStage.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

CharStage.prototype.onShowContinue = function()
{
    charStage.doProcess = true;

    shopStage.updateStatsPanel();

    var o = new CEActionGUI(200, 200);
    o.init();
    SM.inst.fg.addChild(o.gfx);
    CObj.getById("sellev").text = "Level 1";
    if (vkparams.first_name)
    CObj.getById("tname").text = vkparams.first_name.toUpperCase() + " " + vkparams.last_name.toUpperCase();

    CObj.getById("bshop").click = function() {
        SM.inst.openStage(shopStage);
    }


        CObj.getById("btnachs").click = function(){


       SM.inst.openStage(achStage)
    };
    CObj.getById("btnfight").click = function(){SM.inst.openStage(gameStage)};

    var pl = new CPlayer(300, 400);
    SM.inst.fg.addChild(pl.gfx);

}


CharStage.prototype.process = function() {
    CObj.processAll();
}
