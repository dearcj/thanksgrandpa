
function ScoreStage() {
    CustomStage.apply(this);
}

extend(ScoreStage, CustomStage);

ScoreStage.prototype.updateFriends = function() {

    PlayerData.inst.savePlayerData();

    azureclient.invokeApi("get_scores", {
        body: {filter: vkparams.friendsIngame, take: 20, skip: scoreStage.skip},
        method: "post"
    }).done(function (results) {
        scoreStage.updateSB(results.result);
    }, function(error) {

    });
}

ScoreStage.prototype.updateTotal = function() {


    azureclient.invokeApi("get_scores", {
        body: {filter: null, take: 20, skip: scoreStage.skip},
        method: "post"
    }).done(function (results) {
        scoreStage.updateSB(results.result);
    }, function(error) {

    });
}


ScoreStage.prototype.updateSB = function(arr)
{
    scoreStage.bar.posScale = 1.67;
    scoreStage.bar.pos = 0;
    scoreStage.bar.clear();

    for (var i = 0; i < arr.length; ++i) {
        var scoreClip = new PIXI.DisplayObjectContainer();
        var tfRank = CTextField.createTextField({fontSize: 22, text: (scoreStage.skip + i + 1).toString() + '.'}) ;
        var tfName = CTextField.createTextField({fontSize: 22, text: arr[i].name + ' ' + arr[i].last_name}) ;
        var tfScore = CTextField.createTextField({fontSize: 22, text: Math.round(arr[i].maxdistance).toString()}) ;

        scoreClip.x = 20;
        scoreClip.y = 15 + 50*i;
        tfName.x = 50;
        tfScore.x = 370;
        scoreClip.addChild(tfName);
        scoreClip.addChild(tfRank);
        scoreClip.addChild(tfScore);
        scoreStage.bar.container.addChild(scoreClip);
    }
}

ScoreStage.prototype.onShow = function() {
    this.doProcess = false;
    CustomStage.prototype.onShow.call(this);


        scoreStage.skip = 0;


    scoreStage.tab = "total";
    scoreStage.bar = new CScrollbar(430 ,320, "", 480, 400);

    scoreStage.showRecords = 20;
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
    CObj.getById("tfpl").text = "ВАШ РЕКОРД " + PlayerData.inst.playerItem.maxdistance.toString() + ' МЕТРА \n' +
    "ВАШ РАНГ " + PlayerData.inst.playerItem.rank.toString();

    var current = scoreStage.skip + 1;


    CObj.getById("tdisplayed").text =  (current).toString() + " - " + (current+ scoreStage.showRecords).toString();

    CObj.getById("btotal").click = function ()
    {
        scoreStage.skip = 0;

        CObj.getById("scorestitle").text = "ВСЕ ОЧКИ";
        scoreStage.tab = "total";
        scoreStage.updateTotal();
    }
    CObj.getById("bfriends").click = function ()
    {
        scoreStage.skip = 0;
        CObj.getById("scorestitle").text = "ОЧКИ ДРУЗЕЙ";
        scoreStage.tab = "friends";
        scoreStage.updateFriends();
    }

    CObj.getById("btotal").click();

    CObj.getById("bforwardlist").click = function ()
    {
        scoreStage.skip += scoreStage.showRecords;
        var current = scoreStage.skip + 1;
        CObj.getById("tdisplayed").text =  (current).toString() + " - " + (current+ scoreStage.showRecords).toString();
        if (scoreStage.tab == "total")
            scoreStage.updateTotal();
        if (scoreStage.tab == "friends")
            scoreStage.updateFriends();

    };
    CObj.getById("bbacklist").click = function ()
    {
        scoreStage.skip -= scoreStage.showRecords;
        var current = scoreStage.skip + 1;
        CObj.getById("tdisplayed").text =  (current).toString() + " - " + (current+ scoreStage.showRecords).toString();
        if (scoreStage.skip < 0) scoreStage.skip = 0;
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
