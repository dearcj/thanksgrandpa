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
    this.sound = __params.sound;
    this.recoilValue = 0;
    this.acc = this.backupStats.acc;
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
    this.life = this.backupStats.life;
}

CWeapon.prototype.process = function()
{
    this.recoilValue -= 0.25;
    if (this.recoilValue < 0) this.recoilValue = 0;

    this.acc -= this.backupStats.accIncrease;
    if (this.acc < this.backupStats.acc) this.acc = this.backupStats.acc;
}

CWeapon.prototype.shot = function()
{
    if (!this.canShot()) return false;
    if (this.state == this.sReload) return false;
    if (this.sound)
        ZSound.Play(this.sound);



    if (this.ammo < 0)
    {
        this.reload();
        return false;
    }
    this.lastShot = (new Date()).getTime();

    this.acc += this.backupStats.accRecoil;

    this.recoilValue += this.recoil;
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
    gameStage.player.ammobar.text = this.ammo.toString();
}

CWeapon.prototype.reload = function()
{
    var wp = this;
    wp.state = this.sReload;
    gameStage.reloadBar.pos = 0;
    gameStage.reloadBar.gfx.visible = true;
    gameStage.ammoico.gfx.visible = false;
    new TweenMax(gameStage.reloadBar, this.reloadTime / 1000., {pos: 1});
    new TweenMax(this, this.reloadTime / 1000., {ammo: wp.magCapacity});
    TweenMax.delayedCall(this.reloadTime / 1000., function ()
  {
      if (!gameStage.player) return;
      gameStage.ammoico.gfx.visible = true;
      gameStage.reloadBar.gfx.visible = false;
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
