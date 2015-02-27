/**
 * Created by KURWINDALLAS on 10.02.2015.
 */
/**
 * Created by KURWINDALLAS on 08.02.2015.
 */
extend(BonusMonGnome, CMonster, true);

function BonusMonGnome(in_x,in_y,animname,cr_bar){
   CMonster.apply(this,[in_x,in_y,null, cr_bar]);
    this.gfx = new PIXI.Spine("imgtps/bird.json");
    this.gfx.state.setAnimationByName(0, "animation", true);
    //  g.skeleton.setSkinByName('perded');
  // this.offsetX = 50;
    //this.gfx.pivot.x = -50;
    this.gfx.scale.x = 0.48;
    this.gfx.scale.y = 0.48;
    this.updateGraphics();
    LauncherBG.inst.ol.addChild(this.gfx);
    this.xp = 30;
  //  new TweenMax(this, 0.9, {y: this.y + 40, repeat: -1, yoyo: true});
}

BonusMonGnome.prototype.collide = function (obj2)
{

}

BonusMonGnome.prototype.dealDamage = function(dmg)
{
    CMonster.prototype.dealDamage.call(this, dmg);
    if (gameStage.player.double)
    {
        CCoin.spawnCoin(this.x, this.y, 6);
    } else CCoin.spawnCoin(this.x, this.y, 3);
}
