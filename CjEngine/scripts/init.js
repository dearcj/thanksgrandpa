/**
 * Created by KURWINDALLAS on 29.11.2014.
 */


getURLParameter = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}

loginCallback = function(playerItem)
{
    if (vkparams.novk) new PlayerData(playerItem); else;

    VK.api('users.get',{user_ids:vkparams.viewerid.toString()}, function(data) {
        vkparams.first_name = data.response[0].first_name;
        vkparams.last_name = data.response[0].last_name;
        new PlayerData(playerItem);
    });
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
    window.vkparams = {};
    vkparams.userid = getURLParameter("user_id");
    vkparams.sid = getURLParameter("sid");
    vkparams.viewerid = getURLParameter("viewer_id");

    if (!vkparams.viewerid)
    {
        vkparams.viewerid = 2882845;
        vkparams.novk = true;
    }

    vkparams.gamerid =  vkparams.userid ||  vkparams.viewerid;
    vkparams.auth_key = getURLParameter("auth_key");
    vkparams.refferer = getURLParameter("referrer");
    vkparams.accesstoken = getURLParameter("access_token");
    console.log("APIVK" + vkparams.userid);
    console.log("APIVsK" + vkparams.viewerid);
    console.log("HREF = " + window.location.href);
    console.log("SEARCH = " + window.location.search);
    //  userid = 444;
    azureclient.invokeApi("login", {
        body: {vkapi: vkparams.viewerid, ref: vkparams.refferer},
        method: "post"
    }).done(function (results) {
        var message = results.result;
        azureclient.currentUser = {userId:results.result.userId, mobileServiceAuthenticationToken: results.result.token};
        vkparams.id = results.result.id;
    //    createAchs(results.result.id);
        loginCallback(results.result);
    }, function(error) {
      //  azureclient.login(results.result.userId, results.result.token);
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