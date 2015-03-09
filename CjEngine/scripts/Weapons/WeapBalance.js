/**
 * Created by KURWINDALLAS on 22.11.2014.
 */
//_id, _name, _desc,  __recoil, __magcap, __delay, __damage, __unlockPrice, _upgrades
var w_pistol = new CPistol(
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {
        visualWidth: 20,
        dw: -0.7,
        speed: 40.5,
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
        visualWidth: 15,
        dw: 0.3,
        speed: 50.5,
        sound: "rifle",
        life: 3,
        acc: 0.05,
        recoil: 0, //recoil
        accIncrease: 0.02,
        accRecoil: 0.1,
        magcap: 6, //magcap
        delay: 380, //delay
        damage: 66, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 1350},//__reloadTime,}
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
        visualWidth: 20,
        dw: -0.7,
        speed: 38.5,
        sound: "mini",
        life: 1,
        acc: 0.022,
        accIncrease: 0.02,
        accRecoil: 0.1,
        recoil: 3.0, //recoil
        magcap: 20, //magcap
        delay: 120, //delay
        damage: 28, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 900},//__reloadTime,}
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
        visualWidth: 20,
        dw: -0.7,
        speed: 40.5,
        sound: "mini",
        life: 2,
        acc: 0.05,
        recoil: 0.1, //recoil
        accIncrease: 0.029,
        accRecoil: 0.127,
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
        visualWidth: 20,
        dw: -0.9,
        speed: 60.5,
        sound: "ochered",
        queue: 4,
        queueDelay: 110,
        life: 1,
        acc: 0.08,
        accIncrease: 0.02,
        accRecoil: 0.1,
        recoil: 1.5, //recoil
        magcap: 50, //magcap
        delay: 600, //delay
        damage: 55, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 2200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);


var w_grenadel = new CGrenadeLauncher(
    "grenade launcher", //id
    "лазер", //name
    "описание", //desc
    {
        visualWidth: 20,
        dw: -0.7,
        speed: 40.5,
        sound: "laser",
        life: 1,
        acc: 0.08,
        accIncrease: 0.0,
        accRecoil: 0.0,
        recoil: 3, //recoil
        magcap: 3, //magcap
        delay: 400, //delay
        damage: 110, //damage
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
        visualWidth: 20,
        dw: -0.7,
        speed: 40.5,
        sound: "laser",
        life: 1,
        acc: 0.08,
        accIncrease: 0.0,
        accRecoil: 0.0,
        recoil: 0, //recoil
        magcap: 60, //magcap
        delay: 150, //delay
        damage: 190, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 2200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);

