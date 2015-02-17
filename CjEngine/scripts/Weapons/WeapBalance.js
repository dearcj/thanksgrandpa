/**
 * Created by KURWINDALLAS on 22.11.2014.
 */
//_id, _name, _desc,  __recoil, __magcap, __delay, __damage, __unlockPrice, _upgrades
var w_pistol = new CPistol(
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {
        sound: null,
        acc: 0.05,
        recoil: 12, //recoil
    magcap: 10, //magcap
    delay: 120, //delay
    damage: 12, //damage
    unlockprice: 10, //unlockprice
    reloadTime: 1200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);

var w_rifle = new CPistol(
    "Мосинка", //id
    "пистолет", //name
    "описание", //desc
    {
        sound: "rifle",
        life: 3,
        acc: 0.05,
        recoil: 19, //recoil
        magcap: 5, //magcap
        delay: 820, //delay
        damage: 66, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 1200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);


var w_pps = new CPistol(
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {
        sound: "mini",
        life: 1,
        acc: 0.25,
        recoil: 1.0, //recoil
        magcap: 20, //magcap
        delay: 120, //delay
        damage: 33, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 1200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);


var w_minigun = new CPistol(
    "MINIGUN", //id
    "пистолет", //name
    "описание", //desc
    {
        sound: "mini",
        life: 2,
        acc: 0.25,
        recoil: 0.1, //recoil
        magcap: 100, //magcap
        delay: 60, //delay
        damage: 18, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 2200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);

var w_ak74 = new CQueueGun(
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {
        sound: "mini",
        queue: 4,
        queueDelay: 110,
        life: 1,
        acc: 0.08,
        recoil: 1.3, //recoil
        magcap: 30, //magcap
        delay: 600, //delay
        damage: 18, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 2200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);

var w_laser = new CLaser(
    "laser", //id
    "лазер", //name
    "описание", //desc
    {
        sound: "laser",
        life: 1,
        acc: 0.08,
        recoil: 0, //recoil
        magcap: 60, //magcap
        delay: 150, //delay
        damage: 180, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 2200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);

