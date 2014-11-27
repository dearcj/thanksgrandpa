/**
 * Created by KURWINDALLAS on 22.11.2014.
 */
//_id, _name, _desc,  __recoil, __magcap, __delay, __damage, __unlockPrice, _upgrades
var w_pistol = new CPistol(
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {recoil: 12, //recoil
    magcap: 20, //magcap
    delay: 1200, //delay
    damage: 100, //damage
    unlockprice: 10, //unlockprice
    reloadTime: 1200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);

