/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
PlayerData = function(pi)
{
   this.playerItem = pi;
   this.saveData();
   SM.inst.openStage(charStage);


   this.inst = this;
}

PlayerData.prototype.saveData = function()
{
   window.azureclient.getTable("tb_players").update(this.playerItem);
   JSON.stringify(this.playerItem);
}

PlayerData.inst.score = 0;