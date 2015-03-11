
extend(CObstacle, CMonster, true);

function CObstacle(in_x,in_y,animname,cr_bar){
    CMonster.apply(this,[in_x,in_y,animname, cr_bar]);
}

CObstacle.prototype.dealDamage = function(dmg)
{
    CMonster.prototype.dealDamage.call(this, dmg);
}

CObstacle.prototype.collide = function (obj2)
{
    var preHp = obj2.hp;

//&& obj2.y < this.y
    if (!this.collided && obj2 == gameStage.player )
    {
        CMonster.prototype.collide.call(this, obj2);
        this.collided = true;
        gameStage.player.onDmgAnim(this);
    }
};
