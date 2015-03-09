/**
 * Created by KURWINDALLAS on 19.11.2014.
 */

extend(LauncherBG, CObj, true);


function LauncherBG(in_x, in_y, textname, in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.levCycles = [];
    this.gfx = new PIXI.DisplayObjectContainer();
    SM.inst.bg.addChild(this.gfx);
    this.nullSpeed = 7.4;
   //  var inx = CObj.objects.indexOf(this);
    //  CObj.objects.splice(inx);
    this.distance = 0;
    this.incDist = 50;
    this.speedUpCoef = 0.08;
    this.layersSpeed = [0, 0.1, 0.14, 0.65, 0.65, 1, 1];
    this.ol = new PIXI.DisplayObjectContainer();
    this.pllayer = new PIXI.DisplayObjectContainer();
    this.defaultLayer = null;
    this.pixToDist = 1 / 50;
   // this.verticalParallax = 0;
}

LauncherBG.generateProperty('maxVelocity', {
    defaultValue: 0,
    get: function() {
        return this._maxVelocity;
    },
    set: function (value)
    {
        if (!this._maxVelocity) this._maxVelocity = 0;
        var prop = value / this._maxVelocity;
        //var add = 0;
        if (prop == Infinity) {
            prop = 1;
        }
        this._maxVelocity = value;

        var len = this.levCycles[0].layers.length;
        for (var l = 0; l < len; ++l) {
            var ll = this.levCycles[0].layers[l];
            if (ll.velocity > 0) {
                ll.velocity *= prop;
            }
        }

    }
});

LauncherBG.prototype.clear = function () {
    this.speedUpCoef = 0.08;
   /// this.maxVelocity = this.nullSpeed;
    this.levCycles.splice(0, this.levCycles.length);
    this.distance = 0;
    this.incDist = 50;
}

LauncherBG.prototype.destroy = function () {
    this.clear();
    this.ol = null;
    this.pllayer = null;
    CObj.prototype.destroy.call(this);
}

LauncherBG.prototype.spawnClip = function (layer, obj, spawnStart, dist, offs) {
    var cobj = CObj.DeserializeCObj(obj);
    CObj.AssignTexturesToObjects([cobj], SM.inst.bg);
    var g = cobj.gfx;
    if (g && g.parent) g.parent.removeChild(g);
    cobj.gfx = null;
    cobj.destroy();

   /*if (!obj.fff) obj.fff = 0;
    obj.fff++;

    if (obj.fff % 2 == 0) {
        g.tint = 0xff0000;
        g.alpha = 0.5;
    }
*/
    var additional = 30;
    if (layer.velocity == 0) additional  = 0;
    if (g) {
        layer.clip.addChild(g);
        layer.rightBound += obj.baseDim.x * obj.scaleX;
        if (spawnStart)
            g.position.x = additional + obj.baseDim.x * obj.scaleX / 2; else

            g.position.x = SCR_WIDTH + additional + obj.baseDim.x * obj.scaleX / 2 + offs - this.maxVelocity*0.8  - 3;
    } else
        layer.rightBound += obj.baseDim.x * obj.scaleX;

   // if (dist)
   // console.log("SPAWNED OBJ AT " + g.position.x + " AT DISTANCE " + dist.toString());
}



LauncherBG.prototype.process = function (fake) {
    // CObj.prototype.process.call(this);


    if (this.levCycles.length == 0) return;
    var upper = this.levCycles[0].layers[this.levCycles[0].layers.length - 1];
    var delta = upper.velocity * this.pixToDist;

    if (!fake) {
        if (this.distance > 100 && this.distance < 120) {
            PlayerData.inst.progressAch("Gold medal 2", 1);
        }
        if (this.distance > 500 && this.distance < 520) {
            PlayerData.inst.progressAch("Gold medal 3", 1);
        }
        if (this.distance > 1000 && this.distance < 1020) {
            PlayerData.inst.progressAch("Gold medal 4", 1);
        }

        if (Math.floor(this.distance / this.incDist) != Math.floor((this.distance + delta) / this.incDist)) {

            this.maxVelocity += this.speedUpCoef;
            this.speedUpCoef *= 0.95;
            console.log("SPEED " + this.maxVelocity.toString());
        }
    }

    if (!MM.inst.currentBoss)
    this.distance += delta;

    var t = this.levCycles[0].layers.length;
    for (var i = 0; i < t; ++i) {

        var l = this.levCycles[0].layers[i];
/*
        if (l.clip) {
            if (i != 0) {
                var v = 15*Math.pow(this.layersSpeed[i], 1.7);
                l.clip.y = this.verticalParallax*v;
                if (i == 4)
                {
                    SM.inst.ol.y = this.verticalParallax*v;
                }
            }
        }
        */
        l.curDist += l.velocity;
        l.rightBound -= l.velocity;

        for (var k = 0; k < l.clip.children.length; ++k) {
            var clipOnScreen = l.clip.children[k];
            clipOnScreen.x -= l.velocity;
        }

        for (var k = 0; k < l.clip.children.length; ++k) {
            var clipOnScreen = l.clip.children[k];
            if (clipOnScreen.position.x + clipOnScreen.width * 0.5 < this.x) {
                l.clip.removeChild(l.clip.getChildAt(k));
            }
        }

        var distLocal = l.minx  + l.curDist - Math.floor(l.curDist / l.width) * l.width;
        var distPrev = distLocal - l.velocity;
        for (var k = 0; k < l.objects.length; ++k) {
            var obj = l.objects[k];
            var objStartX = obj.x - obj.scaleX*obj.baseDim.x / 2;// + 3*l.velocity;
            if (objStartX >= distPrev && objStartX < distLocal) {
                var d = objStartX - distPrev;
                this.spawnClip(l, obj, null, distLocal, d);
            }
        }

        if (i == 4 && this.graves)
        {
            var gl = this.graves.length;
            for (var n = 0; n < gl; ++n)
            {
                if (this.distance > this.graves[n].dist - (SCR_WIDTH + 100)*this.pixToDist)
                {
                    var g = crsp("grave");
                    g.x = SCR_WIDTH + 100;
                    g.y = 395;
                    l.clip.addChild(g);

                    var tf = CTextField.createTextField({fontFamily: "dedgamecaps", tint: "0xFFFFFFFF", text: this.graves[n].text + '\n' + this.graves[n].dist.toString() + " м.", fontSize: 30, align: "center"});
                    tf.x = -tf.width / 2;
                    tf.updateText();
                    g.addChild(tf);

                    this.graves.splice(n, 1);
                    n--;
                    gl--;
                }
            }
        }
    }
}

LauncherBG.prototype.addLevel = function (levName, distance) {
    var original = LevelManager.levels["levels/" + levName + ".json"];
    var dataClone = clone(original);
    var layers = [];
    var layerNum = 7;
    for (var i = 0; i < layerNum; ++i) {

        var cont = new PIXI.DisplayObjectContainer();
        var vel = this.nullSpeed*this.layersSpeed[i];

        var layer = {rightBound: SCR_WIDTH, clip: cont, curDist: SCR_WIDTH, objects: [], velocity: vel};
        layers.push(layer);
        this.gfx.addChild(layer.clip);
    //    if (i == 5) SM.inst.fg.addChild(layer.clip);
    }
    this.gfx.addChildAt(this.ol, 6);
    this.gfx.addChildAt(this.pllayer, 7);

    for (var i = 0; i < original.objects.length; ++i) {
        layers[original.objects[i].layer - 1].objects.push(original.objects[i]);
    }


    for (var l = 0; l < layers.length; ++l) {
        var minx = 100000;
        var maxx = -100000;

        for (var j = 0; j < layers[l].objects.length; ++j) {
            var min = layers[l].objects[j].x - layers[l].objects[j].scaleX * layers[l].objects[j].baseDim.x / 2;
            var max = layers[l].objects[j].x + layers[l].objects[j].scaleX * layers[l].objects[j].baseDim.x / 2;

            if (min < minx) {
                minx = min;
            }

            if (max > maxx) {
                maxx = max;
            }
        }
        layers[l].maxx = maxx;
        layers[l].minx = minx;
        layers[l].width = maxx - minx;

        if (layers[l].velocity == 0) {
            for (var k = 0; k < layers[l].objects.length; ++k) {
                var obj = layers[l].objects[k];
                this.spawnClip(layers[l], obj, true);
            }
        }
    }

    this.defaultLayer = layers[layers.length - 1].clip;

    this.levCycles.push({layers: layers, dist: distance});

    this.maxVelocity = this.nullSpeed;
}

