var ZSound = {
    available: false,
    loaded : false
};


ZSound.Init = function(manifest) {
    this.available = createjs.Sound.initializeDefaultPlugins();
    if (!this.available) return;

    var audioPath = "res/snd/";
    createjs.Sound.alternateExtensions = ["mp3"];
    ZSound.loaded = 0;
    ZSound.total = manifest.length;
    var handleLoad = function()
    {
        ZSound.loaded++;
        if ( ZSound.loaded == manifest.length) {
            if (ZSound.soundLoadedFunction) ZSound.soundLoadedFunction();
            this.loaded = true;
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
    if (this.available) return;
    this.available = true;

    createjs.Sound.setMute(false);

    /*if (this.musicInstance)
    {
        createjs.Sound.play(this.musicInstance);
    }*/
}

ZSound.Mute = function () {
    this.available = false;

    createjs.Sound.setMute(true);
    /*if (this.musicInstance)
    {
        createjs.Sound.stop(this.musicInstance);
    }*/
}


ZSound.PlayMusicInner = function(snd)
{

    if (this.musicInstanceName == snd && this.musicInstance) return;
    if (this.musicInstance)
    {
     createjs.Sound.stop(this.musicInstance);
    }

    try {
        this.musicInstanceName = snd;
        this.musicInstance = createjs.Sound.play(snd, {interrupt: createjs.Sound.INTERRUPT_NONE, loop:999999});
    } catch (e) {}
}


ZSound.Play = function(snd) {
    if (!this.available) return;
    try {
        createjs.Sound.play(snd, createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    } catch (e) {}
};

