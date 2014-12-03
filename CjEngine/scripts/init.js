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
    });
}

loginCallback = function()
{

}

createAchs = function(uid)
{
    azureclient.getTable('tb_achs').read().done(
        function (results) {
            for (var i = 0; i < results.length; ++i)
            {
                var plach = {id_ach: results[i].id, id_player: uid, progress: 0};
                azureclient.getTable('tb_ach_player').insert(plach);
            }
            console.log();
        }, function (err) {
            console.log("Error: " + err);
        });
}
dbInit = function() {
    window.azureclient = new WindowsAzure.MobileServiceClient("https://thanksdad.azure-mobile.net/", "DRoaNHnoaCjxrhkbpOzHxGEHOFgGLS75" );
    var userid = getURLParameter("user_id");
    var sid = getURLParameter("sid");
    var viewerid = getURLParameter("user_id");

    var gamerid = userid || viewerid;
    var auth_key = getURLParameter("auth_key");
    var refferer = getURLParameter("referrer");
   /// userid = 888;
    azureclient.invokeApi("login", {
        body: {vkapi: userid, ref: refferer},
        method: "post"
    }).done(function (results) {
        var message = results.result;
        azureclient.currentUser = {userId:results.result.userId, mobileServiceAuthenticationToken: results.result.token};
        createAchs(results.result.id);

        loginCallback();
    }, function(error) {
        azureclient.login(results.result.userId, results.result.token);
    //    loginCallback();
    });



    /*

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


    });*/
}