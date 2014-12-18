
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



     if (vkparams.first_name)
    CObj.getById("tname").text = vkparams.first_name.toUpperCase() + " " + vkparams.last_name.toUpperCase();

    CObj.getById("bshop").click = function() {
        SM.inst.openStage(shopStage);
    }

    CObj.getById("bscore").click = function(){
        SM.inst.openStage(scoreStage)
    };

    CObj.getById("btnachs").click = function(){
       SM.inst.openStage(achStage)
    };
    CObj.getById("btnfight").click = function(){SM.inst.openStage(gameStage)};

    var pl = new CPlayer(300, 400);
    SM.inst.ol.addChild(pl.gfx);

    charStage.bar = new CScrollbar(210,339, "", 380, 524, "podlozhka actions.png", "scroll line actions.png", "scroll.png", 20);
    charStage.bar.bg.alpha = 0.6;
    charStage.updateEvents();

    var renderTexture = new PIXI.RenderTexture(200, 200);
    renderTexture.render(stage);

    var mm = renderTexture.getBase64();

    VK.api('photos.getUploadServer',{aid:"saved"}, function(data) {
        var url = data.response.upload_url;
        console.log(url);
        $.post(mm,
            {upload_url: url},
            function (json) {
                console.log("UPLOADED");

            });
    });
}

CharStage.prototype.updateEvents = function() {
    charStage.bar.clear();

    for (var i = 0; i < PlayerData.inst.eventsplayer.length; ++i) {
        var o = new CEActionGUI(50, 50 + i*150);
        o.init(PlayerData.inst.eventsplayer[i]);
        charStage.bar.container.addChild(o.gfx);

    }

    charStage.bar.pos = 0;
}


CharStage.prototype.process = function() {
    CObj.processAll();
}
