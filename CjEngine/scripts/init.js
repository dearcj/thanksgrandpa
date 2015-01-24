/**
 * Created by KURWINDALLAS on 29.11.2014.
 */


getURLParameter = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}

loginCallback = function(playerItem)
{
    if (vkparams.novk) {
        new PlayerData(playerItem);
        return;
    }
    var loaded = 0;
    VK.api('friends.get',{user_id:vkparams.viewerid, order: 'name', count: 1000, fields: "domain"}, function(data) {
        vkparams.friends = data.response;
        vkparams.friendsids = new Array();
        for (var i = 0; i < vkparams.friends.length; ++i)
        {
            vkparams.friendsids.push(vkparams.friends[i].uid);
        }
        azureclient.invokeApi("get_scores", {
            body: {filter: vkparams.friendsids},
            method: "post"
        }).done(function (results) {
            loaded ++;

            vkparams.friendsIngame = results.result;
            vkparams.friendsIngameIDs = new Array();
            if (!results.result) return;
            for (var i = 0; i < results.result.length; ++i)
            {
                vkparams.friendsIngameIDs.push(results.result[i].vkapi);
            }

            if (loaded == 2)
                new PlayerData(playerItem);
        }, function(error) {
        });

    })

    VK.api('users.get',{user_ids:vkparams.viewerid.toString()}, function(data) {
        vkparams.first_name = data.response[0].first_name;
        vkparams.last_name = data.response[0].last_name;
        loaded++;
        if (loaded == 2)
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

    //CCREMOVE!!!!!!!!!!!!!!!!!!!!!!!!
    if (!vkparams.viewerid)
    {
        vkparams.viewerid = 2882845;
        vkparams.novk = true;
    }

    vkparams.gamerid = vkparams.userid ||  vkparams.viewerid;
    vkparams.auth_key = getURLParameter("auth_key");
    vkparams.refferer = getURLParameter("referrer");
    vkparams.accesstoken = getURLParameter("access_token");
    azureclient.invokeApi("login", {
        body: {vkapi: vkparams.viewerid, ref: vkparams.refferer},
        method: "post"
    }).done(function (results) {
        var message = results.result;
        PlayerData.pid = results.result.userId.split(':')[1];;

        azureclient.currentUser = {userId:results.result.userId, mobileServiceAuthenticationToken: results.result.token};
        vkparams.id = results.result.id;
        loginCallback(results.result);
    }, function(error) {
    });
}
