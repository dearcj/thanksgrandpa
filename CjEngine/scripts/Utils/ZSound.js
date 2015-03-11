var ZSound = {
    available: false,
    loaded : false
};

ZSound.Init = function(manifest) {
    ZSound.available = createjs.Sound.initializeDefaultPlugins();
    if (!ZSound.available) return;

    var audioPath = "res/snd/";
    createjs.Sound.alternateExtensions = ["mp3"];
    ZSound.loaded = 0;
    ZSound.total = manifest.length;
    var handleLoad = function()
    {
        ZSound.loaded++;
        if ( ZSound.loaded == manifest.length) {
            if (ZSound.soundLoadedFunction) ZSound.soundLoadedFunction();
            ZSound.loaded = true;
        }
    }
    createjs.Sound.addEventListener("fileload", handleLoad); // call handleLoad when each sound loads

    createjs.Sound.registerManifest(manifest, "res/snd/");
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
};