/**
 * Created by KURWINDALLAS on 05.07.2014.
 */
LevelManager = function()
{
}

LevelManager.totalScore = function()
{
    var t = 0;
   for (var i =1; i <= 40; ++i)
   {
         var prevScore =
         dataStorage["lvlsc" + i.toString()];
        if (prevScore) t+= prevScore;

   }
    return t;
}


LevelManager.getStars = function (lev, totalScore)
{
    var score3stars = LevelManager.stars3score[lev - 1];
    if (totalScore >= score3stars) return 3; else
    {
        if (totalScore >= score3stars*0.95) return 2; else
        if (totalScore >= score3stars*0.85) return 1; else return 0;
    }
}

LevelManager.onComplete = function()
{
    if (!LevelManager.layer) LevelManager.layer = SM.inst.ol;
    CObj.AssignTexturesToObjects(LevelManager.objs, LevelManager.layer);

    var objlen = LevelManager.objs.length;


  /*  if (window.gameStage) {
        world.step(1 / 1000000);
    }*/

    for (var i = 0; i < LevelManager.objs.length; ++i)
    {
        LevelManager.objs[i].init();
    }

    //OPTIMIZATION ISSUE
    //LevelManager.objs = null;

    if (LevelManager.onVeryComplete) LevelManager.onVeryComplete();
}

LevelManager.removeLastLevel = function()
{
    while (LevelManager.objs.length > 0) {
        LevelManager.objs[0].destroy();
        LevelManager.objs.splice(0, 1);
    }
}

LevelManager.loadLevel = function(str, onCompleteFunction, layer)
{
    var data = LevelManager.levels["levels/" + str + ".json"];
    LevelManager.objs = CObj.DeserializeArray(data);
    LevelManager.layer = layer;
    LevelManager.objs.sort(function (a, b) {
        if (a.layer == b.layer) {
          return 0;
          //  if (a.creationIndex < b.creationIndex) return -1; else return 1;
        }
        else if (a.layer < b.layer) return -1; else return 1;
    });

    var atlases = [];

    for (var i = 0; i < LevelManager.objs.length; ++i)
    {
        if ((LevelManager.objs[i].sAtlasName != undefined) && (LevelManager.objs[i].sAtlasName!="")&& atlases.indexOf(LevelManager.objs[i].sAtlasName) < 0)
        {
            atlases.push(LevelManager.objs[i].sAtlasName);
        }
    }

    LevelManager.onVeryComplete = onCompleteFunction;

    var assetsToLoader = [];

    for (i = 0; i < atlases.length; ++i)
    {
        var path = "imgtps/" + atlases[i] ;
        var o = PIXI.BaseTextureCache[path + ".png"];
        if (!o)
        assetsToLoader.push(path+ ".json");
    }

    if (assetsToLoader.length > 0) {
        var loader = new PIXI.AssetLoader(assetsToLoader);
        loader.load();
        loader.onComplete = LevelManager.onComplete;
    } else LevelManager.onComplete();

}
LevelManager.inst = new LevelManager();
LevelManager.levels = {};