/**
 * Created by Михаил on 24.06.2014.
 */

////////////CObj

CObj = function(in_x,in_y,filename,in_body) {

    if (!CObj.objects) CObj.objects = [];
    CObj.objects.push(this);

    this.PublicFields = "allowRotation,drawAsTexture,userData,[Graphics],isClip,fps,autoPlay,scaleX,scaleY,offsetX,offsetY,offsetR;";
    this.allowTrackSpeed = false;
    this._x = 0;
    this._y = 0;
    this._sensor = false;
    this.vx = 0;
    this.vy = 0;
    this.av = 0;
    this._body = null;
    this.baseDim = {};
    this._rotation = 0.;

    this.clipSrc = "";
    this.userData = null;
    this.oX = 0;
    this.oY = 0;
    if (this.offsetX == undefined) this.offsetX = 0;
    if (this.offsetY == undefined) this.offsetY = 0;
    if (this.offsetR == undefined) this.offsetR = 0;
    this.doRemove = false;
    this.gravPower = 0.24;

    if (filename) {
        var tex = PIXI.Texture.fromFrame(filename + ".png");
        this.gfx = new PIXI.Sprite(tex);

        this.gfx.gameobject = this;
        this.gfx.anchor.x = 0.5;
        this.gfx.anchor.y = 0.5;
        if (LauncherBG.inst) LauncherBG.inst.ol.addChild(this.gfx); else
        SM.inst.ol.addChild(this.gfx);
    }

    if (in_body) {
        this.body = in_body;
        CObj.setDefaultCG(this.body);
        this.body.position[0] = in_x;
        this.body.position[1] = in_y;
    }

    //this.hitTestCircles = null;
    this.colMask = 0;
    this.colGroup = 0;
    this.x = in_x;
    this.y = in_y;

    this.radius = 1;
    this.rotation = 0;
    this.gravityEnabled = false;

   // return this;
};

CObj.debugView = false;

Function.prototype.generateProperty = function(name, options) {
    // internal member variable name
    var privateName = '__' + name;

    options = options || {};
    options.get = ('undefined' === typeof options.get ? true : options.get );
    options.set = ('undefined' === typeof options.set ? true : options.set );

    // pre-initialise the internal variable?
    if (options.defaultValue) {
        this.prototype[privateName] = options.defaultValue;
    }

    var definePropOptions = {},
        getterName = '__get_' + name,
        setterName = '__set_' + name;

    // generate the getter
    if(true === options.get) {
        this.prototype[getterName] = function() {
            return this[privateName];
        };
    }
    // use custom getter
    else if (options.get) {
        this.prototype[getterName] = options.get;
    }
    // disable getter
    else {
        this.prototype[getterName] = function() {
            throw new Error('Cannot get: ' + name);
        }
    }

    definePropOptions.get = function() {
        return this[getterName].call(this);
    };

    // generate the setter
    if(true === options.set) {
        this.prototype[setterName] = function(val) {
            this[privateName] = val;
        };
    }
    // use custom setter
    else if (options.set) {
        this.prototype[setterName] = options.set;
    }
    // disable setter
    else {
        this.prototype[setterName] = function() {
            throw new Error('Cannot set: ' + name)
        };
    }

    definePropOptions.set = function(val) {
        this[setterName].call(this, val);
    };

    // do it!
    Object.defineProperty(this.prototype, name, definePropOptions);
};


CObj.prototype.init = function(){

}

CObj.prototype.updateElectroGfx = function(obj){
    if (obj.sensor) return;

    TweenMax.delayedCall(CObj.updateGfxDelay, obj.updateElectroGfx, [obj]);
}


CObj.prototype.findFirstConstraint = function () {
    var len = world.constraints.length;
    for (var i = 0; i < len; ++i)
    {
        if (world.constraints[i].bodyA == this.body || world.constraints[i].bodyB == this.body)
        return world.constraints[i];
    }
}

CObj.prototype.onContactBegin = function(b) {

}

CObj.prototype.onContactEnd = function(b){
}


CObj.prototype.collide = function(obj2){

}

CObj.prototype.process = function(){

    if (this.av != 0)
    this.rotation += this.av*gameStage.slowMoCoef;

    if (this.vx != 0)
    this.x = this.x + this.vx*gameStage.slowMoCoef;

    if (this.vy != 0)
        this.y = this.y + this.vy*gameStage.slowMoCoef;

    if (CObj.debugView && this.debugGfx) {
       this.debugGfx.position.x = this.x;
       this.debugGfx.position.y = this.y;
    }

    if (this.gravityEnabled)
    {
        this.vy += this.gravPower;

    }

    if (this.allowTrackSpeed)
        this.vx = -LauncherBG.inst.maxVelocity;//this.vx*0.5 + (

    this.updateGraphics();
};


CObj.prototype._destroy = function(){
    if (!this.doRemove) return;

    if (CObj.debugView && this.debugGfx) {
       this.debugGfx.parent.removeChild(this.debugGfx);
       this.debugGfx = null;
    }

    if (this.gfx && this.gfx.parent) this.gfx.parent.removeChild(this.gfx);
    this.gfx = null;
}

CObj.prototype.destroy = function(){
    if (this.poolName) return;
    this.doRemove = true;
};

CObj.getById = function(idstr){
    for (var i  = 0; i < CObj.objects.length; ++i)
    {
        if (CObj.objects[i].id == idstr) return CObj.objects[i];
    }
}

CObj.checkType = function(obj, constr){
     return (obj.constructor == constr);
}

CObj.destroyAll = function(){
    var len = CObj.objects.length;
    for (var i = 0; i < len; ++i)
    {
        CObj.objects[i].mechanicalDestroy = true;
        CObj.objects[i].destroy();
    }

    CObj.processAll();
}

CObj.prototype.updateGraphics = function(force){
    if (this.gfx && this.gfx.position) {

        this.gfx.rotation = this.rotation + this.offsetR;
        if (force || (this.prevRotation == undefined) || Math.abs(this.gfx.rotation - this.prevRotation) > 0.01) {
            var tcos = Math.cos(this.rotation);
            var tsin = Math.sin(this.rotation);
            this.oX = this.offsetX * tcos - this.offsetY*tsin;
            this.oY = this.offsetX * tsin + this.offsetY*tcos;
            this.prevRotation = this.gfx.rotation;
        }

        this.gfx.position.x = this.x + this.oX;
        this.gfx.position.y = this.y + this.oY;
    }
};

CObj.prototype.constructor = CObj;

Object.defineProperty(CObj.prototype, 'radius', {
    get: function () {
       return this._radius;
    },
    set: function (value) {
        this._radius = value;
        if (value)
        this._sqr = value*value;

        if (CObj.debugView && this.debugGfx) {
            this.debugGfx.clear();
            this.debugGfx.beginFill(0x000000, 0.2);

            if (this.hitTestCircles)
            {
                for (var i = 0; i < this.hitTestCircles.length; ++i)
                {
                    this.debugGfx.drawCircle(this.hitTestCircles[i].x, this.hitTestCircles[i].y, this.hitTestCircles[i].r);
                }
            } else
            if (this.radius >= 1)
            this.debugGfx.drawCircle(0, 0, value);

            this.debugGfx.endFill();
        }
    }
});

Object.defineProperty(CObj.prototype, 'x', {
    get: function () {
        if (this.body) {return this.body.position[0]}
        else return this._x;
    },
    set: function (value) {
        if (this.body) {
            this.body.position[0] = value

        }
        else this._x = value;
        this.updateGraphics();
    }
});

CObj.enableButtons = function(state){
        for (var i = 0; i < CObj.objects.length; ++i) {
            if (CObj.checkType(CObj.objects[i], CButton)) {
                CObj.objects[i].gfx.interactive = state;
            }
        }
}

CObj.processAll = function(){
    var len = CObj.objects.length;

    for (var i = 0; i < len; i++) {

        if ((!CObj.objects[i].gui)&&(CObj.objects[i].x > SCR_WIDTH*1.8 || CObj.objects[i].x < -SCR_WIDTH*0.8 ||
            CObj.objects[i].y > SCR_HEIGHT*1.8 || CObj.objects[i].y < -SCR_HEIGHT ))
        {
            if (CObj.checkType(CObj.objects[i], CHPBar)) continue;
            CObj.objects[i].destroy();
            continue;
        }


        if (CObj.objects[i].colMask > 0) {


            for (var j = 0; j < len; j++) {
                if (i == j) continue;
                var obj1 = CObj.objects[i];
                var obj2 = CObj.objects[j];
                if (obj1.doRemove || obj2.doRemove) continue;
                /*   if (obj1.colMask != 0 && obj2.colGroup != 0)
                 {
                 if (CObj.checkType(obj1, CCoin) &&
                 CObj.checkType(obj2, CPlayer) )
                 console.log();
                 }*/
                if (((obj1.colMask & obj2.colGroup) != 0) ||
                    ((obj2.colMask & obj1.colGroup) != 0) )
                {
                    if (obj1.hitTestCircles)
                    {
                        var clen = obj1.hitTestCircles.length;
                        for (var c = 0; c <clen; ++c)
                        {
                            var dx = obj2.x - (obj1.x + obj1.hitTestCircles[c].x);
                            var dy = obj2.y - (obj1.y + obj1.hitTestCircles[c].y);
                            var dr = (obj2.radius + obj1.hitTestCircles[c].r);
                            if (dx*dx + dy*dy < dr*dr) {
                                if ((obj1.colMask & obj2.colGroup) != 0) obj1.collide(obj2);
                                if ((obj2.colMask & obj1.colGroup) != 0) obj2.collide(obj1);
                                break;
                            }
                        }

                    } else
                    {
                        var dx = obj1.x - obj2.x;
                        var dy = obj1.y - obj2.y;
                        if (dx*dx + dy*dy < (obj2.radius + obj1.radius)*(obj2.radius + obj1.radius)) {
                            if ((obj1.colMask & obj2.colGroup) != 0) obj1.collide(obj2);
                            if ((obj2.colMask & obj1.colGroup) != 0) obj2.collide(obj1);
                        }
                    }
                }
            }
        }
    }

    for (var i = 0; i < len; i++)
    {
       CObj.objects[i].process();

        if (CObj.objects[i].doRemove)
        {
            CObj.objects[i]._destroy();
            CObj.objects.splice(i, 1);
            i--;
            len--;
        }
    }
}

Object.defineProperty(CObj.prototype, 'sensor', {
    get: function () {
        return this._sensor;
    },
    set: function (value) {
        this._sensor = value;

        if (this._body)
        {
            var sl = this.body.shapes.length;
            for (var i = 0; i < sl; ++i)
                this.body.shapes[i].sensor = value;
        }
    }
});

Object.defineProperty(CObj.prototype, 'y', {
    get: function () {
        if (this.body) {
            return this.body.position[1]}
        else
        return this._y;

    },
    set: function (value) {
        if (this.body) {
            this.body.position[1] = value}
        else
        this._y = value;
        this.updateGraphics();
    }
});

Object.defineProperty(CObj.prototype, 'body', {
    get: function () {
        return this._body;
    },
    set: function (value) {
        if (this._body) {
            world.removeBody(this._body);
            this._body.userData = null;
        }
        if (value)
        {
            this._body = value;
            this._body.userData = this;
            world.addBody(this._body);
        }
      }
});

Object.defineProperty(CObj.prototype, 'rotation', {
    get: function () {
        if (this.body) {return this.body.angle}
        else return this._rotation;

    },
    set: function (value) {
        if (this.body) {this.body.angle = value}
        else this._rotation = value;

        this.updateGraphics();
    }
});


CObj.DeserializeArray = function(data){

    sortlayers = function(a, b)
    {
        if (a.layer == b.layer) {
            //return 0;
            if (a.creationIndex > b.creationIndex) return 1.; else return -1.;
        }
        else if (a.layer > b.layer) return 1.; else return -1.;
    }


    var count = data.objects.length;
var objs = [];
    for (i = 0; i < count; i++) {
    var obj = CObj.DeserializeCObj(data.objects[i]);
        obj.creationIndex = i;
    ///    obj.layer ;;//= parseInt();
      objs.push(obj);
   }
    objs.sort(sortlayers);


    return objs;
}

CObj.ExtractFrameName = function(clipSrc) {
    //find first 0
    var idx = clipSrc.indexOf("0");
    if (idx == -1) return clipSrc;
    // remove all behind 0
    return clipSrc.substring(0, idx);
}

CObj.ExtractFrameNum = function(clipSrc) {
    //find first 0
    var idx = clipSrc.indexOf("0");
    if (idx == -1) return 0;
    var num  = clipSrc.substring(idx, clipSrc.length);
    var rinx = num.indexOf(".");
    if (~rinx) num = num.slice(0, -4);
    var frame = parseInt(num);
    if (isNaN(frame)) return 0; else return frame;
}

CObj.createMovieClip = function(name)
{
    var frameName = CObj.ExtractFrameName(name);
    var textures = [];
    var cinx = 0;
    var count = 0;
    for (var prop in PIXI.TextureCache) {
        if (name == prop) cinx = count;

        var frName = CObj.ExtractFrameName(prop);
        if (frName == frameName)
        {
           textures.push(PIXI.TextureCache[prop]);

            count ++;
        }
    }

    if (textures.length == 0)
        textures[0] = PIXI.TextureCache[name + ".png"];
    var img = new PIXI.MovieClip(textures);
    img.gotoAndStop(cinx);
    return img;
}

CObj.AssignTexturesToObjects = function (objs, layerToAdd){
    var count = objs.length;
    for (var i = 0; i < count; i++) if (objs[i].clipSrc != "" && objs[i].clipSrc != null) {
        var tex = null;
        if (objs[i].sAtlasName != "") {
            tex = PIXI.Texture.fromFrame(objs[i].clipSrc + ".png");//assets.getTextureAtlas(objs[i].sAtlasName).getTexture(objs[i].clipSrc);
        }
        else {
            var idx = objs[i].clipSrc.indexOf(".");
            if (idx == -1) tex = PIXI.Texture.fromFrame(objs[i].clipSrc + ".png"); else tex = PIXI.Texture.fromFrame(objs[i].clipSrc.substr(0, idx)  + ".png");
        }
        if (!tex) continue;
        var img = null;

        if (objs[i].isClip) {
            img = CObj.createMovieClip(objs[i].clipSrc);
            img.animationSpeed = objs[i].fps / FRAME_RATE;
            if (objs[i].autoPlay) {
                img.play();
            }
        } else {

            if (objs[i].drawAsTexture )
            {
                img = new PIXI.TilingSprite(tex, objs[i].baseDim.x, objs[i].baseDim.y)  ;
            } else
            {

                img = new PIXI.Sprite(tex);
            //objs[i].isConductor = false;
            }
        }
            img.anchor.x = 0.5;
            img.anchor.y = 0.5;
            img.x = objs[i].x;
            img.y = objs[i].y;
            img.width = objs[i].baseDim.x + 2;
            img.height = objs[i].baseDim.y + 2;
            img.rotation = objs[i].rotation;

            img.scale.x = objs[i].scaleX*window.addScale;
            img.scale.y = objs[i].scaleY*window.addScale;
            img.width += 1;
            img.height += 1;

            objs[i].gfx = img;
            if (layerToAdd)
                layerToAdd.addChild(img);
    }
}

CObj.setBodyMass = function (b, density)
{
    var area = b.getArea();
    b.mass = area * density / 50;
}

CObj.setDefaultCG = function (b)
{
    if (b.motionState == p2.Body.STATIC || b.mass == 0)
        var cg = world.cgSTATIC; else
        var cg = world.cgDYNAMIC;

    for (var i = 0; i < b.shapes.length; ++i)
    {

        if (cg == world.cgSTATIC)
            b.shapes[i].collisionMask = world.cgDYNAMIC; else
            b.shapes[i].collisionMask = world.cgSTATIC | world.cgDYNAMIC;

        b.shapes[i].collisionGroup = cg;

    }
}

CObj.DeserializeCObj = function (d, dontCreateClips){

    var o = Deserialize(d);
    o.clipSrc = d.clip;
    //o.sAtlasName = d.sAtlasName;
    if (o.clipSrc) {
        var filename = d.clip;
        var idx = filename.lastIndexOf(".");
        // so if we have two dots, this is atlas
        if (filename.lastIndexOf(".", idx - 1) != -1) {
            // atlas texture
            var atlasFile = filename.substring(0, idx);
            o.sAtlasName = filename.substring(0, idx);

            o.clipSrc = filename.substring(idx + 1, filename.length);

            idx = o.sAtlasName.indexOf(".");
            if (idx != -1) {
                o.sAtlasName = o.sAtlasName.substr(0, idx);
            }
        }
    }

    // materials
    if (d.density != undefined) o.density = d.density;
    if (d.elasticity != undefined) o.elasticity = d.elasticity;
    if (d.friction != undefined) o.friction = d.friction;
    if (d.frictionStatic != undefined) o.frictionStatic = d.frictionStatic;
    if (d.frictionRolling != undefined) o.frictionRolling = d.frictionRolling;
    if (d.isSensor != undefined) o.isSensor = d.isSensor;

    if (d.layer) o.layer = d.layer;
    o.id = d.id;
    var i;
    var GLOBAL_MASS_COEF = 60.5;
  /*  if (d.body) {
        o.body = CObj.getBodyFromJSON(d);

    }*/

    if (d.baseDim) {
        o.baseDim.x = d.baseDim.x;
        o.baseDim.y = d.baseDim.y;
    }

    var multiplier = 2;
    o.scaleX = d.scaleX / multiplier;
    o.scaleY = d.scaleY / multiplier;
    if (d.x != undefined) o.x = d.x;
    if (d.y != undefined) o.y = d.y;
    if (d.rotation != undefined) o.rotation = d.rotation;
    return o;
}

function Deserialize(d) {

    if ((d.cls != undefined) && (d.cls != "") && (d.cls != "ZEngine::ZObj")) {
        var cls = d.cls;

        if (cls.indexOf("::") != -1) cls = cls.split("::")[1];
        if (window[cls]) {
            if (cls == "ZObj") cls = "CObj"; else {
            }
            o = new window[cls]();
            o.cls = cls;
        } else o = new CObj();
    }
    else o = new CObj();

    if (o.PublicFields) {
            var lists = o.PublicFields.replace(" ", "").split(";");
            var i;
            var l;
            var lcount = lists.length;
            for (l = 0; l < lcount; l++) if (lists[l] !=  "") {
                var flist = lists[l].split(",");
                var fcount = flist.length;
                for (i = 0; i < fcount; i++) {
                    var field = flist[i];
                    if (field != "") {
                        if (field.substr(0, 1) == "[") continue;
                        if (d[field] != undefined) o[field] = d[field];
                    }
                }
            }
         }
    return o;
};