/**
 * Created by Михаил on 27.06.2014.
 */

var CG_GROUND = 1;
var CG_MONSTER = 2;
var CG_PLAYER = 4;
var CG_BULLET = 8;


function findByProp(array, prop, value)
{
    var len = array.length;
    for (var i = 0; i < len; ++i)
    {
        if (array[i][prop] == value)
        {
            return array[i];
        }
    }
    return null;
}

function getRand(obj) {
    return obj[Math.floor(Math.random() * obj.length)];
}


function clone(obj) {
    return JSON.parse( JSON.stringify(obj ) );
    /*if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;*/
}

function superRand(l) {
    var s = 0;
    for (var i = 0; i < l; ++i)
    {
        s += Math.random();
    }
    return s / l;
}
function dateDiff(date, delayMin)
{
    var nd = new Date();
    var d = nd.getTime() - date.getTime();
    d = delayMin * 60 * 1000 - d;

    d /= 1000;

    var h = Math.floor(d / 3600);

    d = d % 3600;

    var m = Math.floor(d / 60);

    d = d % 60;

    var s = Math.floor(d % 60);


    return {d: d, m: m, h: h, s: s, timeString : (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s)};
}

function crsp(texName)
{
    if (texName.length >= 4 && texName.charAt(texName.length-4) != ".")
    var add  = ".png"; else add = "";
    var s = new PIXI.Sprite(PIXI.Texture.fromFrame(texName + add));
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


PIXI.HueTexure = function(texture, hue) {
    var img = texture.baseTexture.source;
    var canvas = document.createElement('canvas');
    canvas.width = texture.width;
    canvas.height = texture.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    var d = ctx.getImageData(0, 0, canvas.width, canvas.height);
    if (d) {
        for(var idx = 0; idx < d.data.length; idx+=4){
            var r = d.data[idx];
            var g = d.data[idx + 1];
            var b = d.data[idx + 2];
            var hsl = rgbToHsl(r, g, b);
            hsl[0] = hsl[0] + hue;

            if (hsl[0] > 1) hsl[0] = hsl[0] - 1;
            if (hsl[0] < 0) hsl[0] = hsl[0] + 1;

            var rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);

            d.data[idx] = rgb[0];
            d.data[idx + 1] = rgb[1];
            d.data[idx + 2] = rgb[2];
        }
    }
    ctx.putImageData(d, 0, 0);
    var newText = PIXI.Texture.fromCanvas(canvas);
    //document.removeChild(canvas);
    return newText;
}


function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) *  6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) *  6;
            return p;
        }

        var q = l < 0.5 ? l  (1 + s) : l + s - l *  s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r* 255), Math.round(g * 255), Math.round(b * 255)];
}


rgbtoint = function(r,g ,b)
{
    return ((1 << 24) + (r << 16) + (g << 8) + b);
}


function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

PIXI.HueTexure = function(texture, hue) {
    var img = texture.baseTexture.source;
    var canvas = document.createElement('canvas');
    canvas.width = texture.width;
    canvas.height = texture.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    var d = ctx.getImageData(0, 0, canvas.width, canvas.height);
    if (d) {
        for(var idx = 0; idx < d.data.length; idx+=4){
            var r = d.data[idx];
            var g = d.data[idx + 1];
            var b = d.data[idx + 2];
            var hsl = rgbToHsl(r, g, b);
            hsl[0] = hsl[0] + hue;

            if (hsl[0] > 1) hsl[0] = hsl[0] - 1;
            if (hsl[0] < 0) hsl[0] = hsl[0] + 1;

            var rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);

            d.data[idx] = rgb[0];
            d.data[idx + 1] = rgb[1];
            d.data[idx + 2] = rgb[2];
        }
    }
    ctx.putImageData(d, 0, 0);
    var newText = PIXI.Texture.fromCanvas(canvas);
    //document.removeChild(canvas);
    return newText;
}