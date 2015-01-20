/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
PlayerData = function(pi)
{
   this.xpLevel = [0, 100, 200, 500, 1500, 2500, 4000, 7500, 12000, 20000, 25000];
   this.items = {};
   this.achs = {};
   if (pi) {
      this.playerItem = pi;

   }// else this.loadEnd();


   this.score = 0;
   this.loadData(this.loadEnd);

   PlayerData.inst = this;
}

PlayerData.prototype.comboCheck = function()
{
   if (this.playerItem.combodate)
   {
      var d = (new Date()).getTime() - this.playerItem.updateDate.getTime();
      d /= 1000;//secs
      d /= 60; //minutes
      if (d > 60*29)
      {
         this.playerItem.combodate = new Date();
      } else
      {
         var d = (new Date()).getTime() - this.playerItem.combodate;
         d /= 1000;//secs
         d /= 60; //minutes
         var dayminutes = 24*60;
         if (d > dayminutes*5)
         this.progressAch("Gold medal 8", 1, false);

         if (d > dayminutes*10)
         this.progressAch("Gold medal 9", 1, false);
      }

   } else
   {
      this.playerItem.combodate  = this.playerItem.updateDate;

   }
}

PlayerData.prototype.getItemById = function(id)
{
   for (var i =0; i < this.items.length;++i)
   {
      if (this.items[i].id == id) return this.items[i];
   }
   return null;
}

PlayerData.prototype.equipItem = function(item)
{

   function getType(item_player)
   {
      for (var i = 0; i < PlayerData.inst.items.length; ++i)
      {
         if (PlayerData.inst.items[i].id == item_player.id_item)
         return PlayerData.inst.items[i].type;
      }

      return null;
   }
   var id = item.id;

   var itemOwned = false;
   for (var i =0; i < this.items_enabled.length;++i)
   {
      if (this.items_enabled[i].id_item == id)itemOwned = true;
   }

   if (!itemOwned) return;

   var itemtype = item.type;

   for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
   {
      if (getType(PlayerData.inst.items_enabled[i]) == itemtype)
      {
         if (PlayerData.inst.items_enabled[i].id_item == id)
            PlayerData.inst.items_enabled[i].equipped = true; else
         PlayerData.inst.items_enabled[i].equipped = false;
      }
   }

   this.savePlayerItems();
}


PlayerData.prototype.gainExp = function(amount)
{
   this.playerItem.xp += amount;
   if (this.playerItem.xp >= this.xpLevel[this.playerItem.lvl])
   {
      this.playerItem.xp -= this.xpLevel[this.playerItem.lvl];
      this.playerItem.lvl++;
      this.savePlayerData();
   }
}

PlayerData.prototype.showAch = function(ach)
{
   var cont = new PIXI.DisplayObjectContainer();

   var bg = crsp("notifiction cover");
   cont.addChild(bg);
   var ico = crsp(ach.gfx);
   ico.height = 80;
   ico.scale.x = ico.scale.y;
   ico.x = -bg.width / 2 + 55;
   cont.addChild(ico);

   var text1 = new CTextField.createTextField({fontFamily: "dedgamecaps", text: "Новая награда!", fontSize: "33"});
   var text2 = new CTextField.createTextField({fontFamily: "dedgamecaps", text: ach.desc, fontSize: "25"});
   text1.x = -text1.width / 2 + 40;
   text1.y = -35;
   text2.x = -text2.width / 2 + 40;
   text2.y = 5;

   cont.addChild(text1);
   cont.addChild(text2);

   stage.addChild(cont);

   cont.x = SCR_WIDTH / 2;

   new TweenMax(cont, 0.4, {y: bg.height / 2});
 //  TweenMax.delayedCall(1, );
  new TweenMax(cont, 0.3, {delay: 1.8, alpha: 0., onComplete: function () {ach.parent.removeChild(ach);}});
}




PlayerData.prototype.progressAch = function(name, progress, replace)
{
   for (var i = 0; i < this.achs.length; ++i)
   {
      if (this.achs[i].name.toLowerCase() == name.toLowerCase())
      {
         break;
      }
   }

   var complete = false;
   for (var j = 0; j < this.achs_progress.length; ++j)
   {
      if (this.achs_progress[j].id == this.achs[i].id)
      {

         if (replace)
         {
            if (progress >= 1) complete = true;
            this.achs_progress[j].progress = progress;
         } else {
            if (this.achs_progress[j].progress < 1 &&
                this.achs_progress[j].progress + progress >= 1) complete = true;
            this.achs_progress[j].progress += progress;
         }
            break;
      }
   }

   this.savePlayerAchs();

   if (complete)
   {
      this.showAch(this.achs[i]);
   }
   return complete;
}

PlayerData.prototype.loadEnd = function()
{
   PlayerData.inst.createAchProgress();
   window.dbinit  = true;
   checkDb();
   if (window.dbinit && window.loaded)
   {
      window.loadingState = "game";
      assetsButSoundsLoaded();
   }
   SM.inst.openStage(charStage);
}

PlayerData.prototype.updateEnergy = function()
{
   var d = (new Date()).getTime() - this.playerItem.updateDate.getTime();
   d /= 1000;//secs
   d /= 60; //minutes
   this.playerItem.energy += d*0.08;
}

PlayerData.prototype.createAchProgress = function(cb)
{
   for (var i = 0; i< this.achs.length; ++i)
   {

      var containAch = false;
      for (var j = 0; j < this.achs_progress; ++j)
      {
         if (this.achs[i].id == this.achs_progress[j].id_ach)
         {
            containAch = true;
            break;

         }
      }

      if (!containAch)
      {
         this.achs_progress.push({id_ach: this.achs[i].id, id_player: this.playerItem.id, progress: 0});
      }

   }

}

PlayerData.prototype.loadData = function(cb)
{
   this.loadCount = 0;

   var totalLoads = 7;
   window.azureclient.getTable("tb_players").read().done(
   function (results) {
      PlayerData.inst.playerItem = results[0];

      PlayerData.inst.playerItem.name = vkparams.first_name;
      PlayerData.inst.playerItem.last_name = vkparams.last_name;

      PlayerData.inst.updateEnergy();

      azureclient.invokeApi("update_score", {
         body: {id_player: PlayerData.inst.playerItem.id, score: PlayerData.inst.playerItem.maxdistance},
         method: "post"
      }).done();

      if (!PlayerData.inst.playerItem.crystals)
         PlayerData.inst.playerItem.crystals = 0;
      PlayerData.inst.loadCount ++;
      if (PlayerData.inst.loadCount == totalLoads && cb) cb();
      }, function (res) {}
   );

   window.azureclient.getTable("tb_achs").read().done(
       function (results) {
          PlayerData.inst.achs = results;
          PlayerData.inst.loadCount ++;
          if (PlayerData.inst.loadCount == totalLoads && cb) cb();
       }, function (res) {}
   );


   window.azureclient.getTable("tb_ach_player").read().done(
       function (results) {
          PlayerData.inst.achs_progress = results;

          PlayerData.inst.loadCount ++;
          if (PlayerData.inst.loadCount == totalLoads && cb) cb();
       }, function (res) {}
   );


   window.azureclient.getTable("tb_items").read().done(
       function (results) {
          PlayerData.inst.items = results;
          PlayerData.inst.loadCount ++;
          if (PlayerData.inst.loadCount == totalLoads && cb) cb();
       }, function (res) {}
   );

   window.azureclient.getTable("tb_item_player").read().done(
       function (results) {
          PlayerData.inst.items_enabled = results;
          PlayerData.inst.loadCount ++;
          if (PlayerData.inst.loadCount == totalLoads && cb) cb();
       }, function (res) {}
   );

   window.azureclient.getTable("tb_edevent_player").read().done(
       function (results) {
          PlayerData.inst.eventsplayer = results;
          PlayerData.inst.loadCount ++;
          if (PlayerData.inst.loadCount == totalLoads && cb) cb();
       }, function (res) {}
   );

   window.azureclient.getTable("tb_edevent").read().done(
       function (results) {
          PlayerData.inst.events = results;
          PlayerData.inst.loadCount ++;
          if (PlayerData.inst.loadCount == totalLoads && cb) cb();
       }, function (res) {}
   );
}

PlayerData.prototype.savePlayerData = function()
{
   this.savePlayerData();
   this.savePlayerItems();
   this.savePlayerEvents();
   this.savePlayerAchs();
}

PlayerData.prototype.savePlayerAchs = function()
{
   for (var i = 0; i < PlayerData.inst.achs_progress.length; ++i)
      window.azureclient.getTable("tb_achs_player").update(PlayerData.inst.achs_progress[i]).done(function (result) {
         //   alert("updating done");
      }, function (err) {
         //   alert("Error: " + err);
      });
}


PlayerData.prototype.savePlayerEvents = function()
{
   for (var i = 0; i < PlayerData.inst.eventsplayer.length; ++i)
      window.azureclient.getTable("tb_edevent_player").update(PlayerData.inst.eventsplayer[i]).done(function (result) {
      //   alert("updating done");
      }, function (err) {
      //   alert("Error: " + err);
      });
}


PlayerData.prototype.savePlayerItems = function()
{
   for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
   window.azureclient.getTable("tb_item_player").update(PlayerData.inst.items_enabled[i]).done(function (result) {
   //   alert("updating done");
   }, function (err) {
   //   alert("Error: " + err);
   });
}


PlayerData.prototype.savePlayerData = function()
{
   window.azureclient.getTable("tb_players").update(PlayerData.inst.playerItem).done(function (result) {
      PlayerData.inst.playerItem = result;
   //   alert("updating done");
   }, function (err) {
   //   alert("Error: " + err);
   });
}