/**
 * Created by KURWINDALLAS on 22.11.2014.
 */
CWeapon = function(_id, _name, _desc,  __params, __gfx, _upgrades) {


    this.lastShot = 0;
    this.backupStats = __params;
    this.resetParams();
    this.clipGfx = __gfx;
    this.sReload = 1;
    this.sFire = 2;
    this.state = this.sFire;

    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.unlocked = false;
    this.upgrades = _upgrades;
    if (!CWeapon.list) CWeapon.objects = [];
    CWeapon.objects.push(this);

};


CWeapon.prototype.resetParams = function()
{
    this.ammo = this.backupStats.magcap;
    this.recoil = this.backupStats.recoil;
    this.delay= this.backupStats.delay;
    this.damage = this.backupStats.damage;
    this.magCapacity = this.backupStats.magcap;
    this.unlockPrice = this.backupStats.unlockPrice;
    this.reloadTime = this.backupStats.reloadTime;
    this.upgrCostLevel = this.backupStats.upgrCostLevel;
}

CWeapon.prototype.process = function()
{
}

CWeapon.prototype.shot = function()
{
    if (!this.canShot()) return false;
    if (this.state == this.sReload) return false;
    if (this.ammo < 0)
    {
        this.reload();
        return false;
    }
    this.lastShot = (new Date()).getTime();

    window.recoil += this.recoil * (0.8 + 0.8 * (Math.random()));
    this.ammo --;
    if (!window.totalShots) window.totalShots = 0;
    window.totalShots ++;

    if (this.ammo == 0) this.reload();

    this.updateAmmo();
    return true;
}


CWeapon.prototype.canShot = function()
{
    var t = (new Date()).getTime();
    if (this.state == this.sReload) return false;

    if (t - this.lastShot >= this.delay) return true; else
    return false;
}



CWeapon.prototype.updateAmmo = function()
{
    CObj.getById("ammobar").prop =(this.ammo / this.magCapacity);
}

CWeapon.prototype.reload = function()
{
    var wp = this;
    wp.state = this.sReload;

    new TweenMax(CObj.getById("ammobar"), this.reloadTime / 1000., {prop: 1});
    TweenMax.delayedCall(this.reloadTime / 1000., function ()
  {
      wp.state = wp.sFire;
      wp.ammo = wp.magCapacity;
      wp.updateAmmo();
  });
}


CWeapon.prototype.retrieveData = function()
{
    //retrieves data from server

}


CWeapon.prototype.applyUpgrades = function(upgrds)
{
    for (var i = 0; i < upgrds.length; ++i)
    {
        var upgr = upgrds[i];
        this[upgr.param] += upgr.value;
    }
}
