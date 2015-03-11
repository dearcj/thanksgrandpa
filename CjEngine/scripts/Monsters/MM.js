MM = function () {
    this.patterns =
        [
                {mons: ".g..s.gs.l.l.", diff: 1, prob: 1},
                {mons: ".s..s..s..c", diff: 1, prob: 1},
                {mons: ".s00z00s..z", diff: 1, prob: 1},
                {mons: ".b..b..c..b.b.", diff: 1, prob: 1},
                {mons: ".ss..ss.s..l...ss..l.l..s", diff: 1, prob: 1},
                {mons: ".z...c.s.s.sc..", diff: 2, prob: 1},
                {mons: ".l..zz.ss.c.", diff: 1, prob: 1},
                {mons: ".c.gc..", diff: 1, prob: 1},
                {mons: ".c..c..o000s.s", diff: 1, prob: 1},
                {mons: ".z...c.z..", diff: 2, prob: 1},
                {mons: "j", diff: 2, prob: 0.1},
                {mons: ".lbb..c.", diff: 2, prob: 1},
                {mons: ".c..x.x.x.", diff: 2, prob: 1},
                {mons: ".f...z...f..c.", diff: 2, prob: 1},
                {mons: ".l.lz..c..z..c...c..s..l..s.l", diff: 2, prob: 1},
                {mons: ".lsslss0000l00l.l..", diff: 3, prob: 1},
                {mons: ".o..lo..l..", diff: 3, prob: 1},
                {mons: ".c.g..gl", diff: 3, prob: 1},
                {mons: "..f..f.z.o..f..", diff: 3, prob: 1},
                {mons: "jd..df...f.", diff: 4, prob: 0.1},
                {mons: "..dz..d..z.z", diff: 4, prob: 0.1},
                {mons: ".F..l.l.F..l.", diff: 4, prob: 1},
                {mons: ".b.bf..", diff: 4, prob: 0.1},
                {mons: "..s.sss..s..l", diff: 4, prob: 1},
                {mons: "l.l.l...ssl.lbl.l.", diff: 4, prob: 1},
                {mons: "f..c.flf.c00", diff: 5, prob: 1},
                {mons: ".c..c..z..s..sc..sc..sc..", diff: 5, prob: 1},
                {mons: ".f.ffc..c..", diff: 5, prob: 1},
                {mons: ".b..bbb..bbbbbbb..", diff: 5, prob: 0.1},
                {mons: "gg.g...g..g..G.GG.", diff: 5, prob: 1},
                {mons: "zzz.z..G.GG.zzz.", diff: 5, prob: 1},
                {mons: "..ss..ss.s..lll.ss..l...l...s", diff: 6, prob: 1}, //+
                {mons: ".b.bf.x.", diff: 6, prob: 0.1},
                {mons: ".c..c.l..g.g00g", diff: 6, prob: 1},
                {mons: ".c..c..l..g..g..g", diff: 6, prob: 1},
                {mons: "j", diff: 6, prob: 0.1},
                {mons: "..s..s..dss", diff: 6, prob: 0.1},
                {mons: ".b..bbb..bbbbb000bbbbbbb..", diff: 7, prob: 0.1},
                {mons: ".z..zz...zzz...zzzz.", diff: 7, prob: 1},
                {mons: ".czgG.gFl...", diff: 7, prob: 1},
                {mons: ".c.b.cbb..lb.gG.Gg..g.", diff: 8, prob: 1},
                {mons: "o...ss.s.s.d..o.o..", diff: 8, prob: 1},
                {mons: "Fz.Fz.zFz.", diff: 8, prob: 1}
        ];


    this.bosses = [{class: Boss2, dist: 10}, {class: Boss2, dist: 2000}];
    // c l z - преграды
    //s - монстр
    this.monY = 360;
    this.monsterQueue;
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
    var s = [];
    var it = 3000;
    var d = 0; // distance in dots
    var initialD = PlayerData.inst.playerItem.lvl / 4.5 - 0.5;
    for (var i = 0; i < it; ++i) {
        var maxd = 1;
        var distDiff = (d) / 500;
        if (distDiff > 9) distDiff = 9;
        var currDiff = ((Math.sin(d / 50))) * (1 + distDiff * 0.05) + distDiff + initialD;
        var summ = 0;
        for (var j = 0; j < this.patterns.length; ++j) {
            var p = 1 / (Math.abs(this.patterns[j].diff - currDiff) + 1) * this.patterns[j].prob;
            p = Math.pow(p, 1.6);
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

        var inx = j;
        s += this.patterns[inx].mons;
        var ppp = this.patterns[inx].prob1 - this.patterns[inx].prob0;
        console.log(currDiff + " / " + d.toString() + " choose pattern with diff = " + this.patterns[inx].diff.toString() + " with p = " + ppp.toString());

        d += this.patterns[inx].mons.length;
    }

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
    m.maxHp = 70;
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
    m.xp = 25 + LauncherBG.inst.distance * 0.01;
}

MM.prototype.spawnBonusGnome = function (xp) {
    var str = "enemy1_1";
    var m = new BonusMonGnome(SCR_WIDTH + 100, 150, str);
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    //new TweenMax(m, 25, {x: -100, onComplete: function(){m.destroy();}});
    m.maxHp = 400;
    m.hp = m.maxHp;
    m.xp = xp + LauncherBG.inst.distance * 0.01;
}


MM.prototype.spawnJumpMon = function () {
    var str = "enemy1";
    var m = new JumpMon(SCR_WIDTH + 120, this.monY-200, str);
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.av = 0.1*Math.random();
    m.longJump(1, 0.25, -1, -3, 1.2);
    m.maxHp = 170;
    m.hp = m.maxHp;
    m.xp = 10 + LauncherBG.inst.distance * 0.01;
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
    m.xp = 10 + LauncherBG.inst.distance * 0.01;
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
    m.xp = 17 + LauncherBG.inst.distance * 0.01;
}


MM.prototype.spawnGopnick = function (xp) {
    var str = "enemy3";
    var m = new CMonster(SCR_WIDTH + 100, this.monY, str);
    m.rollLeave = true;
    m.jumpTimeCoef = 0.7;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.maxHp = 70;
    m.hp = m.maxHp;
    new TweenMax(m, 1.2, {rotation: -Math.PI / 15});
    m.longJump(1, 0.13, -5 - Math.random() * 2, -16 - Math.random() * 2, 0.95);
    m.xp = 11 + LauncherBG.inst.distance * 0.01;
}

MM.prototype.spawnGopnick2 = function (xp) {
    var str = "enemy3_3";
    var m = new CMonster(SCR_WIDTH + 100, this.monY, str);
    m.rollLeave = true;
    m.jumpTimeCoef = 0.6;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.maxHp = 120;
    m.hp = m.maxHp;
    new TweenMax(m, 1.2, {rotation: -Math.PI / 15})
    m.longJump(1, 0.13, -5 - Math.random() * 2, -16 - Math.random() * 2, 0.95);
    m.xp = 17 + LauncherBG.inst.distance * 0.01;
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
    m.xp = xp + LauncherBG.inst.distance * 0.01;
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


    this.diff = LauncherBG.inst.distance / 1000;
    if (s == "s") this.spawnSimpleMonster(5);
    if (s == "f") this.spawnFatty();
    if (s == "F") this.spawnFatty2();
    if (s == "G") this.spawnGopnick2();
    if (s == "g") this.spawnGopnick();
    if (s == "c") this.spawnCar("car", 40, 0);
    if (s == "l") this.spawnObstacle("luke", 40, 10);
    if (s == "z") this.spawnObstacle("conus", 20, 0, -5);
    if (s == "j") this.spawnBonusGnome(5);
    if (s == "d") this.spawnDrone();
    if (s == "b") this.spawnBarrel("barrel", 20, 0, -5);
    if (s == "x") this.spawnRandomMonster();
    if (s == "0") this.spawnCoin(440);
    if (s == "o") this.spawnJumpMon();
    var p = 0.014;
    var d = 5000;

    if (this.monsterQueue.length == 0) {
        this.noMonsLeft = true;
    }
}

MM.prototype.process = function () {
    var d = window.time;


    var dd = 4;
    var st = Math.floor(LauncherBG.inst.distance / dd);

    if (Math.floor(LauncherBG.inst.distance) % 250 == 0 && Math.random() < 0.5 && d - this.lastSpawnPlane > 60000) {
        this.spawnPlane();
        this.lastSpawnPlane = d;
    }
    if (st != this.prevS) {
        if (!this.currentBoss && this.bosses.length > 0 && (this.prevS * dd - this.bossDistance < this.bosses[0].dist && LauncherBG.inst.distance - this.bossDistance >= this.bosses[0].dist)) {
            var b = this.bosses.shift();
            this.currentBoss = new b.class(SCR_WIDTH + 200, 500, "imgtps/boss1.json");
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
}