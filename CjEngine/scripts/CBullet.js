/**
 * Created by KURWINDALLAS on 17.11.2014.
 */
extend(CBullet, CObj, true);

function CBullet(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.dmg = 10;
    if (!CBullet.list) CBullet.list = [];
    CBullet.list.push(this);
}

CBullet.prototype.collide = function (obj2)
{
    obj2.dealDamage(this.dmg);
    this.destroy();
}


CBullet.prototype.destroy = function()
{
    var inx = CBullet.list.indexOf(this);
   if (inx >= 0) CBullet.list.splice(inx, 1);
   CObj.prototype.destroy.call(this);
}

CBullet.prototype.process = function() {

    CObj.prototype.process.call(this);
}