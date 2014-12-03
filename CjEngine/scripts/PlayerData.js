/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
PlayerData = function(pi)
{
   this.xpLevel = [0, 100, 200, 500, 1500, 2500, 4000, 7500, 12000, 20000, 25000];


   this.playerItem = pi;

   this.loadData(this.loadEnd);

   PlayerData.inst = this;
}


PlayerData.prototype.gainExp = function(amount)
{
   this.playerItem.xp += amount;
   if (this.playerItem.xp >= this.xpLevel[this.playerItem.level])
   {
      this.playerItem.xp -= this.playerItem.level[this.playerItem.level];
      this.playerItem.level++;
   }
}

PlayerData.prototype.loadEnd = function()
{
   SM.inst.openStage(charStage);
}

PlayerData.prototype.loadData = function(cb)
{
   window.azureclient.getTable("tb_players").read().done(
   function (results) {
      PlayerData.inst.playerItem = results[0];
      if (cb) cb();
      }, function (res) {}
   );
}

PlayerData.prototype.saveData = function()
{
   window.azureclient.getTable("tb_players").update(PlayerData.inst.playerItem).done(function (result) {
      PlayerData.inst.playerItem = result;
      alert("updating done");
   }, function (err) {
      alert("Error: " + err);
   });
   JSON.stringify(PlayerData.inst.playerItem);
}