/**
 * Created by Михаил on 24.06.2014.
 */

////////////CObj

CObj = function(in_x,in_y,filename,in_body) {

    this.PublicFields = "allowRotation,drawAsTexture,userData,[Graphics],isClip,fps,autoPlay,scaleX,scaleY,offsetX,offsetY,offsetR;";
    this.allowTrackSpeed = false;
    this._x = 0;
    this._y = 0;
    this._sensor = false;
    this.vx = 0;
    this.vy = 0;
    this._body = null;
    this.baseDim = {};
    this._rotation = 0.;
    if (!CObj.objects) CObj.objects = [];
    CObj.objects.push(this);
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

    //    this.gfx.setInteractive(true);
        this.gfx.gameobject = this;
        this.gfx.anchor.x = 0.5;
        this.gfx.anchor.y = 0.5;
        SM.inst.ol.addChild(this.gfx);
    }

    if (in_body) {
        this.body = in_body;
        CObj.setDefaultCG(this.body);
        this.body.position[0] = in_x;
        this.body.position[1] = in_y;
    }

    this.colMask = 0;
    this.colGroup = 0;
    this.x = in_x;
    this.y = in_y;

    if (CObj.debugView) {

        this.gfx2 = new PIXI.Graphics();
        SM.inst.guiLayer.addChild(this.gfx2);
    }

    this.radius = 1;
    this.rotation = 0;
    this.gravityEnabled = false;

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

    if (this.vx != 0)
    this.x = this.x + this.vx;

    if (this.vy != 0)
        this.y = this.y + this.vy;

    if (CObj.debugView) {
        this.gfx2.x = this.x;
        this.gfx2.y = this.y;
    }

    if (this.gravityEnabled)
    {
        this.vy += this.gravPower;

    }

    if (this.allowTrackSpeed)
        this.vx = -LauncherBG.maxVelocity;//this.vx*0.5 + (

    this.updateGraphics();
};


CObj.prototype._destroy = function(){
    if (!this.doRemove) return;

    if (CObj.debugView) {
        this.gfx2.parent.removeChild(this.gfx2);
    }
    if (this.gfx && this.gfx.parent) this.gfx.parent.removeChild(this.gfx);
    this.gfx = null;

    // if (this.body)
     //   world.removeBody(this.body);
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

Object.defineProperty(CObj.prototype, 'isConductor', {
    get: function () {
        return this._isConductor;
    },
    set: function (value) {
        this._isConductor = value;
        if (value && !this.connected)
        {
            TweenMax.delayedCall(CObj.updateGfxDelay, this.updateElectroGfx, [this]);
            this.connected = [];
        }
    }
});


Object.defineProperty(CObj.prototype, 'radius', {
    get: function () {
       return this._radius;
    },
    set: function (value) {
        this._radius = value;
        if (value)
        this._sqr = value*value;

        if (CObj.debugView) {
            this.gfx2.clear();
            this.gfx2.beginFill(0x000000, 0.2);
            this.gfx2.drawCircle(0, 0, this.radius);
            this.gfx2.endFill();
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

        if (CObj.objects[i].x > SCR_WIDTH*1.3 || CObj.objects[i].x < -SCR_WIDTH*0.3 ||
            CObj.objects[i].y > SCR_HEIGHT*1.3 || CObj.objects[i].y < -SCR_HEIGHT*0.3 )
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

        for (var i = 0; i < len; i++) {
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
        return -1;
    }


    var count = data.objects.length;
var objs = [];
    for (i = 0; i < count; i++) {
    var obj = CObj.DeserializeCObj(data.objects[i]);
        obj.creationIndex = i;
        obj.layer ;;//= parseInt();
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
            objs[i].isConductor = false;
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

CObj.getBodyFromJSON = function (d)
{
    return null;
    var isStatic  = false;

    if (!CObj.steelMaterialHiFriction) {
        CObj.steelMaterialHiFriction = new p2.Material();
        CObj.mediumRestitution = new p2.Material();
        CObj.strongRestitution = new p2.Material();
        world.cgSTATIC = Math.pow(2,0);
        world.cgDYNAMIC = Math.pow(2,1);


        world.materials = [CObj.steelMaterialHiFriction, CObj.mediumRestitution, CObj.strongRestitution];
        world.defaultContactMaterial.friction = 0.5;
        world.setGlobalStiffness(50);
        world.defaultContactMaterial.stiffness = 50;

        world.addContactMaterial(
            new p2.ContactMaterial(CObj.mediumRestitution, CObj.mediumRestitution, {
                friction :2.5//,
                ///restitution : 1.2//,//,//,//,
               ,relaxation:70
            }));


        world.addContactMaterial(
            new p2.ContactMaterial(CObj.steelMaterialHiFriction, CObj.steelMaterialHiFriction, {
                friction : 3.4
                ,relaxation:4
                ,stiffness: 30000
            }));


        world.addContactMaterial(
            new p2.ContactMaterial(CObj.steelMaterialHiFriction, CObj.mediumRestitution, {
                friction : 0.4,
                stiffness: 1000,
                restitution : 0.4//,//,//,
             //   relaxation:50,
             //   stiffness: 100000
            }));

        world.addContactMaterial(
            new p2.ContactMaterial(CObj.steelMaterialHiFriction, CObj.strongRestitution, {
                restitution : 0.5,
                friction: 0.5//,
            }));

        world.addContactMaterial(
            new p2.ContactMaterial(CObj.mediumRestitution, CObj.strongRestitution, {
                restitution : 1.0,
                friction: 0.5//,
            }));
    }
    switch (d.body.type) {
        case "DYNAMIC" : isStatic = false; break;
        case "STATIC" : isStatic = true; break;
    }



    var ms = d.density;
    if (d.cls == "Chicken")
    {
        d.elasticity = 0.5;
        d.density = 1;
    }
    if (isStatic) ms = 0;
    var b = new p2.Body(
        {
            mass: ms,
            fixedRotation: !d.allowRotation
        }
    );
    b.motionState = isStatic?p2.Body.STATIC:p2.Body.DYNAMIC;

    var sCount = d.body.shapes.length;
    if (sCount != 0) {
        for (var i = 0; i < sCount; i++) {

            switch (d.body.shapes[i].type) {
                case "CIRCLE": {
                    var c  = new p2.Circle(d.body.shapes[i].radius);
                    break;
                }
                case "POLYGON": {
                    var verts  = d.body.shapes[i].localVerts;
                    var innerVerts = [];
                    for (j = 0; j < verts.length; j++) {
                        innerVerts.push([verts[j].x, verts[j].y]);
                    }
                    c = new p2.Convex(innerVerts);


                    break;
                }
            }

           /* if (isStatic)
            c.collisionGroup = world.cgSTATIC; else
            c.collisionGroup = world.cgDYNAMIC;

            c.collisionMask = world.cgSTATIC | world.cgDYNAMIC;
*/
             //shapesToAdd.push(c);
            if (c) b.addShape(c);

            if (o.elasticity < 0.2)
            {
                c.material = CObj.steelMaterialHiFriction;
            } else
            if (o.elasticity <= 0.5)
            {
                c.material = CObj.mediumRestitution;
            } else
                c.material = CObj.strongRestitution;

        }


    }//else trace("Warning. Body without shapes!");


    CObj.setDefaultCG(b);


    //b.mass = b.getArea() * d.density / 50;
    CObj.setBodyMass(b, d.density);

    return b;
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
    if (d.body) {
        o.body = CObj.getBodyFromJSON(d);

    }

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
}