
function ScoreStage() {
    CustomStage.apply(this);
}

extend(ScoreStage, CustomStage);

ScoreStage.prototype.updateFriends = function() {

    PlayerData.inst.savePlayerData();

    azureclient.invokeApi("get_scores", {
        body: {filter: vkparams.friendsIngameIDs, take: scoreStage.showRecords, skip: scoreStage.skip},
        method: "post"
    }).done(function (results) {
        scoreStage.updateSB(results.result);
    }, function(error) {

    });
}

ScoreStage.prototype.updateTotal = function() {


    azureclient.invokeApi("get_scores", {
        body: {filter: null, take: scoreStage.showRecords, skip: scoreStage.skip},
        method: "post"
    }).done(function (results) {
        scoreStage.updateSB(results.result);
    }, function(error) {

    });
}


ScoreStage.prototype.updateSB = function(arr)
{
    while     (scoreStage.container.children.length > 0)
    {
        rp(scoreStage.container.getChildAt(0));
    }
    var clips = [];
    var fr = "";
    for (var i = 0; i < arr.length; ++i) {
        var scoreClip = new PIXI.DisplayObjectContainer();
        var tfRank = CTextField.createTextField({tint: 0x333333, fontSize: 15, text: (scoreStage.skip + i + 1).toString() + '.'}) ;
        var tfName = CTextField.createTextField({tint: 0x333333, fontSize: 15, text: arr[i].name + ' ' + arr[i].last_name}) ;
        var tfScore = CTextField.createTextField({tint: 0x333333, fontSize: 15, text: Math.round(arr[i].maxdistance).toString() + "м."}) ;
        var clIco = crsp("buy small button");

        clips.push(clIco);
        clips[i].vkapi = arr[i].vkapi;
        if (fr != "") fr += ",";
        fr+= arr[i].vkapi;
        if (scoreStage.skip + i < 3)
        {
            var nameTex;
            if (scoreStage.skip + i == 0) nameTex = "1st place";
            if (scoreStage.skip + i == 1) nameTex = "2nd place";
            if (scoreStage.skip + i == 2) nameTex = "3rd place";
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
        scoreStage.container.addChild(scoreClip);
    }

    if (VK && fr != "")
    VK.api('users.get', {user_ids: fr, fields: "photo"}, function (data) {

        for (var j = 0; j < data.response.length; ++j) {
            var purl = data.response[j].photo;
            if (!data.response || data.response.length == 0) return;

            var upperClip = clips[j];
            upperClip.loader = new PIXI.ImageLoader(purl);

            var setLoader = function (clip) {
                clip.loader.onLoaded = function () {
                    var ico = new PIXI.Sprite(PIXI.TextureCache[purl]);
                    ico.anchor.x = 0.5;
                    ico.anchor.y = 0.5;
                    clip.addChild(ico);
                    charStage.icons.push(ico);
                }
            };
            setLoader(upperClip);
            upperClip.loader.load();
        }
    });



}

ScoreStage.prototype.onShow = function() {
    CustomStage.prototype.onShow.call(this);
    scoreStage.skip = 0;

    scoreStage.tab = "total";
    scoreStage.showRecords = 10;
    LevelManager.loadLevel("levscore", this.onShowContinue);
    scoreStage.container = new PIXI.DisplayObjectContainer();
    scoreStage.container.x = 170;
    scoreStage.container.y = 170;
    SM.inst.ol.addChild(scoreStage.container);
}

ScoreStage.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

ScoreStage.prototype.onShowContinue = function()
{
   CObj.getById("tplscore").text = PlayerData.inst.playerItem.maxdistance.toString() + 'м.';
   CObj.getById("tplace").text = PlayerData.inst.playerItem.rank.toString() + ".";
    // '\n' +
  //  "ВАШ РАНГ " +

    var current = scoreStage.skip + 1;

 //   CObj.getById("tdisplayed").text =  (current).toString() + " - " + (current+ scoreStage.showRecords).toString();

    CObj.getById("bfriends").click = function ()
    {
        scoreStage.skip = 0;
        if (scoreStage.tab == "friends")
        {
            CObj.getById("bfriends").text = "Все очки";
            scoreStage.tab = "total";
        } else {
            CObj.getById("bfriends").text = "Очки друзей";
            scoreStage.tab = "friends";
        }
        scoreStage.updateFriends();
    }

    CObj.getById("bfriends").click();

    CObj.getById("bforwardlist").click = function ()
    {
        scoreStage.skip += scoreStage.showRecords;
        var current = scoreStage.skip + 1;
         if (scoreStage.tab == "total")
            scoreStage.updateTotal();
        if (scoreStage.tab == "friends")
            scoreStage.updateFriends();

    };

    CObj.getById("bback").click = function ()
    {
        SM.inst.openStage(charStage);
    }
    CObj.getById("bbacklist").click = function ()
    {
        scoreStage.skip -= scoreStage.showRecords;
        if (scoreStage.skip < 0) scoreStage.skip = 0;
        var current = scoreStage.skip + 1;
         if (scoreStage.tab == "total")
            scoreStage.updateTotal();
        if (scoreStage.tab == "friends")
            scoreStage.updateFriends();

    };

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
