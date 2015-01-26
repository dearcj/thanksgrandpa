/**
 * Created by KURWINDALLAS on 17.11.2014.
 */
extend(CLiveObj, CObj, true);

function CLiveObj(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
   this._hp = 100;
   this._maxHp = 100;
   this.bar = null;

}


CLiveObj.prototype.process = function()
{
    CObj.prototype.process.call(this);
}


CLiveObj.prototype.kill = function()
{
    this.destroy();
    this.isKilled = true;
}

CLiveObj.prototype.dealDamage = function(dmg)
{
    this.hp = this.hp - dmg;
}

CLiveObj.prototype.destroy = function()
{
    if (this.doRemove) return;

    if (this.bar)
    {
        this.bar.destroy();
        this.bar = null;
    }
    CObj.prototype.destroy.call(this);

}


Object.defineProperty(CLiveObj.prototype, 'maxHp', {
    get: function () {
        return this._maxHp;
    },
    set: function (value) {
        this._maxHp = value;
        if (this._hp > this._maxHp) this._hp = this._maxHp;
    }
});

CLiveObj.generateProperty('hp', {
    defaultValue: 100,
    get: function() {
        return this._hp;
    },
    set: function (value)
    {
        var dmg = value - this._hp;
        if (value > this._maxHp) this._hp = this._maxHp; else
            this._hp = value;

        if (this.bar)
            this.bar.tweenProp(this._hp / this._maxHp);

        if (this._hp < 1. && !this.isKilled)
        {
            this.kill();
        }
    }
});
/*
Object.defineProperty(CLiveObj.prototype, 'hp', {
    get: function () {
     return this._hp;
    },
    set: function (value) {
        var dmg = value - this._hp;
        if (value > this._maxHp) this._hp = this._maxHp; else
            this._hp = value;

        if (this._hp < 1. && !this.isKilled)
        {
            this.kill();
        }
    }
});
*/