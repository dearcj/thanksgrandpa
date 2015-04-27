var CG_GROUND = 1;
var CG_MONSTER = 2;
var CG_PLAYER = 4;
var CG_BULLET = 8;


checkLineCircle = function (x3, y3, xx,yy, x2,y2, sqrad)
{
    var k = ((y2-yy) * (x3-xx) - (x2-xx) * (y3-yy)) / ((y2-yy)*(y2-yy) + (x2-xx)*(x2-xx));
    var x4 = x3 - k * (y2-yy);
    var y4 = y3 + k * (x2-xx);
    var dxx = x3 - x4;
    var dyy = y3 - y4;
    if (dxx*dxx + dyy*dyy < sqrad)
        return true; else return false;
}

function isValidDate(d) {
    if ( Object.prototype.toString.call(d) !== "[object Date]" )
        return false;
    return !isNaN(d.getTime());
}

function datetime()
{
    if (window.date)
    return window.date; else return new Date();
    //return new Date();
}


function ajaxCalltoGetTime() {
    PlayerData.inst.callDedAPI("GET_DATE", null, null, null, function(r)
    {
        if (!isNaN(new Date(r).getTime()))
        window.date = new Date(r);
    });

}

function startServerTimeTicker() {
    ajaxCalltoGetTime();
    setInterval(ajaxCalltoGetTime, 10000);
}

function getCookie2(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches[1];
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function strad(str1, str2)
{
    return parseInt(str1) + parseInt(str2);
}

function noc(obj, f)
{
    obj.click = null;
    obj.tap = null;
}

function onc(obj, f)
{
    obj.click = f;
    obj.tap = f;
}

function extractName(obj)
{
    if (!obj.name) return "Аноним"; else
    return (obj.name + ' ' + obj.last_name).substring(0, 16);

}

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

function OpenInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
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


function sqlToJsDate(sqlDate){

    //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
    if (!sqlDate) return new Date();
    var sqlDateArr1 = sqlDate.split("-");

    //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']

    var sYear = sqlDateArr1[0];

    var sMonth = (Number(sqlDateArr1[1]) - 1).toString();

    var sqlDateArr2 = sqlDateArr1[2].split(" ");

    //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']

    var sDay = sqlDateArr2[0];

    var sqlDateArr3 = sqlDateArr2[1].split(":");

    //format of sqlDateArr3[] = ['hh','mm','ss.ms']

    var sHour = sqlDateArr3[0];

    var sMinute = sqlDateArr3[1];

    var sqlDateArr4 = sqlDateArr3[2].split(".");

    //format of sqlDateArr4[] = ['ss','ms']

    var sSecond = sqlDateArr4[0];

    var sMillisecond = sqlDateArr4[1];
    return new Date(sYear,sMonth,sDay,sHour,sMinute,sSecond,0);
}

function sqlDate(d)
{
    return d.getFullYear() + '-' +
    ('00' + (d.getMonth() + 1)).slice(-2) + '-' +
    ('00' + d.getDate()).slice(-2) + ' ' +
    ('00' + d.getHours()).slice(-2) + ':' +
    ('00' + d.getMinutes()).slice(-2) + ':' +
    ('00' + d.getSeconds()).slice(-2);
}

function superRand(l) {
    var s = 0;
    for (var i = 0; i < l; ++i)
    {
        s += Math.random();
    }
    return s / l;
}
function dateDiff(date, delayMin, hidehours)
{
    var nd = new Date();
    var d2 = new Date(date);
    var d = nd.getTime() - d2.getTime();
    d = delayMin * 60 * 1000 - d;
 //   if (d < 0) d = 0;
    d /= 1000;

    var h = Math.floor(d / 3600);

    d = d % 3600;

    var m = Math.floor(d / 60);

    d = d % 60;

    var s = Math.floor(d % 60);

    if (hidehours) str = ""; else
    var str = (h < 10 ? "0" + h : h) + " : ";
    str += (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s);

    return {d: d, m: m, h: h, s: s, timeString : str};
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

/*
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
*/

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
};
/*
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
};*/var ZSound = {
    available: false,
    loaded : false
};

ZSound.Init = function(manifest) {

    var audioPath = "res/snd/";

    if (!MOBILE) {
        createjs.FlashAudioPlugin.swfPath = "res/snd/"; // Initialize the base path from this document to the Flash Plugin

        createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);

        createjs.Sound.alternateExtensions = ["mp3"];

    }
    ZSound.available = createjs.Sound.initializeDefaultPlugins();

    if (!ZSound.available || MOBILE) {
        console.log("ZSound loaded without plugins [NO SOUND]");
        ZSound.loaded = true;
        return;
    }


    ZSound.loaded = 0;
    ZSound.total = manifest.length;
    var handleLoad = function(x)
    {
        ZSound.loaded++;
        console.log(x.src);
        console.log("ZSound loaded " + ZSound.loaded.toString() + " / " + manifest.length.toString());
        if ( ZSound.loaded == manifest.length) {
            if (ZSound.soundLoadedFunction) {
                ZSound.loaded = true;
                ZSound.soundLoadedFunction();
            }

        }
    }
    createjs.Sound.on("fileload", handleLoad); // call handleLoad when each sound loads

    createjs.Sound.registerSounds(manifest, audioPath);
}

ZSound.PlayMusic = function(snd) {
    if (ZSound.loaded)
        ZSound.PlayMusicInner(snd);
    else soundLoadedFunction = function () {
        ZSound.PlayMusicInner(snd);
        ZSound.loaded = true;
    }
};

ZSound.UnMute = function () {
    if (ZSound.available) return;
    ZSound.available = true;

    createjs.Sound.setMute(false);

    /*if (this.musicInstance)
    {
        createjs.Sound.play(this.musicInstance);
    }*/
}

ZSound.Mute = function () {
    ZSound.available = false;

    createjs.Sound.setMute(true);
    /*if (this.musicInstance)
    {
        createjs.Sound.stop(this.musicInstance);
    }*/
}


ZSound.PlayMusicInner = function(snd)
{

    if (ZSound.musicInstanceName == snd && ZSound.musicInstance) return;
    if (ZSound.musicInstance)
    {
     createjs.Sound.stop(ZSound.musicInstance);
    }

    try {
        ZSound.musicInstanceName = snd;
        ZSound.musicInstance = createjs.Sound.play(snd, {interrupt: createjs.Sound.INTERRUPT_NONE, loop:999999});
    } catch (e) {}
}


ZSound.Play = function(snd) {
    if (!ZSound.available) return;
    try {
        createjs.Sound.play(snd, createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    } catch (e) {}
};LevelManager = function()
{
};

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

    if (LevelManager.onVeryComplete)
        LevelManager.onVeryComplete();
}

LevelManager.removeLastLevel = function()
{
    while (LevelManager.objs.length > 0) {
        LevelManager.objs[0].destroy();
        LevelManager.objs.splice(0, 1);
    }
    objs = null;
}


LevelManager.destroyLevel = function(str) {
    for (var i = 0; i < CObj.objects.length; ++i)
    {
        if (CObj.objects[i].levelName == str)
        {
            CObj.objects[i].destroy();
        }
    }
    CObj.processAll();
}
LevelManager.loadLevel = function(str, onCompleteFunction, layer, offsX, offsY)
{
    var data = LevelManager.levels[LevelManager.levFolder + str + ".json"];
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
        LevelManager.objs[i].levelName = str;
        if (offsX)    LevelManager.objs[i].x += offsX;
        if (offsY)    LevelManager.objs[i].y += offsY;
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
    } else
        LevelManager.onComplete();
    return LevelManager.objs;
}
LevelManager.inst = new LevelManager();
LevelManager.levels = {};function SM() {
    this.fg = new PIXI.DisplayObjectContainer();
    this.bg = new PIXI.DisplayObjectContainer();
    this.ol = new PIXI.DisplayObjectContainer();
    this.guiLayer = new PIXI.DisplayObjectContainer();
    this.superGuiLayer = new PIXI.DisplayObjectContainer();
    this.fontLayer = new PIXI.DisplayObjectContainer();
    this.superStage = new PIXI.DisplayObjectContainer();

//add layers on stage
    this.bg.interactive = true;
    this.fg.interactive = false;
    this.ol.interactive = false;
    this.guiLayer.interactive = true;
    this.superGuiLayer.interactive = true;
    this.fontLayer.interactive = false;

    this.currentStage = null;
    this.transStart = 0;
    this.transTime = 600;
    this.doTrans = false;

    $(document).mousewheel(function(event, delta, deltaX, deltaY){
        //if (delta < 0) page.scrollTop(page.scrollTop() + 65);
        //else if (delta > 0) page.scrollTop(page.scrollTop() - 65);
        if (CObj.objects)
            for (var i = 0; i < CObj.objects.length; ++i)
            {
                if (CObj.checkType(CObj.objects[i], CScrollbar),
                        CObj.objects[i].mover)
                {
                    CObj.objects[i].onWheel(event, delta, deltaX, deltaY);
                }

            }
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
    });

    /*var mouseWheelHandler = function(e)
    {

    }
    //document.addEventListener("mousewheel", mouseWheelHandler, false);
    document.addEventListener("DOMMouseScroll", mouseWheelHandler, false);
    */
}

SM.inst = new SM();

SM.prototype.addDisableWindow = function(title, layer)
{
    var d = new PIXI.DisplayObjectContainer();
    var g = new PIXI.Graphics();
    g.fillColor =0x22113322;
    g.beginFill();
    g.drawRect(0, 0, SCR_WIDTH, SCR_HEIGHT);
    g.endFill();
    g.alpha = 0.5;
    d.addChild(g);

    if (title) {
        var text = CTextField.createTextField({text: title, fontSize: 25, align: "center"});
        text.text = title;
        text.updateText();
        text.position.x = SCR_WIDTH / 2;
        text.position.y = SCR_HEIGHT / 2;
        text.position.x -= text.getLocalBounds().width / 2;
        text.position.y -= text.getLocalBounds().height / 2;
        d.addChild(text);
    }
    d.interactive = false;
    d.trans = true;
    if (layer) layer.addChild(d); else
        this.superStage.addChild(d);
    return d;
}

SM.prototype.addLayersToStage = function()
{
    this.superStage.addChild(this.bg);
    this.superStage.addChild(this.ol);
    this.superStage.addChild(this.fg);
    this.superStage.addChild(this.guiLayer);
    this.superStage.addChild(this.superGuiLayer);
    this.superStage.addChild(this.fontLayer);
    window.stage.addChild(this.superStage);
    window.mouseX = SCR_WIDTH / 2;
    window.mouseY = SCR_HEIGHT / 2;
    this.bg.mousemove = function(md){
        window.mouseX = md.global.x/SCR_SCALE;
        window.mouseY = md.global.y/SCR_SCALE;
    }
}

SM.prototype.fadeBegin = function(newStage) {
        if (this.currentStage) {
            this.currentStage.killing = true;
            this.currentStage.onHide(newStage);
            this.currentStage.doProcess = false;
        }

        newStage.doProcess = true;
        this.fadeEnd(newStage);
        newStage.onShow();
}

SM.prototype.soundplay = function() {
            //sound
     }

SM.prototype.fadeEnd = function(newStage){
        this.currentStage = newStage;
    }

SM.prototype.transEnd = function() {
    //
    }

SM.prototype.process = function() {
         if (this.currentStage && this.currentStage.doProcess){
             this.currentStage.process();
         }
     }

SM.prototype.openStage = function(newStage, trns){
        if (this.doTrans) return;

        newStage.previousStage = this.currentStage;
        if (this.currentStage)
        {
            if (!this.currentStage.doProcess) return;
            this.currentStage.doProcess = false;
            //transStart
            this.fadeBegin(newStage);
        } else
        {
            this.currentStage = newStage;
            this.currentStage.doProcess = true;
            this.currentStage.killing = false;
            newStage.onShow();
        }
    };/**
 * Created by Михаил on 24.06.2014.
 */

function CustomStage() {

    this.visible = false;
    this.doProcess = true;
  }

CustomStage.prototype.process = function() {};
CustomStage.prototype.onRemove = function() {};
CustomStage.prototype.onHide = function(newStage) {};
CustomStage.prototype.onShow = function(){};
/**
 * Created by Михаил on 26.06.2014.
 */
function GameStage() {
    this.invFR = 1 / window.FRAME_RATE;
}

extend(GameStage, CustomStage);

Object.defineProperty(GameStage.prototype, 'worldSpeed', {
    get: function () {
        return this._worldSpeed;
    },
    set: function (value) {
        this._worldSpeed = value;
        var objlen = CObj.objects.length;
        for (var i = 0; i < objlen; ++i) {
            //////////////////////////FAIL CHECK
            if (CObj.objects[i].gfx && CObj.checkType(CObj.objects[i].gfx, PIXI.MovieClip)) {
                CObj.objects[i].gfx.animationSpeed = value * CObj.objects[i].fps / FRAME_RATE;
            }
        }
    }
});

GameStage.prototype.createHPBar = function (x, y, max) {
    var bar = new CObj(x, y);
    var t = PIXI.Texture.fromFrame("health dead.png");

    bar.gfx = new PIXI.DisplayObjectContainer();
    var lower = new PIXI.TilingSprite(t, (t.width) - 0.5, (t.height - 0.5));
    bar.id = "hpbar";
    lower.width = max * t.width;
    bar.gfx.addChild(lower);
    bar.updateGraphics();
    bar.texW = t.width;
    var tupper = PIXI.Texture.fromFrame("health.png");
    var upperBar = new PIXI.TilingSprite(tupper, tupper.width - 0.5, tupper.height - 0.5);
    upperBar.height = tupper.height - 1;
    upperBar.width = max * tupper.width;
    bar.gfx.addChild(upperBar);

    SM.inst.fg.addChild(bar.gfx);

    bar.tweenProp = function (ratio) {
        if (gameStage.player) {
            this.gfx.getChildAt(1).width = gameStage.player.maxHp * this.texW * ratio;
            this.gfx.getChildAt(0).width = gameStage.player.maxHp * this.texW;
        }
    }
}

GameStage.prototype.createCircle = function (w, x, y, r) {
    var s = new PIXI.Graphics();

    var n = 100;
    var d = Math.PI * 2 / n;
    var a = 0;
    var xn;
    var yn;
    s.moveTo(0, 0);
    for (var i = 0; i < n; ++i) {
        xn = x + Math.cos(a) * r;
        yn = y + Math.sin(a) * r;
        a += d;
        s.lineTo(xn, yn);
        s.moveTo(xn, yn)
    }
    return s;
}


GameStage.prototype.process = function () {
    /*   if (this.doPhys)
     world.step(this.invFR*this._worldSpeed);u
     ddsd[d*/

    window.focus();
    CObj.processAll();

    var d = Math.floor(LauncherBG.inst.distance);
    if (gameStage.distText)
    gameStage.distText.text = d.toString() + " M";
    MM.inst.process();
}

GameStage.prototype.mobileTouchStart = function(e)
{
    console.log(JSON.stringify(e));
}

GameStage.prototype.mobileTouchEnd = function(e)
{
    console.log(JSON.stringify(e));
}

GameStage.prototype.onHide = function (newStage) {

    gameStage.ari.kill();
    //clearInterval(gameStage.ari);
    gameStage.menuBtn = null;
    gameStage.player = null;
    gameStage.barXP = null;
    gameStage.floor = null;
    if (gameStage.winDelayedCall) {
        gameStage.winDelayedCall.kill(false);
        gameStage.winDelayedCall = null;
    }
    gameStage.losing = false;
    gameStage.scoreObj = null;
    gameStage.preWinText = null;

    gameStage.ammobar = null;
    gameStage.ammoico = null;

    TweenMax.killAll(true, true, true);
    CustomStage.prototype.onHide.call(this, null);


    if (MOBILE)
    {
        $(function() {
            $(document).off('touchstart', gameStage.mobileTouchStart);
            $(document).off('touchend', gameStage.mobileTouchEnd);
        });
    }

    $(function() {
        $(document).off('keydown', this.doKeyDown);
        $(document).off('keyup', this.doKeyUp);
        $(document).off('mousedown', this.fdown);
        $(document).off('mouseup', this.fup);
    //    $(document).mousedown(this.fdown);
     //   $(document).mouseup(this.fup);
    });

    /*    var inx = CObj.objects.indexOf(LauncherBG.inst);
     CObj.objects.splice(inx, 1);*/
    CObj.destroyAll();
    gameStage.preWinText = null;

    gameStage.dragObject = null;

    stage.touchmove = null;
    stage.mousemove = null;
    stage.mousedown = null;
    stage.touchstart = null;
    stage.mouseup = null;
    stage.touchend = null;

    if (gameStage.pauseSprite) {
        gameStage.pauseSprite.parent.removeChild(gameStage.pauseSprite);
        if (gameStage.pauseTexture) {
            gameStage.pauseTexture.destroy(true);
            gameStage.pauseTexture = null;
        }
        gameStage.pauseSprite = null;
    }
    gameStage.distText = null;
    LauncherBG.inst.destroy();
    LauncherBG.inst = null;
}

GameStage.prototype.loseGame = function () {

}

GameStage.prototype.remGfx = function (obj) {
    if (!obj) return;
    if (obj.parent) {
        obj.parent.removeChild(obj);
    }
}

GameStage.prototype.updateXP = function()
{
    gameStage.barXP.prop = PlayerData.inst.playerItem.xp / PlayerData.inst.xpLevel[PlayerData.inst.playerItem.lvl].xp;
}



GameStage.prototype.updateItems = function () {
    var k = 0;
/*
    var btns = [{key: "A", gfx: "1boost_button.png"},
        {key: "S", gfx: "2boost_button.png"},
        {key: "D", gfx: "3boost_button.png"}];

    gameStage.curweapon = w_rifle;
    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i) {
        var item = PlayerData.inst.getItemById(PlayerData.inst.items_enabled[i].id_item);
        if (item.name.indexOf('$') >= 0) continue;
        if (item.type == tBoost) {
            var boostClass;
            if (item.name == "Double") boostClass = CDoubleBooster;
            if (item.name == "Health") boostClass = CHeartBooster;
            if (item.name == "Magnet") boostClass = CMagnetBooster;
            if (item.name == "MarioStar") boostClass = CSupermanBooster;
            if (item.name == "Tablets") boostClass = CTabletsBooster;
            var b = new boostClass(30 + 50*k, 100, null);

            b.gfx = crsp(item.gfx);
            b.gfx.scale.x = 0.3;
            b.gfx.scale.y = 0.3;
            b.updateGraphics();
            b.ieid = PlayerData.inst.items_enabled[i].id;
            var icobtn;
            if (b.activate == null)
            {
                b.gfx.tint = 0x778822;
            } else
            {
                if (b.key == "A")
                var x = btns[0];
                if (b.key == "S")
                x = btns[1];
                if (b.key == "D")
                x = btns[2];

                if (x)
                {
                   // b.key = x.key;
                    icobtn = crsp(x.gfx);
                    icobtn.scale.x = 3;
                    icobtn.scale.y = 3;
                    icobtn.y = 82;
                    icobtn.x = -50;
                    b.gfx.addChild(icobtn);
                }

            }

            SM.inst.guiLayer.addChild(b.gfx);
            k++;
        }
*/
    var curweapon = w_rifle;


    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i) {
        var item = PlayerData.inst.getItemById(PlayerData.inst.items_enabled[i].id_item);
        if (item.type == tWeapon && PlayerData.inst.items_enabled[i].equipped == "1")
        {
            if (item.name == "Rifle")
                curweapon = w_rifle;
            if (item.name == "PPS")
                curweapon = w_pps;
            if (item.name == "AK-74")
                curweapon = w_ak74;
            if (item.name == "Minigun")
                curweapon = w_minigun;
            if (item.name == "Grenade launcher")
                curweapon = w_grenadel;
            if (item.name == "Plazma Cannon")
                curweapon = w_laser;
        }
    }

    gameStage.player.weapon = curweapon;
}

GameStage.prototype.shAfterLife = function () {
    if (SM.inst.currentStage.killing)
    {
        return;
    }

    var cb = new CircleBar(SCR_WIDTH / 2, SCR_HEIGHT / 2);
    cb.init("bodrost cover.png",  "bodrost bar.png",  "bodrost bar bg.png");
    SM.inst.guiLayer.addChild(cb.gfx);

    removeafterlife = function () {
        rp(gainbgsprite);
        rp(bodrtext);
        rp(tf);
        cb.gfx.visible = false;
    }

    openScoreWnd = function () {
        if (SM.inst.currentStage.killing)
        {
            return;
        }
        removeafterlife();
        LevelManager.loadLevel("levelgameover", gameStage.openEndWindowLoaded, SM.inst.guiLayer);
    }


   var failtween=  new TweenMax(cb, 3, {pos: 1, onComplete: openScoreWnd, ease: Circ.easeOut});
    var bodrtext = new PIXI.Sprite(PIXI.Texture.fromFrame("bodrost text.png"));
    bodrtext.anchor.x = 0.5;
    bodrtext.anchor.y = 0.5;
    bodrtext.x = SCR_WIDTH / 2;
    bodrtext.y = SCR_HEIGHT / 2 - 108;
    SM.inst.guiLayer.addChild(bodrtext);

    cb.gfx.interactive = true;

    onc(cb.gfx, function () {
        if (vkparams.novk)
        {
            return;
        }

        failtween.pause();

        var continueGame = function()
        {
            failtween.resume();
            ZSound.Play("vzbodritsa");
            TweenMax.killTweensOf(cb);
            removeafterlife();
            gameStage.removeFade();
            gameStage.unpause();
            gameStage.state = "game";
            incMetric("USED REVEAL");
            PlayerData.inst.playerItem.crystals -= gameStage.revealPrice;
            gameStage.revealPrice *= 2;
            gameStage.player.reveal();


            new TweenMax(LauncherBG.inst, 2, {maxVelocity: LauncherBG.inst.preVelocity});
        }

        if (PlayerData.inst.playerItem.crystals > gameStage.revealPrice) {
            continueGame();
        } else
        {

            var needed = gameStage.revealPrice  - PlayerData.inst.playerItem.crystals;
            if (needed <= 3)
                order("item4");else
            if (needed <= 15)
            order("item5"); else
                order("item6");

            VK.orderComplete = function()
            {
               if (PlayerData.inst.playerItem.crystals > price)
               {
                   continueGame();
               }
            };
            var cancel = function()
            {
                failtween.resume();
            };
            VK.orderFail = cancel;
            VK.orderCancel = cancel;
          }
    });
    var bsX = cb.gfx.scale.x;
    var bsY = cb.gfx.scale.y;
    cb.gfx.mouseover = function (evt) {
        TweenMax.killTweensOf(cb.gfx.scale);
        cb.gfx.tint = CButton.tintColor;
        new TweenMax(cb.gfx.scale, 0.6, {y: bsY+0.05, ease: Elastic.easeOut} );
        new TweenMax(cb.gfx.scale, 0.4, {x: bsX+0.05, ease: Elastic.easeOut} );
    }
    cb.gfx.mouseout = function (evt) {
        cb.gfx.tint = 0xffffff;
        new TweenMax(cb.gfx.scale, 0.3, {x: bsX, y: bsY, ease: Elastic.easeOut} );
    }

    var gainbgsprite = new PIXI.Sprite(PIXI.Texture.fromFrame("bodrost star.png"));
    gainbgsprite.anchor.x = 0.5;
    gainbgsprite.anchor.y = 0.5;
    gainbgsprite.x = SCR_WIDTH / 2;
    gainbgsprite.y = SCR_HEIGHT / 2 + 120;
    SM.inst.guiLayer.addChild(gainbgsprite);

    var tf = CTextField.createTextField({text: gameStage.revealPrice.toString(), fontSize: 22, align: "center"});
    tf.tint = 0x333333;
    tf.updateText();
    tf.x = 8 + SCR_WIDTH / 2;
    tf.y = SCR_HEIGHT / 2 + 107;
    SM.inst.guiLayer.addChild(tf);
}


GameStage.prototype.openEndWindowLoaded = function () {

    function addLine(num) {
        var l = -70;
        var space = CObj.getById("div").y + 20;
        var d = 45;
        var tf1 = new CTextField(SCR_WIDTH / 2 - 100 + l, space + num * d);
        tf1.text = (num + 1).toString() + ".";
        tf1.fontSize = 18;
        tf1.init();
        tf1.id = "tf" + (num + 1).toString() + "1";

        var tf2 = new CTextField(SCR_WIDTH / 2 + l, space + num * d);
        tf2.text = "---";
        tf2.align = "center";
        tf2.fontSize = 18;
        tf2.init();
        tf2.id = "tf" + (num + 1).toString() + "2";

        var tf3 = new CTextField(SCR_WIDTH / 2 + 85 + l, space + num * d);
        tf3.text = "---";
        tf3.fontSize = 18;
        tf3.init();
        tf3.id = "tf" + (num + 1).toString() + "3";
    }

    CObj.getById("tfmon").text = Math.round(PlayerData.inst.score).toString();
    CObj.getById("tfprev").text = Math.round(LauncherBG.inst.distance).toString() + " м";

    var rec = Math.round(PlayerData.inst.playerItem.maxdistance);
    if (LauncherBG.inst.distance > PlayerData.inst.playerItem.maxdistance) {
        rec = Math.round(LauncherBG.inst.distance);
    }
    CObj.getById("tfrec").text = rec.toString() + " м";
    CObj.getById("bmenu").click = function () {
        gameStage.doProcess = true;

        SM.inst.openStage(charStage);
    };

    for (var i = 1; i <= 5; ++i) {
        CObj.getById("b" + i.toString()).gfx.visible = false;
        CObj.getById("b" + i.toString()).text = "";
    }


    PlayerData.inst.saveRunProgress();

   // PlayerData.inst.savePlayerData();

    CObj.getById("bshare").click = function () {

        //ПОХВАСТАТЬСЯ
        VK.api("wall.post", {
            owner_id: vkparams.viewerid,
            message: "Я проехал " + rec.toString() + " метров." +'\n' + "https://vk.com/app4654201",
            attachments: ["photo-90523698_359515843", "https://vk.com/app4654201"]
        }, function (data) {

        });
    };


    for (var i = 0; i < 5; ++i) {
        addLine(i);
    }

    PlayerData.inst.callDedAPI("GET_SCORES", null, null, {filter: vkparams.friendsFilter, take: 5, skip: 0}, function(c) {
        var arr = c;

        for (var i = 0; i < Math.min(5, arr.length); ++i) {
            var d = arr[i].maxdistance;
            if (!d) d = 0;
            CObj.getById("tf" + (i + 1).toString() + "2").text = extractName(arr[i]);
            CObj.getById("tf" + (i + 1).toString() + "3").text = d.toString();
            if (rec > arr[i].maxdistance) {
                CObj.getById("b" + (i + 1).toString()).gfx.visible = true;
                CObj.getById("b" + (i + 1).toString()).text = "Я тебя уделал";

                //Я ТЕБЯ УДЕЛАЛ
                function setClick(i, friendObject) {
                    CObj.getById("b" + (i + 1).toString()).click = function () {
                        VK.api("wall.post", {
                            owner_id: friendObject.platformid,
                            message: "Я проехал " + rec.toString() + " метров. *id"+friendObject.platformid +"(" + friendObject.name + ") " + friendObject.last_name + ",  никогда не побьешь мой рекорд!!" + '\n' + "https://vk.com/app4654201",
                            attachments: ["photo-90523698_359515827", "https://vk.com/app4654201"]
                        }, function (data) {

                        });
                    }
                }
                setClick(i, arr[i]);
            } else
            {


            }

        }

        for (var j = i; j < 5; ++j) {
            CObj.getById("b" + (j + 1).toString()).gfx.visible = true;
            CObj.getById("b" + (j + 1).toString()).text = "Пригласить в игру";
            CObj.getById("b" + (j + 1).toString()).click = function () {
                VK.callMethod("showInviteBox");
            }
        }
    }, function (error) {

    });
}


GameStage.prototype.sessionEnd = function () {
    if (gameStage.state == "game") {
        gameStage.state = "endsession";
        gameStage.pause();
        gameStage.fadeScreen();
        gameStage.shAfterLife();

        var pattern = MM.inst.patterns[MM.inst.currentPattern.pid].mons;
        incMetric("DIED on pattern=" + pattern);
    }
}

GameStage.prototype.updateWindowLevWin = function () {
    gameStage.doPhys = false;
}



GameStage.prototype.updateScore = function () {
    if (gameStage.scoreObj)
        gameStage.scoreObj.text = Math.round(PlayerData.inst.score).toString();
}

// event.type должен быть keypress
function getChar(event) {
    if (event.which == null) {  // IE
        if (event.keyCode < 32) return null; // спец. символ
        return String.fromCharCode(event.keyCode)
    }

    if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
    }

    return null; // спец. символ
}

GameStage.prototype.doKeyDown = function (evt) {
    if (gameStage.state != "game") return;
    evt = evt || window.event;
    var c = String.fromCharCode(evt.which);

    if (CBooster.list)
    for (var i = 0; i < CBooster.list.length; ++i)
    {
        if (CBooster.list[i].key == c && CBooster.list[i].activate)
        {
            CBooster.list[i].onActivate();
        }
    }
    if (evt.which == 87||  evt.which == 17 || evt.which == 32)
    {
        if (gameStage.player)
        gameStage.player.onJump();
    }

    evt.preventDefault();
}

GameStage.prototype.doKeyUp = function (evt) {
    if (gameStage.state != "game") return;
    evt = evt || window.event;
    var c = getChar(evt);
    if (evt.which == 87 || evt.which == 17) {
    //    if (gameStage.player)
    //    gameStage.player.jumpboost = false;
    }



    evt.preventDefault();
}

GameStage.prototype.showTutorial = function () {

    showText = function(s, x, y)
    {
        var c = new CTextField(x,y);
        c.text = s;
        c.fontFamily = "dedgamecaps";
        c.align = "center";
        c.fontSize = 27;
        c.init();
        c.gfx.scale.x = 1.3;
        c.gfx.alpha = 0;
        TweenMax.delayedCall(4.8, function()
        {
            if (!c.doRemove) {
                new TweenMax(c.gfx.scale, 0.2, {x: 1.3});
                new TweenMax(c.gfx, 0.2, {alpha: 0});
            }
        });
        TweenMax.delayedCall(5, function(){
            if (!c.doRemove)
                c.destroy();
        })
        new TweenMax(c.gfx.scale, 0.2, {x: 1});
        new TweenMax(c.gfx, 0.2, {alpha: 1});
    }

    var prevQ =     MM.inst.monsterQueue;
    MM.inst.monsterQueue = "........l..l..l..l.l........s...s...s....0000000........c...c...c.....+....+...+...............................";
    TweenMax.delayedCall(3, showText, ["ДЕДУЛЬ, ЖМИ 'W' ИЛИ ПКМ==ЧТОБЫ ПРЫГАТЬ", SCR_WIDTH / 2, 140]);
    TweenMax.delayedCall(10, showText, ["КЛИКАЙ ЧТОБЫ СТРЕЛЯТЬ", SCR_WIDTH / 2, 140]);
    TweenMax.delayedCall(16, showText, ["СОБИРАЙ МОНЕТЫ", SCR_WIDTH / 2, 140]);
    TweenMax.delayedCall(22, showText, ["НАЖМИ 'W' ДВАЖДЫ==ЧТОБЫ ПРЫГНУТЬ ВЫШЕ", SCR_WIDTH / 2, 140]);
    TweenMax.delayedCall(28, showText, ["ВЫСТРЕЛИ В ДРОНА==ЧТОБЫ ЗАБРАТЬ БУСТЕР", SCR_WIDTH / 2, 140]);
    TweenMax.delayedCall(38, showText, ["ПОЗДРАВЛЯЮ, ТВОЕ ОБУЧЕНИЕ ОКОНЧЕНО", SCR_WIDTH / 2, 140]);

    TweenMax.delayedCall(43, function()
    {
        gameStage.tutComplete = true;
        SM.inst.openStage(charStage);
    });
}



GameStage.prototype.onShow = function () {
    if (MOBILE) {
        LevelManager.loadLevel("loading", function()
        {
            renderer.render(stage);
        }, SM.inst.superStage);
    }

    gameStage.progressSaved = false;

    incMetric("GAMEPLAY");

    ZSound.PlayMusic("m_ded");

    PlayerData.inst.score = 0;

    if (vkparams.registered || PlayerData.inst.playerItem.maxdistance == 0 || PlayerData.inst.playerItem.maxdistance == null) gameStage.tutorial = true; else gameStage.tutorial = false;

    CustomStage.prototype.onShow.call(this);
    gameStage.killing = false;
    gameStage.slowMoCoef = 1;
    //window.addEventListener("keypress", this.doKeyDown, false);
    gameStage.rightReleased = true;

    this.state = "game";
    this.doProcess = false;

    gameStage.revealPrice = 1;

    LauncherBG.inst = new LauncherBG(0, 0);
    LauncherBG.inst.addLevel("plantPart2");

    for (var i = 0; i < 500; ++i)///
        LauncherBG.inst.process(true);
    LauncherBG.inst.distance = 0;

    MM.inst.init();

    LevelManager.loadLevel("hud", gameStage.onShowContinue, SM.inst.guiLayer);

    var tweenVar = {x: 0};
    PlayerData.inst.resetRP();
    gameStage.ari = TweenMax.to(tweenVar, 14, {x: 1, yoyo: false, repeat: -1, onRepeat: PlayerData.inst.azureReadData});
}

GameStage.prototype.fdown = function (md) {
    //    document.focus();
    if (md.which == 1)
        gameStage.fireState = true;

    if (md.which == 3) {
        if (gameStage.rightReleased) {
            gameStage.rightReleased =false;
            gameStage.player.onJump();
        }
        //    gameStage.player.jumpboost = false;
    }
    //    md.preventDefault();
    //    window.focus();
}

GameStage.prototype.fup = function (md) {
    //     document.focus();
    if (md.which == 3)
        gameStage.rightReleased = true;


    if (md.which == 1) {
        gameStage.fireState = false;
        if (gameStage.player)
            gameStage.player.weapon.mouseUp();
    }
}


//NO "THIS" IN CURRENT CONTEXT
GameStage.prototype.onShowContinue = function () {

    gameStage.doProcess = true;
    gameStage.stepSize = gameStage.invFR;
    gameStage.doPhys = true;

    var xxx = gameStage.createCircle(20, 100, 100, 100);
    SM.inst.guiLayer.addChild(xxx);

    if (vkparams.friendsIngame)
    {
        LauncherBG.inst.graves = [];
        for (var i = 0; i < vkparams.friendsIngame.length; ++i)
        {
            if (vkparams.friendsIngame[i].maxdistance > 1) {
                LauncherBG.inst.graves.push({
                    text: vkparams.friendsIngame[i].name + " " + vkparams.friendsIngame[i].last_name,
                    dist: vkparams.friendsIngame[i].maxdistance
                });
            }
        }
        if (PlayerData.inst.playerItem.maxdistance > 1)
        LauncherBG.inst.graves.push({
            text: vkparams.first_name + " " + vkparams.last_name,
            dist: PlayerData.inst.playerItem.maxdistance
        });
    }
    //else
    //LauncherBG.inst.graves = [{text: "ПАЛАУТ", dist: 20}, {text: "ДУЛЬКИН", dist: 30}, {text: "ПСИНА", dist: 200}];


    var floorHeight = 120;
    gameStage.floor = new FloorObj(SCR_WIDTH / 2, SCR_HEIGHT - floorHeight / 2, null);
    gameStage.floor.gfx = new PIXI.DisplayObjectContainer();
    gameStage.floor.gfx.width = SCR_WIDTH;
    gameStage.floor.gfx.height = floorHeight;
    gameStage.floor.gfx.visible = false;

    gameStage.createHPBar(10, 5, 5);


    gameStage.ammobar = CObj.getById("ammot");
    gameStage.ammoico = CObj.getById("ammoico");
    gameStage.reloadBar = new CircleBar(gameStage.ammoico.x, gameStage.ammoico.y);
    gameStage.reloadBar.init("recharge icon.png", "recharge icon bar.png", "recharge icon.png");
    gameStage.reloadBar.pos = 0.5;
    gameStage.reloadBar.gfx.visible = false;
    SM.inst.guiLayer.addChild(gameStage.reloadBar.gfx);
    gameStage.player = new CPlayer(140, 440);
    gameStage.player.gfx.pivot.y = -190;
    gameStage.player.gfx.scale.x = 0.22;
    gameStage.player.gfx.scale.y = 0.22;
    gameStage.player.playable = true;
    LauncherBG.inst.pllayer.addChild(gameStage.player.gfx);

    if (PlayerData.inst.getUpgrade(null, "Health").upgr == 5) {
        gameStage.player.maxHp += 1;
        gameStage.player.hp += 1;
    }
    //SM.inst.fg.addChild(gameStage.player.gfx);
    gameStage.updateItems();

    gameStage.barXP = CObj.getById("barxp");
    gameStage.barXP.upperOfsY = 1;

    gameStage.player.updateAppearence(true, true, "idle");

    TweenMax.delayedCall(1.3, function(){
        if (gameStage.player)
            gameStage.player.gfx.skeleton.setAttachment("head", "head1");
    });
    gameStage.player.weapon.resetParams();
    gameStage.player.weapon.state = gameStage.player.weapon.sFire;
    gameStage.player.weapon.updateAmmo();

    gameStage.player.process();

    gameStage.scoreObj = CObj.getById("score");
    gameStage.updateScore();
    gameStage.worldSpeed = 1;
     gameStage.createPools();
    gameStage.distText = CObj.getById("dist");

    gameStage.visibleAllText=  function(v)
    {
        for (var i = 0; i < SM.inst.fontLayer.children.length; ++i) {
            SM.inst.fontLayer.children[i].visible = v;
        }
    };
    gameStage.menuBtn = CObj.getById("menu");
    gameStage.menuBtn.click = function () {
        if (!gameStage.doProcess) return;
        if (!gameStage.doPhys) return;

        gameStage.state = "paused";
        gameStage.pause();
        gameStage.fadeScreen();
        gameStage.visibleAllText(false);
        TweenMax.killTweensOf(gameStage.menuBtn, true);
        LevelManager.loadLevel("levelmenu", gameStage.makePause, SM.inst.fontLayer, LevelManager.levelLoadOffsetX);
    }


    $(function() {
        $(document).on('keydown', gameStage.doKeyDown);
        $(document).on('keyup', gameStage.doKeyUp);
        $(document).mousedown(gameStage.fdown);
        $(document).mouseup(gameStage.fup);
    });

    if (MOBILE)
    {
        SM.inst.superStage.interactive = true;
        SM.inst.superStage.touchstart = function(data)
        {
            console.log("TSTART");
            data.originalEvent.preventDefault();
            // store a refference to the data
            // The reason for this is because of multitouch
            // we want to track the movement of this particular touch
            if (data.global.x / SCR_SCALE > SCR_WIDTH / 2)
            {
                window.mouseX = data.global.x/SCR_SCALE;
                window.mouseY = data.global.y/SCR_SCALE;
                gameStage.fireTouch = data;
                gameStage.fireState = true;
            } else
            {
                gameStage.player.onJump();
            }
        };

        /*SM.inst.superStage.tap = function(e)
        {
            if (e.global.x / SCR_SCALE < SCR_WIDTH / 2)
            {
                gameStage.player.onJump();
            }
        }
        */
        // set the callbacks for when the mouse or a touch moves
        SM.inst.superStage.touchmove = function(data) {
         //   console.log("TMOVE");
            data.originalEvent.preventDefault();
            // need to get parent coords..
                if (data == gameStage.fireTouch)
                {
                //    console.log("MOVE MOUSE UPDATE");
                    window.mouseX = data.global.x/SCR_SCALE;
                    window.mouseY = data.global.y/SCR_SCALE;
                }
        }

        // set the events for when the mouse is released or a touch is released
        SM.inst.superStage.touchend = SM.inst.superStage.touchendoutside = function(data)
        {
            console.log("TEND");
            if (data == gameStage.fireTouch)
            {
                gameStage.fireState = false;
                gameStage.fireTouch = null;
            }
        };


    }

    gameStage.updateXP();
    LauncherBG.inst.maxVelocity = 0.1;

    new TweenMax(LauncherBG.inst, 3, {maxVelocity: 10, ease: Sine.easeIn});

    if (gameStage.tutorial && !gameStage.tutComplete ) gameStage.showTutorial(); else
    {
        PlayerData.inst.progressAch("Gold medal 1", 1, false);
    }

    if (MOBILE)
    LevelManager.destroyLevel("loading");
}

GameStage.prototype.makePause = function () {

        removePause = function()
        {
            gameStage.state = "game";
            gameStage.doProcess = true;
            LevelManager.removeLastLevel();
            LevelManager.objs = null;
            gameStage.visibleAllText(true);
            gameStage.doPhys = true;
            gameStage.unpause();
            gameStage.removeFade();
        }

    charStage.updateMusicButton(CObj.getById("bmute"));
    /* CObj.getById("brestart").click = function () {
        removePause();
        SM.inst.openStage(gameStage);
     };*/

    CObj.getById("bresume").click = function () {
        removePause();
    }

    CObj.getById("blevs").click = function () {
        removePause();
        SM.inst.openStage(charStage);
    }
}

GameStage.prototype.createPools = function () {
    if (pool.Size("textParticle") == 0)
        pool.Fill("textParticle", 0, function () {
            var c = new CTextField(0, 0);
            c.fontFamily = 0;
            c.fontSize = 25;
            c.align = "center";

            c.gfx = CTextField.createTextField(c);
            c.gfx.scale.x *= window.addScale;
            c.gfx.scale.y *= window.addScale;
            return c;
        });

    if (pool.Size("smoke") == 0)
        pool.Fill("smoke", 20, function () {
            var c = crsp("smoke");
            return c;
        });


    if (pool.Size("fxsmallblink") == 0)
        pool.Fill("fxsmallblink", 10, function () {
            var c = CObj.createMovieClip("fxsmallblink");
            c.scale.x = 1.8;
            c.scale.y = 1.8;
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            return c;
        });


    if (pool.Size("coinCollect") == 0)
        pool.Fill("coinCollect", 10, function () {
            var c = CObj.createMovieClip("coinfx.png");
            c.scale.x = 0.7;
            c.scale.y = 0.7;
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            return c;
        });


    if (pool.Size("expl") == 0)
        pool.Fill("expl", 4, function () {
            var c = CObj.createMovieClip("Boom");
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            c.scale.x = 1;
            c.scale.y = 1;
            return c;
        });

    if (pool.Size("blood") == 0)
        pool.Fill("blood", 11, function () {
            var c = CObj.createMovieClip("blood");
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            c.scale.x = 1;
            c.scale.y = 1;
            return c;
        });

    if (pool.Size("bloodblow") == 0)
        pool.Fill("bloodblow", 6, function () {
            var c = CObj.createMovieClip("bloodblow");
            c.anchor.x = 0.5;
            c.anchor.y = 0.5;
            c.scale.x *= 1;
            c.scale.y *= 1;
            return c;
        });

}

GameStage.prototype.removeFade = function () {
    TweenMax.killTweensOf(gameStage.pauseSprite);
    gameStage.pauseSprite.parent.removeChild(gameStage.pauseSprite);
    gameStage.pauseSprite = null;

    PIXI.Texture.removeTextureFromCache(gameStage.pauseTexture);

    if (gameStage.pauseTexture) {
        gameStage.pauseTexture.destroy();
        gameStage.pauseTexture = null;
    }
}

GameStage.prototype.fadeScreen = function () {
    //gameStage.pauseTexture = new PIXI.RenderTexture(SCR_WIDTH, SCR_HEIGHT);
    gameStage.pauseSprite = new PIXI.Graphics();//PIXI.Sprite(gameStage.pauseTexture);
    gameStage.pauseSprite.beginFill(0x55FFDD, 0.4);
    gameStage.pauseSprite.drawRect(0, 0, SCR_WIDTH, SCR_HEIGHT);
    gameStage.pauseSprite.endFill();
    gameStage.pauseSprite.alpha = 0;
    gameStage.pauseSprite.blendMode = PIXI.blendModes.DIFFERENCE;
    new TweenMax(gameStage.pauseSprite, 1.1, {alpha: 1, ease: Elastic.easeOut});
    SM.inst.guiLayer.addChild(gameStage.pauseSprite);
}



GameStage.prototype.unpause = function () {
    gameStage.doProcess = true;

    if (gameStage.player)
        gameStage.player.gfx.autoUpdate = true;

    //window.focus();
    PauseTimer.resume();
   // TweenMax.resumeAll();
}

GameStage.prototype.pause = function () {
    if (!gameStage.doProcess) return;

    gameStage.doProcess = false;

    if (gameStage.player)
        gameStage.player.gfx.autoUpdate = false;

    PauseTimer.pause();
}

GameStage.prototype.updateSoundBtn = function (btn) {


    if (ZSound.available)
        btn.gfx.gotoAndStop(0); else
        btn.gfx.gotoAndStop(1);
};function AchStage() {CustomStage.apply(this)}

extend(AchStage, CustomStage);

AchStage.prototype.onShow = function() {
    this.doProcess = false;
    charStage.unreadAch = false;
    CustomStage.prototype.onShow.call(this);

    LevelManager.loadLevel("levach", this.onShowContinue);
}

AchStage.prototype.createDesc = function()
{
    var s = crsp("yashick");
    s.interactive = false;
    s.anchor.x = -0.2;
    s.anchor.y = -0.2;
    var txtName = CTextField.createTextField({align: "left", fontSize: "24"});
    s.addChild(txtName);
    txtName.x = 20;//-bg.width / 2;
    txtName.y = 10;//-bg.height / 2;
    var txtDesc = CTextField.createTextField({align: "left", fontSize: "24"});
    txtDesc.x = 20;//-bg.width / 2;

    s.addChild(txtDesc);
    s.alpha = 0;
    return s;
}

AchStage.prototype.updateDesc = function(ach)
{
    var tname = achStage.desc.getChildAt(0);
    var tdesc = achStage.desc.getChildAt(1);
    tname.text = ach.name;
    tdesc.text = ach.desc;
    if (ach.desc) tdesc.updateText();
    if (ach.name) tname.updateText();
}

AchStage.prototype.updateAchievements = function()
{
    var numColumns = 4;

    var deltaW = SCR_WIDTH / (numColumns * 2);

    for (var i = 0; i < PlayerData.inst.achs_progress.length;++i)
    {
        var id = PlayerData.inst.achs_progress[i].id_ach;

        for (var j = 0; j < PlayerData.inst.achs.length; ++j)
        {
            if (PlayerData.inst.achs[j].id == id)
            {
                break;
            }
        }

        var ach = PlayerData.inst.achs[j];
        if (PlayerData.inst.achs_progress[i].progress < 1)
            achObject = crsp("empty orden"); else
        achObject = crsp(ach.gfx);

        //    achObject.tint = 0x332299;
        achObject.x = deltaW + (i % numColumns) * 2 * deltaW;
        achObject.y = 120+Math.floor(i / numColumns)*220;
        achObject.width = 90;
        achObject.scale.y = achObject.scale.x;
        achObject.anchor.x = 0.5;
        achObject.anchor.y = 0.5;
        achObject.interactive = true;


        var txtName = CTextField.createTextField({text: ach.desc, align: "center", fontSize: "17"});
        txtName.x = achObject.x - txtName.width / 2;
        txtName.y = achObject.y + 100;//-bg.height / 2;
        achStage.bar.container.addChild(txtName);
        achStage.bar.container.addChild(achObject);
    }
    achStage.bar.pos = 0;
}

AchStage.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

AchStage.prototype.onShowContinue = function()
{
    achStage.doProcess = true;
    var btn = CObj.getById("btnback2");
    btn.click = function(){
        SM.inst.openStage(charStage);
    };

    achStage.bar = new CScrollbar(SCR_WIDTH / 2,338, "", SCR_WIDTH, 524, "ordena background 1 px.png");
    achStage.bar.gfx.parent.removeChild(achStage.bar.gfx);
    SM.inst.bg.addChild(achStage.bar.gfx);
    achStage.updateAchievements();
}

AchStage.prototype.process = function() {
    CObj.processAll();
  //  if (achStage.desc.visible)
   // {
    //    achStage.desc.position.x = window.mouseX;
     //  achStage.desc.position.y = window.mouseY;
   // }
};/**
 * Created by KURWINDALLAS on 05.12.2014.
 */

function ShopStage() {
    CustomStage.apply(this);
}

extend(ShopStage, CustomStage);

ShopStage.prototype.createStatsPanel = function (cb) {

    setHover = function (obj, text)
    {
        obj.gfx.interactive = true;
        var t = text;
        obj.gfx.mouseover = function (evt) {
                var dp = CObj.getById("descpanel");
                if (dp)
                {
                    var t = text;
                    setTimeout(function(){
                        dp.text = t;
                        CObj.getById("descbg").gfx.visible = true;
                    }, 40);
                }
        }

        obj.gfx.mouseout = function (evt) {


            var t = text;
            setTimeout(function(){
                var dp = CObj.getById("descpanel");
                if (dp)
                {

                    dp.text = " ";
                    CObj.getById("descbg").gfx.visible = false;

                }
            }, 40);

        }
    }

    LevelManager.loadLevel("upperPanel",
        function()
        {
            CObj.getById("descbg").gfx.visible = false;
            CObj.getById("descpanel").text = " ";

            setHover(CObj.getById("xpback"), "Шкала уважения ветеранов. Больше уважения - выше уровень деда");
            setHover(CObj.getById("moneyback"), "Монеты. Нужны для покупки новых вещей");
            setHover(CObj.getById("energyback"), "Биодобавки нужны деду, чтобы воевать");
            setHover(CObj.getById("starback"), "Звезды. Они облегчают игровой процесс");

            cb();
        }, SM.inst.ol);

}
ShopStage.prototype.onShow = function () {
  //  azureclient.getTable("tb_players").update(PlayerData.inst.playerItem);//

    LevelManager.loadLevel("levshop", function () {
        shopStage.createStatsPanel(shopStage.onShowContinue);
    });
}

ShopStage.prototype.checkEq = function (item) {
    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i) {
        if (PlayerData.inst.items_enabled[i].id_item == item.id && PlayerData.inst.items_enabled[i].equipped == "1") return true;
    }
    return false;
}

ShopStage.prototype.checkOwned = function (item) {
    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i) {
        if (item.id == PlayerData.inst.items_enabled[i].id_item) return true;
    }
    return false;
}

ShopStage.prototype.unequipAll = function () {
    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i) {
        if (PlayerData.inst.getItemById(PlayerData.inst.items_enabled[i].id_item).type == shopStage.currentFilter)
            PlayerData.inst.items_enabled[i].equipped = "0";
    }
}

ShopStage.prototype.buyItem = function (event, unlock) {
    var buyitem = event.target.btn.item;
    if ((!unlock && buyitem.price > 0 && PlayerData.inst.playerItem.money >= buyitem.price) ||
        (unlock && buyitem.pricecrys > 0 && PlayerData.inst.playerItem.crystals >= buyitem.pricecrys)) {

        // shopStage.unequipAll();
        shopStage.transScreen = SM.inst.addDisableWindow("ПРОВОДИТСЯ ТРАНЗАКЦИЯ" + '\n' + "ПОЖАЛУЙСТА ПОДОЖДИТЕ");


        ZSound.Play("buy");

        PlayerData.inst.callDedAPI("BUY_ITEM", null, null,{id: buyitem.id, equipped: true}, function (x) {
            console.log("SCORE UPDATED " + x);
            if (x && x.crystals && x.money) {
                //SUCCESS
                PlayerData.inst.playerItem.crystals = parseFloat(x.crystals);
                PlayerData.inst.playerItem.money = parseFloat(x.money);

                PlayerData.inst.items_enabled.push({id_item: buyitem.id, id_player: PlayerData.inst.playerItem.id});
                shopStage.updateStatsPanel();

                PlayerData.inst.equipItem(buyitem, "1");
                shopStage.pl.updateAppearence(true, false, null, null, null);

                shopStage.updateBar(shopStage.currentTab, shopStage.currentFilter, shopStage.bar.pos);
                shopStage.updateStatsPanel();
                shopStage.transScreen.parent.removeChild(shopStage.transScreen);
                shopStage.transScreen = null;

            } else {
                if (shopStage.transScreen.parent) {
                    rp(shopStage.transScreen.parent)
                    shopStage.transScreen = null;
                }
            }
        });
    } else charStage.openPremiumWindow();
        /*azureclient.invokeApi("buy_item", {
            body: {id_item: buyitem.id, id_player: PlayerData.inst.playerItem.id},
            method: "post"
        }).done(function (results) {
                    incMetric("BUY ITEM" + buyitem.name);

                    if (unlock && buyitem.pricecrys > 0)
                        PlayerData.inst.playerItem.crystals -= buyitem.pricecrys;
                    else
                        PlayerData.inst.playerItem.money -= buyitem.price;


                    PlayerData.inst.items_enabled.push({id_item: buyitem.id, id_player: PlayerData.inst.playerItem.id});
                    shopStage.updateStatsPanel();



                    PlayerData.inst.equipItem(buyitem, true);
                    shopStage.pl.updateAppearence(true, false, null, null, null);

                    shopStage.updateBar(shopStage.currentTab, shopStage.currentFilter, shopStage.bar.pos);
                    shopStage.updateStatsPanel();
                    shopStage.transScreen.parent.removeChild(shopStage.transScreen);
                    shopStage.transScreen = null;
                    PlayerData.inst.savePlayerData();
        });
    } else {
        charStage.openPremiumWindow();
    }*/
}

ShopStage.prototype.createItemBtn = function (item) {
    var g = new PIXI.DisplayObjectContainer();
    var isBooster = shopStage.currentTab == "bstuff";

    if (isBooster) {
        var upgrObj = PlayerData.inst.getUpgrade(item);
        var upgr = upgrObj.upgr;
        if (upgrObj.idNext)
            item = PlayerData.inst.getItemById(upgrObj.idNext); else
        {
            var boosterFullUpgr = true;
            item = PlayerData.inst.getItemById(upgrObj.id);
        }
    }

    var ico = crsp(item.gfx)
    ico.x = 0;
    var bsX = 0.5;
    var bsY = 0.5;
    ico.scale.x = bsX;
    ico.scale.y = bsY;
    ico.y = ico.height / 2;
    g.addChild(ico);
    ico.interactive = true;
    var f = ico;
    ico.mouseover = function (evt) {

        if (item.type == tWeapon || item.type == tApp + tHat) {
            var gfxhat = null;
            var gfxweap = null;
            if (item.type == tWeapon) {
                gfxweap = item.gfx;
            }
            if (item.type == tApp + tHat) {
                gfxhat = item.gfx;
            }
            shopStage.pl.updateAppearence(true, false, null, gfxweap, gfxhat);
        }
        TweenMax.killTweensOf(f.scale);
        f.tint = CButton.tintColor;
        new TweenMax(f.scale, 0.6, {y: bsY + 0.05, ease: Elastic.easeOut});
        new TweenMax(f.scale, 0.4, {x: bsX + 0.05, ease: Elastic.easeOut});

        var desc = item.desc.split("|");
        var desctext = desc[0];
        if (desc.length > 1) desctext = desc[1];
        var tf =
            CObj.getById("tfdescd");
        tf.setTextSafe(desctext);
        tf.item = item;
    }
    ico.mouseout = function (evt) {
        var tf = CObj.getById("tfdescd");
        if (tf.item == item)
            tf.setTextSafe("");
        if (item.type == tWeapon || item.type == tApp + tHat) {
            shopStage.pl.updateAppearence(true, false, null, null, null);
        }
        f.tint = 0xffffff;
        if (f.currentFrame)
            f.gotoAndStop(1);
        new TweenMax(f.scale, 0.3, {x: bsX, y: bsY, ease: Elastic.easeOut});
    }

    if (isBooster)
        for (var i = 0; i < 5; ++i) {
            if (i < upgr)
                var x = crsp("improve point on"); else
                x = crsp("improve point off");
            x.x = (i - 2) * 25;
            x.scale.x = 0.8;
            x.scale.y = 0.8;
            x.y = 3;
            g.addChild(x);
        }


    var owned = this.checkOwned(item);
    var equipped = this.checkEq(item);

    tftext = "";

    if (isBooster)
    { if (boosterFullUpgr) tftext = "";
        else if (!owned) {
        if (item.pricecrys < 0 && item.price < 0)
            tftext = ""; else {
            if (item.pricecrys > 0)
                tftext = item.pricecrys.toString(); else
                tftext = item.price.toString();
            }
        }
    }

    var clickFunc;
    var infoText = "";
    var dy = 0;
    var btnName = "buy button";
    var bgSprite;
    if (!owned || isBooster) {

        if (isBooster && upgr == 5) {
            btnName = "equipped button";
        } else {
            if (item.reqlvl > PlayerData.inst.playerItem.lvl) {
                clickFunc = unlockItem;
                btnName = "unlock button";
                infoText = "МИН " + item.reqlvl.toString() + " УР.";
                bgSprite = "price star.png";
                tftext = item.pricecrys.toString();
            } else {
            clickFunc = buyItem;
                bgSprite = "price coin.png";
                btnName = "buy button";
                tftext = item.price.toString();
            }
        }
    } else {
        if (equipped == true) {

            if (shopStage.currentTab == "bcloth")
            {
                btnName = "unwear button";
                clickFunc = takeOff;
            } else {
                btnName = "equipped button";

            }
        }
        else {
            clickFunc = wearItem;
            btnName = "wear button"
        }
    }
    dy = -15;

    var btn = new CButton(0, 144 + dy, btnName);
    if (btnName == "equipped button") {
        btn.gfx.mouseout = null;
        btn.gfx.mouseover = null;
    }
    ;
    btn.fontSize = 33;
    btn.addToSameLayer = true;
    btn.gfx.anchor.x = 0.5;
    btn.gfx.anchor.y = 0.5;
    btn.gfx.scale.x = 0.8;
    btn.gfx.scale.y = 0.8;
    btn.init();
    btn.gfx.parent.removeChild(btn.gfx);

    if (isBooster)
        btn.item = PlayerData.inst.getItemById(upgrObj.idNext); else
        btn.item = item;
    btn.gfx.btn = btn;
    btn.click = clickFunc;

    function takeOff(event)
    {
        PlayerData.inst.equipItem(item, "0");
        shopStage.pl.updateAppearence(true, false, null, null, null);
        shopStage.updateBar(shopStage.currentTab, shopStage.currentFilter, shopStage.bar.pos);
    }

    function unlockItem(event) {
        shopStage.buyItem(event, true);
    }

    function wearItem(event) {
        PlayerData.inst.equipItem(item, "1");
        shopStage.pl.updateAppearence(true, false, null, null, null);
        shopStage.updateBar(shopStage.currentTab, shopStage.currentFilter, shopStage.bar.pos);
    }

    function buyItem(event) {
        shopStage.buyItem(event, false);
    }


    g.addChild(btn.gfx);
    if (btn.text)
        btn.text = btn.text;
    g.btn = btn;

    if (tftext) {
        if (bgSprite) {
            var tfBg = crsp(bgSprite);
            tfBg.x = 0;
            tfBg.y = 80;
            tfBg.scale.x = 0.75;
            tfBg.scale.y = 0.75;
            g.addChild(tfBg);
        }
    }

    var infoTF = new CTextField();
    infoTF.tint = "0x333333";
    infoTF.fontSize = 15;
    infoTF.align = "center";
    infoTF.init();
    g.infoTF = infoTF;
    infoTF.x = 0;
    infoTF.y = 158;
    infoTF.gfx.parent.removeChild(infoTF.gfx);
    infoTF.text = infoText;
    g.addChild(infoTF.gfx);


    var priceTF = new CTextField();
    priceTF.tint = "0x333333";
    priceTF.fontSize = 15;
    priceTF.align = "center";
    priceTF.text = tftext;
    priceTF.init();
    g.tfprice = priceTF;
    priceTF.x = 10;
    priceTF.y = 70;
    priceTF.gfx.parent.removeChild(priceTF.gfx);
    g.addChild(priceTF.gfx);
    priceTF.text = priceTF.text;
    g.destroy = function () {
        g.tfprice.destroy();
        if (g.btn) {
            g.btn.destroy();
            g.btn = null;
        }
        g.tfprice = null;
        g.parent.removeChild(g);
    }
    //  btn.updateGraphics();
    return g;
}

ShopStage.prototype.updateBar = function (tab, filter, baroffset) {
    shopStage.updateStatsPanel();
    shopStage.currentTab = tab;
    shopStage.currentFilter = filter;

    CObj.getById("bstuff").gfx.alpha = 0.1;
    CObj.getById("bweap").gfx.alpha = 0.1;
    CObj.getById("bcloth").gfx.alpha = 0.1;

    CObj.getById(tab).gfx.alpha = 1;

    for (var i = 0; i < this.bar.container.children.length; ++i) {
        this.bar.container.children[i].destroy();
        i--;
    }

    var numColumns = 2;
    if (tab == "bweap") {
        numColumns = 2;
    }
    var d = this.bar.gfx.width / numColumns - 6;
    var l = 0;
    for (var i = 0; i < PlayerData.inst.items.length; ++i) {
        if (PlayerData.inst.items[i].type.indexOf(filter) < 0) continue;


        if (PlayerData.inst.items[i].name.indexOf('$') >= 0)  continue;
        var g = shopStage.createItemBtn(PlayerData.inst.items[i]);
        g.x = d / 2 + (l % numColumns) * (d);
        g.y = 40 + Math.floor(l / numColumns) * 195;
        this.bar.container.addChild(g);
        l++;
    }
    if (!baroffset) baroffset = 0;
    this.bar.pos = baroffset;
}

ShopStage.prototype.updateStatsPanel = function () {
    var b = CObj.getById("bar");
    b.totalWidth = 200;
    var xp = PlayerData.inst.playerItem.xp;
    var needed = PlayerData.inst.xpLevel[PlayerData.inst.playerItem.lvl].xp;
    b.prop = xp / needed;
    CObj.getById("tflev").text = PlayerData.inst.playerItem.lvl.toString();
    if (!CObj.getById("bar").gfx.parent) {
        SM.inst.fg.addChild(CObj.getById("bar").gfx);
    }
    CObj.getById("tfexp").text = Math.floor(xp).toString() + "/" + Math.floor(needed).toString();

    CObj.getById("tfmoney").text = PlayerData.inst.playerItem.money.toString();
    CObj.getById("tfcry").text = PlayerData.inst.playerItem.crystals.toString();
    CObj.getById("tfenergy").text = Math.floor(PlayerData.inst.playerItem.energy).toString();
}

ShopStage.prototype.onShowContinue = function () {
    CustomStage.prototype.onShow.call(this);

    var photoBtn = CObj.getById("photo");
    if (photoBtn) photoBtn.click = function () {
        if (vkparams.novk) return;
        CObj.enableButtons(false);
        shopStage.transScreen = SM.inst.addDisableWindow("ФОТОГРАФИРУЕМ... ОЖИДАЙТЕ");
        var removeTint = function()
        {
            CObj.enableButtons(true);
            rp(shopStage.transScreen);
            shopStage.transScreen = null;
        }
        uploadPhoto(vkparams.viewerid, false, removeTint);
    }
    var avaBtn = CObj.getById("ava");
    if (avaBtn) avaBtn.click = function () {
        if (vkparams.novk) return;
        CObj.enableButtons(false);
        shopStage.transScreen = SM.inst.addDisableWindow("ФОТОГРАФИРУЕМ... ОЖИДАЙТЕ");
        var removeTint = function()
        {
            CObj.enableButtons(true);
            rp(shopStage.transScreen);
            shopStage.transScreen = null;
        }
        uploadPhoto(vkparams.viewerid, true, removeTint);
    }

    var w = SCR_WIDTH / 2;
    shopStage.bar = new CScrollbar(SCR_WIDTH / 2 + w / 2, 335, "", w, 524);
    shopStage.bar.gfx.parent.removeChild(shopStage.bar.gfx);
    SM.inst.ol.addChildAt(shopStage.bar.gfx, 1);
    shopStage.updateStatsPanel();

    CObj.getById("bbuy1").click = charStage.openPremiumWindow;
    CObj.getById("bbuy2").click = charStage.openPremiumWindow;

    CObj.getById("bback").click = function () {
        SM.inst.openStage(charStage);
    }

    CObj.getById("bstuff").click = function () {
        shopStage.updateBar("bstuff", tBoost);
    }
    CObj.getById("bweap").click = function () {
        shopStage.updateBar("bweap", tWeapon);
    }

    CObj.getById("bcloth").click = function () {
        shopStage.updateBar("bcloth", tApp);
    }

    shopStage.updateBar("bstuff", tBoost);

    var plPos = CObj.getById("plpos");
    if (plPos) pl = new CPlayer(plPos.x, plPos.y); else
    var pl = new CPlayer(180, 400);
    shopStage.pl = pl;
    shopStage.pl.updateAppearence(true, false, "breath", null, null);
    pl.gfx.scale.x = 0.4;
    pl.gfx.scale.y = 0.4;
    SM.inst.ol.addChild(pl.gfx);
}

function levelClick(evt) {
    gameStage.currentLevel = evt.target.levelNum;
    SM.inst.openStage(gameStage);
}

ShopStage.prototype.onHide = function (newStage) {

    shopStage.pl = null;
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

ShopStage.prototype.updateEnergyText = function () {
    var tf = CObj.getById("tfdelay");
    if (tf && PlayerData.inst.playerItem.energy < 1) {
        if (Math.round(PlayerData.inst.playerItem.energy) < Math.round(PlayerData.inst.maxEnergy)) {
            var mins = (1 - PlayerData.inst.playerItem.energy)*(1 / PlayerData.inst.epm);
            var timeRes = dateDiff(new Date(sqlToJsDate(PlayerData.inst.playerItem.updateDate)), mins, true);
            if (timeRes.d < 0) tf.text = "";
            tf.text = timeRes.timeString;
        } else {
            tf.text = "";
        }
        tf.gfx.visible = true;
    } else {
        tf.gfx.visible = false;
    }
}

ShopStage.prototype.process = function () {
    //shopStage.updateStatsPanel();

    this.updateEnergyText();
    CObj.processAll();
};function ComixStage() {
    CustomStage.apply(this);
}

extend(ComixStage, CustomStage);

ComixStage.prototype.onShow = function () {
    comixStage.comixContainer = new PIXI.DisplayObjectContainer();
    SM.inst.ol.addChild(comixStage.comixContainer);

    this.buttonNext = new CButton(SCR_WIDTH - 60, SCR_HEIGHT - 60, "next button");
    this.buttonNext.gfx.width = 80;
    this.buttonNext.gfx.scale.y =  this.buttonNext.gfx.scale.x;
    this.buttonNext.fontSize = 17;

    this.buttonNext.hover = false;

    this.buttonNext.click = function () {
        comixStage.goNext();
    };
    this.buttonNext.init();
    this.buttonNext.gfx.interactive = true;

    this.comixData = [
        {
        frame: "ded clicking",
        duration: 5.5,
        objects:
        [
            {tex: "1top_frame.png", s1: [1.5, 1.5], s2: [1, 1], rot1: -0.05, rot2: 0, vx: 0, vy: -0.1, p1: [SCR_WIDTH/2, 15 + SCR_HEIGHT/4 - 450], p2: [SCR_WIDTH/2, 15 + SCR_HEIGHT/4], delay: 0.1, tweenTime: 0.4, ease: Back.easeOut},
            {tex: "1buttom_frame.png", s1: [1.5, 1.5], s2: [1, 1], rot1: 0.05, rot2: 0, vx: 0.0, vy: -0.05, p1: [SCR_WIDTH/2- SCR_WIDTH, 0.75*SCR_HEIGHT- 20 + 400], p2: [SCR_WIDTH/2 - 25, 0.75*SCR_HEIGHT - 20], delay: 1.1, tweenTime: 0.55, ease: Sine.easeIn},
            {tex: "1buttom_click.png", rot1: -1, rot2: 0, vx: 0.0, vy: -0.08, s1: [0.1, 0.1],s2:[1,1],p1: [550, 300], p2: [550, 300 - 10], delay: 1.9, alphaHide: 1,  tweenTime: 0.15, ease: Sine.easeIn},
            {tex: "1buttom_click.png", rot1: -1, rot2: 0, vx: 0.0, vy: -0.08, s1: [0.1, 0.1],s2:[1,1],p1: [480, 360], p2: [480, 360 - 10], delay: 2, alphaHide: 1, tweenTime: 0.15, ease: Sine.easeIn},
            {tex: "1buttom_click.png", rot1: -1, rot2: 0, vx: 0.0, vy: -0.08, s1: [0.1, 0.1],s2:[1,1],p1: [520, 390], p2: [520, 390 - 10], delay: 2.34, alphaHide: 1, tweenTime: 0.15, ease: Sine.easeIn},
            {tex: "1top_bubble.png", vx: 0.0, vy: -0.08, s1: [0.1, 0.1],s2:[1,1],p1: [540, 80], p2: [540, 80 - 10], delay: 3, alphaHide: 2.5, tweenTime: 0.15, ease: Sine.easeIn}
        ]},
        {
            frame: "screen",
            duration: 5.5,
            objects:
                [
                    {tex: "2frame.png", s1: [1.2, 1.2], s2: [1.1,1.1], vx: 0, vy: -0.2, p1: [SCR_WIDTH/2, SCR_HEIGHT/2 + SCR_HEIGHT], p2: [SCR_WIDTH/2, SCR_HEIGHT/2 + 15], delay: 0., tweenTime: 0.6, ease: Back.easeOut},
                    {tex: "2frame_comment1.png", vx: 0, vy: -0.1, p1: [SCR_WIDTH/2-80, SCR_HEIGHT/2 + 110+ 150 - 20], p2: [SCR_WIDTH/2-80, SCR_HEIGHT/2 + 110- 20], delay: 1.4, tweenTime: 0.4, ease: Back.easeOut},
                    {tex: "2frame_comment2.png", vx: 0, vy: -0.1, p1: [SCR_WIDTH/2 + 20, SCR_HEIGHT/2 + 155+ 150- 20], p2: [SCR_WIDTH/2 + 20, SCR_HEIGHT/2 + 155- 20], delay: 1.88, tweenTime: 0.4, ease: Back.easeOut},
                    {tex: "2frame_comment3.png", vx: 0, vy: -0.1, p1: [SCR_WIDTH/2 + 20, SCR_HEIGHT/2 + 200+ 150- 20], p2: [SCR_WIDTH/2 + 20, SCR_HEIGHT/2 + 200- 20], delay: 2.3, tweenTime: 0.35, ease: Back.easeOut}
                ]},
        {
            frame: "anger",
            duration: 5.5,
            objects:
                [
                    {tex: "StoryBackground.png", vx: 0, vy: 0, s1: [150,150], p1: [SCR_WIDTH/2, SCR_HEIGHT/2+ SCR_HEIGHT*1.3], p2: [SCR_WIDTH/2, SCR_HEIGHT/2], delay: 0., tweenTime: 0.3, ease: Sine.easeIn},
                    {tex: "3frame_top.png", rot1: 2, rot2: 0, vx:0, vy: 0.15, p1: [SCR_WIDTH/2 + 600, SCR_HEIGHT/2 - SCR_HEIGHT/4+700], p2: [SCR_WIDTH/2, SCR_HEIGHT/2 - 120], delay: 0.45, tweenTime: 0.6, ease: Back.easeOut},
                    {tex: "3top_frame_signs.png", va: -0.0004, rot1: -2, rot2: 0, vx:0, vy: -0.15, p1: [SCR_WIDTH/2 + 600, SCR_HEIGHT/2 - SCR_HEIGHT/4+700], p2: [SCR_WIDTH/2, SCR_HEIGHT/2 - 120], delay: 0.45, tweenTime: 0.6, ease: Back.easeOut},
                    {tex: "3frame_bottom.png", rot1: 0.05, rot2: 0, vx: 0, vy: -0.15, p1: [SCR_WIDTH/2, SCR_HEIGHT/2 - SCR_HEIGHT], p2: [SCR_WIDTH/2, SCR_HEIGHT/2 + 138], delay: 2.7, tweenTime: 0.33, ease: Back.easeOut}
                    /* {tex: "2frame_comment2.png", vx: 0, vy: -0.1, p1: [SCR_WIDTH/2, SCR_HEIGHT/2 + SCR_HEIGHT], p2: [SCR_WIDTH/2, SCR_HEIGHT/2 + 15], delay: 0., tweenTime: 0.6, ease: Back.easeOut},
                     {tex: "2frame_comment3.png", vx: 0, vy: -0.1, p1: [SCR_WIDTH/2, SCR_HEIGHT/2 + SCR_HEIGHT], p2: [SCR_WIDTH/2, SCR_HEIGHT/2 + 15], delay: 0., tweenTime: 0.6, ease: Back.easeOut},*/
                ]},
        {
            frame: "way of war",
            duration: 5.5,
            objects:
                [
                    {tex: "StoryBackground.png", vx: 0, vy: 0, s1: [150,150], p1: [SCR_WIDTH/2, SCR_HEIGHT/2+ SCR_HEIGHT*1.3], p2: [SCR_WIDTH/2, SCR_HEIGHT/2], delay: 0., tweenTime: 0.3, ease: Sine.easeIn},
                    {tex: "4top_frame2.png", rot1: 0.5, vx:0, vy: 0.05, s1: [3,3], s2: [1,1], p1: [600+500, 160-600], p2: [600+5, 160], delay: 0.2, tweenTime: 0.45, ease: Back.easeOut},
                    {tex: "4top_frame1.png", vx:0, vy: 0.07,  s1: [3,3], s2: [1,1], p1: [230+500, 180-600], p2: [230-5, 180], delay: 2, tweenTime: 0.45, ease: Back.easeOut},
                    {tex: "4frame_bottom.png", s1: [2, 2], s2: [0.99, 0.99], vx: 0, vy: -0.05, p1: [SCR_WIDTH/2, SCR_HEIGHT/2 + SCR_HEIGHT], p2: [SCR_WIDTH/2, SCR_HEIGHT/2 + 138], delay:3.3, tweenTime: 0.5, ease: Sine.easeOut},
                    {tex: "4bottom_bubble.png", s1: [2, 2], s2: [1.05,1.05], vx: 0, vy: -0.05, p1: [SCR_WIDTH/2 - 50, SCR_HEIGHT/2 + SCR_HEIGHT], p2: [SCR_WIDTH/2 - 50, SCR_HEIGHT/2 + 138], delay:3.36, tweenTime: 0.5, ease: Sine.easeOut}
                    /* {tex: "2frame_comment2.png", vx: 0, vy: -0.1, p1: [SCR_WIDTH/2, SCR_HEIGHT/2 + SCR_HEIGHT], p2: [SCR_WIDTH/2, SCR_HEIGHT/2 + 15], delay: 0., tweenTime: 0.6, ease: Back.easeOut},
                     {tex: "2frame_comment3.png", vx: 0, vy: -0.1, p1: [SCR_WIDTH/2, SCR_HEIGHT/2 + SCR_HEIGHT], p2: [SCR_WIDTH/2, SCR_HEIGHT/2 + 15], delay: 0., tweenTime: 0.6, ease: Back.easeOut},*/
                ]}
    ];
    comixStage.goNext();
}

ComixStage.prototype.goNext = function () {
    if (comixStage.dcNext) comixStage.dcNext.kill();

  /*  while (this.comixContainer.children.length > 0)
    {
        rp(this.comixContainer.children[0]);
    }
*/
    TweenMax.killAll(true, true, true);
    var p = this.comixData.shift();
    if (!p || !p.objects)
    {
        SM.inst.openStage(gameStage);
        return;
    }
  //  comixStage.dcNext = TweenMax.delayedCall(p.duration, function(){comixStage.goNext()});
    for (var i = 0; i < p.objects.length;++i)
    {
        var obj = p.objects[i];
        var spr = crsp(obj.tex);
        comixStage.comixContainer.addChild(spr);
        spr.visible = false;

        if (!obj.rot1) obj.rot1 = 0;
        if (!obj.rot2) obj.rot2 = 0;

        if (!obj.p1) obj.p1 = [0,0];
        if (!obj.p2) obj.p2 = obj.p1;
        if (!obj.s1) obj.s1 = [1,1];
        if (!obj.s2) obj.s2 = obj.s1;
        var scaleCoef = 1.1;
        spr.scale.x = obj.s1[0]*scaleCoef;
        spr.scale.y = obj.s1[1]*scaleCoef;
        spr.rotation = obj.rot1;
        spr.x = obj.p1[0];
        spr.y = obj.p1[1];
        spr.vx = 0;
        spr.vy = 0;
        spr.va = 0;

        if (!obj.ease) obj.ease = Sine.easeOut;
        new TweenMax(spr.scale, obj.tweenTime, {x: obj.s2[0]*scaleCoef, y: obj.s2[1]*scaleCoef, delay: obj.delay});

        function tween2(clip, objInner)
        {
            new TweenMax(clip, objInner.tweenTime, {ease: objInner.ease, rotation: objInner.rot2 , x: objInner.p2[0], y: objInner.p2[1], delay: objInner.delay, onComplete: function()
            {
                clip.vx = objInner.vx;
                clip.vy = objInner.vy;
                clip.va = objInner.va;
            }});

        }
        tween2(spr, obj);
        if (!obj.delay) obj.delay = 0;

        {
            setVisible = function(x)
            {
                if (obj.alphaHide)
                new TweenMax(x, 0.1, {delay: obj.alphaHide + obj.delay, alpha: 0.})

                TweenMax.delayedCall(obj.delay, function(){x.visible = true;})
            }
            setVisible(spr);
            //TweenMax.delayedCall(obj.delay, function(spr){spr.visible = true;})
        }
    }
}

    ComixStage.prototype.onHide = function (newStage) {
    var x = PIXI.TextureCache["2frame.png"];
    x.destroy(true);

    rp (comixStage.comixContainer);
    comixStage.comixContainer = null;
        CObj.destroyAll();
}

ComixStage.prototype.process = function () {

    for (var i = 0; i < this.comixContainer.children.length; ++i)
    {
        this.comixContainer.children[i].x +=this.comixContainer.children[i].vx;
        this.comixContainer.children[i].y +=this.comixContainer.children[i].vy;
        this.comixContainer.children[i].rotation +=this.comixContainer.children[i].va;
        this.comixContainer.children[i].vx *= 0.986;
        this.comixContainer.children[i].vy *= 0.986;
        this.comixContainer.children[i].va *= 0.986;
    }
    CObj.processAll();
};function CharStage() {
    CustomStage.apply(this);
}

extend(CharStage, CustomStage);

CharStage.prototype.onShow = function () {
    if (localStorage["sound_state"] == "false")
    ZSound.available = false;



    incMetric("GAME LOADED");
    this.unreadAch = false;
    this.unreadActions = false;
    this.doProcess = false;
    charStage.skipFriends = 0;
    CustomStage.prototype.onShow.call(this);
    charStage.icons = [];
    ZSound.PlayMusic("m_room");

    LevelManager.loadLevel("levchar", function () {
            shopStage.createStatsPanel(charStage.onShowContinue);
        }
        , SM.inst.ol);
}

CharStage.prototype.onHide = function (newStage) {

    for (var i = 0; i < charStage.icons.length; ++i) {
        charStage.icons[i].texture.destroy(true);
    }

    charStage.eventsArray = [];
    for (var i = 0; i < CObj.objects.length; ++i) {
        if (CObj.checkType(CObj.objects[i], CEActionGUI)) {
            charStage.eventsArray.push(
                {
                    id: CObj.objects[i].eventpl.id,
                    acting: CObj.objects[i].acting,
                    startTime: CObj.objects[i].startTime,
                    execTime: CObj.objects[i].execTime,
                    pos: CObj.objects[i].pos
                }
            );
        }
    }

    charStage.icons = null;
    charStage.pl = null;

    if (charStage.frp)
    {
        rp(charStage.frp);
        charStage.frp = null;
    }
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();

}

CharStage.prototype.createFriendsPanel = function () {
    var panel = new PIXI.DisplayObjectContainer();
    var fr = "";
    var clips = [];
    var skip = charStage.skipFriends;
    for (var i = 0 + skip; i < 5 + skip; ++i) {
        var frClpBtn = new CButton(91 + (i - skip) * 95, 5, "add friend");
        var friendClip = frClpBtn.gfx;//new PIXI.Sprite(PIXI.Texture.fromFrame("add friend.png"));
        friendClip.parent.removeChild(friendClip);
        frClpBtn.fontFamily = "dedgamedesc";
        frClpBtn.fontSize = 14;
        frClpBtn.tint = 0xffffff;
        friendClip.anchor.x = 0.5;
        friendClip.anchor.y = 0.5;
        frClpBtn.hover = true;
        frClpBtn.deltaHoverY = 17;
        if (vkparams.friendsIngame && i < vkparams.friendsIngame.length)
            frClpBtn.text = vkparams.friendsIngame[i].name + " " + vkparams.friendsIngame[i].last_name;
        frClpBtn.addToSameLayer = true;
        frClpBtn.init();
        panel.addChild(friendClip);
        if (!vkparams.friendsIngame || i >= vkparams.friendsIngame.length) {
            friendClip.click = function () {
                VK.callMethod("showInviteBox");
            }

            continue;
        } else {
            var username = vkparams.friendsIngame[i].name;
            var userAPI = vkparams.friendsIngame[i].platformid;

            function setClick(uname, uapi, fc) {
                fc.click = function () {
                    VK.api("wall.post", {
                        owner_id: uapi,
                        message: uname + ", возвращайся в игру, дружище" + '\n' + "https://vk.com/app4654201",
                        attachments: ["photo-90523698_359515858", "https://vk.com/app4654201"]
                    }, function (data) {

                    });
                };
            }

            if (username && userAPI)
                setClick(username, userAPI, friendClip)
        }

        if (vkparams.friendsIngame[i].platformid) {
            if (fr != "") fr += ",";
            fr += vkparams.friendsIngame[i].platformid.toString();
            friendClip.platformid = vkparams.friendsIngame[i].platformid;
        }
        clips.push(friendClip);
    }

//vkparams.friendsIngame[i].vkapi
    if (VK && fr != "")
        VK.api('users.get', {user_ids: fr, fields: "photo"}, function (data) {
            if (!data.response) return;
            for (var j = 0; j < data.response.length; ++j) {
                var purl = data.response[j].photo;
                if (!data.response || data.response.length == 0) return;

                var upperClip = clips[j];
                upperClip.loader = new PIXI.ImageLoader(purl);

                var setLoader = function (clip, url) {
                    clip.loader.onLoaded = function () {
                        var ico = new PIXI.Sprite(PIXI.TextureCache[url]);
                        ico.anchor.x = 0.5;
                        ico.anchor.y = 0.5;
                        clip.addChild(ico);
                        charStage.icons.push(ico);
                    }
                };
                setLoader(upperClip, purl);
                upperClip.loader.load();
            }
        });


    panel.x = 215;
    panel.y = SCR_HEIGHT - 50;
    SM.inst.guiLayer.addChild(panel);

    return panel;
}


CharStage.prototype.openPremiumWindow = function () {
    CObj.enableButtons(false);
    charStage.disableWnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);

    LevelManager.loadLevel("levelpremium", function () {
        close = function () {
            LevelManager.removeLastLevel();

            CObj.enableButtons(true);
            charStage.disableWnd.parent.removeChild(charStage.disableWnd);
        };

        charStage.skipFriends = 0;

        orderFunc = function (str) {
            ZSound.Play("buy");
            order(str);
            shopStage.updateStatsPanel();
        }

        CObj.getById("btnfree").click = function () {
            VK.callMethod("showOrderBox", {type: "offers", currency: "true"});
        };


        CObj.getById("buy1").click = function () {
            orderFunc("item1")
        };

        CObj.getById("buy2").click = function () {
            orderFunc("item2");
        };

        CObj.getById("buy3").click = function () {
            orderFunc("item3");
        };

        CObj.getById("buy4").click = function () {
            orderFunc("item4");
        };

        CObj.getById("buy5").click = function () {
            orderFunc("item5");
        };

        CObj.getById("buy6").click = function () {
            orderFunc("item6");
        };

        CObj.getById("btnclose").click = close;
    }, SM.inst.fontLayer, LevelManager.levelLoadOffsetX);
}

CharStage.prototype.openEnergyWindow = function () {
    CObj.enableButtons(false);

    charStage.disableWnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);
    charStage.disableWnd.interactive = true;
    LevelManager.loadLevel("energywindow", function () {
        CObj.getById("breplenish").click = function () {
            order("item7");
            VK.orderComplete = function (order_id) {

                shopStage.updateStatsPanel();
                close();
            }

        };

        close = function () {
            rp(charStage.disableWnd);
            CObj.enableButtons(true);

            LevelManager.removeLastLevel();
            noc(charStage.disableWnd);
        };

        onc(charStage.disableWnd ,function (e) {
            var obj = CObj.getById("energybg");
            var bnds = obj.gfx.getBounds();
            window.mouseX = e.global.x / SCR_SCALE;
            window.mouseY = e.global.y / SCR_SCALE;
            if (window.mouseX > obj.x - obj.gfx.width / 2 &&
                window.mouseX < obj.x + obj.gfx.width / 2 &&
                window.mouseY > obj.y - obj.gfx.height / 2 &&
                window.mouseY < obj.y + obj.gfx.height / 2) {
            } else {
                close();
            }
        });

    }, SM.inst.fontLayer, LevelManager.levelLoadOffsetX);
}

CharStage.prototype.updateMusicButton = function (btn) {
    if (ZSound.available) {
        btn.gfx.gotoAndStop(0);
    } else {
        btn.gfx.gotoAndStop(1);
    }

    btn.click = function () {
        if (ZSound.available) {
            ZSound.Mute();
        } else ZSound.UnMute();

        localStorage["sound_state"] = ZSound.available;

        if (ZSound.available) {
            btn.gfx.gotoAndStop(0);
        } else {
            btn.gfx.gotoAndStop(1);
        }
    }
}

CharStage.prototype.updateNotifications = function () {
    if (this.unreadAch) {
        CObj.getById("notach").gfx.visible = true;
    } else     CObj.getById("notach").gfx.visible = false;

    if (this.unreadActions && (!charStage.bar || charStage.bar.gfx.visible == false)) {
        CObj.getById("notaction").gfx.visible = true;
    } else     CObj.getById("notaction").gfx.visible = false;
}


CharStage.prototype.onShowContinue = function () {
    charStage.doProcess = true;
    charStage.updateNotifications();

    charStage.skip = 0;

    charStage.tab = "total";
    charStage.showRecords = 10;

   PlayerData.inst.eventsplayer.sort(function (a, b) {
        return PlayerData.inst.getEventById(a.id_edevent).reqlvl - PlayerData.inst.getEventById(b.id_edevent).reqlvl;
    });

    //PlayerData.inst.addNotification("some msg", PlayerData.inst.playerItem.vkapi);

    if (!MOBILE) {


        CObj.getById("frprev").click = function () {
            charStage.skipFriends -= 5;
            if (charStage.skipFriends < 0)
                charStage.skipFriends = 0;

            charStage.frp.parent.removeChild(charStage.frp);
            charStage.frp = charStage.createFriendsPanel();
        };

        CObj.getById("frnext").click = function () {
            charStage.skipFriends += 5;
            charStage.frp.parent.removeChild(charStage.frp);
            charStage.frp = charStage.createFriendsPanel();
        };
    }

    if (MOBILE)
    {
        CObj.getById("bshop").deltaHoverY = 46;
        CObj.getById("bsofa").deltaHoverY = 30;
    } else
    {
        CObj.getById("btnachs").deltaHoverY = 15;
    }
    CObj.getById("bbuy1").click = charStage.openPremiumWindow;
    CObj.getById("bbuy2").click = charStage.openPremiumWindow;


    CObj.getById("tname").text = vkparams.first_name.toUpperCase() + " " + vkparams.last_name.toUpperCase();

    CObj.getById("bpubl").click = function () {

        OpenInNewTab("https://vk.com/thanksgrandpa");
    };

    charStage.updateMusicButton(CObj.getById("bmusic"));

    CObj.getById("bshop").click = function () {
        SM.inst.openStage(shopStage);
    }

    CObj.getById("bscore").click = function () {
        charStage.openScore();
    };

    CObj.getById("btnachs").click = function () {
        SM.inst.openStage(achStage)
    };

    CObj.getById("helpded").click = function () {

        var closeHelp = function()
        {

            charStage.pl.updateAppearence(true, false, null, null, null, "head2");
            //charStage.pl.gfx.skeleton.setAttachment("head", "head2");
            CObj.enableButtons(true);
            LevelManager.destroyLevel("helpded");
            charStage.openHelp = false;

        }
        if (charStage.openHelp) {
            closeHelp();
        } else
        {
            charStage.pl.gfx.skeleton.setAttachment("hat", null);

            charStage.pl.gfx.skeleton.setAttachment("head", "head5");
            CObj.enableButtons(false);
            CObj.getById("helpded").gfx.interactive = true;
            charStage.openHelp = true;
            LevelManager.loadLevel("helpded", function ()
            {

            CObj.getById("gohelp").click = function()
            {
                OpenInNewTab("http://bit.ly/1BnM4B8");
            };

            CObj.getById("closehelp").click =  closeHelp;
        }, SM.inst.ol);
        }
    };

    CObj.getById("btnfight").click = function () {

        //RE MOVE
        if (PlayerData.inst.playerItem.energy >= 1) {
            PlayerData.inst.playerItem.energy -= 1;
           // PlayerData.inst.savePlayerData();
            SM.inst.openStage(gameStage)
        } else {
            var en1 = CObj.getById("tfenergy");
            var en2 = CObj.getById("energyback");
            new TweenMax(en1, 0.1, {y: en1.y - 10, repeat: 3, yoyo: true, ease: Linear.easeInOut});
            new TweenMax(en2, 0.1, {y: en2.y - 10, repeat: 3, yoyo: true, ease: Linear.easeInOut});
            charStage.openEnergyWindow();
        }
    };

    var pl = new CPlayer(SCR_WIDTH / 2, 430);
    charStage.pl = pl;
    pl.gfx.scale.x = 0.34;
    pl.gfx.scale.y = 0.34;
    pl.updateAppearence(true, false, "breath", null, null, "head2");
    SM.inst.ol.addChild(pl.gfx);

    var f = pl.gfx;
    pl.gfx.interactive = true;
    CObj.getById("bsofa").click = function () {
        CObj.enableButtons(false);

        charStage.disableWnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);
        charStage.disableWnd.interactive = true;

        for (var i = 0; i < CObj.objects.length; ++i) {
            if (CObj.checkType(CObj.objects[i], CEActionGUI) && CObj.objects[i].btnReward) {
                CObj.objects[i].btnReward.gfx.interactive = true;
            }
        }

        charStage.closeEventsWnd = function () {
            rp(charStage.disableWnd);
            noc(charStage.disableWnd);
            CObj.enableButtons(true);
            charStage.bar.gfx.visible = false;
        }

        onc(charStage.disableWnd, function (e) {
            var obj = charStage.bar;
            window.mouseX = e.global.x/ SCR_SCALE;
            window.mouseY = e.global.y/ SCR_SCALE;
            if (window.mouseX > obj.x - obj.gfx.width / 2 &&
                window.mouseX < obj.x + obj.gfx.width / 2 &&
                window.mouseY > obj.y - obj.gfx.height / 2 &&
                window.mouseY < obj.y + obj.gfx.height / 2) {
            } else {
                charStage.closeEventsWnd();
            }
        });

        charStage.bar.gfx.parent.removeChild(charStage.bar.gfx);
        SM.inst.fontLayer.addChild(charStage.bar.gfx);
        charStage.bar.gfx.visible = true;
        charStage.unreadActions = false;
        charStage.updateNotifications();
    }

    PlayerData.inst.comboCheck();

    var baseScl = pl.gfx.scale.x;


    /*  pl.gfx.mouseover = function (evt) {
     TweenMax.killTweensOf(f.scale);

     var color = 0xaaffaa;
     f.tint = color;
     for (var i = 0; i < f.children.length;++i)
     {
     f.children[i].tint =color;
     }
     new TweenMax(f.scale, 0.6, {y: baseScl*1.05, ease: Elastic.easeOut} );
     new TweenMax(f.scale, 0.4, {x: baseScl*1.05, ease: Elastic.easeOut} );
     };

     pl.gfx.mouseout = function (evt) {
     f.tint = 0xffffff;

     var color = 0xffffff;
     f.tint = color;
     for (var i = 0; i < f.children.length;++i)
     {
     f.children[i].tint =color;
     }
     new TweenMax(f.scale, 0.3, {x: baseScl, y: baseScl, ease: Elastic.easeOut} );
     }
     */
    charStage.bar = new CScrollbar(180, 309, "", 380, 524, "podlozhka actions.png", "scroll line actions.png", "scroll.png", 50);

    charStage.bar.gfx.scale.x = 0.7;
    charStage.bar.gfx.scale.y = 0.7;
    charStage.bar.gfx.visible = false;
    charStage.updateEvents();

    shopStage.updateStatsPanel();

    if (!MOBILE)
    charStage.frp = charStage.createFriendsPanel();
}

CharStage.prototype.updateEvents = function () {
    charStage.bar.clear();

    for (var i = 0; i < PlayerData.inst.eventsplayer.length; ++i) {
        var o = new CEActionGUI(50, 70 + (i) * 150);
        var event = PlayerData.inst.getEventById(PlayerData.inst.eventsplayer[i].id_edevent);
        //if (!event) continue;
        o.init(PlayerData.inst.eventsplayer[i], event, event.gfx, "progress fore.png", "progress bg.png");
        o.updateGraphics();
        if (charStage.eventsArray) {
            var x = findByProp(charStage.eventsArray, "id", PlayerData.inst.eventsplayer[i].id);
            if (x) {
                o.acting = x.acting;
                o.startTime = x.startTime;
                o.execTime = x.execTime;
                o.pos = x.pos;

                if (o.acting) {
                    o.progressbg.visible = true;
                    o.progressfore.visible = true;
                }
            }
        }
        charStage.bar.container.addChild(o.gfx);
    }

    charStage.bar.updateHeight();
    charStage.bar.pos = 0;
}


CharStage.prototype.process = function () {

    shopStage.updateEnergyText();

    CObj.processAll();

    var c = 0;
    for (var i = 0; i < CObj.objects.length; ++i) {
        if (CObj.checkType(CObj.objects[i], CEActionGUI)) {
            if (CObj.objects[i].acting) {
                var p = (window.time - CObj.objects[i].startTime) / CObj.objects[i].execTime;
                if (p >= 1) {
                    p = 1;
                    CObj.objects[i].pos = 1;
                    CObj.objects[i].endAction();
                    this.unreadActions = true;
                    this.updateNotifications();
                } else
                    CObj.objects[i].pos = p;
                c++;

            }
        }
    }
}


CharStage.prototype.updateFriends = function () {

   // PlayerData.inst.savePlayerData();

    PlayerData.inst.callDedAPI("GET_SCORES", null, null, {filter: vkparams.friendsFilter, take: charStage.showRecords, skip: charStage.skip}, function(c) {
        charStage.updateSB(c);
    });
}

CharStage.prototype.updateTotal = function () {
    PlayerData.inst.callDedAPI("GET_SCORES", null, null, {filter: null, take: charStage.showRecords, skip: charStage.skip}, function(c) {
        charStage.updateSB(c);
    });

}

CharStage.prototype.openScore = function () {
    CObj.enableButtons(false);
    charStage.disableWnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);

    LevelManager.loadLevel("levscore", function () {

        charStage.container = new PIXI.DisplayObjectContainer();
        charStage.container.x = 170;
        charStage.container.y = 170;
        SM.inst.fontLayer.addChild(charStage.container);

        var d = "0";
        if (PlayerData.inst.playerItem.maxdistance) d = PlayerData.inst.playerItem.maxdistance.toString();

        var r = "";
        if (PlayerData.inst.playerItem.rank)
            r = PlayerData.inst.playerItem.rank.toString() + ".";

        CObj.getById("tplscore").text = d + 'м.';
        CObj.getById("tplace").text = r;

        var current = charStage.skip + 1;
        //   CObj.getById("tdisplayed").text =  (current).toString() + " - " + (current+ scoreStage.showRecords).toString();

        CObj.getById("bfriends").click = function () {
            charStage.skip = 0;
            if (charStage.tab == "friends") {
                CObj.getById("bfriends").text = "Все очки";
                charStage.tab = "total";
                charStage.updateTotal();
            } else {
                CObj.getById("bfriends").text = "Очки друзей";
                charStage.tab = "friends";
                charStage.updateFriends();
            }
        }

        charStage.tab = "friends";
        CObj.getById("bfriends").click();

        CObj.getById("bforwardlist").click = function () {
            charStage.skip += charStage.showRecords;
            var current = charStage.skip + 1;
            if (charStage.tab == "total")
                charStage.updateTotal();
            if (charStage.tab == "friends")
                charStage.updateFriends();
        };

        CObj.getById("bback").click = function () {
            CObj.enableButtons(true);

            LevelManager.removeLastLevel();


            while (charStage.container.children.length > 0) {
                rp(charStage.container.getChildAt(0));
            }

            rp(charStage.container);
            rp(charStage.disableWnd);
            charStage.container = null;
        }
        CObj.getById("bbacklist").click = function () {
            charStage.skip -= charStage.showRecords;
            if (charStage.skip < 0) charStage.skip = 0;
            var current = charStage.skip + 1;
            if (charStage.tab == "total")
                charStage.updateTotal();
            if (charStage.tab == "friends")
                charStage.updateFriends();
        };
    }, SM.inst.fontLayer);
}

CharStage.prototype.updateSB = function (arr) {
    while (charStage.container.children.length > 0) {
        rp(charStage.container.getChildAt(0));
    }
    var clips = [];
    var fr = "";
    for (var i = 0; i < arr.length; ++i) {
        var scoreClip = new PIXI.DisplayObjectContainer();
        var tfRank = CTextField.createTextField({
            tint: 0x333333,
            fontSize: 17,
            text: (charStage.skip + i + 1).toString() + '.'
        });
        var tfName = CTextField.createTextField({tint: 0x333333, fontSize: 17, text: extractName(arr[i])});
        var tfScore = CTextField.createTextField({
            tint: 0x333333,
            fontSize: 17,
            text: Math.round(arr[i].maxdistance).toString() + "м."
        });
        var clIco = crsp("ava cover");

        clips.push(clIco);
        clips[i].platformid = arr[i].platformid;
        if (fr != "") fr += ",";
        fr += arr[i].platformid;
        if (charStage.skip + i < 3) {
            var nameTex;
            if (charStage.skip + i == 0) nameTex = "1st place";
            if (charStage.skip + i == 1) nameTex = "2nd place";
            if (charStage.skip + i == 2) nameTex = "3rd place";
            var bgCircle = crsp(nameTex);
            bgCircle.x = 4;
            bgCircle.y = 10;
            bgCircle.scale.x = 0.8;
            bgCircle.scale.y = 0.8;
            scoreClip.addChild(bgCircle);
        }
        clIco.y = 10;
        clIco.x = 35;
        scoreClip.x = 20;
        scoreClip.y = 15 + 28 * i;
        tfName.x = 55;
        tfScore.x = 370;
        tfRank.x = -30;
        scoreClip.addChild(clIco);
        scoreClip.addChild(tfName);
        scoreClip.addChild(tfRank);
        scoreClip.addChild(tfScore);
        charStage.container.addChild(scoreClip);
    }

    if (VK && fr != "")
        VK.api('users.get', {user_ids: fr, fields: "photo"}, function (data) {

            if (!data.response) return;
            for (var j = 0; j < data.response.length; ++j) {
                var purl = data.response[j].photo;
                if (!data.response || data.response.length == 0) return;

                var upperClip = clips[j];
                upperClip.loader = new PIXI.ImageLoader(purl);

                var setLoader = function (clip, url) {
                    clip.loader.onLoaded = function () {
                        var ico = new PIXI.Sprite(PIXI.TextureCache[url]);
                        ico.scale.x = 0.5;
                        ico.scale.y = 0.5;
                        ico.anchor.x = 0.5;
                        ico.anchor.y = 0.5;
                        clip.addChild(ico);
                        //    charStage.icons.push(ico);
                    }
                };
                setLoader(upperClip, purl);
                upperClip.loader.load();
            }
        });


};ZPool = function () {
    this.objects = {};
    ZPool.Inst = this;
    return this
};
ZPool.prototype.Fill = function (b, e, a) {


    if (this.objects[b] == undefined) {
        this.objects[b] = []
    }
    for (var c = 0; c < e; c++) {
        var d = a();
        d.poolName = b;
        this.objects[b].push(d)
    }
};
ZPool.prototype.Pop = function (a) {
    if (this.objects[a] == undefined) {
        console.warn("Error: not found '" + a + "' in pool.");
        return undefined
    }
    if (this.objects[a].length == 0) {
        console.warn("Error: pool empty. Element '" + a + "'");
        return undefined
    }
    return this.objects[a].pop()
};

ZPool.prototype.Size = function (a) {
    if (this.objects[a] == undefined) return 0; else
        return   this.objects[a].length;
}

ZPool.prototype.Push = function (a) {
    if (a.poolName == undefined) {
        console.warn("Error: Can't push unnamed element in pool.");
        return
    }
    this.objects[a.poolName].push(a)
};/**
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

    this.bornTime = PauseTimer.getTimer();
    //this.hitTestCircles = null;
    this.colMask = 0;
    this.colGroup = 0;
    this.x = in_x;
    this.y = in_y;

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

    if (this.lifeTime && this.bornTime - PauseTimer.getTimer() > this.lifeTime)
    {
        this.destroy();
    }

    if (this.allowTrackSpeed)
        this.x -= LauncherBG.inst.maxVelocity;//this.vx*0.5 + (

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
   // if (this.poolName) return;
    if (!this.doRemove)
        if (this.return2Pool) {
            pool.Push(this.return2Pool);
            this.return2Pool = null;
        }

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
};/**
 * Created by KURWINDALLAS on 14.07.2014.
 */
extend(CBomb, CObj, true);

function CBomb(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.PublicFields += "power,";
    this.radiusMax = 300;
}

CBomb.prototype.explode = function()
{
    if (this.doRemove) return;
    var objlen = CObj.objects.length;
    var pp1 = new vec2.create();
    var pp2 = new vec2.create();
    ZSound.Play("rocketboom");

    var gfx = pool.Pop("expl");
    if (gfx) {
        var not = new CObj(this.x, this.y);
        not.x = this.x;
        not.y = this.y;
        not.gfx.animationSpeed = 0.85;
        not.gfx.gotoAndPlay(0);
        not.gfx.loop = false;

        not.gfx.scale.x = 1.55*window.addScale;
        not.gfx.scale.y = 1.55*window.addScale;
        not.updateGraphics();
        if (not.gfx.parent)
            not.gfx.parent.removeChild(not.gfx);

        SM.inst.ol.addChild(not.gfx);

        not.gfx.onComplete = function () {
           // setTimeout( function() {
                if (not.gfx) {
                    not.destroy();
                    pool.Push(not.gfx);
                }
            //}, 15, not);
        };
    }

    for (var i = 0; i < objlen; ++i)
    {
       if (CObj.objects[i].sensor || CObj.objects[i] == this || (!CObj.objects[i].body) || (CObj.objects[i].body.type != p2.Body.DYNAMIC)) continue;
       pp1[0] = this.x;
       pp1[1] = this.y;

       pp2[0] = CObj.objects[i].x;
       pp2[1] = CObj.objects[i].y;
       vec2.sub(pp1, pp1, pp2);

        var sl = vec2.sqrLen(pp1);
        var sr = this.radiusMax*this.radiusMax;
       if (sl > sr) continue;
        var len = Math.sqrt(sl);
        pp1[0] /= len;
        pp1[1] /= len;

        var powDist = 1 - (len + 2) / this.radiusMax;
        if (powDist < 0) powDist = 0;
        powDist = Math.pow(powDist, 1.4);
        vec2.scale(pp1, pp1, this.power*4500*(powDist));
         CObj.objects[i].body.force[0] -= pp1[0];
        CObj.objects[i].body.force[1] -= pp1[1];
    }

    this.destroy();
}

CBomb.prototype.setElectricity = function(state)
{
    CObj.prototype.setElectricity.call(this)
    if (state)this.explode();
};/**
 * Created by KURWINDALLAS on 13.07.2014.
 */
extend(CButton, CObj, true);

function CButton(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'text,fontFamily,fontSize,align,hover';
    this.gui = true;
    //   this.hover = true;
}

CButton.tintColor = 0xffffff;

CButton.prototype.destroy = function()
{
    if (this.doRemove) return;
    this.gfx.mouseout = null;
    this.gfx.mouseover = null;
    this.textField.mouseout = null;
    this.textField.mouseover = null;
    CObj.prototype.destroy.call(this);
    this.textField.parent.removeChild(this.textField);
    this.textField = null;
    this.click = null;
}

Object.defineProperty(CButton.prototype, 'click', {
    get: function () {
        return this._click;
    },
    set: function (value) {
        this._click = value;
        if (!value)
        {
            this.gfx.tap = null;
            this.gfx.click = null;
        } else
        if (this.gfx)
        {

            var btnclick = function(e)
            {
                if (stage.getChildAt(stage.children.length - 1).trans)
                {
                    return;
                }

                ZSound.Play("CLICK");

                if (value)
                    value(e);
            }
            if (this.postCreatedContainer) {
                this.textField.tap = btnclick;
                this.textField.click = btnclick;
            }
            this.gfx.tap = btnclick;
            this.gfx.click = btnclick;
        }
    }
});

Object.defineProperty(CButton.prototype, 'text', {
    get: function () {
        return this._text;
    },
    set: function (value) {
        this._text = value;
        if (this.gfx && this.textField) {
            var tf = this.textField;
            tf.text = value;
            tf.updateText();
            var b = tf.getLocalBounds();
            tf.x = -b.width / 2;
            tf.y = -b.height;
            this.updateGraphics(true);
        }
    }
});

CButton.prototype.updateGraphics=function()
{
    if (this.doRemove) return;
    CObj.prototype.updateGraphics.call(this);
    if (this.gfx && this.textField) {
            var ddx = 0;
            var ddy = 0;

                if (this.deltaHoverY) {

                    ddy = this.deltaHoverY;
                } else {
                    if (this.hover)
                    {
                        if (this.y > SCR_HEIGHT - 100) {
                            ddy = -50;
                       } else ddy = 50;
                    }
                }
        if (!this.addToSameLayer)
        {
            this.textField.y = this.gfx.y - this.textField.height * 0.7 + ddy;// + this.textField.height / 4;// - this.gfx.height * 0.25;
            this.textField.x = this.gfx.x - this.textField.width / 2;// - this.gfx.width * 0.25;
        } else
        {
            this.textField.y = this.textField.height * 0.7 + ddy;// + this.textField.height / 4;// - this.gfx.height * 0.25;
        //    this.textField.x = 0;// - this.gfx.width * 0.25;
        }
    }
}

CButton.prototype.init = function(){
    CObj.prototype.init.call(this);
    if (!this.gfx)
    {
        this.gfx = new PIXI.DisplayObjectContainer();
        this.postCreatedContainer = true;
        this.updateGraphics();
    }
    this.gfx.interactive = true;
    this.align = "center";
    if (this.fontSize != "")
    this.fontSize = parseInt(this.fontSize); else
        this.fontSize = "30";

    this.textField = CTextField.createTextField(this);
    if  (this.postCreatedContainer)
    this.textField.interactive = true;

    if (this.hover == undefined || this.hover == "true") this.hover = true;
    if (this.hover == "false") this.hover = false;

    if (this.hover)
    {
        this.textField.alpha = 0;
    }

    if (this.text)
    this.text = this.text;

    if (this.isClip)
    this.gfx.gotoAndStop(0);
    var tf = this.textField;
    var f = this.gfx;
    this.baseScaleX = f.scale.x;
    this.baseScaleY = f.scale.y;
    var bsX = this.baseScaleX;
    var bsY = this.baseScaleY;
    var obj = this;

    this.updateGraphics();
       this.gfx.mouseover = function (evt) {
        TweenMax.killTweensOf(f.scale);
           obj.over = true;

           f.tint = CButton.tintColor;
           new TweenMax(f.scale, 0.6, {y: bsY+0.05, ease: Elastic.easeOut} );
           new TweenMax(f.scale, 0.4, {x: bsX+0.05, ease: Elastic.easeOut} );

           if (tf.visible && tf.text != "") {
               new TweenMax(tf.scale, 0.6, {y: 1 + 0.1, ease: Elastic.easeOut});
               new TweenMax(tf.scale, 0.4, {x: 1 + 0.1, ease: Elastic.easeOut});
           }

           if (obj.hover)
           {

               obj.textField.alpha = 1;
           //    if (gameStage.state == "paused")
           //    obj.updateGraphics();
           }

    }

    this.gfx.mouseout = function (evt) {
        obj.over = false;

        f.tint = 0xffffff;
        if (f.currentFrame)
        f.gotoAndStop(1);
        new TweenMax(f.scale, 0.3, {x: bsX, y: bsY, ease: Elastic.easeOut} );

        if (tf.visible && tf.text != "") {
            new TweenMax(tf.scale, 0.3, {x: 1, y: 1, ease: Elastic.easeOut});
        }

        if (obj.hover)
        {

                obj.textField.alpha = 0;
        }
    }

    if (!this.addToSameLayer)
    SM.inst.fontLayer.addChild(this.textField); else
    this.gfx.addChild(this.textField);
};/**
 * Created by KURWINDALLAS on 12.07.2014.
 */


extend(ZCJoint, CObj, true);

function ZCJoint(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += "body1Id,body2Id,collideConnected,breakOnForce,angleConstraint,angleMin,angleMax,frequency,damping,rate,isStopped,";
}


ZCJoint.prototype.CreateMotor = function()
{
    if (!joint) return;
    if (Math.abs(rate) > 0.000001) {
        if (!motor)	motor = new MotorJoint(joint.body1, joint.body2, 2 * Math.PI * rate);
        if (isStopped) motor.rate = 0; else motor.rate = 2 * Math.PI * rate;
        motor.ignore = !collideConnected;
        motor.space = ZNape.Inst.World;
    }
}

ZCJoint.getFirstStatic = function () {
    var ol = CObj.objects.length;
    for (var i = 0; i < ol; ++i)
    {
        if (CObj.objects[i].body && CObj.objects[i].body.type == p2.Body.STATIC)
        {
            return CObj.objects[i].body;
        }

    }
}


ZCJoint.prototype.init = function()
{
    CObj.prototype.init.call(this);

    var bl  = world.hitTest([this.x, this.y], world.bodies, 3.);
    var b1, b2;
    var b2worldStatic = false;


    if (bl.length == 1) {
    b1 = bl[0];
    if (this.body1Id != "") b1 = CObj.getById(this.body1Id).body;
    if (b1 != null) {
        if (b1.type != p2.Body.STATIC) {
            b2worldStatic = true;
            b2 = ZCJoint.getFirstStatic();
            this.joint = new p2.Constraint(b1, b2, {collideConnected: this.collideConnected, worldPivot: [this.x, this.y]});
            // b1.worldPointToLocal(Vec2.get(Position.x, Position.y)), Vec2.get(Position.x, Position.y));
        }
    }
} else
if (bl.length >= 2) {
    b1 = bl[0];
    b2 = bl[1];
    if (this.body1Id != "") b1 = CObj.getById(this.body1Id).body;
    if (this.body2Id != "") b2 = CObj.getById(this.body2Id).body;
}



    if (!b2worldStatic) {
        b1.userData.onContactBegin(b2);
        b2.userData.onContactBegin(b1);
    }
    if (!b1) b1 = bl[0];
    if (!b2) b2 = bl[1];
    if (this.body1Id != "") b1 = CObj.getById(this.body1Id).body;
    if (this.body2Id != "") b2 = CObj.getById(this.body2Id).body;



    if (b1 != null && b2 != null) {
        if (!(b1.type == p2.Body.STATIC && b2.type == p2.Body.STATIC)) {
            this.joint = new p2.RevoluteConstraint(b1, b2, {collideConnected: this.collideConnected, worldPivot: [this.x, this.y]});
        //    this.joint = new PivotJoint(b1, b2, b1.worldPointToLocal(Vec2.get(Position.x, Position.y)), b2.worldPointToLocal(Vec2.get(Position.x, Position.y)));
        }
    }


if (this.joint != null) {

    if (this.rate != 0) {
        if (b1.motionState != p2.Body.STATIC)
            b1.userData.motorSpeed = this.rate;

        if (b2.motionState != p2.Body.STATIC)
            b2.userData.motorSpeed = this.rate;

        this.joint.motor = true;
    }

    //if (UserData != "") joint.userData.obj = UserData;

 /*

    if (Math.abs(breakOnForce) > 0.00001) {
        joint.maxForce = breakOnForce;
        joint.breakUnderForce = true;
        joint.removeOnBreak = true;
    } else {
        joint.breakUnderForce = false;
    }

    //CreateMotor();
*/
    world.addConstraint(this.joint);
}

/*if (angleConstraint && b1 && b2) {
    var angle : Number = (b2.rotation - b1.rotation);
    angleJoint = new AngleJoint(b1, b2, angle + angleMin * ZMath.DEG_TO_RAD, angle + angleMax * ZMath.DEG_TO_RAD, 0);
    angleJoint.ratio = 1;
    angleJoint.stiff = false;
    // ********* cahnged, may cause bugs
    //angleJoint.stiff = Damping > 0.0001;
    angleJoint.frequency = frequency;
    angleJoint.damping = damping;
    if (Math.abs(breakOnForce) > 0.00001) {
        angleJoint.maxForce = breakOnForce;
        angleJoint.breakUnderForce = true;
        angleJoint.removeOnBreak = true;
    } else {
        angleJoint.breakUnderForce = false;
    }
    angleJoint.space = ZNape.Inst.World;
}
*/
b1 = null;
b2 = null;
};

/*
public function get rate():Number
{
    return _rate;
}

public function set rate(value:Number):void
{
    _rate = value;
CreateMotor();
}

public function get angleMin():Number
{
    return _angleMin;
}

public function set angleMin(value:Number):void
{
    _angleMin = value;
if (angleJoint) {
    var angle : Number = (angleJoint.body2.rotation - angleJoint.body1.rotation);
    angleJoint.jointMin = angle + _angleMin * ZMath.DEG_TO_RAD;
}
}

public function get angleMax():Number
{
    return _angleMax;
}

public function set angleMax(value:Number):void
{
    _angleMax = value;
if (angleJoint) {
    var angle : Number = (angleJoint.body2.rotation - angleJoint.body1.rotation);
    angleJoint.jointMax = angle + _angleMax * ZMath.DEG_TO_RAD;
}
}

public function get isStopped():Boolean
{
    return _isStopped;
}

public function set isStopped(value:Boolean):void
{
    _isStopped = value;
if (motor) {
    if (isStopped) motor.rate = 0; else motor.rate = 2 * Math.PI * _rate;
}
}

public function get angleConstraint():Boolean
{
    return _angleConstraint;
}

public function set angleConstraint(value:Boolean):void
{
    _angleConstraint = value;
if (angleJoint) angleJoint.active = angleConstraint;
}

public function get damping():Number
{
    return _damping;
}

public function set damping(value:Number):void
{
    _damping = value;
if (angleJoint) angleJoint.damping = _damping;
}

public function get frequency():Number
{
    return _frequency;
}

public function set frequency(value:Number):void
{
    _frequency = value;
if (angleJoint) angleJoint.frequency = _frequency;
}

public function get collideConnected():Boolean
{
    return _collideConnected;
}

public function set collideConnected(value:Boolean):void
{
    _collideConnected = value;
if (joint) joint.ignore = !_collideConnected;
if (motor) motor.ignore = !_collideConnected;
}

*//**
 * Created by KURWINDALLAS on 11.07.2014.
 */
extend(CTextField, CObj, true);

function CTextField(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.gui = true;
    this.text = "";
    this.PublicFields += 'text,fontFamily,fontSize,align,tint, ';
}

Object.defineProperty(CTextField.prototype, 'text', {
    get: function () {
        return this._text;
    },
    set: function (value) {

        this._text = CTextField.convertSpaces(value);
        if (this._text == "") this._text = " ";
        if (this.gfx) {
            this.gfx.text = this._text;

            this.gfx.updateText();
            var b = this.gfx.getLocalBounds();

            if (this.align == "center")
            {
                this.offsetX = (-b.width / 2)*window.addScale;
            } else
            if (this.align == "right")
            {
                this.offsetX = (-b.width)*window.addScale;
            } else {
                this.offsetX = 0;
            }
            //this.offsetY = -b.height / 2;

            this.updateGraphics(true);
        }
    }
});

CTextField.hashCode = function (str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

CTextField.convertSpaces = function(a)
{
    var c = a.match(/==/g);
    if (c)
        breaks = c.length;

    return a.replace(/==/g, '\n');
}

CTextField.createTextField = function(obj) {
    var inx = 0;

    var font = PIXI.BitmapText.fonts["dedgamedesc"];

    if (obj.fontFamily && obj.fontFamily != "") {
        var fnt = PIXI.BitmapText.fonts[obj.fontFamily];
        if (fnt != undefined)
        font = fnt;
    }

        if (!obj.fontSize || obj.fontSize == undefined)
        obj.fontSize = 30/window.addScale;
    else
     obj.fontSize /= window.addScale;
    ///if (obj.fontSize < 60) obj.fontSize = 60;
    var fontParam = obj.fontSize + "px " + font.font;
    if (!obj.align || obj.align == "") obj.align = "left";

    var breaks = 0;
    if (obj.fontFamily == "dedgamecaps")
    {
        obj.text = obj.text.toUpperCase();
    }

    if (obj.text) {
        obj.text = CTextField.convertSpaces(obj.text);
    }

    var pt = new PIXI.BitmapText(obj.text, {font: fontParam, align: "center", valign: "center"});

    pt.align = "center";
    if (obj.tint != "0xffffff" && obj.tint != undefined)
    pt.tint = parseInt(obj.tint);
    pt.breaks = breaks;
    pt.fs = obj.fontSize;

    pt.updateText();
    return pt;
}

CTextField.prototype.setTextSafe = function(t) {
    this.safeText = t;
}

CTextField.prototype.process = function() {
    if (this.safeText != undefined)
    {
        this.text = this.safeText;
        this.safeText = null;
    }
}

CTextField.prototype.init = function(){
    CObj.prototype.init.call(this);

    this.gfx = CTextField.createTextField(this);
    this.gfx.scale.x *= window.addScale;
    this.gfx.scale.y *= window.addScale;
    this.text = this.text;
   // this.text = this.text;
  //  this.getText();
/*    if (this.text)

        this.text = this.text;*/
    this.updateGraphics();

    SM.inst.fontLayer.addChild(this.gfx);
};/**
 * Created by KURWINDALLAS on 29.07.2014.
 */
extend(CNotArrow, CObj, true);

function CNotArrow(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'objectsToPoint, ';
}


CNotArrow.prototype.process = function()
{
    var dx = this.x - this.basePositionX;
    var dy = this.y - this.basePositionY;
    var d = Math.sqrt(dx*dx + dy*dy);
    if (d != 0) {
        dx /= d;
        dy /= d;
        this.rotation = Math.atan2(dx, dy);
    }
   this.x = this.left;
   this.y = this.top;

    CObj.prototype.process.call(this);
}

CNotArrow.prototype.init = function()
{
    this.gfx = new PIXI.DisplayObjectContainer();
    this.updateGraphics();
    var v = new PIXI.Sprite(PIXI.Texture.fromFrame("arrow1.png"));
    v.anchor.x = 0.5;
    v.anchor.y = 0;
    new TweenMax(v, 2, {y: v.y - 15, yoyo: true, repeat: -1});
    this.gfx.addChild(v);
    SM.inst.fg.addChild(this.gfx);

    this.basePositionX = this.x;
    this.basePositionY = this.y;

    var objectsToPoint = this.objectsToPoint.split(";");
    var objList = [];
    var obj;
    for (var i = 0; i < objectsToPoint.length; ++i)
    {
        obj = CObj.getById(objectsToPoint[i]);
        if (obj) objList.push({left: obj.x, top: obj.y});

    }
    this.left = objList[0].left;
    this.top = objList[0].top;
    this.x = objList[0].left;
    this.y = objList[0].top;
    new TweenMax(this, 3, {  bezier:
   {
       curviness:1,
       values:objList
   },  ease: Linear.easeNone, repeat: -1, yoyo: true});
};/**
 * Created by KURWINDALLAS on 17.11.2014.
 */
extend(CHPBar, CObj, true);

function CHPBar(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.PublicFields += 'upperImage,space,tile, ';
    prop = 1;
}
CHPBar.prototype.destroy = function()
{
    if (this.doRemove) return;

    this.gfx.removeChild(this.upperImageClip);
    this.upperImageClip = null;

    CObj.prototype.destroy.call(this);
}

Object.defineProperty(CHPBar.prototype, 'prop', {
    get: function () {
        return this._prop;
    },
    set: function (value) {
        if (this.doRemove) return;
      //  value = 0;

        this._prop = value;
        if (this._prop < 0) this._prop = 0;
        var w = this.initScale*this._prop*(this.totalWidth - 2*this.space);
        if (this.tile)
        w = Math.round(w / this.upperImageClip.texture.width + 1) * this.upperImageClip.texture.width;
        this.upperImageClip.width = w;
        this.upperImageClip.x = -1;
        this.upperImageClip.y = this.upperOfsY;
        }
    }
);

CHPBar.prototype.tweenProp = function(newProp)
{
    new TweenMax(this, 0.8, {prop: newProp, ease: Cubic.easeOut});
}

CHPBar.prototype.init = function()
{
    if (!this.upperOfsY) this.upperOfsY= 0;
    this.space = parseInt(this.space);
    if (!this.gfx) this.gfx = new PIXI.DisplayObjectContainer(); else
    {
       this.gfx.anchor.x = 0;
          this.gfx.anchor.y = 0;
    }
    if (!this.space) this.space = 0;
    if (this.upperImage)
    {
        var tex = PIXI.Texture.fromFrame(this.upperImage + ".png");
        if (this.tile) {
            this.upperImageClip = new PIXI.TilingSprite(tex, tex.width, tex.height);
        } else
            this.upperImageClip = new PIXI.Sprite(tex);

        this.upperImageClip.anchor.x = 0;
        this.upperImageClip.anchor.y = 0.;
        this.upperImageClip.height -= this.space;
        this.gfx.addChild(this.upperImageClip);
    }

    this.initScale = (1/this.gfx.scale.x);
    if (this.gfx.width > 0)
    this.totalWidth = this.gfx.width; else
    this.totalWidth = this.upperImageClip.width;
    this.x -= this.gfx.width*0.5;

    this.prop = 1;
    this.updateGraphics();
  //  new TweenMax(this, 10.8, {prop: 0., repeat:-1, ease: Linear.easeNone});
    CObj.prototype.init.call(this);
};/**
 * Created by KURWINDALLAS on 17.11.2014.
 */
extend(CLiveObj, CObj, true);

function CLiveObj(in_x,in_y,textname,in_body) {
    if (CObj.debugView) {
        this.debugGfx = new PIXI.Graphics();
        SM.inst.guiLayer.addChild(this.debugGfx);
    }

    CObj.apply(this, [in_x, in_y, textname, in_body]);
   this._hp = 100;
   this._maxHp = 100;
   this.bar = null;




}


CLiveObj.prototype.process = function()
{
    CObj.prototype.process.call(this);
}


CLiveObj.prototype.kill = function()
{
    this.destroy();
    this.isKilled = true;
}

CLiveObj.prototype.dealDamage = function(dmg)
{
    this.hp = this.hp - dmg;
}

CLiveObj.prototype.destroy = function()
{
    if (this.doRemove) return;

    if (this.bar)
    {
        this.bar.destroy();
        this.bar = null;
    }
    CObj.prototype.destroy.call(this);

}

/*
Object.defineProperty(CLiveObj.prototype, 'maxHp', {
    get: function () {
        return this._maxHp;
    },
    set: function (value) {
        this._maxHp = value;
        if (this._hp > this._maxHp) this._hp = this._maxHp;
    }
});
*/

CLiveObj.generateProperty('maxHp', {
    defaultValue: 100,
    get: function () {
        return this._maxHp;
    },
    set: function (value) {
        this._maxHp = value;
        if (this._hp > this._maxHp) this._hp = this._maxHp;
    }
});


CLiveObj.generateProperty('hp', {
    defaultValue: 100,
    get: function() {
        return this._hp;
    },
    set: function (value)
    {
        var dmg = value - this._hp;
        if (value > this._maxHp) this._hp = this._maxHp; else
            this._hp = value;

        if (this.bar)
            this.bar.tweenProp(this._hp / this._maxHp);

        if (this._hp <= 0 && !this.isKilled)
        {
            this.kill();
        }
    }
});


/*
Object.defineProperty(CLiveObj.prototype, 'hp', {
    get: function () {
     return this._hp;
    },
    set: function (value) {
        var dmg = value - this._hp;
        if (value > this._maxHp) this._hp = this._maxHp; else
            this._hp = value;

        if (this._hp < 1. && !this.isKilled)
        {
            this.kill();
        }
    }
});
*//**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(CPlayer, CLiveObj, true);

function CPlayer(in_x,in_y,textname,in_body){
    CLiveObj.apply(this,[in_x,in_y,null,in_body]);

    /*this.boostPower = 1.035;
    this.maxBoostVel = -22.5;*/
    this.invulnerable = 0;
    this.initialJumpSpeed = -21.5;
    this.gravPower = 1.3;
    this.pickupBooster = true;
    this.gfx = this.createDedGraphics();
    this.fireAngle = 0;
    this.weapon = gameStage.curweapon;
    this.bar = CObj.getById("hpbar");
    this.ammobar = gameStage.ammobar;
    this.colGroup = CG_PLAYER;
    this.colMask = CG_MONSTER;
   // this.nullPhase = 0;
    this.maxHp = 5;
    this.hp = this.maxHp;
     this.y += 10;
    this.baseY = this.y;
    this.baseX = this.x;
    this.offsetY = -20;
    this.offsetX = -25;
    this.radius = this.gfx.width / 2 - 35;
    this.sMoving = 1;
    this.sDying = 2;
    this.state = this.sMoving;
   // this.allowFlowMove = true;
    this.playable = false;
    this.lastUseExpl = 0;
    this.superMode = false;
    this.jumpNumber = 0;
    if (SM.inst.currentStage == gameStage)
    {
        this.movementTween = new TweenMax(this, 2, {ease: Sine.easeInOut, x: this.x - 50, yoyo: true, repeat: -1});
        this.landing();
    }
}

CPlayer.prototype.collide = function (obj2)
{
    if (this.prekilled || this.doRemove) return;
    if (this.superMode && CObj.checkType(obj2, CMonster)) {

     /*   if (window.time - this.lastUseExpl > 500) {
            this.lastUseExpl = window.time;
            CGrenade.makeBoom((this.x + obj2.x) / 2, (this.y + obj2.y) / 2, 80, 300);
        }
        */
    }
}


CPlayer.prototype.updateAppearence = function(showGun, showBoard, anim, overrideGun, overrideHat, headSlot) {

    if (anim)
    this.gfx.state.setAnimationByName(0, anim, true);

    if (showBoard)
        this.gfx.skeleton.setAttachment("board", "board"); else
        this.gfx.skeleton.setAttachment("board", null);

    var hatSlot = null;
    var gunSlot = "gun0";

    if (showGun)
    {
        for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
        {
            if (PlayerData.inst.items_enabled[i].equipped == "1")
            {
                var item = PlayerData.inst.getItemById(PlayerData.inst.items_enabled[i].id_item);
                if (item.type == tApp + tHat) hatSlot = item.gfx;
                if (item.type == tWeapon) gunSlot = item.gfx;
            }
        }

    } else
        this.gfx.skeleton.setAttachment("gun", null);

    if (overrideGun)
        gunSlot =  overrideGun;

        this.gfx.skeleton.setAttachment("gun", gunSlot);

    if (overrideHat)
        hatSlot = overrideHat;

    this.gfx.skeleton.setAttachment("hat", hatSlot);

    if (headSlot)
    this.gfx.skeleton.setAttachment("head", headSlot);
}

CPlayer.prototype.createDedGraphics = function()
{
    var g = new PIXI.Spine("imgtps/skeleton.json");

    g.skeleton.setSkinByName('perded');
    g.state.setAnimationByName(0, "idle", true);
    this.gunBone = g.skeleton.findSlot("gun");

    this.boardSlot = g.skeleton.findSlot("board");
    this.rshSlot = g.skeleton.findSlot("r_shoulder");
    this.lshSlot = g.skeleton.findSlot("l_shoulder");
    g.scale.x = 0.3;
    g.scale.y = 0.3;

    if (!CPlayer.rhRot)
        CPlayer.rhRot = this.rshSlot.data.boneData.rotation;
    if (!CPlayer.lhRot)
        CPlayer.lhRot = this.lshSlot.data.boneData.rotation;
    this.rshSlot.data.boneData.rotation = CPlayer.rhRot;
    this.lshSlot.data.boneData.rotation = CPlayer.lhRot;

    g.skeleton.setAttachment("body", "body");
 /*   for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
    {
        if (PlayerData.inst.items_enabled[i].id_item == "105A3B3C-160C-4355-AB38-9F107DB5A831")
        {
            g.skeleton.setAttachment("body", "body1");
        }
    }*/

    g.stateData.setMixByName("idle", "jump", 0.2);
    g.stateData.setMixByName("jump", "idle", 0.1);
    g.stateData.setMixByName("jump", "defeated", 0.3);
    g.stateData.setMixByName("idle", "defeated", 0.72);

    this.bulletStart = 40;

    return g;
}

CPlayer.prototype.reveal = function()
{
    this.hp = 2;
    this.pickupBooster = true;
    this.invulnerable = 0;
    this.state = this.sMoving;
    this.revealTime = new Date().getTime();
    this.gfx.state.setAnimationByName(0, "idle", true);
}

CPlayer.prototype.onJump = function()
{
 //   this.kill(); return;
    if ((this.state == this.sMoving)
    && (!this.jumping || (this.jumping && this.jumpNumber)))
    {
        this.jumpNumber++;
        if (this.jumpNumber > 2) return;
        this.jumping = true;

        if (this.jumpNumber != 2)
        {
             //   this.vx = 7 * (1 - Math.abs(this.x - this.baseX)/40);
            if (!this.prevX)
            this.prevX = this.x;
            this.vy = this.initialJumpSpeed;
            this.gfx.state.setAnimationByName(0, "jump", false);
        } else
            this.vy += this.initialJumpSpeed / 5;

    //    console.log("JUMP " + this.jumpNumber.toString());
        this.gravityEnabled = true;
        this.vy = this.initialJumpSpeed;
        ZSound.Play("jump2");

        this.movementTween.pause();
    }
}


CPlayer.prototype.kill = function()
{
    if (this.state == this.sMoving) {
        this.state = this.sDying;
        this.pickupBooster = false;
        if (CBooster.list)
            for (var i = 0; i < CBooster.list.length; ++i) CBooster.list[i].onDeactivate();
        this.invulnerable++;
        var lbg = LauncherBG.inst;
        lbg.preVelocity = lbg.maxVelocity;
        this.gravityEnabled = true;
        ZSound.Play("losing");
        this.gfx.state.update(0.5);
        this.gfx.state.setAnimationByName(0, "defeated", false);

        new TweenMax(lbg, 2, {maxVelocity: 0.5});
        TweenMax.delayedCall(2.57, gameStage.sessionEnd);
    }
}

CPlayer.prototype.destroy = function()
{
    if (this.jumpTween) this.jumpTween.kill();
    this.jumpTween = null;
    if (this.movementTween)
    this.movementTween.kill();
    this.movementTween = null;
    CLiveObj.prototype.destroy.call(this);
    gameStage.player = null;
}

CPlayer.prototype.jump = function()
{
    if (this.jumpTween && this.jumpTween.isActive()) return;
    this.jumpTween = new TweenMax(this, 0.55, {y: 140., yoyo: true, repeat: 1, ease: Cubic.easeOut});
}

CPlayer.prototype.landing = function() {
    this.vy = 0;
    this.jumping = false;
    this.y = this.baseY;
    this.gravityEnabled = false;
    this.jumpNumber = 0;

    if (this.state != this.sDying) {
        this.gfx.state.setAnimationByName(0, "idle", true);

            this.movementTween.resume();
    }
}

CPlayer.prototype.onDmgAnim = function(pusher) {
    if  (this.state == this.sDying) return;

    if (this.gravityEnabled) {
        this.vy = Math.max(-20, this.vy - 20);
    } else
    {
        this.gravityEnabled = true;
        this.vy -= 15;
    }
}

CPlayer.prototype.process = function()
{
   // console.log(this.gravityEnabled);
    if (SM.inst.currentStage == gameStage && this.playable && gameStage.player) {

            if (this.vy > 0 && this.y > this.baseY - 50) {
                this.jumping = false;
            }

            if (this.vy > 0 && this.y > this.baseY)
            {
                this.landing();
            }

        if (this.blink)
        {
            this.updateBlink();
        }
        if (this.state != this.sDying && !this.jumping)
        {
            var d = (this.baseX - this.x ) / 45;
            this.x += d;
        }
        this.vx *= 0.9;

        if (gameStage.fireState && window.mouseY < SCR_HEIGHT - 40) {
            this.fire();
        }


        if (!this.jumping && this.boardSlot)
        {
            this.boardSlot.bone.rotation *= 0.5;//.06;
            if (this.boardSlot.bone.rotation < 0.02) this.boardSlot.bone.rotation = 0.02;
        }   //this.boardSlot.bone.rotation *= 0.66;

        //LauncherBG.inst.verticalParallax = (this.baseY - this.y) / 100;
        gameStage.ammoico.x = this.x-80;
        gameStage.ammoico.y = this.y-50;

        gameStage.ammobar.x = gameStage.ammoico.x + 25;
        gameStage.ammobar.y = gameStage.ammoico.y - 21;
        gameStage.reloadBar.x = gameStage.ammoico.x;
        gameStage.reloadBar.y = gameStage.ammoico.y;


        if (this.weapon)
            this.weapon.process();

        var dx = 0;
        var dy = 0;
        var da = 0;
        if (this.weapon == w_laser) {
            dx = 0;
            dy = 200;
        }else

        if (this.weapon == w_ak74) {
            dx = 220;
            dy = 0;
        }else

        if (this.weapon == w_rifle) {
            dx = 220;
            dy = 20;
        }
        else
        if (this.weapon == w_pps) {
            dx = 330;
            dy = 20;
            da = -Math.PI / 20;
        }
        else
        if (this.weapon == w_grenadel) {
            dx = -20;
            dy = 250;
            da = 0;
        }
        else
        if (this.weapon == w_minigun)
        {
            dy = 380;
            dx = -68;
            da = Math.PI / 7.5;
        }
        var p = this.gunBone.currentSprite.toGlobal({x:dy, y: -dx});
      //  p = this.gunBone.currentSprite.parent.toGlobal(p);
        this.firePointX = p.x/SCR_SCALE;
        this.firePointY = p.y/SCR_SCALE;

        var mx = window.mouseX;
        var my = window.mouseY;
        if (mx < this.firePointX) mx = this.firePointX;
        if (my > SCR_HEIGHT - 50) my = SCR_HEIGHT - 50;

        var bangle = Math.atan2(this.y - my, this.x - mx);

        this.fireAngle = Math.PI + bangle - this.weapon.recoilValue/100;
        var newAngle = this.fireAngle+Math.PI / 2 + da;
       // if ((!this.handTween || !this.handTween.isActive())) {

        if (this.state == this.sMoving) {
            this.rshSlot.data.boneData.rotation = 270 - 180 * newAngle / Math.PI + 25;
            this.lshSlot.data.boneData.rotation = 270 - 180 * newAngle / Math.PI - 10;
        }
       // this.gunBone.data.boneData.rotation =  270 -180*newAngle / Math.PI;
        //this.dedLeftHand.rotation = newAngle + 0.13;
            //this.dedRightHand.rotation = newAngle;
      //  }

    }
    CLiveObj.prototype.process.call(this);
}

CPlayer.prototype.resetBlink = function()
{
    var f = this.gfx;
    for (var i = 0; i < f.skeleton.slots.length; ++i)
    {
        f.skeleton.slots[i].r = 1;
        f.skeleton.slots[i].g = 1;
        f.skeleton.slots[i].b = 1;
    }

}


CPlayer.prototype.updateBlink = function()
{
    var f = this.gfx;
    for (var i = 0; i < f.skeleton.slots.length; ++i)
    {
      var h = 0.5*(Math.cos(i/150 +  window.time / 400) + 1);
      var rgb = hslToRgb(h, 1, 0.86);
      f.skeleton.slots[i].r = rgb[0];
      f.skeleton.slots[i].g = rgb[1];
      f.skeleton.slots[i].b = rgb[2];
    }

}

CPlayer.prototype.dealDamage = function(dmg)
{
    if (window.time - this.revealTime < 550) return;
    if (this.invulnerable > 0) return;
    this.revealTime = window.time;

    if (!MOBILE) {
        for (var i = 0; i < this.gfx.skeleton.slots.length; ++i) {
            this.gfx.skeleton.slots[i].r = 1;
            this.gfx.skeleton.slots[i].g = 0;
            this.gfx.skeleton.slots[i].b = 0;
        }

        var f = this.gfx;
        TweenMax.delayedCall(0.2, function () {
            for (var i = 0; i < f.skeleton.slots.length; ++i) {
                f.skeleton.slots[i].r = 1;
                f.skeleton.slots[i].g = 1;
                f.skeleton.slots[i].b = 1;
            }

        });
    }

    this.gfx.skeleton.setAttachment("head", "head4");
    TweenMax.delayedCall(0.7, function(){
        if (gameStage.player)
        gameStage.player.gfx.skeleton.setAttachment("head", "head1");
    });

    var pl = this;
   /* this.allowFlowMove = false;
    new TweenMax(this, 0.6, {x: Math.max(this.x - 50,80), repeat: 1, yoyo: true, onComplete: function(){pl.allowFlowMove = true;}});
  */


    //  this.tweenColor(this.gfx);
/*    if   (!TweenMax.isTweening(this.gfx.children[0])) {
       for (var i = 0; i < this.gfx.children.length; ++i) {
            if (this.dedWeaponContainer == this.gfx.children[i]) continue;
            new TweenMax(this.gfx.children[i], 0.1, {ease: Linear.ease, tint: 0xff0000, repeat: 1, yoyo: true});
        }
    }*/

    if (this.hp - dmg < 0) this.hp = 0; else
        this.hp = this.hp - dmg;
}


CPlayer.prototype.fire = function()
{
    if (gameStage.menuBtn && !gameStage.menuBtn.over)
    {
        if (this.state == this.sMoving && this.weapon.shot())
        {
            /*    if (this.handTween)
             this.handTween.kill();
             */
            //  var time = 0.5* this.weapon.delay / 1000;
            //  new TweenMax(w, time, {x: -5, rotation: -0.04, yoyo: true, repeat: 1});
            /*    this.handTween = new TweenMax(this.dedLeftHand, time, { rotation: this.dedLeftHand.rotation-0.04, yoyo: true, repeat: 1});
             new TweenMax(this.dedRightHand, time, { rotation: this.dedRightHand.rotation-0.04, yoyo: true, repeat: 1});
             */  }
    }
};
/**
 * Created by KURWINDALLAS on 17.11.2014.
 */
extend(CBullet, CObj, true);

function CBullet(in_x,in_y,textname,in_body, vw) {
    CObj.apply(this, [in_x, in_y, null, in_body]);
    this.gfx = new PIXI.DisplayObjectContainer();
    this.visualVel = 7;
    this.visualWidth = vw;
    this.bhead = new PIXI.Sprite(PIXI.Texture.fromFrame("head.png"));
    this.bhead.anchor.x = 0.5;
    this.bhead.anchor.y = 0.5;
    this.bhead.blendMode = PIXI.blendModes.ADD;
    this.bhead.width = this.visualWidth;
    //this.bhead.x -= 1;
    this.bmiddle = new PIXI.Sprite(PIXI.Texture.fromFrame("center.png"));
    this.bmiddle.width = this.visualWidth;
    this.bmiddle.anchor.x = 0.5;
    this.bmiddle.anchor.y = 0.5;
    this.bmiddle.blendMode = PIXI.blendModes.ADD;
    this.bsheylf = new PIXI.Sprite(PIXI.Texture.fromFrame("shleyf.png"));
    this.bsheylf.width = this.visualWidth;
    this.bsheylf.anchor.x = 0.5;
    this.bsheylf.anchor.y = 0.5;
    this.bsheylf.blendMode = PIXI.blendModes.ADD;
    this.gfx.addChild(this.bhead);
    this.gfx.addChild(this.bmiddle);
    this.gfx.addChild(this.bsheylf);
    SM.inst.ol.addChild(this.gfx);
    this.dmg = 10;
    this.radius = 30;
    if (!CBullet.list) CBullet.list = [];
    CBullet.list.push(this);
}

CBullet.prototype.updateBulletSpeed = function()
{
    this.bhead.width = this.visualWidth;
    this.bmiddle.width = this.visualWidth;
    this.bsheylf.width = this.visualWidth;
    this.bmiddle.height = 5 + this.visualVel / 2 + 1;
    this.bhead.y = -this.bmiddle.height / 2 - this.bhead.height / 2 + 2 ;
    this.bsheylf.height = 5 + this.visualVel / 2;
    this.bsheylf.y = this.bmiddle.height / 2 + this.bsheylf.height / 2 ;

}

CBullet.prototype.collide = function (obj2)
{
    if (obj2 && this.prevVictim != obj2) {
        obj2.dealDamage(this.dmg);

        if (obj2.metall) {
            var fx = pool.Pop("fxsmallblink");
            if (fx)
            fx.animationSpeed = 0.45;
        }
        else {
            fx = pool.Pop("blood");
            if (fx)
                fx.animationSpeed = 0.55;
        }

        if (fx)
        {
            var obj = new CObj(this.x, this.y, null);
            fx.loop = false;
            fx.gotoAndPlay(0);
            obj.gfx = fx;
            obj.updateGraphics();
            SM.inst.fg.addChild(fx);

            obj.return2Pool = obj.gfx;
            obj.lifeTime = 800;
            obj.gfx.onComplete = function () {obj.destroy();}
        }
        this.life--;
        this.dmg*=0.66;
        if (this.life <= 0)
            this.destroy();
        this.prevVictim = obj2;
    }
}


CBullet.prototype.destroy = function()
{
    this.prevVictim = null;
    var inx = CBullet.list.indexOf(this);
   if (inx >= 0) CBullet.list.splice(inx, 1);
   CObj.prototype.destroy.call(this);
}

CBullet.prototype.process = function() {

    this.visualVel += 29.5;
    if (this.dw)
    this.visualWidth += this.dw;
    this.updateBulletSpeed(this.visualVel);

    CObj.prototype.process.call(this);
};/**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(FloorObj, CObj, true);

function FloorObj(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    if (this.gfx) {
        this.gfx.parent.removeChild(this.gfx);
        SM.inst.ol.addChildAt(this.gfx, 0);//
    }
}

FloorObj.prototype.process = function()
{
    var floorLine = this.y - this.gfx.height / 2;
        //var monLen = CObj.objects.length;
        for (var i = 0; i < CObj.objects.length; ++i) {
            var o = CObj.objects[i];
            if (CObj.checkType(o, CMonster)) {
                if (o.vy > 0 && o.y + o.radius / 2 > floorLine) {
                    o.destroy();
                }
            }

            if (CObj.checkType(o, JumpMon) && o.y + o.radius / 2 > floorLine - 50) {
                if (o.vy > 0)
                {    o.vy = -o.vy*0.8;
                    o.av = 0.1*Math.random();
                }
            }

            if ((CObj.checkType(o, CBoosterBox) || CObj.checkType(o, CCoin) || CObj.checkType(o, CKey)) && o.y + o.radius / 2 > floorLine - 58) {
                if (o.vy > 0)
                o.vy = -o.vy*0.8;
            }
    }
};/**
 * Created by KURWINDALLAS on 19.11.2014.
 */

extend(LauncherBG, CObj, true);


function LauncherBG(in_x, in_y, textname, in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.levCycles = [];
    this.gfx = new PIXI.DisplayObjectContainer();
    SM.inst.bg.addChild(this.gfx);
    this.nullSpeed = 10.4;
   //  var inx = CObj.objects.indexOf(this);
    //  CObj.objects.splice(inx);
    this.distance = 0;
    this.incDist = 50;
    this.speedUpCoef = 0.14;
    this.layersSpeed = [0, 0.1, 0.14, 0.65, 0.65, 1, 1];
    this.ol = new PIXI.DisplayObjectContainer();
    this.pllayer = new PIXI.DisplayObjectContainer();
    this.planeLayer= new PIXI.DisplayObjectContainer();
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
    this.planeLayer = null;
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

    if (cobj.id == "skybg") {
        g.width = SCR_WIDTH;
        g.position.x = SCR_WIDTH / 2;
    }

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
    var original = LevelManager.levels[LevelManager.levFolder + levName + ".json"];
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
    this.gfx.addChildAt(this.planeLayer, 1);

    this.gfx.addChildAt(this.ol, 7);
    this.gfx.addChildAt(this.pllayer, 8);

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
};/**
 * Created by KURWINDALLAS on 22.02.2015.
 */
extend(CGrenade, CBullet, true);

function CGrenade(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, null, in_body]);
    this.gfx = crsp("Granata.png");
    this.gfx.scale.x = 0.5;
    this.gfx.scale.y = 0.5;
    LauncherBG.inst.ol.addChild(this.gfx);
    this.radius = 35;

    if (!CBullet.list) CBullet.list = [];
    CBullet.list.push(this);

    var t = this;
    TweenMax.delayedCall(0.05, function(){t.addSmoke();});
}

CGrenade.prototype.addSmoke = function (obj2) {
    if (this.doRemove) return;
    var t = this;
    TweenMax.delayedCall(0.02, function(){t.addSmoke();});
    var fx = pool.Pop("smoke");
    if (!fx) return;
    var o = new CObj(this.x, this.y, null);
    o.gfx = fx;
    o.updateGraphics();
    fx.alpha = 1;
    LauncherBG.inst.ol.addChild(o.gfx);


    o.return2Pool = o.gfx;
    o.lifeTime = 800;

    new TweenMax(o.gfx, 0.2, {alpha: 0, onComplete: function(){
            o.destroy();
    }});
}


CGrenade.makeBoom = function (x, y, dmg, dist, owner)
{
    ZSound.Play("grenade");

    var fx = pool.Pop("expl");
    if (fx) {
        var obj = new CObj(x, y, null);
        fx.loop = false;
      //  fx.gotoAndStop(0);
        fx.gotoAndPlay(0);
        obj.allowTrackSpeed = true;
        obj.gfx = fx;
        obj.updateGraphics();
        SM.inst.fg.addChild(fx);
        obj.rotation = (Math.random() - 0.5);
        fx.animationSpeed = 0.85;
        obj.updateGraphics();

        obj.return2Pool = obj.gfx;
        obj.lifeTime = 800;

        obj.gfx.onComplete = function () {
                    obj.destroy();
            }
        };


    var sd = dist*dist;

   // var l = 0;
    if (CMonster.list)
   for (var i = 0; i < CMonster.list.length; ++i)
    {
        var m = CMonster.list[i];
        if (m.doRemove) continue;
        if (m == owner) continue;
        var dx = m.x - x;
        var dy = m.y - y;
        var sqd = dx*dx + dy*dy;
        if (sqd < sd)
        {
            var d = Math.sqrt(sqd);
            var totalDmg = dmg*((dist - (d + 0.01)) / dist);
            m.dealDamage(totalDmg);
        }
        if (m.doRemove)
        {
            i--;
        //    l--;
        }
    }

    var smalld = (dist*0.5)*(dist*0.5);
    if (this.owner != gameStage.player)
    {
        var dx = gameStage.player.x - x;
        var dy = gameStage.player.y - y;
        if (dx*dx + dy*dy < smalld)
        {
            gameStage.player.dealDamage(1);
        }
    }
}

CGrenade.prototype.collide = function (obj2)
{
    if (this.owner != gameStage.player )
    {
        if (obj2 && CObj.checkType(obj2, CMonster)) return;
    }

    if (obj2 != this.owner) {
        CGrenade.makeBoom(this.x, this.y, this.dmg, 350, this.owner);
        this.destroy();
    }
}


CGrenade.prototype.destroy = function()
{
    CBullet.prototype.destroy.call(this);
}

CGrenade.prototype.process = function() {
    CObj.prototype.process.call(this);

    if (!this.doRemove && this.y > gameStage.floor.y - 60)
    {
        this.vy = - this.vy*0.7;

        if (Math.abs(this.vy)< 5)
        this.collide(null);
    }
};/**
 * Created by KURWINDALLAS on 09.03.2015.
 */
extend(CPlane, CObj, true);

function CPlane(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.shleif1 = crsp("plane_trace1");
    this.shleif2 = crsp("plane_trace2");
    this.shleif1.rotation = Math.PI;
    this.shleif2.rotation = Math.PI;
    this.shleif1.x = -this.shleif1.width / 2;
    this.shleif2.x = -this.shleif2.width / 2;
    this.gfx.addChild(this.shleif1);
    this.gfx.addChild(this.shleif2);
    this.alpha = 1;
    new TweenMax(this, 4, {alpha : 0, yoyo:true, repeat: -1, ease: Sine.easeInOut});
}

CPlane.generateProperty('alpha', {
    defaultValue: 1,
    get: function () {
        return this._alpha;
    },
    set: function (value) {
        this._alpha = value;
        this.shleif1.alpha = value;
        this.shleif2.alpha = 1 - value;
    }
});/**
 * Created by KURWINDALLAS on 23.11.2014.
 */
extend(CKey, CObj, true);

function CKey(in_x,in_y,amount) {
    CObj.apply(this, [in_x, in_y, null, null]);
    this.gravityEnabled = true;
    this.colGroup = 1;
    this.colMask = CG_PLAYER;
    this.gravPower = 0.7;
    this.radius = 15;
    this.gfx = crsp("key.png");
    this.gfx.anchor.x = 0.5;
    this.gfx.anchor.y = 0.5;
    this.gfx.scale.x = 0.7;
    this.gfx.scale.y = 0.7;
    SM.inst.ol.addChild(this.gfx);
    this.updateGraphics();

    this.allowTrackSpeed = true;
}

CKey.prototype.process = function ()
{
    CObj.prototype.process.call(this);

    if (this.gravityEnabled)
        this.vx = -7;
}

CKey.spawnKey = function(x, y, a)
{
    var c = new CKey(x, y, a);
    c.vx = 20 + Math.random()*10;
    c.vy = -20*(Math.random());
}

CKey.prototype.collide = function(obj2)
{
    if (this.isCollected) return;

    this.isCollected = true;
    if (!PlayerData.inst.playerItem.keys) PlayerData.inst.playerItem.keys = 0;

    PlayerData.inst.playerItem.keys ++;
    //PlayerData.inst.savePlayerData();
    var tfKeys = CTextField.createTextField({fontFamily: "dedgamecaps", fontSize: 25, text: "СОБРАНО " + PlayerData.inst.playerItem.keys.toString() + " КЛЮЧЕЙ"}) ;
    tfKeys.updateText();
    tfKeys.x = this.x;
    tfKeys.y = this.y;
    SM.inst.fg.addChild(tfKeys);
    new TweenMax(tfKeys, 0.9, {y: tfKeys.y - 100, ease: Sine.easeIn, onComplete: function(){rp(tfKeys);}});
    gameStage.updateScore();

    this.gravityEnabled = false;
    this.vx = 0;
    this.vy = 0;
    this.allowTrackSpeed = false;
    var coinGfx = pool.Pop("coinCollect");
    ZSound.Play("coin")
    if (!coinGfx)
        this.destroy(); else
    {
        rp(coinGfx);
        rp(this.gfx);

        coinGfx.loop = false;
        coinGfx.gotoAndStop(0);
        coinGfx.gotoAndPlay(0);
        this.gfx = coinGfx;
        this.updateGraphics();

        SM.inst.fg.addChild(coinGfx);
        var coin = this;
        coinGfx.animationSpeed = 0.5;
        this.updateGraphics();
        var obj = this;
        obj.return2Pool = obj.gfx;
        obj.lifeTime = 800;

        obj.gfx.onComplete = function () {
            obj.destroy();
        }

    }
    //  Coin.generateTextParticle(this);
    //  ZSound.Play("collectMoney")
//



    //new TweenMax(this.gfx, 0.3, {alpha: 0, onComplete: this.destroy, scaleX: 10, scaleY: 10});
    //new TweenMax(this.gfx.scale, 0.3, {x: this.gfx.scale.x*1.3, y: this.gfx.scale.y*1.3});
    //this.destroy();
};
extend(CBoosterBox, CObj, true);

function CBoosterBox(in_x,in_y,amount) {
    CObj.apply(this, [in_x, in_y, null, null]);
    this.gravityEnabled = true;
    this.colGroup = 1;
    this.colMask = CG_PLAYER;
    this.gravPower = 0.46;
    this.radius = 15;
    this.gfx = crsp("booster box");

    LauncherBG.inst.ol.addChild(this.gfx);

    this.updateGraphics();

    this.allowTrackSpeed = true;
}

CBoosterBox.prototype.destroy = function()
{
    this.drone = null;
    CObj.prototype.destroy.call(this);
}


CBoosterBox.prototype.getBooster = function()
{
    if (gameStage.player.state == this.sDying) return;
    if (!gameStage.player.pickupBooster) return;
    var boosters = [{name: "Magnet", cls: CMagnetBooster}, {name: "Tablets", cls: CTabletsBooster}, {name: "Health", cls: CHeartBooster}, {name: "MarioStar", cls: CSupermanBooster},
        {name: "Double", cls: CDoubleBooster}];

    if (gameStage.tutorial)
        boosters = [{name: "Tablets", cls: CTabletsBooster}];


    var boost = getRand(boosters);

    if (CBooster.list)
    for (var i = 0; i < CBooster.list.length; ++i)
    {
        if (CObj.checkType(CBooster.list[i], boost.cls))
        {
            var replaceObj = CBooster.list[i];
            break;
        }
    }

    for (var i = 0;i < PlayerData.inst.items.length;++i)
    {
        if (PlayerData.inst.items[i].name == boost.name)
        break;
    }

    var up = PlayerData.inst.getUpgrade(PlayerData.inst.items[i]).upgr;
    var b = new boost.cls(SCR_WIDTH / 2, SCR_HEIGHT / 2, null, up);
    b.name = boost.name;
    b.item_id = PlayerData.inst.items[i].id;


    if (replaceObj) {
        px = replaceObj.x;
        replaceObj.duration += b.duration;
        b.destroy();
        return;
    }
    if (replaceObj)
    {
        var inx = CBooster.list.indexOf(b);
        if (inx >= 0)
            CBooster.list.splice(inx, 1);
    }

    b.gfx = crsp(PlayerData.inst.items[i].gfx);

    b.gfx.scale.x = 0.3;
    b.gfx.scale.y = 0.3;
    b.updateGraphics();
    new TweenMax(b.gfx.scale, 0.3, {x: 0.6, y: 0.6, repeat: 2, yoyo: true});

    var px = 35 + 50*(CBooster.list.length - 1);
    new TweenMax(b, 0.7, {delay: 0.8, x: px, y: 130});
    var fnl = function(){b.onActivate();};
    if (replaceObj) fnl = function(){b.destroy();};
    new TweenMax(b.gfx.scale, 0.7, {delay: 0.8, x: 0.3, y: 0.3, onComplete: fnl});
    SM.inst.guiLayer.addChild(b.gfx);
}

CBoosterBox.prototype.collide = function(obj2)
{
    if (this.isCollected) return;

    this.isCollected = true;

    this.gravityEnabled = false;
    this.vx = 0;
    this.vy = 0;
    this.allowTrackSpeed = false;
    var coinGfx = pool.Pop("coinCollect");
    ZSound.Play("coin");
    if (!coinGfx)
        this.destroy(); else
    {
        this.getBooster();
        if (this.drone) {
            this.drone.flyAway();
            this.drone = null;
        }
        rp(coinGfx);
        rp(this.gfx);

        coinGfx.loop = false;
        coinGfx.gotoAndStop(0);
        coinGfx.gotoAndPlay(0);
        this.gfx = coinGfx;
        this.updateGraphics();

        SM.inst.fg.addChild(coinGfx);
        var coin = this;
        this.updateGraphics();
        var obj = this;
        obj.return2Pool = obj.gfx;
        obj.lifeTime = 800;
        obj.gfx.onComplete = function () {obj.destroy();}
    }

};/**
 * Created by KURWINDALLAS on 18.11.2014.
 */
extend(CMonster, CLiveObj, true);

function CMonster(in_x,in_y,textname,cr_bar){
    CLiveObj.apply(this,[in_x,in_y,textname,null]);
    this.radius = 50;
    this.xp = 1;
    this.colGroup = CG_MONSTER;
    this.colMask = CG_PLAYER;
    this.highCoef = 1;
    this.jumpTimeCoef = 1;
    if (!CMonster.list) CMonster.list = [];
    CMonster.list.push(this);
    this.maxHp = 50;
    this.spawnCoins = true;
    this.coinAmount = 4;
    this.hp = this.maxHp;
    if (cr_bar == true || cr_bar == null) {
        this.bar = new CHPBar(in_x, in_y, "health bar empty");
        this.bar.upperImage = "health bar full";
        this.bar.init();
    //    this.bar.gfx.scale.x = 0.1;
     //   this.bar.gfx.scale.y = 0.2;
        this.bar.prop = 1;
        this.barOffsetY = 0;
        this.barOffsetX = 0;
    }
    this.dmg = 1;
}

CMonster.prototype.collide = function (obj2)
{
    if (this.prekilled || this.doRemove) return;
    if (!this.hitDone) {
        obj2.dealDamage(this.dmg);
        if (!(obj2.invulnerable > 0)) {
            this.hitDone = true;
        }
    }
}

CMonster.prototype.process = function()
{
    if (this.bar) {
        this.bar.x = this.x - this.bar.gfx.width * 0.5 - 10+ this.barOffsetX;
        this.bar.y = this.y - this.radius * 1.5 + this.barOffsetY;
    }

    if (this.y > 470 && this.rollLeave)
    {
        this.av -= 0.01;
        if (this.av < -0.2) this.av = -0.2;
        this.gravityEnabled = false;
        new TweenMax(this, 0.7, {vx: -20});
        this.vy = 0;
    }
    CLiveObj.prototype.process.call(this);
}


CMonster.prototype.kill = function()
{
    if (!this) return;
    if (this.prekilled) return;

    if (this.spawnCoins) {
        var coinCount = 5;
        if (gameStage.player.doubleBooster)coinCount *= gameStage.player.doubleBooster;
        for (var i = 0; i < coinCount; ++i) {
            if (Math.random() > 0.3) continue;
            CCoin.spawnCoin(this.x, this.y, this.coinAmount);
        }
    }
    this.prekilled = true;

    if (this.bar) {
        new TweenMax(this.bar.gfx, 0.2, {width: this.bar.gfx.width*3, height: 0});//.width
        //this.bar.gfx.visible = false;
    }


    PlayerData.inst.progressAch("Gold medal 10", 1/100, false);
    PlayerData.inst.progressAch("Gold medal 11", 1/200, false);


    PlayerData.inst.gainExp(this.xp);

    var parent = this.gfx.parent;
    parent.removeChild(this.gfx);

    bloodgfx = pool.Pop("bloodblow");
    var f = this;
    if (bloodgfx) {
        this.gfx = bloodgfx;
        this.gfx.anchor.x = 0.5;
        this.gfx.anchor.y = 0.5;
        this.gfx.scale.x = 1.8;
        this.gfx.scale.y = 1.8;
        this.gfx.animationSpeed = 0.6;
        this.updateGraphics();
        parent.addChild(this.gfx);
        this.gfx.loop = false;
        this.gfx.gotoAndPlay(0);
        var o = this;
        this.return2Pool = this.gfx;
        this.lifeTime = 800;
        this.gfx.onComplete = function () {o.destroy();}
    } else
        CLiveObj.prototype.kill.call(f);

    this.updateGraphics();
  //
}

CMonster.prototype.destroy = function()
{
    if (this.doRemove) return;

    if (this.bar)
        this.bar.destroy();
    this.bar = null;
    var inx = CMonster.list.indexOf(this);
    CMonster.list.splice(inx, 1);
    CObj.prototype.destroy.call(this);
}

CMonster.prototype.longJump = function(diff, gravPower, slowSpeed, fastSpeed, easeTime, powRand, gravToSpeed)
{
    if (!gravToSpeed) gravToSpeed = 40;
    var diff = 1;
    this.gravityEnabled = true;
    this.jumpTimeCoef = 1;
    if (!powRand) powRand = 0;
    var pow = (1 + powRand);
  //  var t = 2*this.jumpTimeCoef/pow;
    this.gravPower = (gravPower + 0.025*diff)*pow;
    this.vy = -this.gravPower*gravToSpeed*pow;
    this.allowTrackSpeed = false;
    this.gravityEnabled = true;

    var obj = this;
    this.vx = fastSpeed - diff;
    new TweenMax(this, easeTime, {vx: slowSpeed - diff, yoyo: true, repeat: 1});
  //  new TweenMax(this, 1.2, {y: 150, repeat: 1, yoyo:true, onComplete: function(){obj.vy = 3; obj.gravityEnabled = true;}});
  //  new TweenMax(this, 1.7*this.jumpTimeCoef, { y: this.y - 220*(this.highCoef + Math.random()*0.1), yoyo: true, repeat: 1, ease: Quad.easeInOut, onComplete: function(){x.gravityEnabled = true;}} );
};/**
 * Created by KURWINDALLAS on 07.03.2015.
 */

extend(JumpMon, CMonster, true);

function JumpMon(in_x,in_y,animname,cr_bar){
    CMonster.apply(this,[in_x,in_y,animname, cr_bar]);
    this.rollLeave = false;
    //var t = this;
    //new TweenMax.delayedCall(1, function(){t.spawnGrenade();});
}

JumpMon.prototype.process = function()
{


    CMonster.prototype.process.call(this);
};
extend(CDrone, CMonster, true);

function CDrone(in_x,in_y,animname,cr_bar){
    CMonster.apply(this,[in_x,in_y,animname, cr_bar]);
    this.metall = true;

    var t = this;
    new TweenMax.delayedCall(1, function(){t.spawnGrenade();});
}

CDrone.prototype.spawnGrenade = function()
{
    if (this.doRemove) return;


    var b = new CGrenade(this.x, this.y + 60);
    b.owner = this;
    b.life = 10;
    b.dmg = 40;
    b.rotation = Math.PI / 2;
    b.av = 0.2;
    b.vx = -3;
    b.gfx.tint = 0xff0000;
    b.gravityEnabled = true;
    b.colGroup = CG_GROUND;
    b.colMask = CG_PLAYER;

    var t = this;
    new TweenMax.delayedCall(1, function(){t.spawnGrenade();});
}
CDrone.prototype.process = function()
{


    CMonster.prototype.process.call(this);
};extend(CDrone2, CMonster, true);

function CDrone2(in_x,in_y,animname,cr_bar){
    CMonster.apply(this,[in_x,in_y,animname, cr_bar]);
    this.metall = true;
    var t = this;
}

extend(CObstacle, CMonster, true);

function CObstacle(in_x,in_y,animname,cr_bar){
    CMonster.apply(this,[in_x,in_y,animname, cr_bar]);
}

CObstacle.prototype.dealDamage = function(dmg)
{
    CMonster.prototype.dealDamage.call(this, dmg);
}

CObstacle.prototype.collide = function (obj2)
{
    var preHp = obj2.hp;

//&& obj2.y < this.y
    if (!this.collided && obj2 == gameStage.player )
    {
        CMonster.prototype.collide.call(this, obj2);
        this.collided = true;
        gameStage.player.onDmgAnim(this);
    }
};
/**
 * Created by KURWINDALLAS on 05.03.2015.
 */
extend(CBarrel, CObstacle, true);

function CBarrel(in_x,in_y,animname,cr_bar){
    CObstacle.apply(this,[in_x,in_y,animname,false]);
    this.metall = true;
}

CBarrel.prototype.kill = function () {
    if (this.doRemove) return;
    this.destroy();
    CGrenade.makeBoom(this.x, this.y, this.dmgExpl, 350);
};
extend(Boss1, CMonster, true);

function Boss1(in_x,in_y,animname,cr_bar){
    this.hitTestCircles = [{x: 10, y: 0,r: 60}, {x:10,y: -130,r: 60}, {x:0, y: -260,r: 60}];
    CMonster.apply(this,[in_x,in_y,null,null]);
    this.gfx = new PIXI.Spine(animname);
  //  g.skeleton.setSkinByName('perded');
    this.gfx.state.setAnimationByName(0, "idle", true);
    this.gfx.scale.x = 0.48;
    this.gfx.scale.y = 0.48;
    this.updateGraphics();
    this.maxHp = 1000;
    this.xp = 250;
    this.hp = this.maxHp;
    this.bar.gfx.width *= 2;
    this.barOffsetY = - 360;
    LauncherBG.inst.ol.addChild(this.gfx);
    var t = this;
    this.fireDelay = 1.75;

    this.b1 = this.gfx.skeleton.findSlot("b_bullet1");
    this.b2 = this.gfx.skeleton.findSlot("b_bullet2");

    this.gfx.skeleton.setAttachment("b_low_arm", "b_low_arm");

    this.gfx.skeleton.setAttachment("b_legs", "b_legs");
    this.gfx.skeleton.setAttachment("b_body", "b_body");
    this.gfx.skeleton.setAttachment("b_head", "b_head");
    this.gfx.skeleton.setAttachment("b_top_body", "b_top_body");

    this.gfx.stateData.setMixByName("idle", "shot", 0.2);
    this.gfx.stateData.setMixByName("shot", "idle", 0.1);
    this.gfx.skeleton.setAttachment("disp1", "disp1");
    this.gfx.skeleton.setAttachment("b_bomb", null);
    TweenMax.delayedCall(this.fireDelay, function(){t.fire();})
}

Boss1.prototype.fire = function()
{
    if (this.doRemove) return;
    this.gfx.state.setAnimationByName(0, "shot", false);
    var t = this;
    TweenMax.delayedCall(0.5, function () {t.fireBullet(1);t.fireBullet(1);t.fireBullet(1);});
    TweenMax.delayedCall(1.3, function () {t.fireBullet(2);t.fireBullet(2);t.fireBullet(2);});
    TweenMax.delayedCall(1.7, function () {t.goIdle();});
}

Boss1.prototype.setRandDisp = function() {
    var x = (1 + Math.floor(Math.random()*5)).toString();
    var dname = "disp" + x;
    this.gfx.skeleton.setAttachment("disp1", dname);
}

Boss1.prototype.goIdle = function() {
    var t = this;
    if (!this.gfx) return;
    this.gfx.state.setAnimationByName(0, "idle", true);
    this.setRandDisp();

    TweenMax.delayedCall(1, function (){t.fire()});
}

Boss1.prototype.fireBullet = function(b)
{
    if (this.doRemove) return;
    if (b == 1)
    var slot = this.b1; else
    slot = this.b2;

//    var p = this.gfx.toGlobal({x:slot.bone.x, y: slot.bone.y});
    var p = slot.currentSprite.toGlobal({x:0, y:0});
    this.firePointX = p.x/SCR_SCALE;
    this.firePointY = p.y/SCR_SCALE;
    var b = new CMonster(this.firePointX, this.firePointY, null, false);
    b.gfx = CObj.createMovieClip("b_bullet");
    b.gfx.anchor.x = 0.5;
    b.gfx.anchor.y = 0.5;
    b.gfx.animationSpeed = 0.33;
    b.gfx.play();
    LauncherBG.inst.ol.addChild(b.gfx);
    b.gfx.scale.x = 0.8;
    b.gfx.scale.y = 0.8;
    b.maxHp = 10;
    b.hp = b.maxHp;
    b.xp = 5;
    b.radius = 35;
    b.av = 0.1*(Math.random() - 0.5);
    b.spawnCoins= false;
    b.gravityEnabled = true;
    b.jumpTimeCoef = 1;
    var pow = (0.8 + 0.4*(Math.random() - 0.5));
    b.gravPower = (0.14 + Math.random()*0.1)*pow;
    b.vy = -b.gravPower*20*pow;
    b.allowTrackSpeed = false;
    new TweenMax(b, 1.6 + Math.random()*0.5, {x: -100, ease: Linear.easeIn});
    var t = this;
   // TweenMax.delayedCall(this.fireDelay, function(){t.fireBullet();})
}

Boss1.prototype.showUpAnimation = function()
{
    var t = this;
    new TweenMax(this, 3, {x: this.x - 450, onComplete: function()
    {
        new TweenMax(t, 5, {x: t.x + 80, yoyo: true, repeat: -1});
    }});
}

Boss1.prototype.kill = function()
{
    CMonster.prototype.kill.call(this);
    PlayerData.inst.progressAch("Gold medal 7", 1, false);
}

Boss1.prototype.destroy = function()
{
    CMonster.prototype.destroy.call(this);

    MM.inst.currentBoss = null;
};/**
 * Created by KURWINDALLAS on 10.03.2015.
 */
extend(Boss2, Boss1, true);

function Boss2(in_x,in_y,animname,cr_bar){
    Boss1.apply(this,[in_x,in_y,animname,null]);

    this.maxHp = 1600;
    this.hp = this.maxHp;
    this.xp = 400;
    this.gfx.skeleton.setAttachment("b_legs", "b_legs1");
    this.gfx.skeleton.setAttachment("b_body", "b_body1");
    this.gfx.skeleton.setAttachment("b_head", "b_head1");
    this.gfx.skeleton.setAttachment("b_top_body", "b_top_body1");
    this.gfx.skeleton.setAttachment("b_low_arm", "b_low_arm1");

    this.gfx.skeleton.setAttachment("b_low_arm", "b_low_arm1");
    this.gfx.skeleton.setAttachment("b_bomb", "b_bomb");
    this.setRandDisp();

};

Boss2.prototype.setRandDisp = function() {
    var x = (1 + Math.floor(Math.random()*5)).toString();
    var dname = "disp" + x + x;
    console.log("set disp " + dname.toString());
    this.gfx.skeleton.setAttachment("disp1", dname);
}

Boss2.prototype.fireGrenade = function() {
    if (this.doRemove) return;

    var slot = this.gfx.skeleton.findSlot("b_bomb");
    var p = slot.currentSprite.toGlobal({x:0, y:0});
    var firePointX = p.x/SCR_SCALE;
    var firePointY = p.y/SCR_SCALE;
    this.colGroup = CG_MONSTER;
    this.colMask = CG_PLAYER;
    this.gfx.state.setAnimationByName(0, "drop bomb", false);
    var t = this;
    TweenMax.delayedCall(0.15, function(){
    var b = new CGrenade(firePointX, firePointY);
        b.vy = 15;
        b.owner = t;
    b.life = 10;
    b.dmg = 40;
    b.rotation = Math.PI / 2;
    b.av = 0.2;
    b.vx = -3;
    b.gfx.tint = 0xff0000;
    b.gravityEnabled = true;
    b.colGroup = CG_GROUND;
    b.colMask = CG_PLAYER;
    });
}


Boss2.prototype.fire = function()
{
    if (this.doRemove) return;
    this.gfx.state.setAnimationByName(0, "shot", false);
    var t = this;
    TweenMax.delayedCall(0.5, function () {t.fireBullet(1);t.fireBullet(1);t.fireBullet(1);});
    TweenMax.delayedCall(1.3, function () {t.fireBullet(2);t.fireBullet(2);t.fireBullet(2);});
    if (Math.random() < 0.5) {
        TweenMax.delayedCall(1.7, function () {
            t.goIdle();
        });
    } else
    {
        TweenMax.delayedCall(2, function () {t.fireGrenade()});
        TweenMax.delayedCall(2.3, function () {
            t.goIdle();
        });
    }
};MM = function () {
    var bonusProb = 0.7;
    var moneyCrowProb = 0.4;
    this.patterns =
        [


            {mons: "+..", diff: 1, prob: bonusProb},
            {mons: "s..000l00..s.", diff: 1, prob: 1},
            {mons: "f..000..c.", diff: 1, prob: 1},
            {mons: "f..f00szf..000", diff: 1, prob: 1},
                {mons: "s.s..ssc..ss000", diff: 1, prob: 1},
                {mons: ".g..s.gs.l.l.", diff: 1, prob: 1},
                {mons: ".s..s..s..c", diff: 1, prob: 1},
                {mons: ".s00z00s..z", diff: 1, prob: 1},
                {mons: ".b..b..c..b.b.", diff: 1, prob: 1},
                {mons: ".ss..ss.s..l...ss..l.l..s", diff: 1, prob: 1},
                {mons: ".l..zz.ss.c.", diff: 1, prob: 1},
                {mons: ".c.gc..", diff: 1, prob: 1},
                {mons: ".c..c..o000s.s.", diff: 1, prob: 1},
                {mons: ".z...c.s.s.sc..", diff: 2, prob: 1},
                {mons: ".z...c.z..", diff: 2, prob: 1},
                {mons: "+.", diff: 2, prob: bonusProb},
                {mons: "j", diff: 2, prob: moneyCrowProb},
                {mons: ".lbb..c.", diff: 2, prob: 1},
                {mons: ".c..?.?.?.", diff: 2, prob: 1},
                {mons: ".f...z...f..c.", diff: 2, prob: 1},
                {mons: ".l.lz..c..z..c...c..s..l..s.l", diff: 2, prob: 1},
                {mons: ".lsslss0000l00l.l..", diff: 3, prob: 1},
                {mons: ".o..lo..l..", diff: 3, prob: 1},
                {mons: ".c.g..gl", diff: 3, prob: 1},
                {mons: "..f..f.z.o..f..", diff: 3, prob: 1},
                {mons: "jd..df...f.", diff: 4, prob: 1},
                {mons: "..dz..d..z.z", diff: 4, prob: 1},
                {mons: "+..", diff: 3, prob: bonusProb},
                {mons: ".F..l.l.F..l.", diff: 4, prob: 1},
                {mons: ".b.bf..", diff: 4, prob: 0.1},
                {mons: "..s.sss..s..l", diff: 4, prob: 1},
                {mons: "l.l.l...ssl.lbl.l.", diff: 4, prob: 1},
                {mons: "f..c.flf.c00", diff: 5, prob: 1},
                {mons: ".c..c..z..s..sc..sc..sc..", diff: 5, prob: 1},
                {mons: "+..", diff: 5, prob: bonusProb},
                {mons: ".f.ffc..c..", diff: 5, prob: 1},
                {mons: ".b..bbb..bbbbbbb..", diff: 5, prob: 0.1},
                {mons: "gg.g...g..g..G.GG.", diff: 5, prob: 1},
                {mons: "zzz.z..G.GG.zzz.", diff: 5, prob: 1},
                {mons: "..ss..ss.s..lll.ss..l...l...s", diff: 6, prob: 1}, //+
                {mons: ".b.bf.?.", diff: 6, prob: 0.1},
                {mons: ".c..c.l..g.g00g", diff: 6, prob: 1},
                {mons: ".c..c..l..g..g..g", diff: 6, prob: 1},
                {mons: "j", diff: 6, prob: moneyCrowProb},
                {mons: "..s..s..dss", diff: 6, prob: 0.1},
                {mons: "+..", diff: 6, prob: bonusProb},
                {mons: "h.llH.lzh..H.l.l", diff: 7, prob: 1},
                {mons: ".b..bbb..bbbbb000bbbbbbb..", diff: 7, prob: 0.1},
                {mons: ".o.H.H..l..", diff: 7, prob: 1},
                {mons: ".z..zz...zz.z...zz.zz.", diff: 7, prob: 1},
                {mons: ".czgG.gFl...", diff: 7, prob: 1},
                {mons: "h..c.hsh.?.", diff: 8, prob: 1},
                {mons: ".c.b.cbb..lb.gG.Gg..g.", diff: 8, prob: 1},
                {mons: "+..", diff: 8, prob: bonusProb},
                {mons: "o...ss.s.s.d..o.o..", diff: 8, prob: 1},
                {mons: "Fz.Fz.zFz.", diff: 8, prob: 1},
                {mons: "bb..o..b.o.H.h..c", diff: 9, prob: 1},
                {mons: ".c.chH..h..H..000000", diff: 10, prob: 1},
                {mons: "ss...ssss..b.l..c", diff: 10, prob: 1},
                {mons: ".z..zz...zzz..G.zzzz.", diff: 10, prob: 1}

        ];
    this.carClips = ["car","car1","car2"];

    this.bosses = [{cls: Boss1, dist: 5}, {cls: Boss2, dist: 2000}];
    // c l z - преграды
    //s - монстр
    this.monY = 360;
    this.sNormal = 1;
    this.sBoss = 2;
    this.lastStep = 0;
    this.lastSpawnPlane = 0;
    this.currentBoss = null;

    this.state = this.sNormal;
    this.stepDelay = 330;
}

MM.inst = new MM();

MM.prototype.init = function () {
    this.distXP = 0.005;
    this.simpleRandomSpawn = [this.spawnCoin, this.spawnDrone,
        this.spawnFatty, this.spawnFatty2,
        this.spawnGopnick, this.spawnGopnick2,
        this.spawnSimpleMonster, this.spawnSimpleMonster, this.spawnSimpleMonster];
    this.bossDistance = 0;
    this.monsterQueue = MM.inst.generateMonsterQueue();
    /* var lastMoney = -100;
     this.bonusQueue = "";
     for (var i = 0; i < this.monsterQueue.length; ++i)
     {
     this.bonusQueue += "..";
     if (this.monsterQueue.charAt(i) == 'c')
     {
     if (i > 5)
     {
     var bonusStr = "c1c2c3c3c3";
     lastMoney = i;
     //  console.log(this.bonusQueue.length);
     this.bonusQueue = this.bonusQueue.slice(0, this.bonusQueue.length-bonusStr.length);
     //  console.log(this.bonusQueue.length);
     this.bonusQueue += bonusStr;
     }
     }
     }*/
}


MM.prototype.spawnPlane = function () {
    var x = -200;
    var r;
    if (Math.random() > 0.5)
    {
        r  = (Math.random() - 0.5)*Math.PI / 12;
        x = - 200;
    } else
    {
        r  = Math.PI + (Math.random() - 0.5)*Math.PI / 12;
        x = SCR_WIDTH + 200;
    }
    var p = new CPlane(x, 50 + Math.random()*150, "plane");
    rp(p.gfx);
    LauncherBG.inst.planeLayer.addChild(p.gfx);
    p.rotation = r;
    p.vx = Math.cos(p.rotation) / 8;
    p.vy = Math.sin(p.rotation) / 8;
}

MM.prototype.generateMonsterQueue = function () {
    this.debugArray = [];
    var diffs = []
    var maxDiff = 0;
    for (var i = 0 ;i < this.patterns.length; ++i)
    {
        if (this.patterns[i].diff > maxDiff)
        {
            maxDiff = this.patterns[i].diff;
        }
    }
    for (var i = 1; i <= maxDiff; ++i)
    {
        diffs.push({diff: i, prob0:0, prob1: 0});
    }
    var s = [];
    var it = 3000;
    var d = 0; // distance in dots
    var initialD = PlayerData.inst.playerItem.lvl / 4.5 - 0.5;
    var prevPatern;

    for (var i = 0; i < it; ++i) {
        var maxd = 1;
        var distDiff = (d) / 200;
        if (distDiff > diffs.length) distDiff = diffs.length;
        var currDiff = ((Math.sin(d / 50))) * (1 + distDiff * 0.05) + distDiff + initialD;
        var summ = 0;

        for (var j = 0; j < diffs.length; ++j) {

            var p = (1 / (Math.abs(diffs[j].diff - currDiff) + 1));
            p = Math.pow(p, 1.7);
            if (j > 0) {
                diffs[j].prob1 = diffs[j - 1].prob1 + p;
                diffs[j].prob0 = diffs[j - 1].prob1;
            } else {
                diffs[j].prob1 = p;
                diffs[j].prob0 = 0;
            }
            summ += p;
        }

        var r = Math.random() * summ;
        for (var j = 0; j < diffs.length; ++j) {
            if (r > diffs[j].prob0 && r <= diffs[j].prob1) break;
        }

        summ = 0;
        var choosenDiff = diffs[j].diff;
        var choosenDiffProb= diffs[j].prob1 - diffs[j].prob0;
        //diffs[j].diff => difficulty
        for (var j = 0; j < this.patterns.length; ++j) {
            if (this.patterns[j].diff != choosenDiff) continue;

            var p = this.patterns[j].prob;
            //p = Math.pow(p, 1.7);
            if (prevPatern) {
                this.patterns[j].prob1 = prevPatern.prob1 + p;
                this.patterns[j].prob0 = prevPatern.prob1;
            } else {
                this.patterns[j].prob1 = p;
                this.patterns[j].prob0 = 0;
            }
            prevPatern = this.patterns[j];
            summ += p;
        }
        prevPatern = null;
        var r = Math.random() * summ;
        for (var j = 0; j < this.patterns.length; ++j) {
            if (this.patterns[j].diff != choosenDiff) continue;
            if (r > this.patterns[j].prob0 && r <= this.patterns[j].prob1) break;
        }

        var inx = j;
        s += this.patterns[inx].mons;
        var ppp = (this.patterns[inx].prob1 - this.patterns[inx].prob0) / summ;
        //  console.log(currDiff + " / " + d.toString() + " choose pattern with diff = " + this.patterns[inx].diff.toString() + " with p = " + ppp.toString());
        this.debugArray.push({pid: inx, diff: this.patterns[inx].diff, start: d, prob: ppp, probDiff: choosenDiffProb});
        d += this.patterns[inx].mons.length;

        //this.patterns[j] => choosen pattern

        /*   for (var j = 0; j < this.patterns.length; ++j) {
               if (this.patterns[j].diff == 7)
               console;
               var p = (1 / (Math.abs(this.patterns[j].diff - currDiff) + 1)) * this.patterns[j].prob;
               p = Math.pow(p, 1.7);
               if (j > 0) {
                   this.patterns[j].prob1 = this.patterns[j - 1].prob1 + p;
                   this.patterns[j].prob0 = this.patterns[j - 1].prob1;
               } else {
                   this.patterns[j].prob1 = p;
                   this.patterns[j].prob0 = 0;
               }
               summ += p;
           }

           var r = Math.random() * summ;
           for (var j = 0; j < this.patterns.length; ++j) {
               if (r > this.patterns[j].prob0 && r <= this.patterns[j].prob1) break;
           }

         */
    }

    this.currentPattern = this.debugArray[0];

    return s;
}

MM.prototype.spawnObstacle = function (clip, offsY, innerOffs, dw) {
    var m = new CObstacle(SCR_WIDTH + 240, 450 + 2 * offsY, clip, false);
    m.maxHp = 100000000;
    m.hp = m.maxHp;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;

    m.gfx.anchor.y = 0.5 + offsY / (m.gfx.height / m.gfx.scale.y);

    m.radius = (m.gfx.width / 2 - 20 / 2) * 0.94;
    if (dw)
        m.radius += dw;
    m.offsY = -innerOffs;
    m.colGroup = 0;
    m.allowTrackSpeed = true;
    this.lastSpawnSimple = (new Date()).getTime();
    this.simpleMonsterDelay = Math.random() * 1000 + 2000;
}

MM.prototype.spawnCoin = function (height) {
    //if (!height)
    height = 428;
    //  for (var i = 0; i < 5; ++i) {
    var c = new CCoin(SCR_WIDTH + 240, height, 1);

    c.vy = 0;
    c.gravityEnabled = false;
    //}
}


MM.prototype.spawnBarrel = function (clip, offsY, innerOffs) {
    var m = new CBarrel(SCR_WIDTH + 240, 450 + 2 * offsY, clip, true);
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.maxHp = 50;
    m.hp = m.maxHp;
    m.gfx.anchor.y = 0.5 + offsY / (m.gfx.height / m.gfx.scale.y);
    m.dmgExpl = 250;
    m.dmg = 1;
    m.radius = ((m.gfx.width) / 2) + 12;
    m.offsY = -innerOffs;
    m.allowTrackSpeed = true;
//    m.colGroup = 0;
}


MM.prototype.spawnCar = function (clip, offsY, innerOffs) {
    var clip = getRand(this.carClips);

    var m = new CObstacle(SCR_WIDTH + 240, 450 + 2 * offsY, clip, false);
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.maxHp = 111180;
    m.hp = m.maxHp;
    m.gfx.anchor.y = 0.5 + offsY / (m.gfx.height / m.gfx.scale.y);

    m.radius = ((m.gfx.width - 50) / 2) * 0.94;
    m.gfx.scale.x = 0.7;
    m.gfx.scale.y = 0.7;
    m.offsY = -innerOffs;
    m.allowTrackSpeed = true;
    m.colGroup = 0;
}

MM.prototype.spawnDrone = function (xp) {
    var str = "dron";
    var m = new CDrone(SCR_WIDTH + 100, 80, str);
    m.gfx.anchor.x = 0.5;
    m.vx = -1;
    m.allowTrackSpeed = false;
    m.gravityEnabled = false;
    new TweenMax(m, 1, {y: m.y + 80, ease: Sine.easeInOut, yoyo: true, repeat: 10});
    m.maxHp = 190;
    m.hp = m.maxHp;
    m.barOffsetX = 10;
    m.xp = 15 + LauncherBG.inst.distance * this.distXP;
}


MM.prototype.spawnBoosterDrone = function()
{
    var str = "booster dron";
    var m = new CBoosterDrone(SCR_WIDTH + 100, 80, str);
    m.gfx.anchor.x = 0.5;
    m.vx = -1;
    m.allowTrackSpeed = false;
    m.gravityEnabled = false;
    new TweenMax(m, 1, {y: m.y + 80, ease: Sine.easeInOut, yoyo: true, repeat: 15});
    m.maxHp = 80;
    m.hp = m.maxHp;
    m.barOffsetX = 10;
    m.xp = 5 + LauncherBG.inst.distance * this.distXP;
}

MM.prototype.spawnDrone2 = function (dh) {
    var str = "dron2";
    var m = new CDrone2(SCR_WIDTH + 100, dh, str);
    m.gfx.anchor.x = 0.5;
    m.vx = -4;
    m.allowTrackSpeed = false;
    m.gravityEnabled = false;
    new TweenMax(m, 1, {y: m.y + 30, ease: Sine.easeInOut, yoyo: true, repeat: 10});
    new TweenMax(m, 0.6, {vx: -12, ease: Sine.easeInOut, yoyo:true, repeat: 5});
    m.maxHp = 100;
    m.hp = m.maxHp;
    m.barOffsetX = 10;
    m.xp = 10 + LauncherBG.inst.distance * this.distXP;
}




MM.prototype.spawnBonusGnome = function (xp) {
    var str = "enemy1_1";
    var m = new BonusMonGnome(SCR_WIDTH + 100, 150, str);
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    //new TweenMax(m, 25, {x: -100, onComplete: function(){m.destroy();}});
    m.maxHp = 400;
    m.hp = m.maxHp;
    m.xp = xp + LauncherBG.inst.distance * this.distXP;
}


MM.prototype.spawnJumpMon = function () {
    var str = "enemy1_2";
    var m = new JumpMon(SCR_WIDTH + 120, this.monY-200, str);
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.av = 0.1*Math.random();
    m.longJump(1, 0.25, -1, -3, 1.2);
    m.maxHp = 170;
    m.hp = m.maxHp;
    m.xp = 6 + LauncherBG.inst.distance * this.distXP;
}

MM.prototype.spawnFatty = function () {
    var str = "enemy1";
    var m = new CMonster(SCR_WIDTH + 100, this.monY, str);
    m.rollLeave = true;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    //0.2*(Math.random() - 0.5)
    m.longJump(1, 0.13, -4, -13, 1.2);
    new TweenMax(m, 1.2, {rotation: -Math.PI / 15});
    m.maxHp = 100;
    m.hp = m.maxHp;
    m.xp = 5 + LauncherBG.inst.distance * this.distXP;
}

MM.prototype.spawnFatty2 = function (xp) {
    var str = "enemy1_1";
    var m = new CMonster(SCR_WIDTH + 100, this.monY, str);
    m.rollLeave = true;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.longJump(1, 0.2, -6, -15, 1.2);
    new TweenMax(m, 1.2, {rotation: -Math.PI / 15});
    m.maxHp = 100;
    m.hp = m.maxHp;
    m.xp = 6 + LauncherBG.inst.distance * this.distXP;
}


MM.prototype.spawnGopnick = function (xp) {
    var str = "enemy3";
    var m = new CMonster(SCR_WIDTH + 100, this.monY, str);
    m.rollLeave = true;
    m.jumpTimeCoef = 0.7;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.maxHp = 60;
    m.hp = m.maxHp;
    new TweenMax(m, 1.2, {rotation: -Math.PI / 15});
    m.longJump(1, 0.2, -5 - Math.random() * 2, -16 - Math.random() * 2, 1.1, 0, 38);
    m.xp = 7 + LauncherBG.inst.distance * this.distXP;
}

MM.prototype.spawnGopnick2 = function (xp) {
    var str = "enemy3_3";
    var m = new CMonster(SCR_WIDTH + 100, this.monY, str);
    m.rollLeave = true;
    m.jumpTimeCoef = 0.6;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.maxHp = 80;
    m.hp = m.maxHp;
    new TweenMax(m, 1.2, {rotation: -Math.PI / 15})
    m.longJump(1, 0.2, -8 - Math.random() * 2, -21 - Math.random() * 2, 0.8, 0, 30);
    m.xp = 8 + LauncherBG.inst.distance * this.distXP;
}

MM.prototype.spawnRandomMonster = function (xp) {
    var r = getRand(this.simpleRandomSpawn);
    r.call(this);
}

MM.prototype.spawnSimpleMonster = function (xp) {
    var str = "enemy2";
    if (Math.random() > 0.5) str = "enemy2_2";
    var m = new CMonster(SCR_WIDTH + 100, this.monY, str);
    m.rollLeave = true;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    new TweenMax(m, 1.2, {rotation: -Math.PI / 15});
    //diff = 1
//gravPower = 0.14
//slowSpeed = -6
//fastSpeed = -12
//easeTime = 1.2
    m.longJump(1, 0.14, -6, -12, 1.2 - Math.random() * 0.15);
    m.xp = 4 + LauncherBG.inst.distance * this.distXP;
}

MM.prototype.doStep = function () {
    var s = this.monsterQueue.charAt(0);
    this.monsterQueue = this.monsterQueue.slice(1);

    /*var b = this.bonusQueue.charAt(0);
     this.bonusQueue= this.bonusQueue.slice(1);
     if (b == "c") {
     var height = parseInt(this.bonusQueue.charAt(0));
     this.spawnCoin(height);
     }
     this.bonusQueue= this.bonusQueue.slice(1);
     */
    if (!this.totalD) this.totalD = 0;
    this.totalD++;
    for (var i = 0; i < this.debugArray.length; ++i)
    {
        if (this.debugArray[i].start == MM.totalD)
        {
            this.currentPattern = this.debugArray[i];
        }
    }

    this.diff = LauncherBG.inst.distance / 1000;
    if (s == "s") this.spawnSimpleMonster(5);
    if (s == "f") this.spawnFatty();
    if (s == "F") this.spawnFatty2();
    if (s == "G") this.spawnGopnick2();
    if (s == "g") this.spawnGopnick();
    if (s == "c") this.spawnCar("car", 40, 0);
    if (s == "l") this.spawnObstacle("luke", 40, 10);
    if (s == "z") this.spawnObstacle("conus", 20, 0, -9);
    if (s == "j") this.spawnBonusGnome(5);
    if (s == "d") this.spawnDrone();
    if (s == "h") this.spawnDrone2(120);
    if (s == "H") this.spawnDrone2(330);
    if (s == "b") this.spawnBarrel("barrel", 20, 0, -5);
    if (s == "?") this.spawnRandomMonster();
    if (s == "0") this.spawnCoin(440);
    if (s == "o") this.spawnJumpMon();
    if (s == "+") this.spawnBoosterDrone();

    var d = 5000;

    if (this.monsterQueue.length == 0) {
        this.noMonsLeft = true;
    }
}

MM.prototype.process = function () {

    var d = PauseTimer.getTimer();
    var dd = 4.5;
    var st = Math.floor(LauncherBG.inst.distance / dd);

    if (Math.floor(LauncherBG.inst.distance) % 250 == 0 && Math.random() < 0.5 && d - this.lastSpawnPlane > 60000) {
        this.spawnPlane();
        this.lastSpawnPlane = d;
    }

    if (st != this.prevS) {
        if (!this.currentBoss && this.bosses.length > 0 && (this.prevS * dd - this.bossDistance < this.bosses[0].dist && LauncherBG.inst.distance - this.bossDistance >= this.bosses[0].dist)) {
            var b = this.bosses.shift();
            this.currentBoss = new b.cls(SCR_WIDTH + 200, 500, "imgtps/boss1.json");
            this.currentBoss.showUpAnimation();
        } else {
            if (this.currentBoss) {
                this.bossDistance += dd;
            }
        }

        if (!this.currentBoss)
            this.doStep();
    }

    this.prevS = st;
};/**
 * Created by KURWINDALLAS on 10.02.2015.
 */
/**
 * Created by KURWINDALLAS on 08.02.2015.
 */
extend(BonusMonGnome, CMonster, true);

function BonusMonGnome(in_x,in_y,animname,cr_bar){
   CMonster.apply(this,[in_x,in_y,null, cr_bar]);
    this.gfx = new PIXI.Spine("imgtps/bird.json");
    this.gfx.state.setAnimationByName(0, "animation", true);
    //  g.skeleton.setSkinByName('perded');
  // this.offsetX = 50;
    //this.gfx.pivot.x = -50;
    this.gfx.scale.x = 0.48;
    this.gfx.scale.y = 0.48;
    this.updateGraphics();
    LauncherBG.inst.ol.addChild(this.gfx);
    this.xp = 20;
    this.lastDrop = 0;
    this.allowTrackSpeed = false;
    var t = this;
    new TweenMax(this, 18, {vx: -40, ease: Circ.easeIn, onComplete: function(){t.destroy();}});
    //new TweenMax(this, 0.9, {x: -100, repeat: -1, yoyo: true});
}

BonusMonGnome.prototype.collide = function (obj2)
{

}

BonusMonGnome.prototype.dealDamage = function(dmg)
{
    CMonster.prototype.dealDamage.call(this, dmg);
    if (PauseTimer.getTimer() - this.lastDrop > 200) {
        this.lastDrop = PauseTimer.getTimer();
        var am = 3;
        if (gameStage.player.doubleBooster) am *= gameStage.player.doubleBooster;
        {
            CCoin.spawnCoin(this.x, this.y, am);
        }
    }
};
/**
 * Created by KURWINDALLAS on 24.03.2015.
 */

extend(CBoosterDrone, CMonster, true);

function CBoosterDrone(in_x,in_y,animname,cr_bar){
    this.bdy = 67;
    this.bdx = 2;
    this.boosterBox = new CBoosterBox(this.x, this.y + this.bdy);
    this.boosterBox.allowTrackSpeed = false;
    this.boosterBox.gravityEnabled = false;
    this.boosterBox.drone = this;
    CMonster.apply(this,[in_x,in_y,animname, false]);
    this.metall = true;
    var t = this;
  //  new TweenMax.delayedCall(1, function(){t.spawnGrenade();});
}

CBoosterDrone.prototype.collide = function (obj2)
{

}

CBoosterDrone.prototype.flyAway = function()
{
    TweenMax.killTweensOf(this);
    this.vy = -3;
    this.vx *= 4.4;
}

CBoosterDrone.prototype.dealDamage = function()
{
    if (!this.spawned) {
        this.boosterBox.gravityEnabled = true;
        this.boosterBox.allowTrackSpeed = true;
        this.boosterBox.vx = 6.5;
        this.boosterBox.vy = -10;
        this.boosterBox.drone = null;
        this.boosterBox = null;
        this.spawned = true;
        this.flyAway();
    }
    CLiveObj.prototype.dealDamage.call(this);
}

/*
CDrone.prototype.spawnGrenade = function()
{
    if (this.doRemove) return;


    var b = new CGrenade(this.x, this.y + 60);
    b.owner = this;
    b.life = 10;
    b.dmg = 40;
    b.rotation = Math.PI / 2;
    b.av = 0.2;
    b.vx = -3;
    b.gfx.tint = 0xff0000;
    b.gravityEnabled = true;
    b.colGroup = CG_GROUND;
    b.colMask = CG_PLAYER;

    var t = this;
    new TweenMax.delayedCall(1, function(){t.spawnGrenade();});
}*/

CBoosterDrone.prototype.process = function()
{
    if (this.boosterBox) {
        this.boosterBox.x = this.x + this.bdx;
        this.boosterBox.y = this.y + this.bdy;
    }
    CMonster.prototype.process.call(this);
};
/**
 * Created by KURWINDALLAS on 23.11.2014.
 */
extend(CCoin, CObj, true);

function CCoin(in_x,in_y,amount) {
    CObj.apply(this, [in_x, in_y, null, null]);
    this.gravityEnabled = true;
    this.colGroup = 1;
    this.colMask = CG_PLAYER;
    this.gravPower = 0.7;
    this.radius = 15;
    this.gfx = CObj.createMovieClip("coin");
    this.gfx.anchor.x = 0.5;
    this.gfx.anchor.y = 0.5;
    this.gfx.scale.x = 0.7;
    this.gfx.scale.y = 0.7;
    this.gfx.animationSpeed = 0.25;
    this.gfx.play();

    LauncherBG.inst.ol.addChild(this.gfx);
    //SM.inst.ol.addChild(this.gfx);

    this.updateGraphics();
    this.amount = amount;

    this.allowTrackSpeed = true;

    if (!CCoin.coins) CCoin.coins = [];
    CCoin.coins.push(this);
}


CCoin.spawnCoin = function(x, y, a)
{
    var c = new CCoin(x, y, a);
    c.allowTrackSpeed = true;
    c.vx = 6.5 + (Math.random() - 0.5)*1;
    c.vy = -10 - 12*(Math.random());

    return c;
}

CCoin.prototype.collide = function(obj2)
{
    if (this.isCollected) return;

    this.isCollected = true;
    PlayerData.inst.score += this.amount;
    gameStage.updateScore();

    this.gravityEnabled = false;
    this.vx = 0;
    this.vy = 0;
    this.allowTrackSpeed = false;
    var coinGfx = pool.Pop("coinCollect");
    ZSound.Play("coin")
    if (!coinGfx)
        this.destroy(); else
    {
        rp(coinGfx);
        rp(this.gfx);

        coinGfx.loop = false;
        coinGfx.gotoAndStop(0);
        coinGfx.gotoAndPlay(0);
        this.gfx = coinGfx;
        this.updateGraphics();

        SM.inst.fg.addChild(coinGfx);
        var coin = this;
        coinGfx.animationSpeed = 0.5;
        this.updateGraphics();
        var obj = this;
        obj.return2Pool = obj.gfx;
        //obj.rotation = Math.random()*Math.PI*2;
        obj.lifeTime = 800;
        obj.gfx.onComplete = function () {obj.destroy();}

    }
  //  Coin.generateTextParticle(this);
  //  ZSound.Play("collectMoney")
//



    //new TweenMax(this.gfx, 0.3, {alpha: 0, onComplete: this.destroy, scaleX: 10, scaleY: 10});
    //new TweenMax(this.gfx.scale, 0.3, {x: this.gfx.scale.x*1.3, y: this.gfx.scale.y*1.3});
    //this.destroy();
};/**
 * Created by KURWINDALLAS on 05.12.2014.
 */

extend(CScrollbar, CObj, true);

//pos = 0...ph
Object.defineProperty(CScrollbar.prototype, 'pos', {
    get: function () {
        return this._pos;
    },
    set: function (value) {

        if (value < 0)//this.toucher.height / 2)
            value = 0;//this.toucher.height / 2;

        if (value > this.ph - this.toucher.height / 2)
            value = this.ph - this.toucher.height / 2;
        this._pos = value;

        var touchervalue = value;

        this.toucher.y = this.toucher.height / 2 + (this.ph0 - this.toucher.height)*( touchervalue/(this.ph)) - this.ph0/2;// - this.ph0*(value/this.ph);
       /* if (this.toucher.y < this.toucher.height / 2 - this.ph0/2)
            this.toucher.y = this.toucher.height / 2 - this.ph0/2;
*/
        this.container.y = -this.ph0/2 - (value)*this.posScale;
    }
});



CScrollbar.prototype.updateHeight = function()
{
    this.ph = this.container.height;
}


CScrollbar.prototype.clear = function()
{
    for (var i = 0; i < this.container.children.length; ++i)
    {
        if (this.container.children[i].destroy)
        {
            this.container.children[i].destroy();

        } else
        {
            this.container.removeChild(this.container.children[i]);
            i--;
        }
    }
}

CScrollbar.prototype.destroy = function()
{
    this.gfx.touchstart= null;
    this.gfx.touchend = null;
    this.gfx.parentObj = null;
    this.toucher.mousedown = null;
    this.toucher.mouseup = null;
    this.toucher.mousemove = null;
    this.toucher.mouseupoutside = null;
    this.toucher.scrollbar = null;
    this.toucher = null;
    this.bar.mousedown = null;
    this.bar.scrollbar = null;
    this.bar = null;
    this.container = null;
    this.sbMask = null;

    CObj.prototype.destroy.call(this);
}


CScrollbar.prototype.updatePosFromEvent = function(y)
{
    var cy = y / SCR_SCALE;
    var th = this.toucher.height;
    var startBarLine =  th + this.y - (this.ph0 / 2);
    cy -= startBarLine;
    cy = cy / (this.ph0 - 2*th);//0..1
  //  this.toucher.pressed = false;
    this.pos =  cy*(this.ph);
    this.toucher.pressed = true;
}


CScrollbar.prototype.touchStart = function(e)
{
    console.log("debug");
}


CScrollbar.prototype.onWheel = function(e, delta, dx, dy)
{
    e.stopPropagation();
    e.stopImmediatePropagation();
    this.pos -= delta*25;
}

function CScrollbar(in_x,in_y,textname,ww, hh, clipbg, clipscrollline, clipscrolltoucher, dw) {

    var bgpanel = "shop back.png";
    if (clipbg) bgpanel= clipbg;

    CObj.apply(this, [in_x, in_y, null, null]);

    this.gfx = new PIXI.DisplayObjectContainer();
    this.gui = true;
    this.pw = ww;
    this.ph = hh;
    this.ph0 = hh;
    if (!dw) dw = 0;
//    this.gfx.width = this.pw;
 //   this.gfx.height = this.ph;

    //this.gfx.parent.removeChild(this.gfx);
    SM.inst.fg.addChildAt(this.gfx, 0);

    var sbTexName = "scroll line element.png";
    if (clipscrollline) sbTexName= clipscrollline;
    var sbToucher = "scroll.png";
    if (clipscrolltoucher) sbToucher= clipscrolltoucher;
    var scrWidth = 8;

    var obj = this;
    this.gfx.interactive = true;
    this.gfx.mouseover = function()
    {
        obj.mover = true;
    }
    this.gfx.mouseout = function()
    {
        obj.mover = false;
    }

    if (MOBILE) {
        this.gfx.touchmove = function (e) {
            console.log("ENIS");
            if (!obj.prevSwipeX) obj.prevSwipeX = e.global.x;
            if (!obj.prevSwipeY) obj.prevSwipeY = e.global.y;
            var d = (e.global.y - obj.prevSwipeY);
            //console.log(d);
            obj.pos -= d;
            obj.prevSwipeX = e.global.x;
            obj.prevSwipeY = e.global.y;
        }

        this.gfx.touchstart = function (e) {
            console.log("start");
        }

        this.gfx.touchend = function (e) {
            console.log("NIS");
            obj.prevSwipeX = null;
            obj.prevSwipeY = null;
        }
    }
    this.bg = new PIXI.Sprite(PIXI.Texture.fromFrame(bgpanel));
    this.bg.width = this.pw + dw;
    this.bg.height = this.ph + dw;
    this.bg.anchor.x = 0.5;
    this.bg.anchor.y = 0.5;
    this.gfx.addChild(this.bg);
    this.gfx.parentObj = this;
    this.updateGraphics();
    this.toucher = new PIXI.Sprite(PIXI.Texture.fromFrame(sbToucher));
    this.toucher.width = scrWidth;
    this.toucher.anchor.x = 0.5;
    this.toucher.anchor.y = 0.5;
    this.toucher.x = this.pw / 2 - scrWidth / 2;

    this.toucher.interactive = true;
    this.toucher.scrollbar = this;


      //  this.gfx.touchstart = this.touchStart;


    var tchr = this.toucher;

    this.toucher.mousedown = function(a)
    {
    //    a.preventDefault();
        console.log("TOUCHER DOWN");
        tchr.pressed = true;
    };

    this.toucher.mouseupoutside = this.toucher.mouseup = function(a)
    {
        console.log("MOUSE UP");
        //a.preventDefault();
        tchr.pressed = false;
    };


    this.toucher.mousemove = function(a)
    {
    //    a.preventDefault();
        if (tchr.pressed && this.scrollbar)
        {
            this.scrollbar.updatePosFromEvent(a.global.y);
        }
    }

    this.bar = new PIXI.Sprite(PIXI.Texture.fromFrame(sbTexName));
    this.bar.width = scrWidth;
    this.bar.height = this.ph;
    this.bar.anchor.x = 0.5;
    this.bar.anchor.y = 0.5;
    this.bar.x = this.pw / 2 - scrWidth / 2;
    this.bar.interactive = true;
    this.bar.scrollbar = this;

    this.bar.mouseup = this.bar.mouseupoutside = this.toucher.mouseup;

    this.bar.mousedown = function(a)
    {
        console.log("MOUSE DOWN");
        var t = this.scrollbar;
        setTimeout(
        function(){t.updatePosFromEvent(a.global.y);}, 20);
    }

    this.container = new PIXI.DisplayObjectContainer();
    this.container.x = -this.pw/2;
    this.container.y = -this.ph/2;
   this.sbMask =  new PIXI.Graphics();
    this.sbMask.beginFill();
    this.sbMask.drawRect(-this.pw/2, -this.ph/2, this.pw, this.ph);
    this.sbMask.endFill();
    this.container.mask = this.sbMask;
    this.gfx.addChild(this.sbMask);
    this.gfx.addChild(this.container);
    this.gfx.addChild(this.bar);
    this.gfx.addChild(this.toucher);
    this.pos =0;
    this.posScale = 1;
    this.x = in_x;
    this.y = in_y;
};/**
 * Created by KURWINDALLAS on 25.12.2014.
 */
/**
 * Created by KURWINDALLAS on 10.12.2014.
 */
extend(CircleBar, CObj, true);

function CircleBar(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
}

CircleBar.generateProperty('pos', {
    defaultValue: 1,
    get: function () {
        return this._pos;
    },
    set: function (value) {

        if (value < 0)
            value = 0;

        if (value > 1)
            value = 1;
        this._pos = value;

        this.mask.clear();
        var r = this.radius;
        var angle = Math.PI * 2 * value;
        var cx = Math.cos(angle - Math.PI / 2)*r;
        var cy = Math.sin(angle - Math.PI / 2)*r;

        var points = [0, -r, 0,0];

        if (angle < Math.PI / 2)
        {
            points.push(cx, cy);
        } else
        if (angle < Math.PI)
        {
            points.push(cx, cy);
            points.push(r, 0);
        } else
        if (angle < 3 * Math.PI / 2)
        {
            points.push(cx, cy);
            points.push(0, r);
            points.push(r, 0);
        } else
        {
            points.push(cx, cy);
            points.push(-r, 0);
            points.push(0, r);
            points.push(r, 0);
        }

        this.mask.beginFill(0xffffffff);
        this.mask.drawPolygon(points);
        this.mask.endFill();
    }
});


CircleBar.prototype.destroy = function()
{
    this.ico = null;
    this.progressbg = null;
    this.progressfore = null;
    CObj.prototype.destroy.call(this);
}


CircleBar.prototype.process= function()
{
    CObj.prototype.process.call(this);
}

CircleBar.prototype.init = function(cover, barup, bardown)
{
    this.gfx = new PIXI.DisplayObjectContainer();
    this.ico = crsp(cover);


    this.progressbg = crsp(bardown);
    this.progressfore = crsp(barup);
    this.mask = new PIXI.Graphics();

    this.gfx.addChild(this.ico);
    this.radius = this.gfx.width * 1.5;
    this.gfx.addChild(this.progressbg);
    this.gfx.addChild(this.progressfore);
    this.gfx.addChild(this.mask);
//    this.gfx.anchor.x = 0.5;
 //   this.gfx.anchor.y = 0.5;
    this.progressfore.mask = this.mask;
    this.pos = 0;
    this.updateGraphics();
};/**
 * Created by KURWINDALLAS on 10.12.2014.
 */
extend(CEActionGUI, CircleBar, true);

function CEActionGUI(in_x,in_y,textname,in_body){
    CircleBar.apply(this,[in_x,in_y,textname,in_body]);
    this.gui = true;
}

CEActionGUI.prototype.destroy = function()
{
    //this.icoevent = null;
    this.event = null;
    this.eventpl = null;
    CircleBar.prototype.destroy.call(this);
}


CEActionGUI.prototype.process= function()
{
    this.updateRecharge();
    CircleBar.prototype.process.call(this);
}

CEActionGUI.prototype.startAction = function()
{
    if (this.acting) return;
    this.acting = true;

    this.progressbg.visible = true;
    this.progressfore.visible = true;
    this.pos = 0;
    this.startTime = window.time;
    this.execTime = this.event.exectime*1000;
    //new TweenMax(this, /*this.event.exectime*/0.5, {pos: 1, onComplete: this.endAction, onCompleteParams: [this]});
}

CEActionGUI.prototype.takeReward = function()
{
    this.progressbg.visible = false;
    this.progressfore.visible = false;

    this.eventpl.reward_ready = false;
    this.eventpl.lastused = sqlDate(datetime());
    if (this.event.money_gain)
        PlayerData.inst.playerItem.money += this.event.money_gain;

    if (this.event.crystal_gain)
        PlayerData.inst.playerItem.crystals += this.event.crystal_gain;

    if (this.event.xp_gain)
        PlayerData.inst.gainExp(this.event.xp_gain);


    incMetric("USED EVENT " + this.event.name);

    if (this.event.name == "event1")
    {
        PlayerData.inst.progressAch("Gold medal 6", 1 / 10, false);
    }
    this.btnReward.destroy();
    this.btnReward = null;
    PlayerData.inst.savePlayerEvents(this.eventpl);
    PlayerData.inst.savePlayerData();
    shopStage.updateStatsPanel();

    this.acting = false;
}

CEActionGUI.prototype.endAction = function()
{
    this.progressbg.visible = false;
    this.progressfore.visible = false;
    this.acting = false;
    this.eventpl.reward_ready = true;
    PlayerData.inst.savePlayerEvents(this.eventpl);
    this.addRewardButton();
}


CEActionGUI.prototype.addRewardButton = function() {
    this.btnReward = new CButton(0, -3, "take reward");
    this.btnReward.fontSize = 17;
    this.btnReward.gfx.scale.x = 1.1;
    this.btnReward.gfx.scale.y = 1.1;
    rp(this.btnReward.gfx);
    this.btnReward.hover = false;
    var p = this;
    this.btnReward.click = function () {
        p.takeReward();
    };
    this.btnReward.init();
    this.btnReward.gfx.interactive = true;
    this.gfx.addChild(this.btnReward.gfx);
}

CEActionGUI.prototype.updateRecharge= function()
{
    if (!this.eventpl) return;
    if (!this.eventpl.lastused) timeRes = {d: -1};
    else {
        var timeRes = dateDiff(new Date(sqlToJsDate(this.eventpl.lastused)), this.event.delay_min);
    }

    this.timeleft.tint = 0x333333;
    if (timeRes.d < 0 && this.event.reqlvl <= PlayerData.inst.playerItem.lvl) {
        str = "";
        this.ico.interactive = true;
       // this.ico.tint = 0xFFFFFF;
        this.ready = true;
    }else {
        var str;
        this.ico.interactive = false;
        this.ico.alpha = 0.5;
        if (this.event.reqlvl > PlayerData.inst.playerItem.lvl) {
            str = "Требуется " + this.event.reqlvl.toString() + " ур.";
            this.timeleft.tint = 0xff0000;
        }else {
            str = "Доступно через " + timeRes.timeString;
            this.timeleft.tint = 0xff0000;
        }
        this.ready = false;
    }
    this.timeleft.text = str;
    this.timeleft.updateText();
}

CEActionGUI.prototype.init = function(pledevent, event, bg, upper, lower)
{
    CircleBar.prototype.init.call(this, bg, upper, lower);

    this.eventpl = pledevent;
    this.event = event;

    var gain = 0;
    var gainbg = "";
    if (this.event.xp_gain > 0)
    {
        gain = this.event.xp_gain;
        gainbg = "price xp.png";
    }
    if (this.event.money_gain > 0)
    {
        gain = this.event.money_gain;
        gainbg = "price coin.png";
    }
    if (this.event.crystal_gain > 0)
    {
        gain = this.event.crystal_gain;
        gainbg = "price star.png";
    }

    var d = 30;
    var gainbgsprite = new PIXI.Sprite(PIXI.Texture.fromFrame(gainbg));
    gainbgsprite.anchor.x = 0.5;
    gainbgsprite.anchor.y = 0.5;
    gainbgsprite.x = 170 + d;
    gainbgsprite.y = 12 - 14;
    this.gfx.addChild(gainbgsprite);

    this.rewText = CTextField.createTextField({tint: "0x333333", text: "Награда", fontSize: 20, align: "center"});
    this.rewText.x = 35 + d;
    this.rewText.y = -12;
    this.gfx.addChild(this.rewText);

    this.timeleft = CTextField.createTextField({tint: "0x333333", text: "", fontSize: 17, align: "center"});
    this.timeleft.x = 50 + d;
    this.timeleft.y = 27;
    this.gfx.addChild(this.timeleft);

    var tf = CTextField.createTextField({tint: "0x333333", text: gain.toString(), fontSize: 20, align: "center"});
    tf.x = 170 + d;
    tf.y = 3 -16;
    this.gfx.addChild(tf);

    var edeventgui = this;
   // this.gfx.interactive = true;
    var gf = this.ico;
    gf.interactive = true;
    var bsX = gf.scale.x;
    var bsY = gf.scale.y;

    gf.mouseover = function()
    {
        new TweenMax(gf.scale, 0.6, {y: bsY+0.05, ease: Elastic.easeOut} );
        new TweenMax(gf.scale, 0.4, {x: bsX+0.05, ease: Elastic.easeOut} );
    }

    gf.mouseout = function()
    {
        new TweenMax(gf.scale, 0.6, {y: bsY, ease: Elastic.easeOut} );
        new TweenMax(gf.scale, 0.4, {x: bsX, ease: Elastic.easeOut} );
    }

    onc(gf, function()
    {
        if (edeventgui.ready && (pledevent.reward_ready == null || pledevent.reward_ready == false || pledevent.reward_ready == ""))
        {
            edeventgui.startAction();
        }
    });

    this.progressbg.interactive = true;
    onc(this.progressbg, this.onclick)

    if (this.eventpl.lastused == null)
    {
        this.pos = 1;
    }

    var tf = CTextField.createTextField({fontFamily: "dedgamedesc", tint: "0x1111111", text: event.desc, fontSize: 20, align: "center"});
    tf.x = 50;
    tf.y = -55;
    this.gfx.addChild(tf);


    if (this.eventpl.reward_ready == true || this.eventpl.reward_ready == "true")
        this.addRewardButton();

    this.progressbg.visible = false;
    this.progressfore.visible = false;


};/**
 * Created by KURWINDALLAS on 22.11.2014.
 */
CWeapon = function(_id, _name, _desc,  __params, __gfx, _upgrades) {
    this.lastShot = 0;
    this.backupStats = __params;
    this.resetParams();
    this.clipGfx = __gfx;
    this.sReload = 1;
    this.sFire = 2;
    this.visualWidth = __params.visualWidth;
    this.dw = __params.dw;
    this.speed = __params.speed;
    this.state = this.sFire;
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.unlocked = false;
    this.upgrades = _upgrades;
    this.sound = __params.sound;
    this.recoilValue = 0;
    this.acc = this.backupStats.acc;
    if (!CWeapon.list) CWeapon.objects = [];
    CWeapon.objects.push(this);
};

CWeapon.prototype.mouseUp = function() {

}

CWeapon.prototype.resetParams = function()
{
    this.ammo = this.backupStats.magcap;
    this.recoil = this.backupStats.recoil;
    this.delay= this.backupStats.delay;
    this.damage = this.backupStats.damage;
    this.magCapacity = this.backupStats.magcap;
    this.reloadTime = this.backupStats.reloadTime;
    this.life = this.backupStats.life;
    this.acc = this.backupStats.acc;
    this.recoilValue = 0;//this.backupStats.recoilValue;
}

CWeapon.prototype.process = function()
{
    this.recoilValue -= 0.25;
    if (this.recoilValue < 0) this.recoilValue = 0;

    this.acc -= this.backupStats.accIncrease;
    if (this.acc < this.backupStats.acc) this.acc = this.backupStats.acc;
}

CWeapon.prototype.shot = function()
{
    if (!this.canShot()) return false;
    if (this.state == this.sReload) return false;
    if (this.sound)
        ZSound.Play(this.sound);


    if (this.ammo < 0)
    {
        this.reload();
        return false;
    }
    this.lastShot = PauseTimer.getTimer();

    this.acc += this.backupStats.accRecoil;

    this.recoilValue += this.recoil;
    this.ammo --;
    if (!window.totalShots) window.totalShots = 0;
    window.totalShots ++;

    if (this.ammo == 0) this.reload();

    this.updateAmmo();
    return true;
}

CWeapon.prototype.canShot = function()
{
    var t = PauseTimer.getTimer();
    if (this.state == this.sReload) return false;

    if (t - this.lastShot >= this.delay) return true; else
    return false;
}

CWeapon.prototype.updateAmmo = function()
{
    gameStage.player.ammobar.text = this.ammo.toString();
}

CWeapon.prototype.reload = function()
{
    var wp = this;
    wp.state = this.sReload;
    gameStage.reloadBar.pos = 0;
    gameStage.reloadBar.gfx.visible = true;
    gameStage.ammoico.gfx.visible = false;
    new TweenMax(gameStage.reloadBar, this.reloadTime / 1000., {pos: 1});
    new TweenMax(this, this.reloadTime / 1000., {ammo: wp.magCapacity});
    TweenMax.delayedCall(this.reloadTime / 1000., function ()
  {
      if (!gameStage.player) return;
      gameStage.ammoico.gfx.visible = true;
      gameStage.reloadBar.gfx.visible = false;
      wp.state = wp.sFire;
      wp.ammo = wp.magCapacity;
      wp.updateAmmo();
  });
}


CWeapon.prototype.retrieveData = function()
{
    //retrieves data from server

}


CWeapon.prototype.applyUpgrades = function(upgrds)
{
    for (var i = 0; i < upgrds.length; ++i)
    {
        var upgr = upgrds[i];
        this[upgr.param] += upgr.value;
    }
};/**
 * Created by KURWINDALLAS on 22.11.2014.
 */
extend(CPistol, CWeapon, true);

function CPistol(_id, _name, _desc,  __params,__gfx, _upgrades)
{
    CWeapon.apply(this, [_id, _name, _desc,  __params,__gfx, _upgrades]);
}

CPistol.prototype.mouseUp = function() {
    this.lastShot -= this.delay*0.3;
    console.log("MUP");
}

CPistol.prototype.shot = function()
{
   var r = CWeapon.prototype.shot.call(this);
    if (!r) return;
    var fireAngle = gameStage.player.fireAngle + (superRand(6) - 0.5)*this.acc;
   var vx = Math.cos(fireAngle);
  var vy = Math.sin(fireAngle);

    var xx =
        gameStage.player.firePointX;
    var yy = gameStage.player.firePointY - 14;
    var fx = crsp("fxblink.png");
    fx.scale.x = 1.3;
    fx.scale.y = 1.3;
    fx.x = xx + vx * 65;
    fx.y = yy + vy*65;
    fx.rotation = fireAngle;
    fx.blendMode = PIXI.blendModes.ADD;
    SM.inst.fg.addChild(fx);

    TweenMax.delayedCall(0.03, function (){fx.parent.removeChild(fx);});
    if (Math.abs(gameStage.player.y - gameStage.player.baseY) < 50)
    gameStage.player.vx = -0.5;
    var b = new CBullet(xx, yy, null, null, this.visualWidth);
    b.life = this.life;
    b.dmg = this.damage;
    b.rotation = Math.PI / 2 + fireAngle;
    b.dw = this.dw;
    b.vx = vx*this.speed;
    b.vy = vy*this.speed;
    b.colGroup = CG_BULLET;
    b.colMask = CG_MONSTER;
  return r;
};/**
 * Created by KURWINDALLAS on 22.01.2015.
 */
extend(CQueueGun, CWeapon, true);

function CQueueGun(_id, _name, _desc,  __params,__gfx, _upgrades)
{
    CWeapon.apply(this, [_id, _name, _desc,  __params,__gfx, _upgrades]);
    this.queueLife = 0;
    this._sound = this.sound;
    this.sound = null;
  //  this.magCapacity = 10;
    this.canFireQueue = true;
}

CQueueGun.prototype.reload = function()
{
    this.canFireQueue = false;
    CWeapon.prototype.reload.call(this);
    this.queueLife = this.queue;
}

CQueueGun.prototype.process = function()
{
    CWeapon.prototype.process.call(this);

    var t = PauseTimer.getTimer();//new Date()).getTime();
    if (this.canFireQueue && this.queueLife > 0 &&  (this.state != this.sReload) && (t - this.lastShot >= this.queueDelay))
    {
        var d = this.delay;
        this.delay = this.queueDelay;
        this.shot(true);
        this.delay = d;
    }
}

CQueueGun.prototype.resetParams = function()
{
    CWeapon.prototype.resetParams.call(this);

    this.state = null;
    this.canFireQueue = true;
    this.queueLife =  0;
    this.queue = this.backupStats.queue;
    this.queueDelay = this.backupStats.queueDelay;
}

CQueueGun.prototype.shot = function(queueShot)
{
    var r = CWeapon.prototype.shot.call(this);
    if (!r) return;

    if (this.ammo > 0 && this._sound && (this.ammo + 1) % this.backupStats.queue == 0)
        ZSound.Play(this._sound);

    if (!queueShot) {
        this.canFireQueue = true;
        if (this.queueLife > 0) return; else
        if (this.queueLife == 0 && !queueShot)
            this.queueLife = this.queue;
    }

    this.queueLife--;

    var fireAngle = -this.recoilValue / 200 + gameStage.player.fireAngle + Math.random()*this.backupStats.acc;
    var vx = Math.cos(fireAngle);
    var vy = Math.sin(fireAngle);
    //
    //
    var xx =
        gameStage.player.firePointX;
    var yy = gameStage.player.firePointY - 14;
    var fx = crsp("fxblink.png");
    fx.scale.x = 1.3;
    fx.scale.y = 1.3;
    fx.x = xx + vx * 65;
    fx.y = yy + vy*65;
    fx.rotation = fireAngle;
    fx.blendMode = PIXI.blendModes.ADD;
    SM.inst.fg.addChild(fx);

    TweenMax.delayedCall(0.03, function (){fx.parent.removeChild(fx);});

    var b = new CBullet(xx, yy, null, null, this.visualWidth);
    b.life = this.life;
    b.dmg = this.damage;
    b.rotation = Math.PI / 2 + fireAngle;
    b.dw = this.dw;
    b.vx = vx*this.speed;
    b.vy = vy*this.speed;
    b.colGroup = CG_BULLET;
    b.colMask = CG_MONSTER;
    return r;
};/**
 * Created by KURWINDALLAS on 25.01.2015.
 */
extend(CLaser, CWeapon, true);

function CLaser(_id, _name, _desc,  __params,__gfx, _upgrades)
{
    CWeapon.apply(this, [_id, _name, _desc,  __params,__gfx, _upgrades]);

    this.laserClip = new PIXI.DisplayObjectContainer();
    this.lineClip = new PIXI.DisplayObjectContainer();
    this.particlesClip = new PIXI.DisplayObjectContainer();
    this.laserClip.addChild(this.particlesClip);
    this.laserClip.addChild(this.lineClip);
    SM.inst.fg.addChild(this.laserClip);
    //this.gfx.addChild(this.ropeClip);
    this.updateLaserLen(0);
    this.maxL = 0;
    this.lastPart = 0;
}

CLaser.prototype.updateLaserLen = function(l)
{
    while (this.lineClip.height < l)
    {
        var newSeg = new PIXI.Sprite(PIXI.Texture.fromFrame("laser.png"));
        newSeg.anchor.x = 0.5;
        newSeg.anchor.y = 0.5;
        newSeg.width = newSeg.width + Math.random()*0.18;
        newSeg.x = 0;//(Math.random() - 0.5)*1;
        this.lineClip.addChild(newSeg);
        newSeg.y = this.lineClip.height - 0.5;
        newSeg.blendMode = PIXI.blendModes.ADD;
    }

    while (this.lineClip.height > l + 10)
    {
        this.lineClip.removeChildAt(this.lineClip.children.length - 1);
    }
}

CLaser.prototype.process = function()
{
    CWeapon.prototype.process.call(this);

    var t = PauseTimer.getTimer();
    if (t - this.lastShot > this.delay)
    {
        this.firing = false;
    }

    if (this.firing)
    {
        var fireAngle = gameStage.player.fireAngle;
        var vx = Math.cos(fireAngle);
        var vy = Math.sin(fireAngle);

        var xx = gameStage.player.firePointX;
        var yy = gameStage.player.firePointY - 14;

        this.updateLaserLen(this.maxL);
        this.laserClip.rotation = fireAngle - Math.PI / 2;
        this.laserClip.x = xx;
        this.laserClip.y = yy;

        if (t - this.lastPart > 120)
        {
            this.lastPart = t;
            var part = crsp("laserparticle");
            part.y = 0;
            part.x = 0;
            part.blendMode = PIXI.blendModes.ADD;

            this.particlesClip.addChild(part);
        }

        var len = this.lineClip.children.length;
        for (var i = 0; i < len; ++i) {
            this.lineClip.children[i].scale.x = 1 + i / len;

            this.lineClip.children[i].x = 2.5*Math.cos(4*Math.PI * (i / len) + t/100);

        }
        for (var i = 0; i < this.particlesClip.children.length; ++i)
        {
            var scale = 1 - Math.abs(this.maxL / 2 - this.particlesClip.children[i].y) / (this.maxL / 2) ;
            if (scale < 0.3) scale = 0.3;
            this.particlesClip.children[i].scale.x = scale;
            this.particlesClip.children[i].scale.y = -scale;
            //this.particlesClip.children[i].x = 3*(Math.cos((this.particlesClip.children[i].y*2 + t) / 1000));
            var dy = 10 + 4*(Math.cos((t) / 800));
            this.particlesClip.children[i].y += dy;
            if (this.particlesClip.children[i].y > this.maxL)
            {
                this.particlesClip.removeChildAt(i);
                i--;
            }


        }

        //xy1 xy2 - line
        //xy3 - object
        var y2 = yy + vy*10000;
        var x2 = xx + vx*10000;



        if (CMonster.list)
        for (var i = 0; i < CMonster.list.length; ++i)
        {
            var deal = false;
            if (CMonster.list[i].hitTestCircles)
            {
                for (var j =0; j<CMonster.list[i].hitTestCircles.length; ++j)
                {
                    var circ = CMonster.list[i].hitTestCircles[j];
                    if (checkLineCircle(CMonster.list[i].x + circ.x, CMonster.list[i].y + circ.y, xx,yy, x2,y2, circ.r*circ.r))
                    {
                        deal = true;
                    }
                }
            }


            if (checkLineCircle(CMonster.list[i].x, CMonster.list[i].y, xx,yy, x2,y2, CMonster.list[i]._sqr))
            {
                deal = true;
            }

            if (deal)
                CMonster.list[i].dealDamage(this.damage / 60);

        }

        //COLLISION WITH CIRCLES
            //RENDER LASER
            //CHECK LASER
        this.laserClip.visible = true;
    } else this.laserClip.visible = false;
}


CLaser.prototype.shot = function()
{

    var r = CWeapon.prototype.shot.call(this);
    if (!r) return;
    if (!this.firing)
    {
        this.maxL = 0;
        new TweenMax(this, 0.6, {maxL: 1000});

     this.firing = true;
    }
    /*var fireAngle = -this.recoilValue / 200 + gameStage.player.fireAngle + Math.random()*this.backupStats.acc;
    var vx = Math.cos(fireAngle);
    var vy = Math.sin(fireAngle);

    var xx =
        gameStage.player.firePointX;
    var yy = gameStage.player.firePointY - 14;
    var fx = crsp("fxblink.png");
    fx.x = xx + vx * 50;
    fx.y = yy + vy*50;
    fx.rotation = fireAngle;
    fx.blendMode = PIXI.blendModes.ADD;
    SM.inst.fg.addChild(fx);

    TweenMax.delayedCall(0.03, function (){fx.parent.removeChild(fx);});

    var b = new CBullet(xx, yy, "bomb1");
    b.life = this.life;
    b.dmg = this.damage;
    b.rotation = Math.PI / 2 + fireAngle;
    b.vx = vx*40.5;
    b.vy = vy*40.5;
    b.colGroup = CG_BULLET;
    b.colMask = CG_MONSTER;
    return r;
    */
};



/*
CPlayer.prototype.shootRope = function(dx, dy)
{
    if (this.doRemove) return;
    if (this.joint) return;

    this.stopShoot();
    {
        var bod = new
            p2.Body(
            {
                mass: 1,
                fixedRotation: true
            });

        bod.motionState = p2.Body.DYNAMIC;
        var c = new p2.Rectangle(2,35);
        bod.addShape(c);

        var l = Math.sqrt(dx*dx + dy*dy);
        dx /= l;
        dy /= l;

        bod.x = this.x;
        bod.y = this.y-100;
        this.ropedx = dx;
        this.ropedy = dy;
        this.ropedist = 40;
        this.rope = new CObj(this.x, this.y, "", bod);

        this.rope.x = this.x + this.ropedist*this.ropedx;
        this.rope.y = this.y + this.ropedist*this.ropedy;

        this.rope.rotation = Math.PI / 2 + Math.atan2(dy, dx);
        CObj.setCG(this.rope.body, world.cgDYNAMIC, world.cgSTATIC);
        // CObj.setDefaultCG(this.rope.body);
        this.rope.sensor = true;
        // world.removeBody(this.rope.body);
        var p = this;


        this.rope.onContactBegin = function(b, ce)
        {
            if (p.doRemove || !p.rope) return;

            var nx = p.rope.x + 20*p.ropedx;
            var ny = p.rope.y + 20*p.ropedy;
            p.endropex = nx;
            p.endropey = ny;
            var a1 = [0,0];
            var a2 = [0,0];
            // p.body.toLocalFrame(a1, p.rope.body.position);
            b.toLocalFrame(a2, [nx,ny]);
            p.joint = new p2.DistanceConstraint(p.body, b, {
                localAnchorA: a1,
                localAnchorB: a2,
                maxForce: 4000, collideConnected: true, worldPivot: [p.rope.body.x, p.rope.body.y]});
            p.joint.setStiffness(500);
            p.joint.setRelaxation(2);
            world.addConstraint(p.joint);
            if (p.rope) {
                p.rope.destroy();
                p.rope = null;
            }
        };
        this.ropeClip = new PIXI.DisplayObjectContainer();
        SM.instance.ol.addChildAt(this.ropeClip, 4);
        //this.gfx.addChild(this.ropeClip);
        this.updateRopeLen(0);
        this.rope.onContactEnd = function(b, ce)
        {

        };
    }
}

CPlayer.prototype.stopShoot = function()
{
    if (this.rope) {
        this.rope.destroy();
        this.rope = null;
    }

    if (this.ropeClip && this.ropeClip.parent)
        this.ropeClip.parent.removeChild(this.ropeClip);

    this.ropeLen = undefined;
    if (this.joint)
    {
        world.removeConstraint(this.joint);
        this.joint = null;
    }
}



CPlayer.prototype.makeBomb = function()
{
    if (!this.joint) return;
    if (this.ropeLen > 80) return;

    var b = new CBomb(this.endropex, this.endropey, "bomb");
    b.gfx.scale.x = 0.8;
    b.gfx.scale.y = 0.8;
    var o = b.gfx.scale;
    new TweenMax(o, 0.15, {x: 1., y: 1., yoyo:true, repeat: 7});
    TweenMax.delayedCall(1., function(){b.explode();});
    this.canFire = false;
}

CPlayer.prototype.process = function()
{
    if (this.doRemove) return;

    if (this.y > gameStage.cameraDeathLine + SCR_HEIGHT)
    {
        gameStage.loseGame();
    }


    if (this.rope) {
        this.ropedist += 40.5;
        if  (this.ropedist > 1000) this.stopShoot();else {
            this.rope.x = this.x + this.ropedist * this.ropedx;
            this.rope.y = this.y + this.ropedist * this.ropedy;
            this.updateRopeLen(this.ropedist);
            var angle = Math.atan2(this.ropedy, this.ropedx);
        }
    }

    if (this.joint && this.joint.removed) this.stopShoot();

    if (this.joint)
    {


        this.joint.distance -= 5;
        if (this.joint.distance < 10)
        {
            this.joint.distance = 10;
        }

        var p1 = [0,0];
        this.joint.bodyA.toWorldFrame(p1, this.joint.localAnchorA);

        var p2 = [0,0];
        this.joint.bodyB.toWorldFrame(p2, this.joint.localAnchorB);

        p2[0] -= p1[0];
        p2[1] -= p1[1];
        var l = Math.sqrt(p2[0]*p2[0] + p2[1]*p2[1]);
        this.ropeLen = l;
        p2[0] /= l;
        p2[1] /= l;
        var angle = Math.atan2( p2[1],  p2[0]);
        //    this.joint.lowerLimit -= 0.05;
        this.updateRopeLen(l);
    }

    if (this.ropeClip) {
        this.ropeClip.rotation = angle - Math.PI / 2;
        this.ropeClip.x = this.gfx.x;
        this.ropeClip.y = this.gfx.y;
    }

    CObj.prototype.process.call(this);
}
    */extend(CGrenadeLauncher, CWeapon, true);

function CGrenadeLauncher(_id, _name, _desc,  __params,__gfx, _upgrades)
{
    CWeapon.apply(this, [_id, _name, _desc,  __params,__gfx, _upgrades]);
}


CGrenadeLauncher.prototype.shot = function()
{
    var r = CWeapon.prototype.shot.call(this);
    if (!r) return;
    var fireAngle = gameStage.player.fireAngle + Math.random()*this.backupStats.acc;
    var vx = Math.cos(fireAngle);
    var vy = Math.sin(fireAngle);

    var xx =
        gameStage.player.firePointX;
    var yy = gameStage.player.firePointY - 14;
    var fx = crsp("fxblink.png");
    fx.x = xx + vx * 50;
    fx.y = yy + vy*50;
    fx.rotation = fireAngle;
    fx.blendMode = PIXI.blendModes.ADD;
    SM.inst.fg.addChild(fx);

    TweenMax.delayedCall(0.03, function (){fx.parent.removeChild(fx);});

    var b = new CGrenade(xx, yy);
    b.owner = gameStage.player;
    b.life = this.life;
    b.dmg = this.damage;
    b.rotation = Math.PI / 2 + fireAngle;
    b.av = 0.2;
    b.vx = vx*17.5;
    b.vy = vy*17.5;
    b.gravityEnabled = true;
    b.colGroup = CG_BULLET;
    b.colMask = CG_MONSTER;
    return r;
};/**
 * Created by KURWINDALLAS on 22.11.2014.
 */
//_id, _name, _desc,  __recoil, __magcap, __delay, __damage, __unlockPrice, _upgrades
var w_pistol = new CPistol(
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {
        recoilValue: 0,
        visualWidth: 20,
        dw: -0.7,
        speed: 40.5,
        sound: null,
        acc: 0.05,
        recoil: 12, //recoil
    magcap: 10, //magcap
    delay: 120, //delay
    damage: 12, //damage
    unlockprice: 10, //unlockprice
    reloadTime: 1200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);

var w_rifle = new CPistol(
    "Мосинка", //id
    "пистолет", //name
    "описание", //desc
    {
        recoilValue: 0,
        visualWidth: 15,
        dw: 0.3,
        speed: 50.5,
        sound: "rifle",
        life: 3,
        acc: 0.05,
        recoil: 0, //recoil
        accIncrease: 0.02,
        accRecoil: 0.1,
        magcap: 6, //magcap
        delay: 380, //delay
        damage: 66, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 1350},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);


var w_pps = new CPistol(
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {
        recoilValue: 0,
        visualWidth: 25,
        dw: -1.2,
        speed: 45.5,
        sound: "mini",
        life: 1,
        acc: 0.022,
        accIncrease: 0.02,
        accRecoil: 0.1,
        recoil: 1.0, //recoil
        magcap: 20, //magcap
        delay: 120, //delay
        damage: 28, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 900},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);


var w_minigun = new CPistol(
    "MINIGUN", //id
    "пистолет", //name
    "описание", //desc
    {
        recoilValue: 0,
        visualWidth: 20,
        dw: -0.7,
        speed: 40.5,
        sound: "mini",
        life: 2,
        acc: 0.05,
        recoil: 0.1, //recoil
        accIncrease: 0.029,
        accRecoil: 0.127,
        magcap: 100, //magcap
        delay: 60, //delay
        damage: 18, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 2200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);

var w_ak74 = new CQueueGun(
    "pistol", //id
    "пистолет", //name
    "описание", //desc
    {
        recoilValue: 0,
        visualWidth: 10,
        dw: 0.1,
        speed: 60.5,
        sound: "ochered",
        queue: 5,
        queueDelay: 110,
        life: 1,
        acc: 0.17,
        accIncrease: 0.05,
        accRecoil: 0.12,
        recoil: .5, //recoil
        magcap: 50, //magcap
        delay: 520, //delay
        damage: 55, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 2200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);


var w_grenadel = new CGrenadeLauncher(
    "grenade launcher", //id
    "лазер", //name
    "описание", //desc
    {
        recoilValue: 0,
        visualWidth: 20,
        dw: -0.7,
        speed: 40.5,
        sound: "laser",
        life: 1,
        acc: 0.08,
        accIncrease: 0.0,
        accRecoil: 0.0,
        recoil: 3, //recoil
        magcap: 4, //magcap
        delay: 500, //delay
        damage: 165, //damage
        reloadTime: 2200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);

var w_laser = new CLaser(
    "laser", //id
    "лазер", //name
    "описание", //desc
    {
        recoilValue: 0,
        visualWidth: 20,
        dw: -0.7,
        speed: 40.5,
        sound: "laser",
        life: 1,
        acc: 0.08,
        accIncrease: 0.0,
        accRecoil: 0.0,
        recoil: 0, //recoil
        magcap: 60, //magcap
        delay: 150, //delay
        damage: 270, //damage
        unlockprice: 10, //unlockprice
        reloadTime: 2200},//__reloadTime,}
    "asd",// __gfx,
    [
        {name: "Точный ствол", param: "recoil", valuesUpgr: [10, 20, 30, 40], level: 0},
        {name: "Дополнительный магазин", param: "magCapacity", valuesUpgr: [2, 4, 6, 8], level: 0},
        {name: "Быстрая стрельба", param: "delay", valuesUpgr: [-10, -20, -30, -40], level: 0}
    ]);/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CBooster, CObj, true);

function CBooster(x,y,gfx,upgr) {
    CObj.apply(this, [x,y, gfx, null]);
    this.upgr = upgr;
    if (!CBooster.list)
    CBooster.list = [];
    CBooster.list.push(this);
    this.activate = true;
  //  this.removeBoosterItem();
}

CBooster.prototype.getUpgrade = function()
{


}

CBooster.prototype.destroy = function()
{
    if (this.doRemove) return;
    var inx = CBooster.list.indexOf(this);
    if (inx >= 0)
    CBooster.list.splice(inx, 1);
    CObj.prototype.destroy.call(this);
}

CBooster.prototype.onDeactivate = function() {
    rp(this.tf);
    this.tf = null;
    //this.gfx.alpha = 0.5;
    this.activate = false;
    var inx = CBooster.list.indexOf(this);
    if (inx >= 0)
        CBooster.list.splice(inx, 1);

    var t = this;
    new TweenMax(this.gfx, 0.5, {alpha: 0, onComplete: function(){t.destroy();}});
    //this.destroy();
}
CBooster.prototype.removeBoosterItem = function() {

    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i) {
        if (PlayerData.inst.items_enabled[i].id == this.ieid) break;
    }

    if (i < PlayerData.inst.items_enabled.length)
        PlayerData.inst.items_enabled.splice(this.ieid, 1);

}

CBooster.prototype.onActivate = function() {
    if (this.doRemove) return;
    this.activate = true;
    PlayerData.inst.progressAch("Gold medal 5", 1, false);

    this.startTime = PauseTimer.getTimer();
    this.lastTick = 0;
    this.tf = CTextField.createTextField({fontFamily: "dedgamecaps", tint: "0xFFFFFF", text: "", fontSize: 80, align: "center"});
    this.tf.x = this.tf.width / 2;
    this.tf.y = -40;
    this.gfx.addChild(this.tf);
}

CBooster.prototype.process = function()
{
    if (!this.activate) return;
    if (this.doRemove) return;
    if (this.tf) {
        if (PauseTimer.getTimer() - this.lastTick > 1000) {
            this.lastTick = PauseTimer.getTimer();
            var secs = Math.round(this.duration - (PauseTimer.getTimer() - this.startTime) / 1000);
            if (secs < 0) secs = 0;
            this.tf.text = secs.toString();
            this.tf.updateText();
        }
        this.tf.x = -this.tf.width / 2;
    }

    var d = PauseTimer.getTimer() - this.startTime;
     if (this.startTime && d > this.duration*1000)
    {
        this.onDeactivate();
    }
};/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CDoubleBooster, CBooster, true);

function CDoubleBooster(x,y,gfx,upgr) {
    CBooster.apply(this, [x,y,gfx,upgr]);
    this.duration = 15 + 3*upgr;
}

CDoubleBooster.prototype.onActivate = function()
{
    if (!gameStage.player) return;
    CBooster.prototype.onActivate.call(this);

    gameStage.player.doubleBooster = 2 + 0.25*this.upgr;
};


CDoubleBooster.prototype.onDeactivate = function()
{
   gameStage.player.doubleBooster = null;
   CBooster.prototype.onDeactivate.call(this);
}
extend(CHeartBooster, CBooster, true);

function CHeartBooster(x,y,gfx,upgr) {
    CBooster.apply(this, [x,y,gfx,upgr]);
    this.duration = 0.1;

};


CHeartBooster.prototype.onActivate = function() {

    var upgrHP = [1, 2, 3, 4, 5, 10];
    if (this.upgr >= 0) {
        gameStage.player.hp += upgrHP[this.upgr];
    } else gameStage.player.hp += 1;

    if (!gameStage.player) return;
    CBooster.prototype.onActivate.call(this);
}/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CMagnetBooster, CBooster, true);

function CMagnetBooster(x,y,gfx,upgr) {
    CBooster.apply(this, [x,y,gfx,upgr]);
    var d = 250 + 20*upgr;
    CMagnetBooster.mindist = d*d;
    this.duration = 40 + 10*upgr;
}

CMagnetBooster.prototype.process = function()
{
    if (gameStage.player && CCoin.coins) {
        var len = CCoin.coins.length;
        for (var i = 0; i < len; ++i) {
            var dx = CCoin.coins[i].x - gameStage.player.x;
            var dy = CCoin.coins[i].y - gameStage.player.y;
            if (dx*dx + dy*dy < CMagnetBooster.mindist)
            {
                var l = Math.sqrt(dx*dx + dy*dy);
                dx /= l;
                dy /= l;
                CCoin.coins[i].vx -= dx*1.;
                CCoin.coins[i].vy -= dy*1.;
            }
        }
    }

    CBooster.prototype.process.call(this);
};/**
 * Created by KURWINDALLAS on 21.01.2015.
 */
extend(CSupermanBooster, CBooster, true);

function CSupermanBooster(x,y,gfx,upgr) {
    CBooster.apply(this, [x,y,gfx,upgr]);
    this.duration = 9 + 2*upgr;
}

CSupermanBooster.prototype.onActivate = function()
{
    if (!gameStage.player) return;
    if (gameStage.player.state == this.sDying) return;
    //if (gameStage.player.jumping) return;
    CBooster.prototype.onActivate.call(this);
    gameStage.player.gfx.skeleton.setAttachment("body", "body1");

    this.tweenUp = new TweenMax(gameStage.player, 0.6, {y: 200, ease: Linear.easeOut});
    gameStage.player.jumping = true;
    gameStage.player.gravityEnabled = false;
   // gameStage.player.jumpBoost = false;

    this.fire1 = CObj.createMovieClip("firesmall");
    this.fire1.x = -314;
    this.fire1.y = -100;
    this.fire1.scale.x = 3;
    this.fire1.scale.y = 3;
    this.fire1.loop = true;
    this.fire1.gotoAndPlay(0);
    gameStage.player.gfx.addChildAt(this.fire1, 0);

    this.fire2 = CObj.createMovieClip("firesmall");
    this.fire2.x = -140;
    this.fire2.y = 20;
    this.fire2.scale.x = 3;
    this.fire2.scale.y = 3;
    this.fire2.loop = true;
    this.fire2.gotoAndPlay(0);
    gameStage.player.gfx.addChildAt(this.fire2, 0);
    this.fire3 = CObj.createMovieClip("firesmall");
    this.fire3.x = 85;
    this.fire3.y = 20;
    this.fire3.scale.x = 3;
    this.fire3.scale.y = 3;
    this.fire3.loop = true;
    this.fire3.gotoAndPlay(0);
    gameStage.player.gfx.addChildAt(this.fire3,0);
    gameStage.player.gfx.state.setAnimationByName(0, "idle", true);
};

CSupermanBooster.prototype.onDeactivate = function()
{
    var b = this;
    gameStage.player.jumping = false;
    gameStage.player.gravityEnabled = true;
    rp(b.fire1);
    rp(b.fire2);
    rp(b.fire3);
    if (this.tweenUp) {
        this.tweenUp.kill();
        this.tweenUp = null;
    }
    b.fire1 = null;
    b.fire2 = null;
    b.fire3 = null;
    gameStage.player.invulnerable++;
    var p = gameStage.player;
    TweenMax.delayedCall(1, function(){p.invulnerable--;});
    CBooster.prototype.onDeactivate.call(this);
}

CSupermanBooster.prototype.process = function()
{
    if (!this.activate || this.doRemove) return;
    if (gameStage.player)
    {
        gameStage.player.vy = Math.cos(PauseTimer.getTimer() / 1000)*0.7;
    }
    CBooster.prototype.process.call(this);
};extend(CTabletsBooster, CBooster, true);


function CTabletsBooster(x,y,gfx,upgr) {
    CBooster.apply(this, [x,y, gfx,upgr]);
    this.duration = 4 + upgr;
}

CTabletsBooster.prototype.onActivate = function()
{
    CBooster.prototype.onActivate.call(this);
        if (!gameStage.player) return;

        gameStage.player.invulnerable++;
        var p = gameStage.player;
        p.blink = true;
        this.prevVel = LauncherBG.inst.maxVelocity;
        p.superMode = true;

    var b = this;
        new TweenMax(LauncherBG.inst, 1.5, {maxVelocity: LauncherBG.inst.maxVelocity + 15, ease: Linear.easeOut});
};


CTabletsBooster.prototype.onDeactivate = function()
{
    var p = gameStage.player;
    TweenMax.delayedCall(0.7, function(){p.invulnerable--;});

    new TweenMax(LauncherBG.inst, 0.3, {maxVelocity: this.prevVel, ease: Linear.easeOut});

    CBooster.prototype.onDeactivate.call(this);
    p.superMode = false;
    p.resetBlink();
    p.blink = false;
}

PlayerData = function()
{
   this.maxEnergy = 10;
   this.epm = 0.1;
   this.delayEnergyMS = 3000.;
   this.xpLevel = [
      {crystals: 1, money: 25, xp: 0},
      {crystals: 1, money: 50, xp: 250},
      {crystals: 1, money: 100, xp: 500},
      {crystals: 1, money: 200, xp: 1000},
      {crystals: 2, money: 400, xp: 2000},
      {crystals: 2, money: 800, xp: 2500},
      {crystals: 2, money: 1000, xp: 3500},
      {crystals: 2, money: 1500, xp: 7000},
      {crystals: 3, money: 2000, xp: 12000},
      {crystals: 3, money: 2500, xp: 18000},
      {crystals: 3, money: 3000, xp: 19000},
      {crystals: 3, money: 3000, xp: 20000},
      {crystals: 3, money: 3000, xp: 21000},
      {crystals: 3, money: 3000, xp: 22000},
      {crystals: 3, money: 3000, xp: 23000},
      {crystals: 3, money: 3000, xp: 24000},
      {crystals: 3, money: 3000, xp: 25000},
       {crystals: 3, money: 3000, xp: 26000},
       {crystals: 3, money: 3000, xp: 27000},
       {crystals: 3, money: 3000, xp: 28000},
       {crystals: 3, money: 3000, xp: 29000},
       {crystals: 3, money: 3000, xp: 31000},
       {crystals: 3, money: 3000, xp: 32000},
       {crystals: 3, money: 3000, xp: 33000},
       {crystals: 3, money: 3000, xp: 34000},
       {crystals: 3, money: 3000, xp: 35000}];

   this.items = {};
   this.achs = {};
   this.score = 0;

   PlayerData.inst = this;

    //window.azureclient = new WindowsAzure.MobileServiceClient("https://thanksdad.azure-mobile.net/", "DRoaNHnoaCjxrhkbpOzHxGEHOFgGLS75" );
    window.vkparams = {};
    vkparams.sid = getURLParameter("sid");
    vkparams.viewerid = getURLParameter("viewer_id");

    //CCREMOVE!!!!!!!!!!!!!!!!!!!!!!!!
    if (!vkparams.viewerid || !VK)
    {
        if (MOBILE)
        {
            vkparams.viewerid = Cocoon.Device.getDeviceId();
        }
        vkparams.novk = true;
    }

    if (vkparams.viewerid != "CARLSON" && vkparams.viewerid != "2882845" && vkparams.viewerid != "282617259" &&
        vkparams.viewerid != "197515742") return;

    vkparams.gamerid = vkparams.userid ||  vkparams.viewerid;
    vkparams.auth_key = getURLParameter("auth_key");
    vkparams.refferer = getURLParameter("referrer");
    vkparams.accesstoken = getURLParameter("access_token");
    console.log("login / register user");

    this.loginPage = 'https://www.dedgame.ru/backendmysql/login.php';
    this.apiSource = "https://www.dedgame.ru/backendmysql/dedapi.php";

    if (window.location.search == "?p=LOCAL") {
        this.playerJSON = '{"registered":false,"tokenJWT":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2a2lkIjoiMjgyNjE3MjU5IiwidXNlcmlkIjoiNzhGNkY3Q0UtMjhFMy00QUVBLUIxNDMtMkJCQjJDQkVBNTREIn0.P-nWGsKp866LbgRrzuVhBut8p4ZaAZ8XZfhIchgsph4","playerItem":{"id":"78F6F7CE-28E3-4AEA-B143-2BBB2CBEA54D","ref":"282617259","vkapi":"282617259","xp":"256.94042397661","createDate":"2015-03-25 12:31:46","updateDate":"2015-04-17 00:50:13","userId":"Custom:F800A350-EE15-4F1C-9CCF-050B775A4CD9","money":"9639","crystals":"1000","maxdistance":"918","lvl":"3","energy":"10","name":"Геннадий","last_name":"Геннадич","rank":"2467","combodate":"2015-03-25 15:56:09","keys":null,"platformid":"282617259"}}';
        x = JSON.parse(this.playerJSON);
    } else {
    /*    if (window.location.search == "?p=MYSQL") {
            this.loginPage = 'https://www.dedgame.ru/backendmysql/login.php';
            this.apiSource = "https://www.dedgame.ru/backendmysql/dedapi.php";
        } else
        {
            this.loginPage = 'https://www.dedgame.ru/backend/login.php';
            this.apiSource = "https://www.dedgame.ru/backend/dedapi.php";
        }
*/
            var data = getCookie("LOGIN_DATA");
            data = decodeURIComponent(data);
            data = data.replace(/\+/g, ' ');
            data = data.replace(/@/g, '+');
            //data = data.substring(2, data.length);
            var x = JSON.parse(data);
    }

    vkparams.token = x.tokenJWT;
    vkparams.registered = x.registered;
    startServerTimeTicker();
    if (!vkparams.registered)console.log("user logged in"); else
        console.log("user registered");

    PlayerData.inst.pid = x.playerItem.id;
    PlayerData.inst.playerItem = PlayerData.inst.intJSON(x.playerItem);
    vkparams.viewerid = PlayerData.inst.playerItem.platformid;
    PlayerData.inst.playerItem.money = Math.round(PlayerData.inst.playerItem.money);
    if (!PlayerData.inst.playerItem.crystals)
        PlayerData.inst.playerItem.crystals = 0;

    vkparams.id = PlayerData.inst.playerItem.id;
    PlayerData.inst.getVKfriends();
}

PlayerData.prototype.addNotification = function(message, platformid)
{
   //var t = window.azureclient.getTable("tb_notifications");
   //t.insert({message: message, platformid: platformid});
}

PlayerData.prototype.comboCheck = function()
{
   if (this.playerItem.combodate)
   {
      var d = (datetime()).getTime() - (new Date(sqlToJsDate(this.playerItem.updateDate))).getTime();
      d /= 1000;//secs
      d /= 60; //minutes
      if (d > 60*29)
      {
         this.playerItem.combodate = sqlDate(new Date());
      } else
      {
         var d = (datetime()).getTime() - new Date(sqlToJsDate(this.playerItem.combodate)).getTime();
         d /= 1000;//secs
         d /= 60; //minutes
         var dayminutes = 24*60;
         if (d > dayminutes*3)
         this.progressAch("Gold medal 8", 1, false);

         if (d > dayminutes*10)
         this.progressAch("Gold medal 9", 1, false);
      }
   } else
   {
      this.playerItem.combodate = this.playerItem.updateDate;
   }
}

PlayerData.prototype.getItemById = function(id)
{
   for (var i =0; i < this.items.length;++i)
   {
      if (this.items[i].id == id) return this.items[i];
   }
   return null;
}

PlayerData.prototype.getType = function (item_player)
{
   for (var i = 0; i < PlayerData.inst.items.length; ++i)
   {
      if (PlayerData.inst.items[i].id == item_player.id_item)
         return PlayerData.inst.items[i].type;
   }
   return null;
}



PlayerData.prototype.resetRP = function()
{
    PlayerData.inst.callDedAPI("RESET_RP", null, null, null, function(c)
    {
        console.log(c);
    });
}


PlayerData.prototype.azureReadData = function()
{
    PlayerData.inst.callDedAPI("AZURE_READ_DATA", null, null, {score: PlayerData.inst.score, dist: LauncherBG.inst.distance}, function(c)
    {
        console.log(c);
    });
}

PlayerData.prototype.saveScore = function()
{
    PlayerData.inst.callDedAPI("SAVE_SCORE", null, null, {score: PlayerData.inst.score, dist: LauncherBG.inst.distance}, function(c)
    {
        console.log(c);
    });
}



PlayerData.prototype.getUpgrade = function(item, itemName)
{
    if (itemName)
    {
        for (var i = 0; i < this.items.length; ++i)
        {
            if (this.items[i].name == itemName)
            {
                item =    this.items[i];
                break;
            }
        }
    }

    var nm = item.name;
    var upgrIds = [];
    for (var i = 0; i < this.items.length; ++i)
    {
        if (this.items[i].name.indexOf(nm + '$') >= 0) upgrIds.push({id: this.items[i].id, name: this.items[i].name});
    }
    upgrIds.sort(function(a, b) {
        return b.name.localeCompare(a.name);
    });

    var baseBuyed = false;
    for (var i = 0; i < upgrIds.length; ++i)
    {

        for (var k= 0; k < PlayerData.inst.items_enabled.length; ++k) {
            if (PlayerData.inst.items_enabled[k].id_item == item.id)
            {

                baseBuyed = true;
            }

            if (PlayerData.inst.items_enabled[k].id_item == upgrIds[i].id)
            {
                if (i > 0) var idNext = upgrIds[i - 1].id; else idNext = null;
                return {upgr: 5 - i, id: upgrIds[i].id, idNext: idNext};
            }

        }
    }
    if (baseBuyed)
    return     {upgr: 1, id: item.id, idNext: upgrIds[upgrIds.length - 1].id}; else return {upgr: 0, id: null, idNext: item.id};
}


PlayerData.prototype.equipItem = function(item, state)
{
   var id = item.id;

   var itemOwned = false;
   for (var i =0; i < this.items_enabled.length;++i)
   {
      if (this.items_enabled[i].id_item == id)itemOwned = true;
   }

   if (!itemOwned) return;

   var itemtype = item.type;

   for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
   {
      if (this.getType(PlayerData.inst.items_enabled[i]) == itemtype)
      {
          var saveOnServer = false;

         if (PlayerData.inst.items_enabled[i].id_item == id) {
             PlayerData.inst.items_enabled[i].equipped = state;
             saveOnServer = true;
         }else {
             if (PlayerData.inst.items_enabled[i].equipped == "1") {
                 PlayerData.inst.items_enabled[i].equipped = "0";
                saveOnServer = true;
             }
         }

          if (saveOnServer)
          {
              if (PlayerData.inst.items_enabled[i].id)
              PlayerData.inst.callDedAPI("UPDATE", "tb_item_player", PlayerData.inst.items_enabled[i].id, PlayerData.inst.items_enabled[i]);
          }
      }
   }
}


PlayerData.prototype.gainExp = function(amount) {
   this.playerItem.xp += amount;
   var c = this.playerItem.xp;
   var needed = this.xpLevel[this.playerItem.lvl].xp;

   var ingame = SM.inst.currentStage == gameStage;
   if (c >= needed && this.playerItem.lvl + 1 < this.xpLevel.length) ///levelup
   {
      this.playerItem.xp -= this.xpLevel[this.playerItem.lvl].xp;
      this.playerItem.crystals += this.xpLevel[this.playerItem.lvl].crystals;
      this.playerItem.lvl++;

       if (!vkparams.novk) {
           $.ajax({
               type: "POST",
               url: 'levelup.php',
               data: {uid: vkparams.viewerid, lev: this.playerItem.lvl},
               dataType: "text"

           }).success(function (res) {
           });
       }

       ZSound.Play("levelup");
       if (ingame)
           this.score += this.xpLevel[this.playerItem.lvl].money; else {
           this.playerItem.money += Math.round(this.xpLevel[this.playerItem.lvl].money);
           shopStage.updateStatsPanel();
       }
       if (!ingame)
         {

             if (charStage.disableWnd)
             {
                 charStage.disableWnd.interactive = false;
             }
         /*   if (charStage.closeEventsWnd)
            charStage.closeEventsWnd();

            CObj.enableButtons(false);
            var wnd = SM.inst.addDisableWindow(null, SM.inst.fontLayer);
            wnd.interactive = true;

            charStage.closeEventsWnd = function()
            {
               wnd.parent.removeChild(wnd);
               CObj.enableButtons(true);
            }
*/
         }
         if (ingame)
         {
            gameStage.updateScore();
            gameStage.pause();
         }

         LevelManager.loadLevel("levelup",
             function () {
                CObj.getById("moneytf").text = PlayerData.inst.xpLevel[PlayerData.inst.playerItem.lvl].money.toString();
                CObj.getById("crystalstf").text = PlayerData.inst.xpLevel[PlayerData.inst.playerItem.lvl].crystals.toString();
                CObj.getById("levnum").text = PlayerData.inst.playerItem.lvl.toString();
                CObj.getById("btnclose").click = function () {
                    LevelManager.removeLastLevel();
                   if (ingame) {
                      gameStage.unpause();
                   } else {
                       shopStage.updateStatsPanel();
                       charStage.closeEventsWnd();
                       PlayerData.inst.savePlayerData();
                   }
                };


             }
             , SM.inst.fontLayer);
     /* }
      else {
         this.playerItem.money += this.xpLevel[this.playerItem.lvl].money;
         this.savePlayerData();
         charStage.updateStatsPanel();
      }*/
   }

   if (SM.inst.currentStage == gameStage) {
      gameStage.updateXP();
   }
}

PlayerData.prototype.showAch = function(ach)
{
   var cont = new PIXI.DisplayObjectContainer();

   var bg = crsp("notifiction cover");
   cont.addChild(bg);
   var ico = crsp(ach.gfx);
   ico.height = 80;
   ico.scale.x = ico.scale.y;
   ico.x = -bg.width / 2 + 55;
   cont.addChild(ico);

   var text1 = new CTextField.createTextField({fontFamily: "dedgamecaps", text: "Новая награда!", fontSize: "33"});
   var text2 = new CTextField.createTextField({fontFamily: "dedgamecaps", text: ach.desc, fontSize: "25"});
   text1.x = -text1.width / 2 + 40;
   text1.y = -35;
   text2.x = -text2.width / 2 + 40;
   text2.y = 5;

   cont.addChild(text1);
   cont.addChild(text2);

   SM.inst.superStage.addChild(cont);

   cont.x = SCR_WIDTH / 2;

   new TweenMax(cont, 0.4, {y: bg.height / 2});
 //  TweenMax.delayedCall(1, );
  new TweenMax(cont, 0.3, {delay: 1.8, alpha: 0., onComplete: function () {cont.parent.removeChild(cont);}});
}

PlayerData.prototype.progressAch = function(name, progress, replace)
{
   for (var i = 0; i < this.achs.length; ++i)
   {
      if (this.achs[i].name.toLowerCase() == name.toLowerCase())
      {
         break;
      }
   }

   var complete = false;
   for (var j = 0; j < this.achs_progress.length; ++j)
   {
      if (this.achs_progress[j].id_ach == this.achs[i].id)
      {

         if (replace)
         {
            if (progress >= 1) complete = true;
            this.achs_progress[j].progress = progress;
         } else {
            if (this.achs_progress[j].progress < 1 &&
                this.achs_progress[j].progress + progress >= 1) {
                complete = true;
                charStage.unreadAch = true;
            }
            this.achs_progress[j].progress += progress;
         }
            break;
      }
   }
    
   if (complete)
   {
      this.savePlayerAchs(this.achs_progress[j]);
      this.showAch(this.achs[i]);
      incMetric("ACH GAINED " + this.achs[i].name);
   }
   return complete;
}

PlayerData.prototype.loadEnd = function() {

    function getPlItem(id)
    {
        for (var i =0; i < PlayerData.inst.items_enabled.length;++i)
        {
            if (PlayerData.inst.items_enabled[i].id_item == id) return PlayerData.inst.items_enabled[i];
        }
    }

    var eqWeapon = false;
    for (var i = 0; i < PlayerData.inst.items.length; ++i)
    {
        if (PlayerData.inst.items[i].type == tWeapon) {
            var plit = getPlItem(PlayerData.inst.items[i].id);
            if (plit && plit.equipped == "1") {
                eqWeapon = true;
                break;
            }
        }
    }

    if (!eqWeapon) PlayerData.inst.equipItem(PlayerData.inst.baseWeapIt, "1");

    console.log("db init");
   // PlayerData.inst.updateScore();
    //PlayerData.inst.createAchProgress();
    window.dbinit  = true;
    onAssetsLoaded();
}

PlayerData.prototype.updateEnergy = function(noUpdate)
{
    if (!this.playerItem) return;
    if  (!isValidDate(sqlToJsDate(this.playerItem.updateDate)))
        this.playerItem.updateDate = sqlDate(datetime());

        var d2 = sqlToJsDate(this.playerItem.updateDate);
   var d = (datetime()).getTime() - d2.getTime();
   this.playerItem.updateDate = sqlDate(datetime());//(new Date()).toString();
   d /= 1000;//secs
   d /= 60; //minutes
   if (d > 0) {
       var prev = this.playerItem.energy;
       this.playerItem.energy += d * this.epm;

   // console.log(this.playerItem.energy);

   if (this.playerItem.energy > this.maxEnergy) {
      this.playerItem.energy = this.maxEnergy;
   }
    if (this.playerItem.energy < 0) {
        this.playerItem.energy = 0;
    }

    if ((noUpdate == null) && Math.floor(prev) != Math.floor(this.playerItem.energy))
        this.savePlayerData();
   }
   if (SM.inst.currentStage == charStage || SM.inst.currentStage == shopStage)
   {
      shopStage.updateStatsPanel();

   }
    //var t = this;
   setTimeout(function(){PlayerData.inst.updateEnergy();}, PlayerData.inst.delayEnergyMS);
}

PlayerData.prototype.createAchProgress = function(cb)
{
   for (var i = 0; i< this.achs.length; ++i)
   {

      var containAch = false;
      for (var j = 0; j < this.achs_progress.length; ++j)
      {
         if (this.achs[i].id == this.achs_progress[j].id_ach)
         {
            containAch = true;
            break;

         }
      }

      if (!containAch)
      {
         this.achs_progress.push({id_ach: this.achs[i].id, id_player: this.playerItem.id, progress: 0});
      }
   }
}

incMetric = function(name)
{
    return;
   /*azureclient.invokeApi("increasemetric", {
      body: {name: name},
      method: "post"
   });*/
}

PlayerData.prototype.getEventById = function(id)
{
   for (var i = 0; i < this.events.length; ++i)
   {
      if (this.events[i].id == id) return this.events[i];
   }

   return null;
}

PlayerData.prototype.updateScore = function(cb)
{
    PlayerData.inst.callDedAPI("UPDATE_SCORE", null, null, null, cb);
    /*azureclient.invokeApi("update_score", {
        body: {id_player: PlayerData.inst.playerItem.id, score: PlayerData.inst.playerItem.maxdistance},
        method: "post"
    }).done(function(r)
    {
        if (cb) cb(JSON.parse(r.response));
    });*/
}

PlayerData.prototype.intJSON = function(obj)
{
    var gameFloatFields = ["reward_ready", "progress", "xp_gain", "money_gain", "crystal_gain", "reqlvl", "exectime", "delay_min", "xp", "money", "crystals", "maxdistance", "lvl", "energy", "rank", "keys"];

    if(Object.prototype.toString.call(obj) === '[object Array]' ) {
        for (var i = 0; i < obj.length; ++i)
        {
            this.intJSON(obj[i]);
        }
    } else
    {
        for(var propertyName in obj) {


            if (typeof obj[propertyName] != "string") continue;


            if (gameFloatFields.indexOf(propertyName) > -1)
            {
                obj[propertyName] = parseFloat(obj[propertyName]);
            }
            // propertyName is what you want
            // you can get the value like this: myObject[propertyName]
        }
    }
    return obj;
}


PlayerData.prototype.loadData = function(cb)
{
   checkDb();
   this.loadCount = 0;
   console.log("PlayerData.loadData");

    var totalLoads = 6;

 /*  window.azureclient.getTable("tb_achs").read().done(
       function (results) {
           console.log(JSON.stringify(results));
          PlayerData.inst.achs = results;
          PlayerData.inst.loadCount ++;
          if (PlayerData.inst.loadCount == totalLoads && cb) cb();
       }, function (res) {}
   );*/

    PlayerData.inst.events = JSON.parse(eventsVar);
    PlayerData.inst.loadCount ++;
    /*
     window.azureclient.getTable("tb_edevent").read().done(
     function (results) {
     PlayerData.inst.events = results;
     console.log(JSON.stringify(results));
     PlayerData.inst.loadCount ++;
     if (PlayerData.inst.loadCount == totalLoads && cb) cb();
     }, function (res) {}
     );
     */


    PlayerData.inst.achs = JSON.parse(achsVar);
    PlayerData.inst.loadCount ++;



    PlayerData.inst.items = JSON.parse(itemsVar);
    PlayerData.inst.loadCount ++;


    /*
       window.azureclient.getTable("tb_items").read().done(
           function (results) {
              PlayerData.inst.items = results;
               console.log(JSON.stringify(results));

               PlayerData.inst.items.sort(function(a, b) {
                   return a.reqlvl - b.reqlvl;
               });

              PlayerData.inst.loadCount ++;
              if (PlayerData.inst.loadCount == totalLoads && cb) cb();
           }, function (res) {}
       );
    */


   /* window.azureclient.getTable("tb_edevent_player").read().done(
        function (results) {
            PlayerData.inst.eventsplayer = results;
            PlayerData.inst.loadCount ++;

            if (PlayerData.inst.loadCount == totalLoads && cb) cb();
        }, function (res) {}
    );*/

    PlayerData.inst.callDedAPI("READ", "tb_edevent_player", null, null, function(r)
    {
        PlayerData.inst.eventsplayer = PlayerData.inst.intJSON(r);
        PlayerData.inst.loadCount ++;
        console.log("events loaded");
        if (PlayerData.inst.loadCount == totalLoads && cb) cb();
    });

    PlayerData.inst.callDedAPI("READ", "tb_ach_player", null, null, function(r)
    {
       PlayerData.inst.achs_progress = PlayerData.inst.intJSON(r);

        console.log("achs loaded");
        PlayerData.inst.loadCount ++;
        if (PlayerData.inst.loadCount == totalLoads && cb) cb();
    });

    PlayerData.inst.callDedAPI("READ", "tb_item_player", null, null, function(r)
    {
        console.log("items loaded");
        PlayerData.inst.items_enabled = PlayerData.inst.intJSON(r);

        var defaultRifleID = "68AFAEDC-B3E0-401E-9E1A-E272084F2E11";

        PlayerData.inst.baseWeapIt =  PlayerData.inst.getItemById("68AFAEDC-B3E0-401E-9E1A-E272084F2E11");
        PlayerData.inst.baseWeapItPl = {
            id_item: defaultRifleID,
            id_player:PlayerData.inst.pid,
            equipped: false
        };
        PlayerData.inst.items_enabled.push(PlayerData.inst.baseWeapItPl);

        PlayerData.inst.loadCount ++;
        if (PlayerData.inst.loadCount == totalLoads && cb) cb();

    });


    /*window.azureclient.getTable("tb_ach_player").read().done(
        function (results) {
            PlayerData.inst.achs_progress = results;

            PlayerData.inst.loadCount ++;
            if (PlayerData.inst.loadCount == totalLoads && cb) cb();
        }, function (res) {
        }
    );*/

/*   window.azureclient.getTable("tb_item_player").read().done(
       function (results) {
          PlayerData.inst.items_enabled = results;

          var defaultRifleID = "68AFAEDC-B3E0-401E-9E1A-E272084F2E11";

          var found = false;
          var eq = false;
          var inxRifle = -1;
          for (var i = 0;i < PlayerData.inst.items_enabled.length; ++i)
          {
            if (PlayerData.inst.items_enabled[i].id_item == defaultRifleID)
            {
               inxRifle = i;
               found = true;
          //     break;
            }
             if (PlayerData.inst.items_enabled[i].equipped)
             eq = true;
          }

          if (!eq && found)
             PlayerData.inst.items_enabled[inxRifle].equipped = true;


          if (!found)
          {


             var eq = true;
             if (PlayerData.inst.items_enabled.length > 0)
                eq = false;
             PlayerData.inst.items_enabled.push(
                 {
                    id_item: defaultRifleID,
                    id_player:PlayerData.inst.pid,
                    equipped: eq
                 }
             );
          }

          PlayerData.inst.loadCount ++;
          if (PlayerData.inst.loadCount == totalLoads && cb) cb();
       }, function (res) {}
   );

*/

}

PlayerData.prototype.saveAllData = function()
{
   this.savePlayerData();
   this.savePlayerItems();
   this.savePlayerEvents();
   this.savePlayerAchs();
}

PlayerData.prototype.savePlayerAchs = function(onlyOne)
{
   for (var i = 0; i < PlayerData.inst.achs_progress.length; ++i) {
      if (onlyOne && onlyOne.id != PlayerData.inst.achs_progress[i].id) continue;
      PlayerData.inst.callDedAPI("UPDATE", "tb_ach_player", PlayerData.inst.achs_progress[i].id, PlayerData.inst.achs_progress[i]);

      //window.azureclient.getTable("tb_ach_player").update().done(function (result) {
      }
}


PlayerData.prototype.savePlayerEvents = function(onlyOne)
{
   for (var i = 0; i < PlayerData.inst.eventsplayer.length; ++i) {
      if (onlyOne && onlyOne.id != PlayerData.inst.eventsplayer[i].id) continue;

       var js = JSON.stringify(PlayerData.inst.eventsplayer[i]);
       console.log(js);
       console.log(PlayerData.inst.eventsplayer[i].id);

       PlayerData.inst.callDedAPI("UPDATE", "tb_edevent_player", PlayerData.inst.eventsplayer[i].id, PlayerData.inst.eventsplayer[i]);
   }
}

PlayerData.prototype.savePlayerItems = function(onlyOne)
{
   for (var i = 0; i < this.items_enabled.length; ++i) {
      if (onlyOne && onlyOne.id != PlayerData.inst.items_enabled[i].id) continue;
       PlayerData.inst.callDedAPI("UPDATE", "tb_item_player", PlayerData.inst.items_enabled[i].id, PlayerData.inst.items_enabled[i]);
   }
}

PlayerData.prototype.login = function()
{

    $.ajax({
        encoding:"UTF-8",
        type: "POST",
        url: PlayerData.inst.loginPage,
        dataType: "text",
        data: {
            vkid: vkparams.viewerid
        }

    }).done(function (res) {
        var r = res.substring(3, res.length);
        var x = JSON.parse(r);

        vkparams.token = x.tokenJWT;
        vkparams.registered = x.registered;

        if (!vkparams.registered)console.log("user logged in"); else
            console.log("user registered");

        PlayerData.inst.pid = x.playerItem.id;
        PlayerData.inst.playerItem = PlayerData.inst.intJSON(x.playerItem);
        if (!PlayerData.inst.playerItem.crystals)
        PlayerData.inst.playerItem.crystals = 0;

        vkparams.id = PlayerData.inst.playerItem.id;
        PlayerData.inst.getVKfriends();
        }).fail(function (res)
        {
            console.log(JSON.stringify(res));
        }
    );
}

PlayerData.prototype.callDedAPI = function(method, table, id, data, cb)
{
    console.log("DEDAPI"+method + table);
    $.ajax({
        type: "POST",
        url: PlayerData.inst.apiSource,
        data: {
            encoding:"UTF-8",
            method: method,
            table: table,
            data: data,
            id: id,
            token: vkparams.token
        },
        dataType: "text"
    }).done(function (res) {
       if (!cb) return;
        var res = res.substring(2, res.length);

        try {
            var resObj = JSON.parse(res);
        } catch (e) {
            cb(res);
        }
        cb(resObj);
    });
}


PlayerData.prototype.savePlayerData = function(cb)
{
    console.log(JSON.stringify(this.playerItem));
    PlayerData.inst.callDedAPI("UPDATE", "tb_players", null, this.playerItem, function(x)
    {
        console.log(x);
    });
};


getURLParameter = function (name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}


PlayerData.prototype.getVKuserData = function(playerItem)
{
    VK.api('users.get',{user_ids:vkparams.viewerid.toString()}, function(data) {
        if (!data.response || data.response.length == 0) {
            PlayerData.inst.getVKuserData(playerItem);
            return;
        }
        if (data.response[0].first_name)
            vkparams.first_name = data.response[0].first_name; else
            vkparams.first_name = "Ноунейм";

        if (data.response[0].last_name)
            vkparams.last_name = data.response[0].last_name; else
            vkparams.last_name = "";

        if (vkparams.first_name)
            PlayerData.inst.playerItem.name = vkparams.first_name;
        if (vkparams.last_name)
            PlayerData.inst.playerItem.last_name = vkparams.last_name;

        PlayerData.inst.loadData(PlayerData.inst.loadEnd);
    });
}

PlayerData.prototype.saveRunProgress = function(noUpdate)
{
    if (SM.inst.currentStage == gameStage && !gameStage.progressSaved) {
        var rec = Math.round(PlayerData.inst.playerItem.maxdistance);
        if (LauncherBG.inst.distance > PlayerData.inst.playerItem.maxdistance) {
            rec = Math.round(LauncherBG.inst.distance);
        }
        gameStage.progressSaved = true;
        PlayerData.inst.playerItem.money += Math.round(PlayerData.inst.score);
        PlayerData.inst.playerItem.maxdistance = rec;
        /*
        if (noUpdate == null)
        PlayerData.inst.savePlayerData();
        */

        PlayerData.inst.saveScore();

        PlayerData.inst.updateScore(function (r)
        {
            PlayerData.inst.playerItem.rank = parseInt(r.rank);
        //    PlayerData.inst.savePlayerData();
        });
    }
}

PlayerData.prototype.getVKfriends = function()
{
    vkparams.first_name = PlayerData.inst.playerItem.name;//"Аноним";
    vkparams.last_name = PlayerData.inst.playerItem.last_name;
    console.log("!!!!" + PlayerData.inst.playerItem.name);
    //PlayerData.inst.savePlayerData();
    PlayerData.inst.updateScore(function (r)
    {
        PlayerData.inst.playerItem.rank = parseInt(r);
        PlayerData.inst.savePlayerData();
    });


    console.log("Gettin vk friends");

    vkparams.friendsids = [];
    vkparams.friendsIngameIDs = [];
    if (vkparams.novk)
    {
        this.loadData(this.loadEnd);
        return;
    }

    VK.api('friends.getAppUsers',{}, function(data) {
        vkparams.friendsIngameIDs = [];
        vkparams.friendsIngameIDsStr = [];
        if (!data.response || !data.response.length) {
            PlayerData.inst.getVKuserData();
        } else {
            var friends = data.response;
            for (var i = 0; i < friends.length; ++i)
            {
                var s = friends[i].toString();
                vkparams.friendsIngameIDsStr.push("\'" + s +"\'") ;
                vkparams.friendsIngameIDs.push(s);
            }

            vkparams.friendsFilter = vkparams.friendsIngameIDsStr.join(', ');

            if (vkparams.friendsIngameIDs.length > 0) {

                PlayerData.inst.callDedAPI("GET_SCORES", null, null, {filter: vkparams.friendsFilter, take: 15, skip: 0}, function(c)
                {
                    vkparams.friendsIngame = c;
                    /*vkparams.friendsIngameIDs = [];
                    if (!c || c.length == 0) return;
                    for (var i = 0; i < c.length; ++i) {
                        vkparams.friendsIngameIDs.push(c[i].platformid.toString());
                    }
                    */
                    PlayerData.inst.getVKuserData();

                });
            /*    azureclient.invokeApi("get_scores", {
                    body: {filter: friendsFilter, take: 15, skip: 0},
                    method: "post"
                }).done(function (results) {

                    vkparams.friendsIngame = results.result;
                    vkparams.friendsIngameIDs = [];
                    if (!results.result) return;
                    for (var i = 0; i < results.result.length; ++i) {
                        vkparams.friendsIngameIDs.push(results.result[i].platformid.toString());
                    }

                    PlayerData.inst.getVKuserData();
                }, function (error) {
                    PlayerData.inst.getVKuserData();
                });*/
            } else
            {
                PlayerData.inst.getVKuserData();
            }
        }
    });
};

var tWeapon = "weap";
var tPerk = "perk";
var tBoost = "boost";
var tApp = "app.";
var tHat = "hat";


var eventsVar = '[{"id":"AD7026E7-E8D3-4875-8603-88A2359B0815","name":"event2","desc":"Получить пенсию","delay_min":2880,"xp_gain":0,"money_gain":500,"crystal_gain":0,"gfx":"action 2.png","reqlvl":1,"exectime":120},{"id":"A5EB5C84-97C3-4887-9D68-154BB315A895","name":"event5","desc":"Постирать мундир","delay_min":2880,"xp_gain":0,"money_gain":0,"crystal_gain":8,"gfx":"action 5.png","reqlvl":9,"exectime":120},{"id":"1F94C1A3-64F2-49D1-BD3C-8C66209EA613","name":"event4","desc":"Заглянуть в интернет","delay_min":1440,"xp_gain":600,"money_gain":0,"crystal_gain":0,"gfx":"action 4.png","reqlvl":6,"exectime":140},{"id":"A8080122-06EE-442E-949B-5FE8E960DF54","name":"event3","desc":"Посмотреть новости","delay_min":360,"xp_gain":50,"money_gain":0,"crystal_gain":0,"gfx":"action 3.png","reqlvl":2,"exectime":30},{"id":"A35101AA-2484-4C98-92C1-9A26D564E809","name":"event6","desc":"Доесть ужин","delay_min":1440,"xp_gain":100,"money_gain":0,"crystal_gain":0,"gfx":"action 6.png","reqlvl":1,"exectime":10},{"id":"86AB8110-BD8D-4DE5-A535-5DCE4EB19452","name":"event10","desc":"Посмотреть фотографии","delay_min":60,"xp_gain":50,"money_gain":0,"crystal_gain":0,"gfx":"action 10.png","reqlvl":1,"exectime":10},{"id":"2461E45B-C109-45EA-9295-91D9685E5651","name":"event1","desc":"Помянуть боевых товарищей","delay_min":1440,"xp_gain":0,"money_gain":0,"crystal_gain":2,"gfx":"action 1.png","reqlvl":2,"exectime":30},{"id":"78AC92A6-76C8-4D74-9001-95C4CBEC8DF8","name":"event7","desc":"Позвонить внуку","delay_min":1440,"xp_gain":900,"money_gain":0,"crystal_gain":0,"gfx":"action 7.png","reqlvl":8,"exectime":80},{"id":"785A09ED-A4FF-4066-8E8B-9D2810219975","name":"event8","desc":"Помочь бабке по хозяйству","delay_min":240,"xp_gain":0,"money_gain":0,"crystal_gain":3,"gfx":"action 8.png","reqlvl":6,"exectime":50},{"id":"9F0FBADB-58B1-4D32-B317-88C9E7732664","name":"event9","desc":"Подремать","delay_min":360,"xp_gain":200,"money_gain":0,"crystal_gain":0,"gfx":"action 9.png","reqlvl":5,"exectime":120},{"id":"50DC67F5-9EEC-49FA-9BFD-3D9A74DFD02C","name":"event13","desc":"Сходить в поликлинику","delay_min":2880,"xp_gain":0,"money_gain":1000,"crystal_gain":3,"gfx":"action 13.png","reqlvl":3,"exectime":200},{"id":"505A0266-322A-422D-A429-EA768DBDB9C8","name":"event12","desc":"Почистить ордена","delay_min":1440,"xp_gain":0,"money_gain":0,"crystal_gain":2,"gfx":"action 12.png","reqlvl":1,"exectime":1},{"id":"42E71D8A-AB18-4BBA-9515-F227A7B3909C","name":"event11","desc":"Почитать книгу","delay_min":240,"xp_gain":0,"money_gain":0,"crystal_gain":1,"gfx":"action 11.png","reqlvl":5,"exectime":60},{"id":"F40FDAC0-ABB3-47D9-952B-B28FF1EE5493","name":"event14","desc":"Покормить кота","delay_min":360,"xp_gain":0,"money_gain":1000,"crystal_gain":0,"gfx":"action 14.png","reqlvl":6,"exectime":30}]';
var itemsVar = '[{"id":"6ED7C938-E203-4D30-88D1-0BF07C1823C9","type":"weap","price":2400,"pricecrys":48,"name":"Minigun","desc":"Миниган - многоствольный скорострельный пулемёт==построенный по схеме Гатлинга==магазин 100 патронов","gfx":"gun3","reqlvl":7},{"id":"68AFAEDC-B3E0-401E-9E1A-E272084F2E11","type":"weap","price":-1,"pricecrys":-1,"name":"Rifle","desc":"Старое дедовское ружьишко","gfx":"gun0","reqlvl":-1},{"id":"ADDE46AE-5172-4998-A040-8A30208F82F5","type":"weap","price":8000,"pricecrys":160,"name":"Grenade launcher","desc":"Гранатомёт - ручной многозарядный==полуавтоматический гранатомет==3 снаряда","gfx":"gun4","reqlvl":10},{"id":"099C7C92-CE98-4271-AB3D-26D01CD14EA5","type":"weap","price":30000,"pricecrys":600,"name":"Plazma Cannon","desc":"Лазерная винтовка - энергетическое оружие==разработанное в центре Сколково","gfx":"gun5","reqlvl":15},{"id":"5D1C0768-4641-4BCB-A11C-BC28FDF5E8DA","type":"boost","price":150,"pricecrys":-1,"name":"Tablets","desc":"Биодобавки|Таблетка: ускоряет деда== и делает неуязвимым на 5 секунд.==[Улучшение]==Продолжительность + 1 секунда.","gfx":"booster1","reqlvl":1},{"id":"502C9C7F-6844-4F80-98A8-FC47282EBA47","type":"app.hat","price":3200,"pricecrys":-1,"name":"Appearence.Hat2","desc":"Боевая каска.==Осталась со времён войны.","gfx":"hat2","reqlvl":-1},{"id":"F54396E1-7C3B-4AE2-A6CC-CA1FD5FE9978","type":"app.hat","price":8500,"pricecrys":-1,"name":"Appearence.Hat4","desc":"Молодёжная кепка.==Внучок оставил однажды и забыл забрать.","gfx":"hat4","reqlvl":-1},{"id":"20D318C0-4633-41D0-B406-FD34485A88BE","type":"app.hat","price":1500,"pricecrys":-1,"name":"Appearence.Hat1","desc":"Старая добрая ушаночка.","gfx":"hat1","reqlvl":-1},{"id":"55FDBF00-18D5-4166-8CAA-EA857282A1CD","type":"weap","price":1300,"pricecrys":26,"name":"AK-74","desc":"Калаш|АК-47 - автомат был сконструирован==Михаилом Тимофеевичем Калашниковым==Увеличенный магазин: 50 патронов","gfx":"gun2","reqlvl":4},{"id":"AC2FBF7D-C1C3-436E-9143-62B214E84BED","type":"app.hat","price":5300,"pricecrys":-1,"name":"Appearence.Hat3","desc":"Вязаная шапка.==Сделана бабкой с любовью.","gfx":"hat3","reqlvl":-1},{"id":"9BC2F82D-3E58-4C4A-8B9A-5DB44AF8007C","type":"boost","price":100,"pricecrys":-1,"name":"Magnet","desc":"Магнит|Магнит: притягивает монеты прямо в карман.==Действует 40 секунд.==[Улучшение]==Продолжительность + 5 секунд==Дистанция подбора увеличена.","gfx":"booster2","reqlvl":1},{"id":"3AE0E027-3DAD-4F2E-A212-69A1E255F1A0","type":"app.hat","price":13000,"pricecrys":-1,"name":"Appearence.Hat6","desc":"Ковбойская шляпа.==Сын привёз из командировки в Америку.","gfx":"hat6","reqlvl":-1},{"id":"ACEB3015-EB8A-4A64-940F-2691A4E0446D","type":"app.hat","price":10000,"pricecrys":-1,"name":"Appearence.Hat5","desc":"Подарок от старого товарища Брюса.","gfx":"hat5","reqlvl":-1},{"id":"4E8B719A-899C-4891-9D99-E802703DE82E","type":"boost","price":500,"pricecrys":-1,"name":"Health","desc":"Больше ЖЫЗНИ|Сердце: лечит на 1 жизнь==[Улучшение]==лечит на 2 жизни","gfx":"booster4","reqlvl":1},{"id":"49834C28-2216-4FF9-93AF-557E9CF1C986","type":"boost","price":600,"pricecrys":-1,"name":"Double","desc":"В два раза больше монет|Счастливая монетка: ==Выпадает больше золота. Действует 15 секунд.==[Улучшение]==Продолжительность + 3 секунды.==+225% золота.","gfx":"booster3","reqlvl":-1},{"id":"105A3B3C-160C-4355-AB38-9F107DB5A831","type":"boost","price":300,"pricecrys":-1,"name":"MarioStar","desc":"Неуязвимость!|Глушитель от «Волги»:==позволяет деду летать в течение 9 секунд.==[Улучшение]==Продолжительность + 2 секунды.","gfx":"booster5","reqlvl":1},{"id":"BCEB6650-A98F-4AFA-A0FA-102BC2FBC1AD","type":"weap","price":600,"pricecrys":12,"name":"PPS","desc":"ППШ|Пистолет-пулемёт Шпагина==магазин 20 патронов","gfx":"gun1","reqlvl":2},{"id":"EC8B0A97-C84C-4325-B600-16EDC6F4CE2A","type":"boost","price":400,"pricecrys":8,"name":"Magnet$2","desc":"Магнит|Магнит: притягивает монеты прямо в карман.==Действует 40 секунд.==[Улучшение]==Продолжительность + 15 секунд==Дистанция подбора увеличена.","gfx":"booster2","reqlvl":4},{"id":"0B97B8DF-372A-4230-BD08-FCB8E7453BE1","type":"boost","price":2000,"pricecrys":40,"name":"Magnet$4","desc":"Магнит|Магнит: притягивает монеты прямо в карман.==Действует 40 секунд.==[Улучшение]==Продолжительность + 25 секунд==Дистанция подбора увеличена.","gfx":"booster2","reqlvl":8},{"id":"47FA0935-0CC3-4F23-A027-2649E81BBA92","type":"boost","price":800,"pricecrys":16,"name":"Magnet$3","desc":"Магнит|Магнит: притягивает монеты прямо в карман.==Действует 40 секунд.==[Улучшение]==Продолжительность + 20 секунд==Дистанция подбора увеличена.","gfx":"booster2","reqlvl":6},{"id":"5EF89B3A-A758-4DFA-A952-63538BF1907E","type":"boost","price":200,"pricecrys":4,"name":"Magnet$1","desc":"Магнит|Магнит: притягивает монеты прямо в карман.==Действует 40 секунд.==[Улучшение]==Продолжительность + 10 секунд==Дистанция подбора увеличена.","gfx":"booster2","reqlvl":2},{"id":"1E76FCE6-457D-4EF1-A66E-6A275013937D","type":"boost","price":1800,"pricecrys":24,"name":"Tablets$3","desc":"Биодобавки|Таблетка: ускоряет деда==и делает неуязвимым на 5 секунд.==[Улучшение]==Продолжительность + 4 секунда.","gfx":"booster1","reqlvl":9},{"id":"3B6692F2-5ED9-420D-8A03-2C6FED5F5C32","type":"boost","price":600,"pricecrys":12,"name":"Tablets$2","desc":"Биодобавки|Таблетка: ускоряет деда== и делает неуязвимым на 5 секунд.==[Улучшение]==Продолжительность + 3 секунды.","gfx":"booster1","reqlvl":6},{"id":"095B6806-CDAA-4784-AB43-2CB2B5C2B66E","type":"boost","price":300,"pricecrys":6,"name":"Tablets$1","desc":"Биодобавки|Таблетка: ускоряет деда== и делает неуязвимым на 5 секунд.==[Улучшение]==Продолжительность + 2 секунды.","gfx":"booster1","reqlvl":3},{"id":"F33D13E2-C070-4FA3-AE40-B770D4718473","type":"boost","price":3500,"pricecrys":60,"name":"Tablets$4","desc":"Биодобавки|Таблетка: ускоряет деда== и делает неуязвимым на 5 секунд.==[Улучшение]==Продолжительность + 5 секунд.","gfx":"booster1","reqlvl":12},{"id":"5E575830-911E-41B8-88EF-538F37DF9A7F","type":"boost","price":600,"pricecrys":8,"name":"MarioStar$1","desc":"Неуязвимость!|Глушитель от «Волги»:==позволяет деду летать в течение 9 секунд.==[Улучшение]==Продолжительность + 4 секунды.","gfx":"booster5","reqlvl":3},{"id":"D7B1CFCD-99CB-4A6A-8337-1707BAD25887","type":"boost","price":1000,"pricecrys":20,"name":"Health$1","desc":"Больше ЖЫЗНИ|Сердце: лечит на 1 жизнь==[Улучшение]==лечит на 3 жизни","gfx":"booster4","reqlvl":4},{"id":"4A54E9DC-93B8-4DCB-8B01-33E6AC168E74","type":"boost","price":4000,"pricecrys":80,"name":"Health$3","desc":"Больше ЖЫЗНИ|Сердце: лечит на 1 жизнь==[Улучшение]==лечит на 5 жизней","gfx":"booster4","reqlvl":12},{"id":"7FC75CEE-7E82-4871-B169-C437940C98B8","type":"boost","price":10000,"pricecrys":200,"name":"Health$4","desc":"Больше ЖЫЗНИ|Сердце: лечит на 1 жизнь==[Улучшение]==Восстанавливает здоровье==+Дополнительный слот жизни навсегда.","gfx":"booster4","reqlvl":15},{"id":"38B9E840-F701-4E87-A991-68519C8A95CB","type":"boost","price":5000,"pricecrys":100,"name":"MarioStar$4","desc":"Неуязвимость!|Глушитель от «Волги»:==позволяет деду летать в течение 9 секунд.==[Улучшение]==Продолжительность + 10 секунды.","gfx":"booster5","reqlvl":10},{"id":"5D7B9DE0-A146-43F8-8B22-0FC8875A0BE5","type":"boost","price":2400,"pricecrys":32,"name":"MarioStar$3","desc":"Неуязвимость!|Глушитель от «Волги»:==позволяет деду летать в течение 9 секунд.==[Улучшение]==Продолжительность + 8 секунды.","gfx":"booster5","reqlvl":7},{"id":"E37EBDDF-D155-4C59-A98C-8E73EF3D4D9E","type":"boost","price":1200,"pricecrys":24,"name":"Double$1","desc":"В два раза больше монет|Счастливая монетка: ==Выпадает больше золота. Действует 15 секунд.==[Улучшение]==Продолжительность + 6 секунд.==+250% золота.","gfx":"booster3","reqlvl":4},{"id":"015F93BB-A89B-47E4-8F1B-E13E421B5974","type":"boost","price":4400,"pricecrys":88,"name":"Double$3","desc":"В два раза больше монет|Счастливая монетка: ==Выпадает больше золота. Действует 15 секунд.==[Улучшение]==Продолжительность + 12 секунд.== +300% золота","gfx":"booster3","reqlvl":10},{"id":"4E524D43-9C94-4E4F-B77B-CA2FC46728EB","type":"boost","price":2200,"pricecrys":44,"name":"Double$2","desc":"В два раза больше монет|Счастливая монетка: ==Выпадает больше золота. Действует 15 секунд.==[Улучшение]==Продолжительность + 9 секунд.== +275% золота.","gfx":"booster3","reqlvl":8},{"id":"3F416BFA-8F49-4279-BF26-B5D8BA92A690","type":"boost","price":9000,"pricecrys":180,"name":"Double$4","desc":"В два раза больше монет|Счастливая монетка: ==Выпадает больше золота. Действует 15 секунд.==[Улучшение]==Продолжительность + 15 секунд.== +325% золота","gfx":"booster3","reqlvl":15},{"id":"CEA6B748-2B72-4D7A-9320-5CFF079C640A","type":"boost","price":2000,"pricecrys":40,"name":"Health$2","desc":"Больше ЖЫЗНИ|Сердце: лечит на 1 жизнь.==[Улучшение]==Лечит на 4 жизни.","gfx":"booster4","reqlvl":8},{"id":"39F933BC-11E6-4ABA-8DB8-C3649E428B21","type":"boost","price":1200,"pricecrys":16,"name":"MarioStar$2","desc":"Неуязвимость!|Глушитель от «Волги»:==позволяет деду летать в течение 9 секунд.==[Улучшение]==Продолжительность + 6 секунды.","gfx":"booster5","reqlvl":5}]';
var achsVar = '[{"id":"A5D77986-E2A9-4712-B0FE-F2E3044E5356","name":"Gold medal 1","desc":"Первый бой","gfx":"orden.png"},{"id":"E2CE9CFA-09A4-4BB9-99AE-24CAE2E9A839","name":"Gold medal 2","desc":"Долгий путь 100м","gfx":"orden6.png"},{"id":"8AD0AF15-BAE3-4515-AE72-8930DFA49143","name":"Gold medal 5","desc":"Использовать бустер","gfx":"orden5.png"},{"id":"06D260E8-21E0-49A8-AAD7-2CCDBCEDA1AE","name":"Gold medal 3","desc":"Долгий путь 500м","gfx":"orden10.png"},{"id":"13FB9A76-46C6-4914-A525-308E6EE1D041","name":"Gold medal 4","desc":"Долгий путь 1000м","gfx":"orden11.png"},{"id":"F5FBBD96-4E36-492D-ACCB-D89B90457CC3","name":"Gold medal 6","desc":"10 раз помянул друзей","gfx":"orden2.png"},{"id":"2F0BDF1B-C7B4-40EA-84A6-1AF259D7AD97","name":"Gold medal 7","desc":"Победил первого босса","gfx":"orden.png"},{"id":"F14C0F44-F586-4CE1-A538-073E4DC98589","name":"Gold medal 9","desc":"10 дней без перерыва","gfx":"orden2.png"},{"id":"4ECA073B-329C-4578-B705-FDE874400DE6","name":"Gold medal 8","desc":"3 дня без перерыва","gfx":"orden7.png"},{"id":"F52BC29E-88EC-4435-8AE5-8F2568565329","name":"Gold medal 10","desc":"Наказать 100 школьников","gfx":"orden6.png"},{"id":"8E1375CB-D048-4027-9890-AD0BC7E9630E","name":"Gold medal 11","desc":"Наказать 200 школьников","gfx":"orden12.png"}]';

function checkDb ()
{
   /* azureclient.invokeApi("givemoney0xff", {
        body: {platformid: "2882845", money: 1000, crystals: 0},
        method: "post"
    }).done(function(r)
    {
        console.log("MONEY GIVE Ok");
    });*/
   //updDb(dbobj);
}




var dbobj =
    [
        {
            tbname: "tb_edevent",
            items:
                [
                    {
                        desc: "Помянуть боевых товарищей",
                        name: "event1",
                        delay_min: 24*60,
                        xp_gain: 0,
                        money_gain: 0,
                        crystal_gain: 2,
                        gfx: "action 1.png",
                        reqlvl: 2,
                        exectime: 30
                    },
                    {
                        desc: "Получить пенсию",
                        name: "event2",
                        delay_min: 48*60,
                        xp_gain: 0,
                        money_gain: 500,
                        crystal_gain: 0,
                        gfx: "action 2.png",
                        reqlvl: 1,
                        exectime: 120
                    },
                    {
                        desc: "Посмотреть новости",
                        name: "event3",
                        delay_min: 6*60,
                        xp_gain: 50,
                        money_gain: 0,
                        crystal_gain: 0,
                        gfx: "action 3.png",
                        reqlvl: 2,
                        exectime: 30
                    },
                    {
                        desc: "Заглянуть в интернет",
                        name: "event4",
                        delay_min: 24*60,
                        xp_gain: 600,
                        money_gain: 0,
                        crystal_gain: 0,
                        gfx: "action 4.png",
                        reqlvl: 7,
                        exectime: 140
                    },
                    {
                        desc: "Постирать мундир",
                        name: "event5",
                        delay_min: 48*60,
                        xp_gain: 0,
                        money_gain: 0,
                        crystal_gain: 8,
                        gfx: "action 5.png",
                        reqlvl: 9,
                        exectime: 120
                    },
                    {
                        desc: "Доесть ужин",
                        name: "event6",
                        delay_min: 24*60,
                        xp_gain: 100,
                        money_gain: 0,
                        crystal_gain: 0,
                        gfx: "action 6.png",
                        reqlvl: 1,
                        exectime: 10
                    },
                    {
                        desc: "Позвонить внуку",
                        name: "event7",
                        delay_min: 24*60,
                        xp_gain: 900,
                        money_gain: 0,
                        crystal_gain: 0,
                        gfx: "action 7.png",
                        reqlvl: 8,
                        exectime: 80
                    },
                    {
                        desc: "Помочь бабке по хозяйству",
                        name: "event8",
                        delay_min: 4*60,
                        xp_gain: 0,
                        money_gain: 0,
                        crystal_gain: 3,
                        gfx: "action 8.png",
                        reqlvl: 6,
                        exectime: 50
                    },
                    {
                        desc: "Подремать",
                        name: "event9",
                        delay_min: 6*60,
                        xp_gain: 200,
                        money_gain: 0,
                        crystal_gain: 0,
                        gfx: "action 9.png",
                        reqlvl: 5,
                        exectime: 120
                    },
                    {
                        desc: "Посмотреть фотографии",
                        name: "event10",
                        delay_min: 60,
                        xp_gain: 50,
                        money_gain: 0,
                        crystal_gain: 0,
                        gfx: "action 10.png",
                        reqlvl: 1,
                        exectime: 10

                    },
                    {
                        desc: "Почитать книгу",
                        name: "event11",
                        delay_min: 4*60,
                        xp_gain: 0,
                        money_gain: 0,
                        crystal_gain: 1,
                        gfx: "action 11.png",
                        reqlvl: 5,
                        exectime: 60

                    },
                    {
                        desc: "Почистить ордена",
                        name: "event12",
                        delay_min: 24*60,
                        xp_gain: 0,
                        money_gain: 0,
                        crystal_gain: 2,
                        gfx: "action 12.png",
                        reqlvl: 1,
                        exectime: 1

                    },
                    {
                        desc: "Сходить в поликлинику",
                        name: "event13",
                        delay_min: 48*60,
                        xp_gain: 0,
                        money_gain: 1000,
                        crystal_gain: 3,
                        gfx: "action 13.png",
                        reqlvl: 3,
                        exectime: 200

                    },
                    {
                        name: "event14",
                        desc: "Покормить кота",
                        delay_min: 6*60,
                        xp_gain: 0,
                        money_gain: 1000,
                        crystal_gain: 0,
                        gfx: "action 14.png",
                        reqlvl: 6,
                        exectime: 30
                    }
                ]

        },
        {
            tbname: "tb_achs",
            items:
                [
                    {
                        name: "Gold medal 1",
                        desc: "Первый бой",
                        gfx: "orden.png"
                    },
                    {
                        name: "Gold medal 2",
                        desc: "Долгий путь 100м", //+
                        gfx: "orden6.png"
                    },
                    {
                        name: "Gold medal 3",
                        desc: "Долгий путь 500м", //+
                        gfx: "orden10.png"
                    },
                    {
                        name: "Gold medal 4",
                        desc: "Долгий путь 1000м",// +
                        gfx: "orden11.png"
                    },
                    {
                        name: "Gold medal 5",
                        desc: "Использовать бустер",
                        gfx: "orden5.png"
                    },
                    {
                        name: "Gold medal 6",
                        desc: "10 раз помянул друзей",
                        gfx: "orden2.png"
                    },
                    {
                        name: "Gold medal 7",
                        desc: "Победил первого босса",
                        gfx: "orden.png"
                    }
                    ,
                    {
                        name: "Gold medal 8",
                        desc: "3 дня без перерыва", //+
                        gfx: "orden7.png"
                    }
                    ,
                    {
                        name: "Gold medal 9",
                        desc: "10 дней без перерыва", //+
                        gfx: "orden2.png"
                    }
                    ,
                    {
                        name: "Gold medal 10",
                        desc: "Наказать 100 школьников", //+
                        gfx: "orden6.png"
                    }
                    ,
                    {
                        name: "Gold medal 11",
                        desc: "Наказать 200 школьников", //+
                        gfx: "orden12.png"
                    }
                ]
        },
        {
            tbname: "tb_items",

            items:
                [
                    {
                        type: tWeapon,
                        price :-1,
                        pricecrys: -1,
                        name:"Rifle",
                        desc:"Старое дедовское ружьишко",
                        gfx: "gun0",
                        reqlvl: -1
                    },
                    {
                        type: tWeapon,
                        price :600,
                        pricecrys: 12,
                        name:"PPS",
                        desc:"ППШ|Пистолет-пулемёт Шпагина==магазин 20 патронов",
                        gfx: "gun1",
                        reqlvl: 2
                    },
                    {
                        type: tWeapon,
                        price: 1300,
                        pricecrys: 26,
                        name: "AK-74",
                        desc: "Калаш|АК-47 - автомат был сконструирован==Михаилом Тимофеевичем Калашниковым==Увеличенный магазин: 50 патронов",
                        gfx: "gun2",
                        reqlvl: 4
                    },
                    {
                        type: tWeapon,
                        price: 2400,
                        pricecrys: 48,
                        name: "Minigun",
                        desc: "Миниган - многоствольный скорострельный пулемёт==построенный по схеме Гатлинга==магазин 100 патронов",
                        gfx: "gun3",
                        reqlvl: 7
                    },
                    {
                        type: tWeapon,
                        price: 8000,
                        pricecrys: 160,
                        name: "Grenade launcher",
                        desc: "Гранатомёт - ручной многозарядный==полуавтоматический гранатомет==3 снаряда",
                        gfx: "gun4",
                        reqlvl: 10
                    },
                    {
                        type: tWeapon,
                        price: 30000,
                        pricecrys: 600,
                        name: "Plazma Cannon",
                        desc: "Лазерная винтовка - энергетическое оружие==разработанное в центре Сколково",
                        gfx: "gun5",
                        reqlvl: 15
                    },
                    {
                        type: tBoost,
                        price: 100,
                        pricecrys: -1,
                        name: "Magnet",
                        desc: "Магнит|Магнит: притягивает монеты прямо в карман.==Действует 40 секунд.==[Улучшение]==Продолжительность + 5 секунд==Дистанция подбора увеличена.",
                        gfx: "booster2",
                        reqlvl: 1
                    },
                    {
                        type: tBoost,
                        price: 200,
                        pricecrys: 4,
                        name: "Magnet$1",
                        desc: "Магнит|Магнит: притягивает монеты прямо в карман.==Действует 40 секунд.==[Улучшение]==Продолжительность + 10 секунд==Дистанция подбора увеличена.",
                        gfx: "booster2",
                        reqlvl: 2
                    },
                    {
                        type: tBoost,
                        price: 400,
                        pricecrys: 8,
                        name: "Magnet$2",
                        desc: "Магнит|Магнит: притягивает монеты прямо в карман.==Действует 40 секунд.==[Улучшение]==Продолжительность + 15 секунд==Дистанция подбора увеличена.",
                        gfx: "booster2",
                        reqlvl: 4
                    },
                    {
                        type: tBoost,
                        price: 800,
                        pricecrys: 16,
                        name: "Magnet$3",
                        desc: "Магнит|Магнит: притягивает монеты прямо в карман.==Действует 40 секунд.==[Улучшение]==Продолжительность + 20 секунд==Дистанция подбора увеличена.",
                        gfx: "booster2",
                        reqlvl: 6
                    },
                    {
                        type: tBoost,
                        price: 2000,
                        pricecrys: 40,
                        name: "Magnet$4",
                        desc: "Магнит|Магнит: притягивает монеты прямо в карман.==Действует 40 секунд.==[Улучшение]==Продолжительность + 25 секунд==Дистанция подбора увеличена.",
                        gfx: "booster2",
                        reqlvl: 8
                    },
                    {
                        type: tBoost,
                        price: 150,
                        pricecrys: -1,
                        name: "Tablets",
                        desc: "Биодобавки|Таблетка: ускоряет деда== и делает неуязвимым на 5 секунд.==[Улучшение]==Продолжительность + 1 секунда.",
                        gfx: "booster1",
                        reqlvl: 1
                    },
                    {
                        type: tBoost,
                        price: 300,
                        pricecrys: 6,
                        name: "Tablets$1",
                        desc: "Биодобавки|Таблетка: ускоряет деда== и делает неуязвимым на 5 секунд.==[Улучшение]==Продолжительность + 2 секунды.",
                        gfx: "booster1",
                        reqlvl: 3
                    },
                    {
                        type: tBoost,
                        price: 600,
                        pricecrys: 12,
                        name: "Tablets$2",
                        desc: "Биодобавки|Таблетка: ускоряет деда== и делает неуязвимым на 5 секунд.==[Улучшение]==Продолжительность + 3 секунды.",
                        gfx: "booster1",
                        reqlvl: 6
                    },
                    {
                        type: tBoost,
                        price: 1800,
                        pricecrys: 24,
                        name: "Tablets$3",
                        desc: "Биодобавки|Таблетка: ускоряет деда==и делает неуязвимым на 5 секунд.==[Улучшение]==Продолжительность + 4 секунда.",
                        gfx: "booster1",
                        reqlvl: 9
                    },
                    {
                        type: tBoost,
                        price: 3500,
                        pricecrys: 60,
                        name: "Tablets$4",
                        desc: "Биодобавки|Таблетка: ускоряет деда== и делает неуязвимым на 5 секунд.==[Улучшение]==Продолжительность + 5 секунд.",
                        gfx: "booster1",
                        reqlvl: 12
                    },
                    {
                        type: tBoost,
                        price: 500,
                        pricecrys: -1,
                        name: "Health",
                        desc: "Больше ЖЫЗНИ|Сердце: лечит на 1 жизнь==[Улучшение]==лечит на 2 жизни",
                        gfx: "booster4",
                        reqlvl: 1
                    },
                    {
                        type: tBoost,
                        price: 1000,
                        pricecrys: 20,
                        name: "Health$1",
                        desc: "Больше ЖЫЗНИ|Сердце: лечит на 1 жизнь==[Улучшение]==лечит на 3 жизни",
                        gfx: "booster4",
                        reqlvl: 4
                    },
                    {
                        type: tBoost,
                        price: 2000,
                        pricecrys: 40,
                        name: "Health$2",
                        desc: "Больше ЖЫЗНИ|Сердце: лечит на 1 жизнь.==[Улучшение]==Лечит на 4 жизни.",
                        gfx: "booster4",
                        reqlvl: 8
                    },
                    {
                        type: tBoost,
                        price: 4000,
                        pricecrys: 80,
                        name: "Health$3",
                        desc: "Больше ЖЫЗНИ|Сердце: лечит на 1 жизнь==[Улучшение]==лечит на 5 жизней",
                        gfx: "booster4",
                        reqlvl: 12
                    },
                    {
                        type: tBoost,
                        price: 10000,
                        pricecrys: 200,
                        name: "Health$4",
                        desc: "Больше ЖЫЗНИ|Сердце: лечит на 1 жизнь==[Улучшение]==Восстанавливает здоровье==+Дополнительный слот жизни навсегда.",
                        gfx: "booster4",
                        reqlvl: 15
                    },
                    {
                        type: tBoost,
                        price: 300,
                        pricecrys: -1,
                        name: "MarioStar",
                        desc: "Неуязвимость!|Глушитель от «Волги»:==позволяет деду летать в течение 9 секунд.==[Улучшение]==Продолжительность + 2 секунды.",
                        gfx: "booster5",
                        reqlvl: 1
                    },
                    {
                        type: tBoost,
                        price: 600,
                        pricecrys: 8,
                        name: "MarioStar$1",
                        desc: "Неуязвимость!|Глушитель от «Волги»:==позволяет деду летать в течение 9 секунд.==[Улучшение]==Продолжительность + 4 секунды.",
                        gfx: "booster5",
                        reqlvl: 3
                    },
                    {
                        type: tBoost,
                        price: 1200,
                        pricecrys: 16,
                        name: "MarioStar$2",
                        desc: "Неуязвимость!|Глушитель от «Волги»:==позволяет деду летать в течение 9 секунд.==[Улучшение]==Продолжительность + 6 секунды.",
                        gfx: "booster5",
                        reqlvl: 5
                    },
                    {
                        type: tBoost,
                        price: 2400,
                        pricecrys: 32,
                        name: "MarioStar$3",
                        desc: "Неуязвимость!|Глушитель от «Волги»:==позволяет деду летать в течение 9 секунд.==[Улучшение]==Продолжительность + 8 секунды.",
                        gfx: "booster5",
                        reqlvl: 7
                    },
                    {
                        type: tBoost,
                        price: 5000,
                        pricecrys: 100,
                        name: "MarioStar$4",
                        desc: "Неуязвимость!|Глушитель от «Волги»:==позволяет деду летать в течение 9 секунд.==[Улучшение]==Продолжительность + 10 секунды.",
                        gfx: "booster5",
                        reqlvl: 10
                    },
                    {
                        type: tBoost,
                        price: 600,
                        pricecrys: -1,
                        name: "Double",
                        desc: "В два раза больше монет|Счастливая монетка: ==Выпадает больше золота. Действует 15 секунд.==[Улучшение]==Продолжительность + 3 секунды.==+225% золота.",
                        gfx: "booster3",
                        reqlvl: -1
                    },
                    {
                        type: tBoost,
                        price: 1200,
                        pricecrys: 24,
                        name: "Double$1",
                        desc: "В два раза больше монет|Счастливая монетка: ==Выпадает больше золота. Действует 15 секунд.==[Улучшение]==Продолжительность + 6 секунд.==+250% золота.",
                        gfx: "booster3",
                        reqlvl: 4
                    },
                    {
                        type: tBoost,
                        price: 2200,
                        pricecrys: 44,
                        name: "Double$2",
                        desc: "В два раза больше монет|Счастливая монетка: ==Выпадает больше золота. Действует 15 секунд.==[Улучшение]==Продолжительность + 9 секунд.== +275% золота.",
                        gfx: "booster3",
                        reqlvl: 8
                    },
                    {
                        type: tBoost,
                        price: 4400,
                        pricecrys: 88,
                        name: "Double$3",
                        desc: "В два раза больше монет|Счастливая монетка: ==Выпадает больше золота. Действует 15 секунд.==[Улучшение]==Продолжительность + 12 секунд.== +300% золота",
                        gfx: "booster3",
                        reqlvl: 10
                    },
                    {
                        type: tBoost,
                        price: 9000,
                        pricecrys: 180,
                        name: "Double$4",
                        desc: "В два раза больше монет|Счастливая монетка: ==Выпадает больше золота. Действует 15 секунд.==[Улучшение]==Продолжительность + 15 секунд.== +325% золота",
                        gfx: "booster3",
                        reqlvl: 15
                    },
                    {
                        type: tApp + tHat,
                        price: 1500,
                        pricecrys: -1,
                        name: "Appearence.Hat1",
                        desc: "Старая добрая ушаночка.",
                        gfx: "hat1",
                        reqlvl: -1
                    },
                    {
                        type: tApp + tHat,
                        price: 3200,
                        pricecrys: -1,
                        name: "Appearence.Hat2",
                        desc: "Боевая каска.==Осталась со времён войны.",
                        gfx: "hat2",
                        reqlvl: -1
                    },
                    {
                        type: tApp + tHat,
                        price: 5300,
                        pricecrys: -1,
                        name: "Appearence.Hat3",
                        desc: "Вязаная шапка.==Сделана бабкой с любовью.",
                        gfx: "hat3",
                        reqlvl: -1
                    },
                    {
                        type: tApp + tHat,
                        price: 8500,
                        pricecrys: -1,
                        name: "Appearence.Hat4",
                        desc: "Молодёжная кепка.==Внучок оставил однажды и забыл забрать.",
                        gfx: "hat4",
                        reqlvl: -1
                    },
                    {
                        type: tApp + tHat,
                        price: 10000,
                        pricecrys: -1,
                        name: "Appearence.Hat5",
                        desc: "Подарок от старого товарища Брюса.",
                        gfx: "hat5",
                        reqlvl: -1
                    },
                    {
                        type: tApp + tHat,
                        price: 13000,
                        pricecrys: -1,
                        name: "Appearence.Hat6",
                        desc: "Ковбойская шляпа.==Сын привёз из командировки в Америку.",
                        gfx: "hat6",
                        reqlvl: -1
                    }
                ]
        }
    ];


function updDb(o, onlyRead)
{
    /*
     function makeid()
     {
     var text = "";
     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

     for( var i=0; i < 5; i++ )
     text += possible.charAt(Math.floor(Math.random() * possible.length));

     return text;
     }


     for (var i =0; i < 1000; ++i) {

     var obj = {
     name: makeid(),
     last_name: makeid(),
     vkapi: Math.floor((Math.random()*50000000)).toString(),
     money: 0,
     crystals: 0,
     xp: 0,
     lvl: Math.floor(Math.random()*20),
     energy: 0,
     maxdistance: Math.random()*10000
     }

     azureclient.getTable("tb_players").insert(obj);
     }
     */

    for (var i = 0; i < o.length; ++i)
    {
        var tname = o[i].tbname;
        var t = window.azureclient.getTable(tname);
        for (var j = 0; j < o[i].items.length; ++j)
        {
            var s = o[i].items[j];
            function xx(someobj, table)
            {
                var whereobj;
                if (o[i].items[j].id)
                    whereobj ={
                        id: o[i].items[j].id
                    }; else
                    whereobj ={
                        name: o[i].items[j].name
                    };

                table.where(whereobj).read().done(function(results)
                {
                    if (results.length > 0) {
                        someobj.id = results[0].id;
                        table.update(someobj);
                    } else {
                        table.insert(someobj);
                    }}, function (err) {
                    console.log("Error: " + err);

                });
            }
            xx(s, t);
        }
    }


};
/**
 * Created by KURWINDALLAS on 20.03.2015.
 */

function getParameterByName(name, url) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

getDedImage = function (ava) {

    if (shopStage.transScreen) shopStage.transScreen.visible = false;
    if (ava) {
        var w = 300;
        var h = 365;
        var ox = -55;
        var oy = -120;
    } else {
        w = SCR_WIDTH / 2;
        h = SCR_HEIGHT;
        ox = 0;
        oy = 0;
    }

    var bb = CObj.getById("photo");
    var ab = CObj.getById("ava");

    bb.textField.alpha = 0;
    ab.textField.alpha = 0;


    if (ava) {
        CObj.getById("photo").gfx.visible = false;
        CObj.getById("ava").gfx.visible = false;
        CObj.getById("bgshopded").gfx.visible = false;
    }

    var r = new PIXI.RenderTexture(w, h);
    renderer.render(stage, true);

    var _matrix = new PIXI.Matrix();
    _matrix.translate(ox, oy);
    r.render(SM.inst.superStage, _matrix);

    var str = r.getBase64();
    r.destroy(true);
    if (ava) {
        CObj.getById("bgshopded").gfx.visible = true;
        CObj.getById("bback").gfx.visible = true;
        CObj.getById("ava").gfx.visible = true;
    }
    if (shopStage.transScreen) shopStage.transScreen.visible = true;
    return str;
}


uploadPhoto = function (id, ava, endCB) {

    var str = getDedImage(ava);
   //window.location = str;
    str = str.replace(/^data:image\/(png|jpg);base64,/, "");
    if (ava) var method ='photos.getProfileUploadServer'; else
        method = 'photos.getWallUploadServer';
    VK.api(method, {uid: id}, function (resp) {
        var uplurl = resp.response.upload_url;//.replace('http://','https://');

        var hash = getParameterByName("hash", uplurl);
        var rhash = getParameterByName("rhash", uplurl);
        $.ajax({
            type: "POST",
            url: 'upload.php',
            data: {uploadUrl: uplurl, photo: str},
            dataType: "text"
        }).success(function (res) {
            var obj = JSON.parse(res);
            if (ava) {
                VK.api('photos.saveProfilePhoto',
                    {
                        server: obj.server,
                        photo: obj.photo,
                        hash: obj.hash
                    }, function (data) {

                        console.log("SSS");
                    },
                    function (err) {
                        if (endCB)endCB();
                        console.log("SSS");
                    });
            } else {
                VK.api('photos.saveWallPhoto', {
                    uid: vkparams.viewerid,
                    server: obj.server,
                    photo: obj.photo,
                    hash: obj.hash
                }, function (data) {
                    if (data.response) {

                        var pid = data.response[0].id;//   VK.addCallback('onWallPostSave', app.onWallPost);
                        //  VK.addCallback('onWallPostCancel', app.onWallPost);

                        VK.api('wall.post',
                            {
                                owner_id: vkparams.viewerid,
                                message: "Спасибо деду за селфи",
                                attachments: pid
                            }, function (data) {
                                if (endCB)endCB();
                                console.log("SSS");
                            },
                            function (err) {
                                if (endCB)endCB();
                                console.log("SSS");
                            });
                    }
                });
            }
            console.log("");
        }).error(function (res) {
            console.log("ERROR UPLOAD");
            if (endCB)endCB();
        });
        //post(r.response.upload_url, {photo: s}, "post");
        //console.log("ERROR GET WAfffLL UPLOAD SERV");
    });
};


function post(path, params, method) {
    method = method || "post";

    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}PauseTimer = function()
{
}

PauseTimer.paused = false;
PauseTimer.pauseStartedAt = 0;
PauseTimer.totalPauseTime = 0;

PauseTimer.getTimer = function()
{
    return window.time - PauseTimer.totalPauseTime;
}
PauseTimer.isPaused = function()
{
    return PauseTimer.paused;
}

PauseTimer.pause = function()
{
    PauseTimer.pauseStartedAt = window.time;
    TweenMax.pauseAll();
    PauseTimer.paused = true;
}

PauseTimer.resume = function()
{
    if (!PauseTimer.paused) return;
    PauseTimer.totalPauseTime += (window.time - PauseTimer.pauseStartedAt);
    TweenMax.resumeAll();
    PauseTimer.paused = false;
};
window.initialWidth = 800;
window.initialHeight = 600;

if (window.MOBILE) {
    window.SCR_WIDTH = 1024;
    window.SCR_HEIGHT = 576;
} else {
    window.SCR_WIDTH = 800;
    window.SCR_HEIGHT = 600;
}
LevelManager.levelLoadOffsetX = (window.SCR_WIDTH - window.initialWidth) / 2;
LevelManager.levelLoadOffsetY = (window.SCR_HEIGHT - window.initialHeight) / 2;

window.SCR_SCALE = 1.0;
window.FRAME_RATE = 60;
window.date = new Date();
function isSafari() {
    return /^((?!chrome).)*safari/i.test(navigator.userAgent);
}

var loadingState = "prepreload";

window.openSponsorWindow = null;
window.focus();
var assetsLoaded = 0;
var preloaderAsset = [
    "imgtps/preloader.json"
];
window.addScale = 1;
window.renderer = new PIXI.autoDetectRenderer(window.SCR_WIDTH, window.SCR_HEIGHT);

window.loader = new PIXI.AssetLoader(preloaderAsset);
window.loader.onComplete = preloaderLoaded;
window.loader.load();
new PlayerData();

$(document).bind('contextmenu', function () {
    return false;
});
window.apiid = 4654201;
if (VK) {
    VK.init({apiId: window.apiid}, function () {
    }, function () {
    });
}

function order(item) {
    var params = {
        type: 'item',
        item: item
    };
    window.currentOrder = item;
    VK.callMethod('showOrderBox', params);
}

function orderSuccess(order_id) {
    var amount = 0;
    if (window.currentOrder == "item1") {
        window.currentOrder = null;
        PlayerData.inst.playerItem.money += 1200;
    }
    if (window.currentOrder == "item2") {
        window.currentOrder = null;
        PlayerData.inst.playerItem.money += 6000;
    }
    if (window.currentOrder == "item3") {
        window.currentOrder = null;
        PlayerData.inst.playerItem.money += 32000;
    }
    if (window.currentOrder == "item4") {
        window.currentOrder = null;
        PlayerData.inst.playerItem.crystals += 12;
    }
    if (window.currentOrder == "item5") {
        window.currentOrder = null;
        PlayerData.inst.playerItem.crystals += 60;
    }
    if (window.currentOrder == "item6") {
        window.currentOrder = null;
        PlayerData.inst.playerItem.crystals += 320;
    }
    if (window.currentOrder == "item7") {
        window.currentOrder = null;
        PlayerData.inst.playerItem.energy += 10;
    }

    PlayerData.inst.savePlayerData();

    shopStage.updateStatsPanel();

    if (VK.orderComplete)
        VK.orderComplete(order_id);
}

VK.addCallback('onOrderSuccess', orderSuccess);

VK.addCallback('onOrderFail', function () {
    if (VK.orderFail) {
        VK.orderFail();
        VK.orderFail = null;
    }
});
VK.addCallback('onOrderCancel', function () {
    if (VK.orderCancel) {
        VK.orderCancel();
        VK.orderCancel = null;
    }
});

function showADs2() {
    var user_id = vkparams.viewerid; //id пользователя
    var app_id = window.apiid; //id вашего приложения
    var a = new VKAdman();
    a.onNoAds(function () {
        console.log("Adman: No ads");
    });
    a.onStarted(function () {
        console.log("Adman: Started");
    });
    a.onCompleted(function () {
        console.log("Adman: Completed");
    });
    a.onSkipped(function () {
        console.log("Adman: Skipped");
    });
    a.onClicked(function () {
        console.log("Adman: Clicked");
    });
// a.setupPreroll(app_id, {preview: 8}); //для проверки корректности работы рекламы
    a.setupPreroll(app_id);
    admanStat(app_id, user_id);
}


function showADs() {
    var div = document.createElement('div');
    div.id = "vk_ads_55316";
    div.setAttribute("style", "position:absolute;left:0%;top:0%;");

//Вставляем на страницу
    document.body.appendChild(div);

    setTimeout(function () {


        var adsParams = {"ad_unit_id": 55316, "ad_unit_hash": "d4685898a5210c69b772bf2ab6fb0571"};

        function vkAdsInit() {
            VK.Widgets.Ads('vk_ads_55316', {}, adsParams);
        }

        if (window.VK && VK.Widgets) {
            vkAdsInit();
        } else {
            if (!window.vkAsyncInitCallbacks) window.vkAsyncInitCallbacks = [];
            vkAsyncInitCallbacks.push(vkAdsInit);
            var protocol = ((location.protocol === 'https:') ? 'https:' : 'http:');
            var adsElem = document.getElementById('vk_ads_55316');
            var scriptElem = document.createElement('script');
            scriptElem.type = 'text/javascript';
            scriptElem.async = true;
            scriptElem.src = protocol + '//vk.com/js/api/openapi.js?116';
            adsElem.parentNode.insertBefore(scriptElem, adsElem.nextSibling);
        }
    }, 0);
}

function preloaderLoaded() {
    window.stage = new PIXI.Stage(0xffffff);

    window.px = SCR_WIDTH;
    window.py = SCR_HEIGHT;
    window.loadingScreen = new PIXI.Graphics();
    window.preloaderBg = new PIXI.DisplayObjectContainer();
    var init_scale = 1.1;
    if (window.MOBILE) init_scale = 1.3;
    var fg = crsp("1st plan");
    fg.x = SCR_WIDTH / 2;
    if (window.MOBILE)
        fg.anchor.y = 0.44;
    fg.y = SCR_HEIGHT / 2;
    fg.scale.x = init_scale;
    fg.scale.y = init_scale;
    var bg = crsp("background");
    bg.x = SCR_WIDTH / 2;
    bg.y = SCR_HEIGHT / 2;
    bg.scale.x = init_scale;
    bg.scale.y = init_scale;
    preloaderBg.addChild(bg);
    preloaderBg.addChild(fg);

    var bgBar = crsp("loading bar");
    bgBar.x = SCR_WIDTH / 2;
    bgBar.y = SCR_HEIGHT / 2 + 160;
    preloaderBg.addChild(bgBar);
    SM.inst.addLayersToStage();
    SM.inst.superStage.addChild(preloaderBg);
    var barLine = crsp("loading bar line");
    barLine.x = SCR_WIDTH / 2;
    barLine.y = SCR_HEIGHT / 2 + 160;
    window.pbWidth = barLine.width;
    barLine.mask = new PIXI.Graphics();
    barLine.mask.x = -pbWidth / 2;
    window.progressMask = barLine.mask;
    barLine.addChild(barLine.mask);
    preloaderBg.addChild(barLine);
    SM.inst.addLayersToStage();
    SM.inst.superStage.addChild(loadingScreen);
    if (MOBILE) LevelManager.levFolder = "levels_mobile/"; else
        LevelManager.levFolder = "levels/";

    window.loadingState = "loading";
    window.assetsToLoader = [
        LevelManager.levFolder + "helpded.json",
        LevelManager.levFolder + "energywindow.json",
        LevelManager.levFolder + "settings.json",
        LevelManager.levFolder + "levelpremium.json",
        LevelManager.levFolder + "levelup.json",
        LevelManager.levFolder + "levach.json",
        LevelManager.levFolder + "levshop.json",
        LevelManager.levFolder + "hud.json",
        LevelManager.levFolder + "plantPart1.json",
        LevelManager.levFolder + "plantPart2.json",
        LevelManager.levFolder + "levelmenu.json",
        LevelManager.levFolder + "levelwin.json",
        LevelManager.levFolder + "levelgameover.json",
        LevelManager.levFolder + "rotatescreen.json",
        LevelManager.levFolder + "levchar.json",
        LevelManager.levFolder + "levscore.json",
        LevelManager.levFolder + "upperPanel.json",
        LevelManager.levFolder + "loading.json",
        "imgtps/comix.json",
        "imgtps/bg.json",
        "imgtps/guiatlas.json",
        "imgtps/pussyatlas.json",
        "imgtps/dedgamedesc.xml",
        "imgtps/dedgamecaps.xml",
        "imgtps/dedgameXP.xml",
        "imgtps/skeleton.json",
        "imgtps/boss1.json",
        "imgtps/bird.json"
    ];

    window.prevW = window.innerWidth;
    window.prevH = window.innerHeight;

    window.loader = new PIXI.AssetLoader(assetsToLoader);
    document.body.appendChild(renderer.view);

    PIXI.scaleModes.DEFAULT = 0;

    window.charStage = new CharStage();
    window.comixStage = new ComixStage();
    //window.scoreStage = new ScoreStage();
    window.gameStage = new GameStage();
    window.achStage = new AchStage();
    window.shopStage = new ShopStage();

    requestAnimFrame(animate);

    window.pool = new ZPool();
    FRAME_DELAY = 1000 / FRAME_RATE;
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('resizeend', onWindowResize, false);
    rescale();
    onWindowResize();
    window.lastLoop = 0;

    assetsButSoundsLoaded();

    loader.onComplete = function () {
        window.loaded = true;
        console.log("gfx loaded");
        window.gfxLoaded = true;
        onAssetsLoaded();
    };
    loader.load();
    loader.onProgress = onAssetsProgress;
}


function onAssetsProgress(evt) {
    console.log(window.assetsLoaded.toString() + " asset loaded");

    window.assetsLoaded++;
    if (evt.json) {
        if (evt.json.objects != undefined) {
            LevelManager.levels[evt.url] = evt.json;
        }
    }
}

function assetsButSoundsLoaded() {
    ZSound.soundLoadedFunction = onAssetsLoaded;

    ZSound.Init([

        {id: "jump2", src: "jump2.ogg"},
        {id: "lazer", src: "Vystrel_lazer.ogg"},
        {id: "mini", src: "Vystrel_minigan.ogg"},
        {id: "ochered", src: "Vystrel_ochered.ogg"},
        {id: "rifle", src: "rifle.ogg"},

        {id: "m_room", src: "PostRoom.ogg"},
        {id: "m_ded", src: "Dedushka.ogg"},
        {id: "coin", src: "Pickup_Coin66.ogg"},
            {id: "CLICK", src: "CLICK2.ogg"},
        {id: "jump", src: "jump.ogg"},
        {id: "levelup", src: "levelup.ogg"},
        {id: "buy", src: "buy.ogg"},
        {id: "losing", src: "losing.ogg"},
        {id: "grenade", src: "grenade.ogg"},
        {id: "vzbodritsa", src: "vzbodritsa.ogg"}
    ]);
}


function onAssetsLoaded() {
    if (!window.dbinit || ZSound.loaded != true || !window.gfxLoaded) return;

    rp(preloaderBg);
    loadingState = "game";
    rp(loadingScreen);
    loadingScreen = null;

    preloaderBg = null;

    var x = PIXI.TextureCache["1st plan.png"];
    x.destroy(true);
    window.progressMask = null;
    if (!MOBILE) {
        window.addEventListener("orientationchange", orientchange, false);
        orientchange();
    }
    setTimeout("window.scrollTo(0, 1)", 10);

    var div = document.getElementById('vk_ads_55316');
    if (div)
        div.parentNode.removeChild(div);

    PlayerData.inst.updateEnergy();

    //if (vkparams.registered)
    if (PlayerData.inst.playerItem.maxdistance == 0)
        SM.inst.openStage(window.comixStage); else
        SM.inst.openStage(window.charStage);
}

function orientchange() {
    var orientation = window.orientation;
    switch (orientation) {
        case 0:
            addRotationText();
            break;
        case 90:
            removeRotationText();
            break;
        case -90:
            removeRotationText();
            break;
    }
}

function removeRotationText() {
    document.body.removeChild(window.rotatebg)
    window.rotatebg = null;
    document.body.removeChild(window.icorotate)
    window.icorotate = null;
}

function addRotationText() {
    if (window.icorotate) return;

    window.rotatebg = document.createElement("img")
    window.rotatebg.setAttribute("src", "rotatebg.png")
    document.body.appendChild(window.rotatebg);

    window.icorotate = document.createElement("img")
    window.icorotate.setAttribute("src", "rotatescreen.png")
    document.body.appendChild(window.icorotate);
    rescale();
}

function applyRatio(displayObj, ratio) {
    if (ratio == 1) return;
    var object = displayObj;

    object.position.x = object.position.x * ratio;
    object.position.y = object.position.y * ratio;

    if (object.children.length == 0) {
        object.scale.x = object.scale.x * ratio;
        object.scale.y = object.scale.y * ratio;
    } else {
        if (CObj.checkType(object, PIXI.Spine) || CObj.checkType(object, PIXI.Sprite) || CObj.checkType(object, PIXI.MovieClip)) {
            object.scale.x = object.scale.x * ratio;
            object.scale.y = object.scale.y * ratio;
        } else
            for (var i = 0; i < object.children.length; i++) {
                applyRatio(object.children[i], ratio);
            }
    }
}

function rescale() {
    rescTimeout = null;
    window.scrollTo(0, 0);

    SCR_SCALE = Math.min(window.innerWidth / SCR_WIDTH, window.innerHeight / SCR_HEIGHT);
    renderer.resize(SCR_WIDTH * SCR_SCALE, SCR_HEIGHT * SCR_SCALE);

    if (SM.inst.superStage) {
        SM.inst.superStage.scale.x = SCR_SCALE;
        SM.inst.superStage.scale.y = SCR_SCALE;
    }
    var ox = window.innerWidth / 2 - SCR_WIDTH * SCR_SCALE / 2;
    var oy = window.innerHeight / 2 - SCR_HEIGHT * SCR_SCALE / 2;
    renderer.view.setAttribute("style", "position:absolute;left:" + ox.toString() + "px;top:" + oy.toString() + "px");

    if (window.icorotate) {
        window.rotatebg.width = window.innerWidth - 2 * ox;
        window.rotatebg.height = window.innerHeight;
        window.rotatebg.setAttribute("style", "position:absolute;left:" + Math.round(ox) + "px;top:0px");

        window.icorotate.width = 325 * SCR_SCALE;
        window.icorotate.height = 325 * SCR_SCALE;
        var lf = Math.round((window.innerWidth / 2));
        var tp = Math.round((window.innerHeight / 2)) - window.icorotate.height / 2;

        window.icorotate.setAttribute("style", "position:absolute;left:" + lf.toString() + "px;top:" + tp.toString() + "px;margin-left:" + (-window.icorotate.width / 2).toString() + "px;");
    }
}

function onWindowResize() {
    if (rescTimeout) clearTimeout(rescTimeout);
    rescTimeout = setTimeout(rescale, 300);
}

function animate() {
    requestAnimFrame(animate);
    var lastTime = window.time;
    window.time = (new Date()).getTime();
    var delta = window.time - lastTime;
    if (delta > 100) delta = 100;
    if (loadingState == "prepreload") {
    } else if (loadingState == "loading") {
        var p = (assetsLoaded / window.assetsToLoader.length);//*0.5 + 0.5*(ZSound.loaded / ZSound.total) + 0.07;
        if (p > 1) p = 1;
        /*  loadingScreen.beginFill(0xAA4444);
         loadingScreen.drawRect(SCR_WIDTH / 2 - 90, SCR_HEIGHT / 2 + 193, 240, 32);
         loadingScreen.endFill();*/
        if (!window.preloaderTime) window.preloaderTime = 0;
        window.preloaderTime += 30;
        var px = Math.cos(window.preloaderTime / 2000) * 5;
        var py = Math.sin(window.preloaderTime / 1600) * 5;
        window.preloaderBg.children[0].x = SCR_WIDTH / 2 + px;
        window.preloaderBg.children[0].y = SCR_HEIGHT / 2 - py / 3;

        window.preloaderBg.children[1].x = SCR_WIDTH / 2 - px;
        window.preloaderBg.children[1].y = SCR_HEIGHT / 2 - py;

        window.progressMask.clear();
        window.progressMask.beginFill(0xFF7777);
        window.progressMask.drawRect(0, -16, (window.pbWidth + 1) * p, 32 - 4);
        window.progressMask.endFill();
    } else if (loadingState == "game") {
        if (SM.inst)
            SM.inst.process();
        var thisLoop = new Date;
        //  fps = 1000 / (thisLoop - lastLoop);
        lastLoop = thisLoop;

        if (isValidDate(window.date)) {
            var t = window.date.getTime();
            window.date = new Date(t + delta);
            //console.log(window.date.getTime() / 1000);
        }
        //  txtFps.setText("FPS: " + parseInt(fps));
    }
    //   applyRatio(stage, SCR_SCALE);
    renderer.render(stage);
    //  applyRatio(stage, 1.0 / (SCR_SCALE));
}