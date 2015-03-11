var loadingState = "prepreload";

window.openSponsorWindow = null;
window.focus();
var assetsLoaded = 0;

var preloaderAsset = [
    "preloader.png"
];
window.loader = new PIXI.AssetLoader(preloaderAsset);
window.loader.onComplete = preloaderLoaded;
window.loader.load();
dbInit();

window.addScale = 1;
window.SCR_WIDTH = 800;
window.SCR_HEIGHT = 600;
window.SCR_SCALE = 1.0;
window.FRAME_RATE = 60;
window.renderer = new PIXI.autoDetectRenderer(SCR_WIDTH, SCR_HEIGHT);


VK.init({apiId: 4654201}, function () {
    console.log("INIT OK");
}, function () {
    console.log("INIT FAILED");
}, '5.27');

function order(item) {
    var params = {
        type: 'item',
        item: item
    };
    window.currentOrder = item;
    VK.callMethod('showOrderBox', params);
}

VK.addCallback('onOrderSuccess', function (order_id) {
    var amount = 0;
    if (window.currentOrder == "item1") {
        PlayerData.inst.playerItem.money += 100;
    }
    if (window.currentOrder == "item2") {
        PlayerData.inst.playerItem.money += 1200;
    }
    if (window.currentOrder == "item3") {
        PlayerData.inst.playerItem.money += 7000;
    }
    if (window.currentOrder == "item4") {
        PlayerData.inst.playerItem.crystals += 3;
    }
    if (window.currentOrder == "item5") {
        PlayerData.inst.playerItem.crystals += 15;
    }
    if (window.currentOrder == "item6") {
        PlayerData.inst.playerItem.crystals += 80;
    }
    if (window.currentOrder == "item7") {
        PlayerData.inst.playerItem.energy += 1;
    }
    PlayerData.inst.savePlayerData();
    if (VK.orderComplete)
        VK.orderComplete();
});
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

function preloaderLoaded() {

    window.stage = new PIXI.Stage(0xffffff);
    window.loadingScreen = new PIXI.Graphics();
    window.preloaderBg = PIXI.Sprite.fromImage("preloader.png");
    SM.inst.addLayersToStage();
    SM.inst.superStage.addChild(preloaderBg);
    SM.inst.superStage.addChild(loadingScreen);
    requestAnimFrame(animate);

    window.loadingState = "loading";
    window.assetsToLoader = [
        "levels/energywindow.json",
        "levels/settings.json",
        "levels/levelpremium.json",
        "levels/levelup.json",
        "levels/levach.json",
        "levels/levshop.json",
        "levels/mainmenu.json",
        "levels/hud.json",
        "levels/plantPart1.json",
        "levels/plantPart2.json",
        "levels/levelmenu.json",
        "levels/levelselect.json",
        "levels/levelwin.json",
        "levels/levelsoundcheck.json",
        "levels/levelgameover.json",
        "levels/credits.json",
        "levels/wingame.json",
        "levels/rotatescreen.json",
        "levels/levchar.json",
        "levels/levscore.json",
        "levels/upperPanel.json",
        "imgtps/bg.json",
        "imgtps/guiatlas.json",
        "imgtps/pussyatlas.json",
        "imgtps/dedgamedesc.xml",
        "imgtps/dedgamecaps.xml",
        "imgtps/skeleton.json",
        "imgtps/boss1.json",
        "imgtps/bird.json"
    ];

    window.prevW = window.innerWidth;
    window.prevH = window.innerHeight;

    window.loader = new PIXI.AssetLoader(assetsToLoader);
    document.body.appendChild(renderer.view);

    PIXI.scaleModes.DEFAULT = 0;

    window.scoreStage = new ScoreStage();
    window.gameStage = new GameStage();
    window.mainMenu = new MainMenu();
    window.credStage = new Credits();
    //window.winGameStage = new WinGame();
    window.achStage = new AchStage();
    window.levSel = new LevSel();
    window.shopStage = new ShopStage();
    window.charStage = new CharStage();


    window.pool = new ZPool();
    FRAME_DELAY = 1000 / FRAME_RATE;
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('resizeend', onWindowResize, false);
    rescale();
    onWindowResize();
    window.lastLoop = 0;


    loader.onComplete = function()
    {
        window.loaded = true;

        if (window.dbinit && window.loaded)
        {
            //    window.loadingState = "game";
            assetsButSoundsLoaded();
        }
    };
    loader.load();
    loader.onProgress = onAssetsProgress;

    var soundLoadedFunction = null;
}


function onAssetsProgress(evt) {
    window.assetsLoaded++;
    if (evt.json) {
        if (evt.json.objects != undefined) {
            LevelManager.levels[evt.url] = evt.json;
        }
    }
}

function assetsButSoundsLoaded() {
    ZSound.soundLoadedFunction = onAssetsLoaded;

    //onAssetsLoaded();
    ZSound.Init([
        {id: "CLICK", src: "CLICK2.ogg"},
        {id: "jump", src: "jump.ogg"},
        {id: "jump2", src: "jump2.ogg"},
        {id: "lazer", src: "Vystrel_lazer.ogg"},
        {id: "mini", src: "Vystrel_minigan.ogg"},
        {id: "ochered", src: "Vystrel_ochered.ogg"},
        {id: "rifle", src: "rifle.ogg"},
        {id: "levelup", src: "levelup.ogg"},
        {id: "buy", src: "buy.ogg"},
        {id: "losing", src: "losing.ogg"},
        {id: "grenade", src: "grenade.ogg"},
        {id: "vzbodritsa", src: "vzbodritsa.ogg"},
        {id: "coin", src: "Pickup_Coin66.ogg"}
    ]);
}

function onAssetsLoaded() {
    SM.inst.superStage.removeChild(loadingScreen);
    loadingScreen = null;
    preloaderBg.texture.destroy(true);
    SM.inst.superStage.removeChild(preloaderBg);
    preloaderBg = null;
    gameStage.currentLevel = 1;
    var tex = PIXI.Texture.fromImage("preloader.png");
    tex.destroy(true);

   /* $(function() {
        var toolbox = $('body'),
            height = toolbox.height(),
            scrollHeight = toolbox.get(0).scrollHeight;

        toolbox.bind('mousewheel', function(e, d) {
            e.preventDefault();
        });

    });
*/
    window.addEventListener("orientationchange", orientchange, false);
    orientchange();

    window.txtFps = new PIXI.Text("FPS:", {
        fill: "white",
        font: "bold 40px Arial",
        strokeThickness: 8,
        stroke: "black"
    });
    loadingState = "game";
    window.txtFps.position.y = SCR_HEIGHT - 24;
    window.txtFps.scale.x = 0.5;
    window.txtFps.scale.y = 0.5;
    SM.inst.fontLayer.addChild(window.txtFps);

    setTimeout("window.scrollTo(0, 1)", 10);
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
        //    stage.scale.x = SCR_SCALE;
        // stage.scale.y = SCR_SCALE;
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
    window.time = (new Date()).getTime();
    if (loadingState == "prepreload") {
    } else
    if (loadingState == "loading") {
        var p = (assetsLoaded / window.assetsToLoader.length);//*0.5 + 0.5*(ZSound.loaded / ZSound.total) + 0.07;
        if (p > 1) p = 1;
        /*  loadingScreen.beginFill(0xAA4444);
         loadingScreen.drawRect(SCR_WIDTH / 2 - 90, SCR_HEIGHT / 2 + 193, 240, 32);
         loadingScreen.endFill();*/
        loadingScreen.beginFill(0xFF7777);
        loadingScreen.drawRect(SCR_WIDTH / 2 - 92 + 2, SCR_HEIGHT / 2 + 193 + 2, (240 - 4) * p, 32 - 4);
        loadingScreen.endFill();
    } else
    if (loadingState == "game") {
        if (SM.inst)
            SM.inst.process();
        var thisLoop = new Date;
        fps = 1000 / (thisLoop - lastLoop);
        lastLoop = thisLoop;
        txtFps.setText("FPS: " + parseInt(fps));
    }
    //   applyRatio(stage, SCR_SCALE);
    renderer.render(stage);
    //  applyRatio(stage, 1.0 / (SCR_SCALE));
}