/**
 * Created by KURWINDALLAS on 10.02.2015.
 */
/**
 * Created by KURWINDALLAS on 08.02.2015.
 */
extend(BonusMonGnome, CMonster, true);

function BonusMonGnome(in_x,in_y,animname,cr_bar){
   CMonster.apply(this,[in_x,in_y,animname, cr_bar]);
    this.xp = 30;
    new TweenMax(this, 0.9, {y: this.y + 40, repeat: -1, yoyo: true});
}

BonusMonGnome.prototype.dealDamage = function(dmg)
{
    CMonster.prototype.dealDamage.call(this, dmg);

    CCoin.spawnCoin(this.x, this.y, 3);
}

BonusMonGnome.prototype.destroy = function()
{
}