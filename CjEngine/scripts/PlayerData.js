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
   }
}

PlayerData.prototype.loadEnd = function()
{
   SM.inst.openStage(charStage);
}

PlayerData.prototype.updateEnergy = function()
{
   var d = (new Date()).getTime() - this.playerItem.updateDate.getTime();
   d /= 1000;//secs
   d /= 60; //minutes
   this.playerItem.energy += d*0.08;
}

PlayerData.prototype.loadData = function(cb)
{
   this.loadCount = 0;

   var totalLoads = 5;
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

/*


 query.where({
 id_player: "Custom:"+user.userId
 });
*/

}

PlayerData.prototype.savePlayerData = function()
{
   this.savePlayerData();
   this.savePlayerItems();
   this.savePlayerEvents();
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