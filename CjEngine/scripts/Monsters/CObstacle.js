
extend(CObstacle, CMonster, true);

function CObstacle(in_x,in_y,animname,cr_bar){
    CMonster.apply(this,[in_x,in_y,animname, false]);
}

CObstacle.prototype.dealDamage = function(dmg)
{
    CMonster.prototype.dealDamage.call(this, dmg);
}

CObstacle.prototype.collide = function (obj2)
{
    var preHp = obj2.hp;

   CMonster.prototype.collide.call(this, obj2);

    if (!this.collided && obj2 == gameStage.player && obj2.hp != preHp && obj2.y < this.y)
    {
        this.collided = true;
        gameStage.player.onDmgAnim(this);
    }
}
