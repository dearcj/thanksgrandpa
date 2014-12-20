
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

CharStage.prototype.createFriendsPanel = function() {
    var panel = new PIXI.DisplayObjectContainer();

    if (!vkparams.friends) return null;
    var skip = 0;
    for (var i = 0 + skip; i < 10 + skip; ++i)
    {
        var friendClip = new PIXI.Sprite(PIXI.Texture.fromFrame("add friend.png"));
        friendClip.anchor.x = 0.5;
        friendClip.interactive = true;
        friendClip.x = i*100;
        friendClip.anchor.y = 0.5;
        friendClip.y = 10;

        panel.addChild(friendClip);
        if (i >= vkparams.friendsIngame.length) break; else
        friendClip.click = function()
        {
            VK.callMethod("showInviteBox");
        }

        var setPhotoCB = function(upperClip) {
            VK.api('users.get', {user_ids: vkparams.friendsIngame[i].vkapi, fields: "photo"}, function (data) {

                var purl = data.response[0].photo;
                if (!data.response ||data.response.length == 0) return;
                upperClip.loader = new PIXI.ImageLoader(purl);

                var setLoader = function (clip) {
                    clip.loader.onLoaded = function () {
                        var ico = new PIXI.Sprite(PIXI.TextureCache[purl]);
                        ico.anchor.x = 0.5;
                        ico.anchor.y = 0.5;
                        clip.addChild(ico);
                    }
                };
                setLoader(upperClip);
                upperClip.loader.load();

            });
        }
        setPhotoCB(friendClip);


        var nametf = CTextField.createTextField({align: "center", text: vkparams.friendsIngame[i].first_name + "\n" + vkparams.friendsIngame[i].last_name});
        nametf.x -= nametf.width / 2;
        nametf.y = 15;
        friendClip.addChild(nametf);
    }

    panel.x = 100;
    panel.y=SCR_HEIGHT - 80;
    SM.inst.guiLayer.addChild(panel);


    return panel;
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

    var frp = charStage.createFriendsPanel();


 /*   var renderTexture = new PIXI.RenderTexture(200, 200);
    renderTexture.render(stage);

    var mm = renderTexture.getBase64();
*/

  //  VK.callMethod("showRequestBox");

 /*   VK.api('photos.getUploadServer',{aid:"saved"}, function(data) {
        var url = data.response.upload_url;
        console.log(url);
        $.post(mm,
            {upload_url: url},
            function (json) {
                console.log("UPLOADED");

            });
    });*/
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
