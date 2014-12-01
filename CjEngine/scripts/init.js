/**
 * Created by KURWINDALLAS on 29.11.2014.
 */


getURLParameter = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}


createNewPlayer = function(apiid, _ref)
{
    var item = {vkapi: apiid, level: 1, xp: 0, ref: _ref};
    window.azureclient.getTable("tb_players").insert(item).done(function (results) {
        var db_player_id = new PlayerData(results[0].id);
        var pl = new PlayerData(db_player_id);
    }, function (err) {
        console.log("Error: " + err);
    })

}

dbInit = function() {
    window.azureclient = new WindowsAzure.MobileServiceClient("http://thanksdad.azure-mobile.net/", "DRoaNHnoaCjxrhkbpOzHxGEHOFgGLS75" );
    var userid = getURLParameter("user_id");
    var sid = getURLParameter("sid");
    var viewerid = getURLParameter("user_id");

    var gamerid = userid || viewerid;
    var auth_key = getURLParameter("auth_key");
    var refferer = getURLParameter("referrer");
    userid = 1;
    window.azureclient.getTable("tb_players").where({
        vkapi: userid
    }).read().done(function (results) {
        if (results.length == 0) {
            var db_player_id = createNewPlayer(1, refferer);


        } else
        {
            db_player_id = results[0].id;
            var pl = new PlayerData(db_player_id);
        }
    }, function (err) {
        console.log("Error: " + err);


    });
}