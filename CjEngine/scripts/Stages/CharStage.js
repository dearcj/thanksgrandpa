
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

    CObj.getById("sellev").text = "Level 1";
    CObj.getById("tname").text = vkparams.first_name + " " + vkparams.last_name;

    CObj.getById("btnachs").click = function(){


       SM.inst.openStage(achStage)
    };
    CObj.getById("btnfight").click = function(){SM.inst.openStage(gameStage)};
}


CharStage.prototype.process = function() {
    CObj.processAll();
}
