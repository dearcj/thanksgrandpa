/**
 * Created by KURWINDALLAS on 05.12.2014.
 */

var tWeapon = "weap";
var tPerk = "perk";
var tBoost = "boost";
var tApp = "app.";
var tHat = "hat";

function checkDb ()
{
    updDb(dbobj);
}

var dbobj =
[


    {
        tbname: "tb_edevent",
        items:
            [
                {
                    desc: "Помянуть боевых товарищей",
                    name: "event1",
                    delay_min: 24*60,
                    xp_gain: 0,
                    money_gain: 0,
                    crystal_gain: 2,
                    gfx: "action 1.png",
                    reqlvl: 2,
                    exectime: 30
                },
                {
                    desc: "Получить пенсию",
                    name: "event2",
                    delay_min: 48*60,
                    xp_gain: 0,
                    money_gain: 500,
                    crystal_gain: 0,
                    gfx: "action 2.png",
                    reqlvl: 1,
                    exectime: 120
                },
                {
                    desc: "Посмотреть новости",
                    name: "event3",
                    delay_min: 6*60,
                    xp_gain: 50,
                    money_gain: 0,
                    crystal_gain: 0,
                    gfx: "action 3.png",
                    reqlvl: 1,
                    exectime: 30
                },
                {
                    desc: "Заглянуть в интернет",
                    name: "event4",
                    delay_min: 24*60,
                    xp_gain: 600,
                    money_gain: 0,
                    crystal_gain: 0,
                    gfx: "action 4.png",
                    reqlvl: 4,
                    exectime: 140
                },
                {
                    desc: "Постирать мундир",
                    name: "event5",
                    delay_min: 2,
                    xp_gain: 0,
                    money_gain: 0,
                    crystal_gain: 8,
                    gfx: "action 5.png",
                    reqlvl: 5,
                    exectime: 120
                },
                {
                    desc: "Доесть ужин",
                    name: "event6",
                    delay_min: 24*60,
                    xp_gain: 100,
                    money_gain: 0,
                    crystal_gain: 0,
                    gfx: "action 6.png",
                    reqlvl: 1,
                    exectime: 10
                },
                {
                    desc: "Позвонить внуку",
                    name: "event7",
                    delay_min: 24*60,
                    xp_gain: 900,
                    money_gain: 0,
                    crystal_gain: 0,
                    gfx: "action 7.png",
                    reqlvl: 5,
                    exectime: 80
                },
                {
                    desc: "Помочь бабке по хозяйству",
                    name: "event8",
                    delay_min: 4*60,
                    xp_gain: 0,
                    money_gain: 0,
                    crystal_gain: 3,
                    gfx: "action 8.png",
                    reqlvl: 4,
                    exectime: 50
                },
                {
                    desc: "Подремать",
                    name: "event9",
                    delay_min: 6*60,
                    xp_gain: 200,
                    money_gain: 0,
                    crystal_gain: 0,
                    gfx: "action 9.png",
                    reqlvl: 3,
                    exectime: 120
                },
                {
                    desc: "Посмотреть фотографии",
                    name: "event10",
                    delay_min: 60,
                    xp_gain: 50,
                    money_gain: 0,
                    crystal_gain: 0,
                    gfx: "action 10.png",
                    reqlvl: 1,
                    exectime: 10

                },
                {
                    desc: "Почитать книгу",
                    name: "event11",
                    delay_min: 4*60,
                    xp_gain: 0,
                    money_gain: 0,
                    crystal_gain: 1,
                    gfx: "action 11.png",
                    reqlvl: 3,
                    exectime: 60

                },
                {
                    desc: "Почистить ордена",
                    name: "event12",
                    delay_min: 24*60,
                    xp_gain: 0,
                    money_gain: 0,
                    crystal_gain: 2,
                    gfx: "action 12.png",
                    reqlvl: 1,
                    exectime: 1

                },
                {
                    desc: "Сходить в поликлинику",
                    name: "event13",
                    delay_min: 48*60,
                    xp_gain: 0,
                    money_gain: 1000,
                    crystal_gain: 3,
                    gfx: "action 13.png",
                    reqlvl: 2,
                    exectime: 200

                },
                {
                    name: "event14",
                    desc: "Покормить кота",
                    delay_min: 6*60,
                    xp_gain: 0,
                    money_gain: 1000,
                    crystal_gain: 0,
                    gfx: "action 14.png",
                    reqlvl: 5,
                    exectime: 30
                }
            ]

    },
    {
        tbname: "tb_achs",
        items:
            [
                {
                    name: "Gold medal 1",
                    desc: "Первый бой",
                    gfx: "orden.png"
                },
                {
                    name: "Gold medal 2",
                    desc: "Долгий путь 100м", //+
                    gfx: "orden6.png"
                },
                {
                    name: "Gold medal 3",
                    desc: "Долгий путь 500м", //+
                    gfx: "orden10.png"
                },
                {
                    name: "Gold medal 4",
                    desc: "Долгий путь 1000м",// +
                    gfx: "orden11.png"
                },
                {
                    name: "Gold medal 5",
                    desc: "Использовать бустер",
                    gfx: "orden5.png"
                },
                {
                    name: "Gold medal 6",
                    desc: "10 раз помянул друзей",
                    gfx: "orden2.png"
                },
                {
                    name: "Gold medal 7",
                    desc: "Убил первого босса",
                    gfx: "orden.png"
                }
                ,
                {
                    name: "Gold medal 8",
                    desc: "3 дня без перерыва", //+
                    gfx: "orden7.png"
                }
                ,
                {
                    name: "Gold medal 9",
                    desc: "10 дней без перерыва", //+
                    gfx: "orden2.png"
                }
                ,
                {
                    name: "Gold medal 10",
                    desc: "Убить 100 школьников", //+
                    gfx: "orden6.png"
                }
                ,
                {
                    name: "Gold medal 11",
                    desc: "Убить 200 школьников", //+
                    gfx: "orden12.png"
                }
            ]
    },
    {
        tbname: "tb_items",

        items:
            [ {
                type: tWeapon,
                price :-1,
                pricecrys: -1,
                name:"Rifle",
                desc:"Ружьишко",
                gfx: "gun0",
                reqlvl: -1
            },
                {
                    type: tWeapon,
                    price :500,
                    pricecrys: -1,
                    name:"PPS",
                    desc:"ППШ",
                    gfx: "gun1",
                    reqlvl: 2
                },
                {
                    type: tWeapon,
                    price: 1000,
                    pricecrys: -1,
                    name: "AK-74",
                    desc: "Калаш",
                    gfx: "gun2",
                    reqlvl: 4
                }
                ,
                {
                    type: tWeapon,
                    price: 2000,
                    pricecrys: 1,
                    name: "Minigun",
                    desc: "Пулемет",
                    gfx: "gun3",
                    reqlvl: 7
                }
                ,
                {
                    type: tWeapon,
                    price: 10000,
                    pricecrys: 5,
                    name: "Grenade launcher",
                    desc: "Гранатомет",
                    gfx: "gun4",
                    reqlvl: 10
                }
                ,
                {
                    type: tWeapon,
                    price: 60000,
                    pricecrys: 15,
                    name: "Plazma Cannon",
                    desc: "Что-то мощное",
                    gfx: "gun5",
                    reqlvl: 15
                }
                ,
                {
                    type: tBoost,
                    price: 500,
                    pricecrys: -1,
                    name: "Magnet",
                    desc: "Магнит",
                    gfx: "booster2",
                    reqlvl: 2
                }
                ,
                {
                    type: tBoost,
                    price: 200,
                    pricecrys: 5,
                    name: "Tablets",
                    desc: "Биодобавки",
                    gfx: "booster1",
                    reqlvl: 1
                }
                ,
                {
                    type: tBoost,
                    price: 800,
                    pricecrys: -1,
                    name: "Health",
                    desc: "Больше ЖЫЗНИ",
                    gfx: "booster4",
                    reqlvl: 5
                }
                ,
                {
                    type: tBoost,
                    price: 1,
                    pricecrys: 1,
                    name: "MarioStar",
                    desc: "Неуязвимость!",
                    gfx: "booster5",
                    reqlvl: 5
                }
                ,
                {
                    type: tBoost,
                    price: 100,
                    pricecrys: -1,
                    name: "Double",
                    desc: "В два раза больше монет!",
                    gfx: "booster3",
                    reqlvl: -1
                }
                ,
                {
                    type: tApp + tHat,
                    price: 100,
                    pricecrys: -1,
                    name: "Appearence.Hat1",
                    desc: "Шляпа 1",
                    gfx: "hat1",
                    reqlvl: -1
                }
                ,
                {
                    type: tApp + tHat,
                    price: 200,
                    pricecrys: -1,
                    name: "Appearence.Hat2",
                    desc: "Шляпа 2",
                    gfx: "hat2",
                    reqlvl: -1
                },
                {
                    type: tApp + tHat,
                    price: 300,
                    pricecrys: -1,
                    name: "Appearence.Hat3",
                    desc: "Шляпа 3",
                    gfx: "hat3",
                    reqlvl: -1
                }
                ,
                {
                    type: tApp + tHat,
                    price: 400,
                    pricecrys: -1,
                    name: "Appearence.Hat4",
                    desc: "Шляпа 4",
                    gfx: "hat4",
                    reqlvl: -1
                },
                {
                    type: tApp + tHat,
                    price: 500,
                    pricecrys: -1,
                    name: "Appearence.Hat5",
                    desc: "Шляпа 5",
                    gfx: "hat5",
                    reqlvl: -1
                }
                ,
                {
                    type: tApp + tHat,
                    price: 600,
                    pricecrys: -1,
                    name: "Appearence.Hat6",
                    desc: "Шляпа 6",
                    gfx: "hat6",
                    reqlvl: -1
                }
            ]

    }
];


function updDb(o, onlyRead)
{
    /*
    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }


    for (var i =0; i < 1000; ++i) {

        var obj = {
            name: makeid(),
            last_name: makeid(),
            vkapi: Math.floor((Math.random()*50000000)).toString(),
            money: 0,
            crystals: 0,
            xp: 0,
            lvl: Math.floor(Math.random()*20),
            energy: 0,
            maxdistance: Math.random()*10000
        }

        azureclient.getTable("tb_players").insert(obj);
    }
*/

    for (var i = 0; i < o.length; ++i)
    {
        var tname = o[i].tbname;
        var t = window.azureclient.getTable(tname);
        for (var j = 0; j < o[i].items.length; ++j)
        {
            var s = o[i].items[j];
            function xx(someobj, table)
            {
                var whereobj;
                    if (o[i].items[j].id)
                    whereobj ={
                        id: o[i].items[j].id
                    }; else
                whereobj ={
                    name: o[i].items[j].name
                };

                table.where(whereobj).read().done(function(results)
            {
                if (results.length > 0) {
                    someobj.id = results[0].id;
                    table.update(someobj);
                } else {
                    table.insert(someobj);
                }}, function (err) {
                console.log("Error: " + err);

        });
        }
            xx(s, t);
        }
    }


}
