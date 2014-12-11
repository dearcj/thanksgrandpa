/**
 * Created by KURWINDALLAS on 19.11.2014.
 */

LauncherBG = function(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.levCycles = [];
    this.gfx = new PIXI.DisplayObjectContainer();
    SM.inst.bg.addChild(this.gfx);
  //  this.y = -70;
    var inx = CObj.objects.indexOf(this);
    CObj.objects.splice(inx);
    this.distance = 0;
}

extend(LauncherBG, CObj, true);

LauncherBG.inst = new LauncherBG(0,0);
LauncherBG.inst.maxVelocity = 5;

LauncherBG.prototype.clear = function()
{
    this.levCycles.splice(0, this.levCycles.length)
    this.distance = 0;
}


LauncherBG.prototype.destroy = function()
{
    CObj.prototype.destroy.call(this);
}

LauncherBG.prototype.spawnClip = function(layer, obj)
{
    var cobj = CObj.DeserializeCObj(obj);
    CObj.AssignTexturesToObjects([cobj],SM.inst.bg);
    var g = cobj.gfx;
    if (g) cobj.gfx.parent.removeChild(g);
    cobj.gfx = null;
    cobj.destroy();

    if (g) {
      //  var lastX = layer.clip.children[layer.clip.children.length - 1].position.x +
       //     layer.clip.children[layer.clip.children.length - 1].width / 2;
       // SM.inst.fg.addChild(g);
        layer.clip.addChild(g);
        layer.rightBound += obj.baseDim.x*obj.scaleX;
        g.position.x =  SCR_WIDTH + obj.baseDim.x*obj.scaleX / 2;
    } else
    layer.rightBound += obj.baseDim.x*obj.scaleX;

}

LauncherBG.prototype.process = function()
{
    CObj.prototype.process.call(this);

    this.distance += this.levCycles[0].layers[0].velocity;
    for (var i = 0; i < this.levCycles[0].layers.length; ++i)
    {
        var l = this.levCycles[0].layers[i];
        l.curDist += l.velocity;
        l.rightBound -= l.velocity;
        for (var k = 0; k < l.clip.children.length; ++k) {
            var clipOnScreen = l.clip.children[k];

            clipOnScreen.position.x = clipOnScreen.position.x - l.velocity;
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
        var layer = {rightBound: SCR_WIDTH, clip:cont, curDist: SCR_WIDTH, objects: [], velocity: 0.1 + LauncherBG.inst.maxVelocity - (layerNum-i)*LauncherBG.inst.maxVelocity/layerNum};
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
    }

    this.levCycles.push({layers: layers, dist: distance});
}

