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



    charStage.eventsArray = [];
    for (var i = 0; i < CObj.objects.length; ++i) {
        if (CObj.checkType(CObj.objects[i], CEActionGUI)) {
            charStage.eventsArray.push(
                {
                    id: CObj.objects[i].eventpl.id,
                    acting: CObj.objects[i].acting,
                    startTime: CObj.objects[i].startTime,
                    execTime: CObj.objects[i].execTime,
                    pos: CObj.objects[i].pos
                }
            );
        }
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
        if (!data.response) return;
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

CharStage.prototype.openEnergyWindow = function () {
    CObj.enableButtons(false);
    ;
    var wnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);
    wnd.interactive = true;
    var objs = LevelManager.loadLevel("energywindow", function () {
        CObj.getById("breplenish").click = function()
        {
            order("item7");
            VK.orderComplete = function()
            {
                shopStage.updateStatsPanel();
                close();
            }

        }
        close= function()
        {
            rp(wnd);
            CObj.enableButtons(true);

            LevelManager.removeLastLevel();
            wnd.click = null;
        };

        wnd.click = function () {
            var obj = CObj.getById("energybg");
            var bnds = obj.gfx.getBounds();
            if (window.mouseX > obj.x - obj.gfx.width / 2 &&
                window.mouseX < obj.x + obj.gfx.width / 2 &&
                window.mouseY > obj.y - obj.gfx.height / 2 &&
                window.mouseY < obj.y + obj.gfx.height / 2) {
            } else {
              close();
            }
        }

    }, SM.inst.fontLayer);
}


CharStage.prototype.onShowContinue = function () {
    charStage.doProcess = true;


    charStage.skip = 0;

    charStage.tab = "total";
    charStage.showRecords = 10;


    PlayerData.inst.eventsplayer.sort(function(a, b) {
        return PlayerData.inst.getEventById(a.id_edevent).reqlvl - PlayerData.inst.getEventById(b.id_edevent).reqlvl;
    });

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
            CObj.getById("bmusic").click = function()
            {
                if (ZSound.available)
                    ZSound.Mute(); else
                    ZSound.UnMute();
            }



            wnd.click = function () {
                var obj = CObj.getById("setbg");
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
        charStage.openScore();
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
            charStage.openEnergyWindow();
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

        var wnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);
        wnd.interactive = true;

        for (var i = 0; i < CObj.objects.length; ++i) {
            if (CObj.checkType(CObj.objects[i], CEActionGUI) && CObj.objects[i].btnReward) {
                CObj.objects[i].btnReward.gfx.interactive = true;
            }
        }

        charStage.closeEventsWnd = function()
        {
            wnd.parent.removeChild(wnd);
            CObj.enableButtons(true);
            charStage.bar.gfx.visible = false;
        }

        wnd.click = function () {
            if (!charStage.bar.gfx.getBounds().contains(window.mouseX, window.mouseY)) {
                charStage.closeEventsWnd();
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
        if (charStage.eventsArray) {
            var x = findByProp(charStage.eventsArray, "id", PlayerData.inst.eventsplayer[i].id);
            if (x)
            {
                o.acting = x.acting;
                o.startTime = x.startTime;
                o.execTime = x.execTime;
                o.pos = x.pos;

                if (o.acting)
                {
                    o.progressbg.visible = true;
                    o.progressfore.visible = true;
                }
            }
            console.log(x);
        }
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

    var c = 0;
    for (var i = 0; i < CObj.objects.length; ++i)
    {
        if  (CObj.checkType(CObj.objects[i], CEActionGUI))
        {
            if (CObj.objects[i].acting)
            {
                var p = (window.time - CObj.objects[i].startTime) / CObj.objects[i].execTime;
                if (p >= 1) {
                    p = 1;
                    CObj.objects[i].pos = 1;
                    CObj.objects[i].endAction();
                } else
                CObj.objects[i].pos = p;
                c++;

            }
        }
    //    console.log(c);

    }

}


CharStage.prototype.updateFriends = function() {

    PlayerData.inst.savePlayerData();

    azureclient.invokeApi("get_scores", {
        body: {filter: vkparams.friendsIngameIDs, take: charStage.showRecords, skip: charStage.skip},
        method: "post"
    }).done(function (results) {
        charStage.updateSB(results.result);
    }, function(error) {

    });
}

CharStage.prototype.updateTotal = function() {


    azureclient.invokeApi("get_scores", {
        body: {filter: null, take: charStage.showRecords, skip: charStage.skip},
        method: "post"
    }).done(function (results) {
        charStage.updateSB(results.result);
    }, function(error) {

    });
}

CharStage.prototype.openScore = function()
{
    CObj.enableButtons(false);
    var wnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);

    var objs = LevelManager.loadLevel("levscore", function()
{

    charStage.container = new PIXI.DisplayObjectContainer();
    charStage.container.x = 170;
    charStage.container.y = 170;
    SM.inst.fontLayer.addChild(charStage.container);

    CObj.getById("tplscore").text = PlayerData.inst.playerItem.maxdistance.toString() + 'м.';
    CObj.getById("tplace").text = PlayerData.inst.playerItem.rank.toString() + ".";

    var current = charStage.skip + 1;
    //   CObj.getById("tdisplayed").text =  (current).toString() + " - " + (current+ scoreStage.showRecords).toString();

    CObj.getById("bfriends").click = function ()
    {
        charStage.skip = 0;
        if (charStage.tab == "friends")
        {
            CObj.getById("bfriends").text = "Все очки";
            charStage.tab = "total";
            charStage.updateTotal();
        } else {
            CObj.getById("bfriends").text = "Очки друзей";
            charStage.tab = "friends";
            charStage.updateFriends();
        }
    }

    CObj.getById("bfriends").click();

    CObj.getById("bforwardlist").click = function ()
    {
        charStage.skip += charStage.showRecords;
        var current = charStage.skip + 1;
        if (charStage.tab == "total")
            charStage.updateTotal();
        if (charStage.tab == "friends")
            charStage.updateFriends();
    };

    CObj.getById("bback").click = function ()
    {
        CObj.enableButtons(true);

        LevelManager.removeLastLevel();


        while (charStage.container.children.length > 0)
        {
            rp(charStage.container.getChildAt(0));
        }

        rp(charStage.container);
       rp(wnd);
        charStage.container = null;
    }
    CObj.getById("bbacklist").click = function ()
    {
        charStage.skip -= charStage.showRecords;
        if (charStage.skip < 0) charStage.skip = 0;
        var current = charStage.skip + 1;
        if (charStage.tab == "total")
            charStage.updateTotal();
        if (charStage.tab == "friends")
            charStage.updateFriends();
    };
}, SM.inst.fontLayer);
}

CharStage.prototype.updateSB = function(arr)
{
    while     (charStage.container.children.length > 0)
    {
        rp(charStage.container.getChildAt(0));
    }
    var clips = [];
    var fr = "";
    for (var i = 0; i < arr.length; ++i) {
        var scoreClip = new PIXI.DisplayObjectContainer();
        var tfRank = CTextField.createTextField({tint: 0x333333, fontSize: 15, text: (charStage.skip + i + 1).toString() + '.'}) ;
        var tfName = CTextField.createTextField({tint: 0x333333, fontSize: 15, text: arr[i].name + ' ' + arr[i].last_name}) ;
        var tfScore = CTextField.createTextField({tint: 0x333333, fontSize: 15, text: Math.round(arr[i].maxdistance).toString() + "м."}) ;
        var clIco = crsp("buy small button");

        clips.push(clIco);
        clips[i].vkapi = arr[i].vkapi;
        if (fr != "") fr += ",";
        fr+= arr[i].vkapi;
        if (charStage.skip + i < 3)
        {
            var nameTex;
            if (charStage.skip + i == 0) nameTex = "1st place";
            if (charStage.skip + i == 1) nameTex = "2nd place";
            if (charStage.skip + i == 2) nameTex = "3rd place";
            var bgCircle = crsp(nameTex);
            bgCircle.x = 4;
            bgCircle.y = 10;
            bgCircle.scale.x = 0.8;
            bgCircle.scale.y = 0.8;
            scoreClip.addChild(bgCircle);
        }
        clIco.y = 10;
        clIco.x = 35;
        scoreClip.x = 20;
        scoreClip.y = 15 + 28*i;
        tfName.x = 55;
        tfScore.x = 370;

        scoreClip.addChild(clIco);
        scoreClip.addChild(tfName);
        scoreClip.addChild(tfRank);
        scoreClip.addChild(tfScore);
        charStage.container.addChild(scoreClip);
    }

    if (VK && fr != "")
        VK.api('users.get', {user_ids: fr, fields: "photo"}, function (data) {

            if (!data.response) return;
            for (var j = 0; j < data.response.length; ++j) {
                var purl = data.response[j].photo;
                if (!data.response || data.response.length == 0) return;

                var upperClip = clips[j];
                upperClip.loader = new PIXI.ImageLoader(purl);

                var setLoader = function (clip, url) {
                    clip.loader.onLoaded = function () {
                        var ico = new PIXI.Sprite(PIXI.TextureCache[url]);
                        ico.scale.x = 0.5;
                        ico.scale.y = 0.5;
                        ico.anchor.x = 0.5;
                        ico.anchor.y = 0.5;
                        clip.addChild(ico);
                        //    charStage.icons.push(ico);
                    }
                };
                setLoader(upperClip, purl);
                upperClip.loader.load();
            }
        });



};