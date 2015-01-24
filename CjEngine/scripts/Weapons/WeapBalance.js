/**
 * Created by KURWINDALLAS on 22.11.2014.
 */
//_id, _name, _desc,  __recoil, __magcap, __delay, __damage, __unlockPrice, _upgrades
var w_pistol = new CPistol(
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {
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
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {
        life: 2,
        acc: 0.05,
        recoil: 12, //recoil
        magcap: 50, //magcap
        delay: 820, //delay
        damage: 50, //damage
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
        life: 1,
        acc: 0.25,
        recoil: 12, //recoil
        magcap: 20, //magcap
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


var w_minigun = new CPistol(
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {
        life: 1,
        acc: 0.33,
        recoil: 12, //recoil
        magcap: 100, //magcap
        delay: 60, //delay
        damage: 8, //damage
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
        queue: 4,
        queueDelay: 110,
        life: 1,
        acc: 0.08,
        recoil: 12, //recoil
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

