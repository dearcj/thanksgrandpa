/**
 * Created by Михаил on 27.06.2014.
 */

var CG_GROUND = 1;
var CG_MONSTER = 2;
var CG_PLAYER = 4;
var CG_BULLET = 8;

function clone(obj) {
    return JSON.parse( JSON.stringify(obj ) );
    /*if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;*/
}


function crsp(texName)
{
    var s = new PIXI.Sprite(PIXI.Texture.fromFrame(texName+ ".png"));
    s.anchor.x = 0.5;
    s.anchor.y = 0.5;
    return s;
}

function rp(c)
{
    if (c && c.parent)
        c.parent.removeChild(c);
}

function extend(b,a, doDestroyTemp){
    var c=function(){};
    c.prototype=a.prototype;
    b.prototype=new c();
    b.prototype.constructor=b;b.superclass=a.prototype;
    //if (doDestroyTemp) c.destroy();
  }
