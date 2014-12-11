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

PlayerData.prototype.loadData = function(cb)
{
   this.loadCount = 0;
   window.azureclient.getTable("tb_players").read().done(
   function (results) {
      PlayerData.inst.playerItem = results[0];
      if (!PlayerData.inst.playerItem.crystals)
         PlayerData.inst.playerItem.crystals = 0;
      PlayerData.inst.loadCount ++;
      if (PlayerData.inst.loadCount == 3 && cb) cb();
      }, function (res) {}
   );

   window.azureclient.getTable("tb_items").read().done(
       function (results) {
          PlayerData.inst.items = results;
          PlayerData.inst.loadCount ++;
          if (PlayerData.inst.loadCount == 3 && cb) cb();
       }, function (res) {}
   );

   window.azureclient.getTable("tb_item_player").read().done(
       function (results) {
          PlayerData.inst.items_enabled = results;
          PlayerData.inst.loadCount ++;
          if (PlayerData.inst.loadCount == 3 && cb) cb();
       }, function (res) {}
   );

/*


 query.where({
 id_player: "Custom:"+user.userId
 });
*/

}

PlayerData.prototype.savePlayerItems = function()
{
   for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
   window.azureclient.getTable("tb_item_player").update(PlayerData.inst.items_enabled[i]).done(function (result) {
      alert("updating done");
   }, function (err) {
      alert("Error: " + err);
   });
}


PlayerData.prototype.savePlayerData = function()
{
   window.azureclient.getTable("tb_players").update(PlayerData.inst.playerItem).done(function (result) {
      PlayerData.inst.playerItem = result;
      alert("updating done");
   }, function (err) {
      alert("Error: " + err);
   });
}