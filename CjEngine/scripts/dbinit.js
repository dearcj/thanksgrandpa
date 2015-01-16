/**
 * Created by KURWINDALLAS on 05.12.2014.
 */

var tWeapon = "weap";
var tPerk = "perk";
var tBoost = "boost";
var tApp = "appearence";

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
                    name: "Накатить за победу",
                    desc: "",
                    delay_min: 2,
                    xp_gain: 10,
                    money_gain: 0
                },
                {
                    name: "Получить пенсию",
                    desc: "desc 2",
                    delay_min: 2,
                    xp_gain: 0,
                    money_gain: 1000
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
                    gfx: "orden.png"
                },
                {
                    name: "Gold medal 3",
                    desc: "Долгий путь 500м", //+
                    gfx: "orden.png"
                },
                {
                    name: "Gold medal 4",
                    desc: "Долгий путь 1000м",// +
                    gfx: "orden.png"
                },
                {
                    name: "Gold medal 5",
                    desc: "Использовать бустер",
                    gfx: "orden.png"
                },
                {
                    name: "Gold medal 6",
                    desc: "10 раз помянул друзей",
                    gfx: "orden.png"
                },
                {
                    name: "Gold medal 7",
                    desc: "Убил первого босса",
                    gfx: "orden.png"
                }
                ,
                {
                    name: "Gold medal 8",
                    desc: "5 дней без перерыва", //+
                    gfx: "orden.png"
                }
                ,
                {
                    name: "Gold medal 9",
                    desc: "10 дней без перерыва", //+
                    gfx: "orden.png"
                }
            ]
    },
    {
        tbname: "tb_items",

        items:
            [
                {
                    type: tWeapon,
                    price :-1,
                    pricecrys: -1,
                    name:"Rifle",
                    desc:"Regular pistol",
                    gfx: "item_pistol",
                    reqlvl: -1
                },
                {
                    type: tWeapon,
                    price: -1,
                    pricecrys: -1,
                    name: "AK-74",
                    desc: "Regular shotgun",
                    gfx: "item_shotgun",
                    reqlvl: -1
                }
                ,
                {
                    type: tWeapon,
                    price: -1,
                    pricecrys: -1,
                    name: "Minigun",
                    desc: "Граната",
                    gfx: "item_boost1",
                    reqlvl: -1
                }
                ,
                {
                    type: tWeapon,
                    price: -1,
                    pricecrys: -1,
                    name: "Grenade launcher",
                    desc: "Граната",
                    gfx: "item_boost1",
                    reqlvl: -1
                }
                ,
                {
                    type: tBoost,
                    price: -1,
                    pricecrys: -1,
                    name: "Magnet",
                    desc: "Магнит",
                    gfx: "item_boost1",
                    reqlvl: 10
                }
                ,
                {
                    type: tBoost,
                    price: -1,
                    pricecrys: 5,
                    name: "Tablets",
                    desc: "Биодобавки",
                    gfx: "item_boost1",
                    reqlvl: 10
                }
                ,
                {
                    type: tBoost,
                    price: -1,
                    pricecrys: -1,
                    name: "Double",
                    desc: "В два раза больше монет!",
                    gfx: "item_boost1",
                    reqlvl: -1
                }
                ,
                {
                    type: tApp,
                    price: -1,
                    pricecrys: -1,
                    name: "Appearence.Hat1",
                    desc: "Шляпа 1",
                    gfx: "hat1",
                    reqlvl: -1
                }
                ,
                {
                    type: tApp,
                    price: -1,
                    pricecrys: -1,
                    name: "Appearence.Hat2",
                    desc: "Шляпа 2",
                    gfx: "hat2",
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
