
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

    var cx = 300;
    var cy = 400;
    var rad = 150;
    var da = Math.PI * 2 / PlayerData.inst.eventsplayer.length;
    var angle = 0;
    for (var i = 0; i < PlayerData.inst.eventsplayer.length; ++i) {
        var o = new CEActionGUI(cx + Math.cos(angle)*rad, cy  + Math.sin(angle)*rad);
        o.init(PlayerData.inst.eventsplayer[i]);
        SM.inst.fg.addChild(o.gfx);
        angle += da;
    }

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
    SM.inst.ol.addChild(pl.gfx);

}


CharStage.prototype.process = function() {
    CObj.processAll();
}
