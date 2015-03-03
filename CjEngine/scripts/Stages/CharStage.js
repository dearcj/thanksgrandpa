function CharStage() {
    CustomStage.apply(this);
}

extend(CharStage, CustomStage);

CharStage.prototype.onShow = function () {
    this.doProcess = false;
    charStage.skipFriends = 0;
    CustomStage.prototype.onShow.call(this);
    charStage.icons = [];

    LevelManager.loadLevel("levchar", function () {
            LevelManager.loadLevel("upperPanel", charStage.onShowContinue, SM.inst.ol);
        }
        , SM.inst.ol);
}

CharStage.prototype.onHide = function (newStage) {

    for (var i = 0; i < charStage.icons.length; ++i) {
        charStage.icons[i].texture.destroy(true);
    }
    charStage.icons = null;
    charStage.pl = null;
    charStage.frp.parent.removeChild(charStage.frp);
    charStage.frp = null;
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

CharStage.prototype.createFriendsPanel = function () {
    var panel = new PIXI.DisplayObjectContainer();

    var fr = "";
    var clips = [];
    var skip = charStage.skipFriends;
    for (var i = 0 + skip; i < 5 + skip; ++i) {
        var frClpBtn = new CButton(63 + (i - skip) * 100, 5, "add friend");
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
        } else {
            username = vkparams.friendsIngame[i].name;
            friendClip.click = function () {
                VK.api("wall.post", {
                    owner_id: vkparams.viewerid,
                    message: username + ", возвращайся в игру дружище",
                    attachments: ["photo2882845_347400805", "https://vk.com/app4654201"]
                }, function (data) {

                });
            };

        }
        if (fr != "") fr += ",";
        fr+= vkparams.friendsIngame[i].vkapi.toString();
        friendClip.vkapi = vkparams.friendsIngame[i].vkapi;
        clips.push(friendClip);
    }

//vkparams.friendsIngame[i].vkapi
    if (VK && fr != "")
    VK.api('users.get', {user_ids: fr, fields: "photo"}, function (data) {

        for (var j = 0; j < data.response.length; ++j) {
            var purl = data.response[j].photo;
            if (!data.response || data.response.length == 0) return;

            var upperClip = clips[j];
            upperClip.loader = new PIXI.ImageLoader(purl);

            var setLoader = function (clip, url) {
                clip.loader.onLoaded = function () {
                    var ico = new PIXI.Sprite(PIXI.TextureCache[url]);
                    ico.anchor.x = 0.5;
                    ico.anchor.y = 0.5;
                    clip.addChild(ico);
                    charStage.icons.push(ico);
                }
            };
            setLoader(upperClip, purl);
            upperClip.loader.load();
        }
        });


    panel.x = 215;
    panel.y = SCR_HEIGHT - 50;
    SM.inst.guiLayer.addChild(panel);

    return panel;
}


CharStage.prototype.openPremiumWindow = function () {
    CObj.enableButtons(false);
    var wnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);

    LevelManager.loadLevel("levelpremium", function () {
        close = function () {
            LevelManager.removeLastLevel();

            CObj.enableButtons(true);
            wnd.parent.removeChild(wnd);
        };

        charStage.skipFriends = 0;

        orderFunc = function (str) {
            ZSound.Play("buy");
            order(str);
            shopStage.updateStatsPanel();
        }
        CObj.getById("buy1").click = function () {
            orderFunc("item1")
        };

        CObj.getById("buy2").click = function () {
            orderFunc("item2");
        };

        CObj.getById("buy3").click = function () {
            orderFunc("item3");
        };

        CObj.getById("buy4").click = function () {
            orderFunc("item4");
        };

        CObj.getById("buy5").click = function () {
            orderFunc("item5");
        };

        CObj.getById("buy6").click = function () {
            orderFunc("item6");
        };

        CObj.getById("btnclose").click = close;
        CObj.getById("btnfree").click = close;

    }, SM.inst.fontLayer);
}

CharStage.prototype.onShowContinue = function () {
    charStage.doProcess = true;

    //PlayerData.inst.addNotification("some msg", PlayerData.inst.playerItem.vkapi);

    CObj.getById("frprev").click = function () {
        charStage.skipFriends -= 5;
        if (charStage.skipFriends < 0)
            charStage.skipFriends = 0;

        charStage.frp.parent.removeChild(charStage.frp);
        charStage.frp = charStage.createFriendsPanel();
    }

    CObj.getById("frnext").click = function () {
        charStage.skipFriends += 5;
        charStage.frp.parent.removeChild(charStage.frp);
        charStage.frp = charStage.createFriendsPanel();
    }

    CObj.getById("bbuy1").click = charStage.openPremiumWindow;
    CObj.getById("bbuy2").click = charStage.openPremiumWindow;

    if (vkparams.first_name)
        CObj.getById("tname").text = vkparams.first_name.toUpperCase() + " " + vkparams.last_name.toUpperCase();


    CObj.getById("bset").click = function () {
        CObj.enableButtons(false);
        ;
        var wnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);
        wnd.interactive = true;
        var objs = LevelManager.loadLevel("settings", function () {
            CObj.getById("bcallback").click = function()
            {
                window.location.href = "mailto:thanksgrandpa@gmail.com";
                window.open('mailto:thanksgrandpa@gmail.com', 'mail');
            }

            wnd.click = function () {
                var obj = CObj.getById("setbg");
                obj.updateGraphics();
                obj.gfx.updateTransform();
                var bnds = obj.gfx.getBounds();
                if (window.mouseX > obj.x - obj.gfx.width / 2 &&
                    window.mouseX < obj.x + obj.gfx.width / 2 &&
                    window.mouseY > obj.y - obj.gfx.height / 2 &&
                    window.mouseY < obj.y + obj.gfx.height / 2) {
                } else {
                    rp(wnd);
                    CObj.enableButtons(true);

                    for (var i = 0; i < objs.length; ++i) {
                        objs[i].destroy();
                    }
                    wnd.click = null;
                }
            }

        }, SM.inst.fontLayer);
    }

    CObj.getById("bshop").click = function () {
        SM.inst.openStage(shopStage);
    }

    CObj.getById("bscore").click = function () {
        SM.inst.openStage(scoreStage)
    };

    CObj.getById("btnachs").click = function () {
        SM.inst.openStage(achStage)
    };
    CObj.getById("btnfight").click = function () {
        if (PlayerData.inst.playerItem.energy >= 1) {
            PlayerData.inst.playerItem.energy -= 1;
            //  PlayerData.inst.updateEnergy();
            //PlayerData.inst.savePlayerData();
            SM.inst.openStage(gameStage)
        } else {
            var en1 = CObj.getById("tfenergy");
            var en2 = CObj.getById("energyback");
            new TweenMax(en1, 0.1, {y: en1.y - 10, repeat: 3, yoyo: true, ease: Linear.easeInOut});
            new TweenMax(en2, 0.1, {y: en2.y - 10, repeat: 3, yoyo: true, ease: Linear.easeInOut});
        }
    };

    var pl = new CPlayer(400, 430);
    charStage.pl = pl;
    pl.gfx.scale.x = 0.34;
    pl.gfx.scale.y = 0.34;
    pl.updateAppearence(true, false, "breath");
    SM.inst.ol.addChild(pl.gfx);

    var f = pl.gfx;
    pl.gfx.interactive = true;
    CObj.getById("bsofa").click = function () {
        CObj.enableButtons(false);

        //CObj.getById("bsofa").textField.visible = false;
        var wnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);
        wnd.interactive = true;
        wnd.click = function () {
            if (!charStage.bar.gfx.getBounds().contains(window.mouseX, window.mouseY)) {
                wnd.parent.removeChild(wnd);
                CObj.enableButtons(true);
                charStage.bar.gfx.visible = false;
            }
        }
        charStage.bar.gfx.parent.removeChild(charStage.bar.gfx);
        SM.inst.fontLayer.addChild(charStage.bar.gfx);
        charStage.bar.gfx.visible = true;
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
    charStage.bar = new CScrollbar(180, 309, "", 380, 524, "podlozhka actions.png", "scroll line actions.png", "scroll.png", 50);

    charStage.bar.gfx.scale.x = 0.7;
    charStage.bar.gfx.scale.y = 0.7;
    //charStage.bar.bg.alpha = 0.6;
    charStage.bar.gfx.visible = false;
    charStage.updateEvents();

    shopStage.updateStatsPanel();

    charStage.frp = charStage.createFriendsPanel();
}

CharStage.prototype.updateEvents = function () {
    charStage.bar.clear();

    for (var i = 0; i < PlayerData.inst.eventsplayer.length; ++i) {
        var o = new CEActionGUI(50, 70 + (i) * 150);
        var event = PlayerData.inst.getEventById(PlayerData.inst.eventsplayer[i].id_edevent);
        //if (!event) continue;
        o.init(PlayerData.inst.eventsplayer[i], event, event.gfx, "progress fore.png", "progress bg.png");
        o.updateGraphics();
        charStage.bar.container.addChild(o.gfx);
    }

    charStage.bar.updateHeight();
    charStage.bar.pos = 0;
}


CharStage.prototype.process = function () {

    if (Math.round(PlayerData.inst.playerItem.energy) < Math.round(PlayerData.inst.maxEnergy)) {
        var timeRes = dateDiff(PlayerData.inst.playerItem.updateDate, PlayerData.inst.delayEnergyMS / 60000);
        CObj.getById("tfdelay").text = timeRes.timeString;
    } else {
        CObj.getById("tfdelay").text = "";
    }
    CObj.processAll();
}
