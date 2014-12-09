/**
 * Created by KURWINDALLAS on 05.12.2014.
 */

var tWeapon = "weap";
var tPerk = "perl";
var tBoost = "boost";


function checkDb ()
{
    updDb(dbobj);
}

var dbobj =
[
    {
        tbname: "tb_achs",
        items:
            [
                {
                    name: "Gold medal 1",
                    desc: "descAPRIO"
                },
                {
                    name: "Gold medal 2",
                    desc: "desc 2"
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
                    name:"Pistol",
                    desc:"Regular pistol",
                    gfx: "item_pistol",
                    reqlvl: -1
                },
                {
                    type: tWeapon,
                    price: 1000,
                    pricecrys: -1,
                    name: "Shotgun",
                    desc: "Regular shotgun",
                    gfx: "item_shotgun",
                    reqlvl: -1
                },
                {
                    type: tPerk,
                    price: -1,
                    pricecrys: -1,
                    name: "Grenade",
                    desc: "Граната",
                    gfx: "item_boost1",
                    reqlvl: -1
                }
            ]

    }
];


function updDb(o, onlyRead)
{
    for (var i = 0; i < o.length; ++i)
    {
        var tname = o[i].tbname;
        var t = window.azureclient.getTable(tname);
        for (var j = 0; j < o[i].items.length; ++j)
        {
            var s = o[i].items[j];
            function xx(someobj, table)
            {

                table.where({
                name: o[i].items[j].name
            }).read().done(function(results)
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
