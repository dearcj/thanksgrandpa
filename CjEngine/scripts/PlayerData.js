/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
PlayerData = function(pi)
{
   this.playerItem = pi;
   SM.inst.openStage(charStage);

   this.loadData(this.loadEnd);

   this.inst = this;
}

PlayerData.prototype.loadEnd = function()
{
   this.playerItem.level = 5;
   this.saveData();
}

PlayerData.prototype.loadData = function(cb)
{
   window.azureclient.getTable("tb_players").read().done(
   function (results) {
      this.playerItem = results[0];
      if (cb) cb();
      }, function (res) {}
   );
}

PlayerData.prototype.saveData = function()
{
   window.azureclient.getTable("tb_players").update(this.playerItem, {success: function() {}, error: function () {}});
   JSON.stringify(this.playerItem);
}