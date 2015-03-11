/**
 * Created by KURWINDALLAS on 07.03.2015.
 */

extend(JumpMon, CMonster, true);

function JumpMon(in_x,in_y,animname,cr_bar){
    CMonster.apply(this,[in_x,in_y,animname, cr_bar]);
    this.rollLeave = false;
    //var t = this;
    //new TweenMax.delayedCall(1, function(){t.spawnGrenade();});
}

JumpMon.prototype.process = function()
{


    CMonster.prototype.process.call(this);
};