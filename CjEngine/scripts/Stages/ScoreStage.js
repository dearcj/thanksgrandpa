
function ScoreStage() {
    CustomStage.apply(this);
}

extend(ScoreStage, CustomStage);

ScoreStage.prototype.updateFriends = function() {
    azureclient.invokeApi("get_scores", {
        body: {filter: vkparams.friends},
        method: "post"
    }).done(function (results) {
        var message = results.result;
        azureclient.currentUser = {userId:results.result.userId, mobileServiceAuthenticationToken: results.result.token};
        vkparams.id = results.result.id;
        //    createAchs(results.result.id);
        loginCallback(results.result);
    }, function(error) {
        //  azureclient.login(results.result.userId, results.result.token);
        //    loginCallback();
    });
}

ScoreStage.prototype.updateTotal = function() {


}


ScoreStage.prototype.onShow = function() {
    this.doProcess = false;
    CustomStage.prototype.onShow.call(this);
    LevelManager.loadLevel("levscore", this.onShowContinue);





}

ScoreStage.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

ScoreStage.prototype.onShowContinue = function()
{
    charStage.doProcess = true;

  /*  shopStage.updateStatsPanel();

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
*/
}


ScoreStage.prototype.process = function() {
    CObj.processAll();
}
