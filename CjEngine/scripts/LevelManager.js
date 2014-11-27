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

LevelManager.stars3score = [
    1910, //1
    2850, //2
    2770, //3
    2560, //4
    4650, //5
    3050, //6
    3060, //7
    3480, //8
    4760, //9
    2760, //10
    4940, //11
    6800, //12
    5890, //13
    4320, //14
    5400, //15
    4660, //16
    3780, //17
    6200, //18
    5230, //19
    6100, //20
    3520, //21
    4860, //22
    3500, //23
    3820, //24
    4410, //25
    3650, //26
    5820, //27
    4470, //28
    4210, //29
    5200, //30
    5040, //31
    2250, //32
    2370, //33
    3000, //34
    5380, //35
    5370, //36
    5290, //37
    3240, //38
    4770, //39
    3610
];


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
            if (window.iphone3)
                atlases.push(LevelManager.objs[i].sAtlasName + "_min"); else
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