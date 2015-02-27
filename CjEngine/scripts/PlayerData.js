/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
PlayerData = function(pi)
{
   this.maxEnergy = 10;
   this.epm = 0.2;
   this.delayEnergyMS = (1 / this.epm)*60000;
   this.xpLevel = [
      {crystals: 1, money: 25, xp: 0},
      {crystals: 1, money: 50, xp: 250},
      {crystals: 1, money: 100, xp: 400},
      {crystals: 1, money: 200, xp: 500},
      {crystals: 2, money: 400, xp: 1000},
      {crystals: 2, money: 800, xp: 1800},
      {crystals: 2, money: 1000, xp: 3300},
      {crystals: 2, money: 1500, xp: 6000},
      {crystals: 3, money: 2000, xp: 10000},
      {crystals: 3, money: 2500, xp: 18000},
      {crystals: 3, money: 3000, xp: 25000}];

   this.items = {};
   this.achs = {};
   if (pi) {
      this.playerItem = pi;

   }// else this.loadEnd();
   this.activeBoosters = [];

   this.score = 0;
   this.loadData(this.loadEnd);

   PlayerData.inst = this;
}

PlayerData.prototype.addNotification = function(message, vkapi)
{
   var t = window.azureclient.getTable("tb_notifications");
   t.insert({message: message, vkapi: vkapi});
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

PlayerData.prototype.getType = function (item_player)
{
   for (var i = 0; i < PlayerData.inst.items.length; ++i)
   {
      if (PlayerData.inst.items[i].id == item_player.id_item)
         return PlayerData.inst.items[i].type;
   }
   return null;
}


PlayerData.prototype.equipItem = function(item)
{
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
      if (this.getType(PlayerData.inst.items_enabled[i]) == itemtype)
      {
         if (PlayerData.inst.items_enabled[i].id_item == id)
            PlayerData.inst.items_enabled[i].equipped = true; else
         PlayerData.inst.items_enabled[i].equipped = false;
      }
   }

   this.savePlayerItems();
}


PlayerData.prototype.gainExp = function(amount) {
   console.log("XP " + amount.toString());
   this.playerItem.xp += amount;
   var c = this.playerItem.xp;
   var needed = this.xpLevel[this.playerItem.lvl].xp;

   if (c >= needed && this.playerItem.lvl + 1 < this.xpLevel.length) ///levelup
   {
      this.playerItem.xp -= this.xpLevel[this.playerItem.lvl].xp;
      this.playerItem.crystals += this.xpLevel[this.playerItem.lvl].crystals;
      this.playerItem.lvl++;

      ZSound.Play("levelup");

      if (SM.inst.currentStage == gameStage) {
         this.score += this.xpLevel[this.playerItem.lvl].money;

         gameStage.updateScore();
         gameStage.pause();

         LevelManager.loadLevel("levelup",
             function () {
                CObj.getById("moneytf").text = PlayerData.inst.xpLevel[PlayerData.inst.playerItem.lvl].money.toString();
                CObj.getById("crystalstf").text = PlayerData.inst.xpLevel[PlayerData.inst.playerItem.lvl].crystals.toString();
                CObj.getById("levnum").text = PlayerData.inst.playerItem.lvl.toString();
                CObj.getById("btnclose").click = function () {
                   for (var i = 0; i < LevelManager.objs.length; ++i) {
                      LevelManager.objs[i].destroy();
                   }
                   LevelManager.objs = null;
                   if (SM.inst.currentStage == gameStage) {
                      gameStage.unpause();
                   } else {
                      charStage.updateStatsPanel();
                   }
                };


             }
             , SM.inst.guiLayer);
      } else {
         this.playerItem.money += this.xpLevel[this.playerItem.lvl].money;
         this.savePlayerData();
         charStage.updateStatsPanel();
      }
   }

   if (SM.inst.currentStage == gameStage) {
      gameStage.updateXP();
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
  new TweenMax(cont, 0.3, {delay: 1.8, alpha: 0., onComplete: function () {cont.parent.removeChild(cont);}});
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
      if (this.achs_progress[j].id_ach == this.achs[i].id)
      {

         if (replace)
         {
            if (progress >= 1) complete = true;
            this.achs_progress[j].progress = progress;
         } else {
            if (this.achs_progress[j].progress < 1 &&
                this.achs_progress[j].progress + progress >= 1)
               complete = true;
            this.achs_progress[j].progress += progress;
         }
            break;
      }
   }



   if (complete)
   {
      this.savePlayerAchs();
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
    //  window.loadingState = "game";
      assetsButSoundsLoaded();
   }
   SM.inst.openStage(charStage);
}

PlayerData.prototype.updateEnergy = function()
{
   var d = (new Date()).getTime() - this.playerItem.updateDate.getTime();
   this.playerItem.updateDate = new Date();

   d /= 1000;//secs
   d /= 60; //minutes
   if (d > 0)


   this.playerItem.energy += d*this.epm;


   if (this.playerItem.energy > this.maxEnergy) {
      this.playerItem.energy = this.maxEnergy;
   }
   this.savePlayerData();

   if (SM.inst.currentStage == charStage || SM.inst.currentStage == shopStage)
   {
      shopStage.updateStatsPanel();

   }
   console.log("UPD ENERGY");
   var t = this;
   setTimeout(function(){t.updateEnergy();}, this.delayEnergyMS);
}

PlayerData.prototype.createAchProgress = function(cb)
{
   for (var i = 0; i< this.achs.length; ++i)
   {

      var containAch = false;
      for (var j = 0; j < this.achs_progress.length; ++j)
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

incMetric = function(name)
{
   azureclient.invokeApi("increasemetric", {
      body: {name: name},
      method: "post"
   }).done();
}

PlayerData.prototype.getEventById = function(id)
{
   for (var i = 0; i < this.events.length; ++i)
   {
      if (this.events[i].id == id) return this.events[i];
   }

   return null;
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
       }, function (res) {
          console;
       }
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


          var defaultRifleID = "68AFAEDC-B3E0-401E-9E1A-E272084F2E11";



          var found = false;
          var eq = false;
          var inxRifle = -1;
          for (var i = 0;i < PlayerData.inst.items_enabled.length; ++i)
          {
            if (PlayerData.inst.items_enabled[i].id_item == defaultRifleID)
            {
               inxRifle = i;
               found = true;
          //     break;
            }
             if (PlayerData.inst.items_enabled[i].equipped)
             eq = true;
          }

          if (!eq && found)
             PlayerData.inst.items_enabled[inxRifle].equipped = true;


          if (!found)
          {
             azureclient.invokeApi("buy_item", {
                body: {id_item: defaultRifleID, id_player: PlayerData.pid, equipped: eq},
                method: "post"
             }).done(function (results) {
             }, function(error) {
             });

             var eq = true;
             if (PlayerData.inst.items_enabled.length > 0)
                eq = false;
             PlayerData.inst.items_enabled.push(
                 {
                    id_item: defaultRifleID,
                    id_player:PlayerData.pid,
                    equipped: eq
                 }
             );



             PlayerData.inst.savePlayerItems();
          }

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
      window.azureclient.getTable("tb_ach_player").update(PlayerData.inst.achs_progress[i]).done(function (result) {
      }, function (err) {
      });
}


PlayerData.prototype.savePlayerEvents = function()
{
   for (var i = 0; i < PlayerData.inst.eventsplayer.length; ++i)
      window.azureclient.getTable("tb_edevent_player").update(PlayerData.inst.eventsplayer[i]).done(function (result) {
      }, function (err) {
      });
}


PlayerData.prototype.savePlayerItems = function()
{
   for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
   window.azureclient.getTable("tb_item_player").update(PlayerData.inst.items_enabled[i]).done(function (result) {
   }, function (err) {
   });
}


PlayerData.prototype.savePlayerData = function()
{
   window.azureclient.getTable("tb_players").update(PlayerData.inst.playerItem).done(function (result) {
      PlayerData.inst.playerItem = result;
   }, function (err) {
   });
}