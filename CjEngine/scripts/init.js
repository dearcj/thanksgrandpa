/**
 * Created by KURWINDALLAS on 29.11.2014.
 */


function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}


function createNewPlayer(apiid, ref)
{
    client.getTable("tb_players").insert({vkapi: apiid, level: 1, xp: 0, ref: });

}

function dbInit() {
    var client = new WindowsAzure.MobileServiceClient( "https://thanksdad.azure-mobile.net/", "DRoaNHnoaCjxrhkbpOzHxGEHOFgGLS75" );
    var userid = getURLParameter("user_id");
    var sid = getURLParameter("sid");
    var viewerid = getURLParameter("user_id");

    var gamerid = userid || viewerid;
    var auth_key = getURLParameter("auth_key");
    var refferer = getURLParameter("referrer");
    userid = 1;
    client.getTable("tb_players").where({
        vkapi: userid
    }).read().done(function (results) {
        if (results.length == 0) {
            var db_player_id = createNewPlayer(1, refferer);
        }
        alert(results);
    }, function (err) {
        alert("Error: " + err);
    });


   // var item = { text: "Прекрасный элемент" }; client.getTable("Item").insert(item);




    //var pl = new PlayerData(db_player_id);
}