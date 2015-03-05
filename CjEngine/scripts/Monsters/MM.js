
MM = function() {
    this.patterns =
    [
        {mons: ".l.l...c..z..c...c..s..l..s...l", diff: 1, prob: 1},
        {mons: ".l..l..l...l..l.l..", diff: 2, prob: 1},
        {mons: ".c.g..gl", diff: 4, prob: 1},
        {mons: "..ss..ss.s..l..ss..l.....l...s", diff: 3, prob: 1},
        {mons: ".f...z...f..c.", diff: 3, prob: 1},
        {mons: "d...f...f.", diff: 4, prob: 0.1},
        {mons: "F..l.lF..l.", diff: 4, prob: 1},
        {mons: "f..c.flf.c.", diff: 5, prob: 1},
        {mons: "..ssss..s..l", diff: 4, prob: 1},
        {mons: "l.l.l...ssl.l.l.l.", diff: 4, prob: 1},
        {mons: ".c..c..z..s..sc..sc..sc..", diff: 5, prob: 1},
        {mons: "ggg...g..g..GGG.", diff: 5, prob: 1},
        {mons: "zzz.z..GGG.zzz.", diff: 5, prob: 1},
        {mons: ".c..c..l..g..g..g", diff: 6, prob: 1},
        {mons: "Fz.Fz.zFz.", diff: 8, prob: 1},
        {mons: "b", diff: 2, prob: 0.1},
        {mons: "b", diff: 6, prob: 0.1},
        {mons: "..dz..d..z.z", diff: 4, prob: 0.1}
    ];

    this.bosses = [{class: Boss1, dist: 5000}, {class: Boss1, dist: 1800}];
    // c l z - преграды
    //s - монстр
    this.monY = 360;
    this.monsterQueue;
    this.sNormal = 1;
    this.sBoss = 2;
    this.lastStep = 0;

    this.currentBoss = null;

    this.state = this.sNormal;
    this.stepDelay = 330;
}

MM.inst = new MM();

MM.prototype.init = function()
{
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


MM.prototype.generateMonsterQueue = function()
{
    var s = [];
    var it = 3000;
    var d = 0; // distance in dots
    var initialD = PlayerData.inst.playerItem.lvl/2;
    for (var i = 0; i < it; ++i)
    {
        var maxd = 2.5;
        var distDiff = (d) / 100;
        if (distDiff > 5) distDiff = 5;
        var currDiff =1 + ((Math.sin(d / 500))*0.5)*maxd + distDiff + initialD;
        console.log(currDiff + " . " + d.toString());
        var summ = 0;
        for (var j = 0; j < this.patterns.length; ++j)
        {
            var p = 1 / (Math.abs(this.patterns[j].diff - currDiff) + 1)*this.patterns[j].prob;
            if (j > 0) {
                this.patterns[j].prob1 = this.patterns[j - 1].prob1 + p;
                this.patterns[j].prob0 = this.patterns[j - 1].prob1;
            } else
            {
                this.patterns[j].prob1 = p;
                this.patterns[j].prob0 = 0;
            }
            summ += p;
        }

        var r = Math.random()*summ;
        for (var j = 0; j < this.patterns.length; ++j)
        {
            if (r >= this.patterns[j].prob0 && r <= this.patterns[j].prob1) break;
        }

        var inx = j;
        s += this.patterns[inx].mons;
        d += this.patterns[inx].mons.length;
    }

    return s;
}

MM.prototype.spawnObstacle = function(clip, offsY, innerOffs, dw)
{
    var m = new CObstacle(SCR_WIDTH+240,450 + 2*offsY,clip, false);
    m.maxHp = 100000000;
    m.hp =  m.maxHp;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;

    m.gfx.anchor.y = 0.5 + offsY / (m.gfx.height /  m.gfx.scale.y);

    m.radius = (m.gfx.width / 2 - 20/ 2)*0.94;
    if (dw)
        m.radius += dw;
        m.offsY = -innerOffs;
    m.colGroup = 0;
    m.allowTrackSpeed = true;
    this.lastSpawnSimple =(new Date()).getTime();
    this.simpleMonsterDelay = Math.random() * 1000 + 2000;
}

MM.prototype.spawnCoin = function(height)
{
    for (var i = 0; i < 5; ++i) {
        var c = new CCoin(SCR_WIDTH + 240, SCR_HEIGHT - height * 50 - i* 50 - 150, 1);

        c.vy = 0;
        c.gravityEnabled = false;
    }
}


MM.prototype.spawnCar = function(clip, offsY, innerOffs)
{
    var m = new CObstacle(SCR_WIDTH+240,450 + 2*offsY,clip, true);
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.maxHp = 80;
    m.hp = m.maxHp;
    m.gfx.anchor.y = 0.5 + offsY / (m.gfx.height /  m.gfx.scale.y);

    m.radius = ((m.gfx.width - 50) / 2)*0.94;
    m.offsY = -innerOffs;
    m.allowTrackSpeed = true;
    m.colGroup = 0;
}

MM.prototype.spawnDrone = function(xp) {
    var  str = "dron";
    var m = new CDrone(SCR_WIDTH+100,80,str);
    m.gfx.anchor.x = 0.5;
    m.vx = -1;
    m.allowTrackSpeed = false;
    m.gravityEnabled = false;
    new TweenMax(m, 1, {y: m.y+80, ease: Sine.easeInOut, yoyo: true, repeat: 10});
    m.maxHp = 180;
    m.hp = m.maxHp;
    m.barOffsetX = 10;
    m.xp = xp + LauncherBG.inst.distance*0.01;
}

MM.prototype.spawnBonusGnome = function(xp) {
    var  str = "enemy1_1";
    var m = new BonusMonGnome(SCR_WIDTH+100,150,str);
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    //new TweenMax(m, 25, {x: -100, onComplete: function(){m.destroy();}});
    m.maxHp = 400;
    m.hp = m.maxHp;
    m.xp = xp + LauncherBG.inst.distance*0.01;
}


MM.prototype.spawnFatty = function(xp)
{
    var str = "enemy1";
    var m = new CMonster(SCR_WIDTH+100,this.monY,str);
    m.rollLeave = true;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.longJump();
    m.maxHp = 100;
    m.hp = m.maxHp;
    m.xp = xp + LauncherBG.inst.distance*0.01;
}

MM.prototype.spawnFatty2 = function(xp)
{
    var str = "enemy1_1";
    var m = new CMonster(SCR_WIDTH+100,this.monY,str);
    m.rollLeave = true;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.longJump();
    m.maxHp = 100;
    m.hp = m.maxHp;
    m.xp = xp + LauncherBG.inst.distance*0.01;
}


MM.prototype.spawnGopnick = function(xp)
{
    var str = "enemy3";
    var m = new CMonster(SCR_WIDTH+100,this.monY,str);
    m.rollLeave = true;
    m.jumpTimeCoef = 0.7;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.longJump();
    m.xp = xp + LauncherBG.inst.distance*0.01;
}

MM.prototype.spawnGopnick2 = function(xp)
{
    var str = "enemy3_3";
    var m = new CMonster(SCR_WIDTH+100,this.monY,str);
    m.rollLeave = true;
    m.jumpTimeCoef = 0.6;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.longJump();
    m.xp = xp + LauncherBG.inst.distance*0.01;
}


MM.prototype.spawnSimpleMonster = function(xp)
{
    var str = "enemy2";
    if (Math.random() > 0.5) str = "enemy2_2";
    var m = new CMonster(SCR_WIDTH+100,this.monY,str);
    m.rollLeave = true;
    m.gfx.scale.x = 0.8;
    m.gfx.scale.y = 0.8;
    m.longJump();
    m.xp = xp + LauncherBG.inst.distance*0.01;
}

MM.prototype.doStep = function()
{
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
    if (s == "f") this.spawnFatty(10);
    if (s == "F") this.spawnFatty2(13);
    if (s == "G") this.spawnGopnick2(17);
    if (s == "g") this.spawnGopnick(10);
    if (s == "c") this.spawnCar("car", 40, 0);
    if (s == "l") this.spawnObstacle("luke", 40, 10);
    if (s == "z") this.spawnObstacle("conus", 20, 0, -5);
    if (s == "b") this.spawnBonusGnome(5);
    if (s == "d") this.spawnDrone(25);

    /*  if (s == "z") spawnVeryRandomZomby();
      if (s == "a") spawnArmoredSimple();
      if (s == "A") spawnArmoredPolice();
      if (s == "w") spawnWorm();
      if (s == "2") spawnJumper();
      if (s == "1") spawnSaw();
      if (s == "0") spawnRocket();
      if (s == "r") spawnRandomMonster();
      if (s == "R") spawnRandomMonster2();
      if (s == "o") spawnMoneyMonster();
      if (s == "b") spawnBoss1();
      if (s == "t") spawnBoss2();
      if (s == "g") spawnBoss3();
      if (s == "l") spawnLadyMonster();
      if (s == "m") spawnMacMonster();
      if (s == "c") spawnChildMonster();
      if (s == "p") spawnPolice();//+
      if (s == "d") spawnDonut();//+
      if (s == "h") spawnHead();//+
      if (s == "i") spawnPirate();//
      if (s == "k") spawnKamikaze();//
      if (s == "G") spawnGrenadeMonster();
      if (s == "v") spawnChildVertical();
      if (s == "u") spawnGroundMonster();
      if (s == "8") spawnDreamLady();
      if (s == "9") spawnDreamPuzan();*/
    var p = 0.014;
    var d = 5000;
   /* if (Main.Instance.gameStage.currentLevel == 14)
    {
        p *= 3.5; d = 4000;
    }*/

   /* if (Math.random() < p)
    {
        if (PauseTimer.getTimer() - lastSpawnYashick > d)
        {
            spawnYashick();
            lastSpawnYashick = PauseTimer.getTimer();
        }
    }*/

    if (this.monsterQueue.length == 0)
    {
        this.noMonsLeft = true;
    }
}

MM.prototype.process = function() {
    var d = window.time;


    /*    if (this.state == this.sNormal && d - this.lastStep > this.stepDelay)
     {
     this.lastStep = d;
     this.doStep();
     }*/

    var dd = 4;
    var st = Math.floor(LauncherBG.inst.distance / dd);
    if (st != this.prevS) {
        if (!this.currentBoss && this.bosses.length > 0 && (this.prevS*dd- this.bossDistance < this.bosses[0].dist && LauncherBG.inst.distance - this.bossDistance >= this.bosses[0].dist))
        {
            var b = this.bosses.shift();
            this.currentBoss = new b.class(SCR_WIDTH+200,500,"imgtps/boss1.json");
            this.currentBoss.showUpAnimation();
        } else
        {
            if (this.currentBoss)
            {
                this.bossDistance += dd;
            }
        }

        if (!this.currentBoss)
        this.doStep();
    }

    this.prevS = Math.floor(LauncherBG.inst.distance / dd);
}