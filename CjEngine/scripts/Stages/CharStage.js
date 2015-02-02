
function CharStage() {
    CustomStage.apply(this);
}

extend(CharStage, CustomStage);

CharStage.prototype.onShow = function() {
    this.doProcess = false;
    charStage.skipFriends = 0;
    CustomStage.prototype.onShow.call(this);

    $(function() {
        var toolbox = $('body'),
            height = toolbox.height(),
            scrollHeight = toolbox.get(0).scrollHeight;

        toolbox.bind('mousewheel', function(e, d) {
            //    if((this.scrollTop === (scrollHeight - height) && d < 0) || (this.scrollTop === 0 && d > 0)) {
            e.preventDefault();
            //    }
        });

    });


    LevelManager.loadLevel("levchar", this.onShowContinue, SM.inst.ol);
}

CharStage.prototype.onHide = function(newStage) {
    charStage.pl = null;
    charStage.frp.parent.removeChild(charStage.frp);
    charStage.frp = null;
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

CharStage.prototype.createFriendsPanel = function() {
    var panel = new PIXI.DisplayObjectContainer();

    var skip = charStage.skipFriends;
    for (var i = 0 + skip; i < 5 + skip; ++i)
    {
        var frClpBtn = new CButton(63 + (i - skip)*100, 5, "add friend");
        var friendClip = frClpBtn.gfx;//new PIXI.Sprite(PIXI.Texture.fromFrame("add friend.png"));
        friendClip.parent.removeChild(friendClip);
        friendClip.anchor.x = 0.5;
        friendClip.anchor.y = 0.5;
        frClpBtn.hover = true;
        if (vkparams.friendsIngame && i < vkparams.friendsIngame.length)
        frClpBtn.text = vkparams.friendsIngame[i].name + vkparams.friendsIngame[i].last_name;

     frClpBtn.init();
        panel.addChild(friendClip);
        if (!vkparams.friendsIngame || i >= vkparams.friendsIngame.length) {
            friendClip.click = function () {
                VK.callMethod("showInviteBox");
            }

            continue;
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
        };
        setPhotoCB(friendClip);
        /*var nametf = CTextField.createTextField({fontSize: "14", align: "center", text: });
        nametf.x -= nametf.width / 2;
        nametf.y = 15;
        friendClip.addChild(nametf); */
    }

    panel.x = 215;
    panel.y=SCR_HEIGHT - 50;
    SM.inst.guiLayer.addChild(panel);

    return panel;
}



CharStage.prototype.onShowContinue = function()
{
    charStage.doProcess = true;

    shopStage.updateStatsPanel();

    CObj.getById("frprev").click = function() {
        charStage.skipFriends -= 5;
        if (charStage.skipFriends < 0)
            charStage.skipFriends = 0;

        charStage.frp.parent.removeChild(charStage.frp);
        charStage.frp = charStage.createFriendsPanel();

    }

    CObj.getById("frnext").click = function() {
        charStage.skipFriends += 5;
        charStage.frp.parent.removeChild(charStage.frp);
        charStage.frp = charStage.createFriendsPanel();
    }

    CObj.getById("btnorder").click = function()
    {
        CObj.enableButtons(false);

        CObj.getById("tname").gfx.visible = false;
        CObj.getById("btnorder").textField.visible = false;
        var wnd = SM.inst.addDisableWindow(null, SM.inst.guiLayer);

        LevelManager.loadLevel("levelpremium", function()
        {
            close = function()
            {
                CObj.getById("tname").gfx.visible = true;
                CObj.getById("btnorder").textField.visible = true;
                LevelManager.removeLastLevel();

                CObj.enableButtons(true);
                wnd.parent.removeChild(wnd);
            };

            charStage.skipFriends = 0;


            CObj.getById("buy1").click = function(){order("item1"); shopStage.updateStatsPanel();};

            CObj.getById("buy2").click = function(){order("item2");shopStage.updateStatsPanel();};

            CObj.getById("buy3").click = function(){order("item3");shopStage.updateStatsPanel();};

            CObj.getById("buy4").click = function(){order("item4");shopStage.updateStatsPanel();};

            CObj.getById("buy5").click = function(){order("item5");shopStage.updateStatsPanel();};

            CObj.getById("buy6").click = function(){order("item6");shopStage.updateStatsPanel();};

            CObj.getById("btnclose").click = close;
            CObj.getById("btnfree").click = close;

        }, SM.inst.superGuiLayer);
    };

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

    var pl = new CPlayer(400, 430);
    charStage.pl = pl;
    pl.gfx.scale.x = 0.34;
    pl.gfx.scale.y = 0.34;
    pl.updateAppearence(true, false, "breath");
    SM.inst.ol.addChild(pl.gfx);

    var f = pl.gfx; pl.gfx.interactive = true;
    CObj.getById("bsofa").click = function() {
        CObj.enableButtons(false);

        CObj.getById("bsofa").textField.visible = false;
        var wnd = SM.inst.addDisableWindow(null, SM.inst.guiLayer);
        charStage.bar.gfx.parent.removeChild(charStage.bar.gfx);
        SM.inst.guiLayer.addChild(charStage.bar.gfx);

        if (!charStage.bar.gfx.visible) {
            charStage.bar.gfx.visible = true;
        } else {
            charStage.bar.gfx.visible = false;
        }
    }

    PlayerData.inst.comboCheck();

    var baseScl = pl.gfx.scale.x;
  /*  pl.gfx.mouseover = function (evt) {
            TweenMax.killTweensOf(f.scale);

        var color = 0xaaffaa;
            f.tint = color;
            for (var i = 0; i < f.children.length;++i)
            {
                f.children[i].tint =color;
            }
            new TweenMax(f.scale, 0.6, {y: baseScl*1.05, ease: Elastic.easeOut} );
            new TweenMax(f.scale, 0.4, {x: baseScl*1.05, ease: Elastic.easeOut} );
       };

    pl.gfx.mouseout = function (evt) {
        f.tint = 0xffffff;

        var color = 0xffffff;
        f.tint = color;
        for (var i = 0; i < f.children.length;++i)
        {
            f.children[i].tint =color;
        }
        new TweenMax(f.scale, 0.3, {x: baseScl, y: baseScl, ease: Elastic.easeOut} );
    }
*/
    charStage.bar = new CScrollbar(180,309, "", 380, 524, "podlozhka actions.png", "scroll line actions.png", "scroll.png", 20);
    charStage.bar.gfx.scale.x = 0.7;
    charStage.bar.gfx.scale.y = 0.7;
    charStage.bar.bg.alpha = 0.6;
    charStage.bar.gfx.visible = false;
    charStage.updateEvents();

    charStage.frp = charStage.createFriendsPanel();
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
