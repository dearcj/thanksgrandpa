/**
 * Created by KURWINDALLAS on 19.11.2014.
 */

extend(LauncherBG, CObj, true);


function LauncherBG(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.levCycles = [];
    this.gfx = new PIXI.DisplayObjectContainer();
    SM.inst.bg.addChild(this.gfx);
    this.maxVelocity = 12;
  //  var inx = CObj.objects.indexOf(this);
  //  CObj.objects.splice(inx);
    this.distance = 0;
}

LauncherBG.prototype.clear = function()
{
    this.levCycles.splice(0, this.levCycles.length);
    this.distance = 0;
}

LauncherBG.prototype.destroy = function()
{
    this.clear();
    CObj.prototype.destroy.call(this);
}

LauncherBG.prototype.spawnClip = function(layer, obj, spawnStart)
{
    var cobj = CObj.DeserializeCObj(obj);
    CObj.AssignTexturesToObjects([cobj],SM.inst.bg);
    var g = cobj.gfx;
    if (g) cobj.gfx.parent.removeChild(g);
    cobj.gfx = null;
    cobj.destroy();

    if (g) {
        layer.clip.addChild(g);
        layer.rightBound += obj.baseDim.x*obj.scaleX;
        if (spawnStart)
        g.position.x = obj.baseDim.x*obj.scaleX / 2; else

        g.position.x = SCR_WIDTH + obj.baseDim.x*obj.scaleX / 2;
    } else
    layer.rightBound += obj.baseDim.x*obj.scaleX;

}

LauncherBG.prototype.process = function()
{
   // CObj.prototype.process.call(this);

    if (this.levCycles.length == 0) return;
    var upper = this.levCycles[0].layers[this.levCycles[0].layers.length - 1];
    this.distance += upper.velocity / 100;

    if (this.distance > 100 && this.distance < 120){
        PlayerData.inst.progressAch("Gold medal 2", 1);
    }

    if (this.distance > 500 && this.distance < 520){
        PlayerData.inst.progressAch("Gold medal 3", 1);
    }
    if (this.distance > 1000 && this.distance < 1020){
        PlayerData.inst.progressAch("Gold medal 4", 1);
    }

    var t = this.levCycles[0].layers.length;
    for (var i = 0; i < t; ++i)
    {
        var l = this.levCycles[0].layers[i];
        l.curDist += l.velocity;
        l.rightBound -= l.velocity;



        for (var k = 0; k < l.clip.children.length; ++k) {
            var clipOnScreen = l.clip.children[k];


            clipOnScreen.x -= l.velocity;
            if (clipOnScreen.position.x + clipOnScreen.width * 0.5 < this.x)
            {
               l.clip.removeChild(l.clip.getChildAt(k));
            }
        }

        var distLocal = l.minx + l.curDist - Math.floor(l.curDist / l.width)*l.width;
        var distPrev = distLocal - l.velocity;

        for (var k = 0; k < l.objects.length; ++k)
        {
            var obj = l.objects[k];
            var objStartX = obj.x - obj.baseDim.x / 2;
            if (objStartX > distPrev && objStartX < distLocal)
            {
                this.spawnClip(l , obj);
            }
        }
    }
}

LauncherBG.prototype.addLevel = function (levName, distance)
{

    var original = LevelManager.levels["levels/" + levName + ".json"];
    var dataClone = clone(original);
    var layers = [];
    var layerNum = 5;
    for (var i = 0; i < layerNum; ++i)
    {
        var cont = new PIXI.DisplayObjectContainer();
        var vel =LauncherBG.inst.maxVelocity - (layerNum-i - 1)*LauncherBG.inst.maxVelocity/layerNum;
        if (i == 1) {
            vel = 0;


        }
            var layer = {rightBound: SCR_WIDTH, clip:cont, curDist: SCR_WIDTH, objects: [], velocity: vel};
        layers.push(layer);
        this.gfx.addChild(layer.clip);
    }

    for (var i = 0; i < original.objects.length; ++i)
    {
        layers[original.objects[i].layer].objects.push(original.objects[i]);
    }

    for (var l = 0; l < layers.length; ++l)
    {
        var minx = 100000;
        var maxx = -100000;

        for (var j = 0; j < layers[l].objects.length; ++j)
        {
            var min = layers[l].objects[j].x - layers[l].objects[j].scaleX*layers[l].objects[j].baseDim.x / 2;
            var max = layers[l].objects[j].x + layers[l].objects[j].scaleX*layers[l].objects[j].baseDim.x / 2;

            if (min < minx)
            {minx = min;}

            if (max > maxx)
            {maxx = max;}
        }
        layers[l].maxx = maxx;
        layers[l].minx = minx;
        layers[l].width = maxx - minx;

        if (layers[l].velocity == 0)
        {
            for (var k = 0; k < layers[l].objects.length; ++k)
            {
                var obj = layers[l].objects[k];
                this.spawnClip(layers[l] , obj, true);
            }
        }
    }

    this.levCycles.push({layers: layers, dist: distance});
}

