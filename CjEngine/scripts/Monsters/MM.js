
MM = function() {
 this.levels =
 [
 "s..............s...s...r..s...s...s.....l...r...r...s...l...l...s...c...s..r..c..s..l...c....r...r.......o..l.l.....ss..r.....cccc.....r..l..l..l......A",
 "..............c....cccc....svvv..cc.....c.r..s......cccc...o....1...l...l.vv....l..cc....c..r..r...cc....o...c...a..c...m.......l..l.......s......ssss..l..o......a......s...a...s",
 "..............c..c..ccvvcc..l...y.vv.r.r..l.o...s...sr..c...G.....c..v...vvv...hh..hh..o.....2....h....1....h..h..h..h...m..cccc..s..h..vvv.....cccc..l..l...aa...b.vvv...a..a....1.....u",
 "..............A....rrs..s..p..ppp...1...vvv...G...o....G......1...s..a..a..s....vvvv...p..pcr..p......1.......l..m...Grrsss....vvvrvvcc...s.s...s..s....m.....1....rr..r....m.....ss.......a..llc..ll...cccc....u...s.s.s.....a...ppp..rrr..rrr...z....m...cc0ccc",
 "..............lll....ll..2...lllll...lvv..z...z....m.....0......m...ccc...cc...m...p....p....p.p.p.p..2.rrrr..ssvv........l.l.l.l..cc....cchhh.........2...vvvv....hhhhG.....1...vvv....rrGrm......rrrrrr...p..m....cc0ccc......1.......rrrr...z...z",
 "..............G....A...G...pppp.....1.....2...2...2.zz.0......u..kkkk..kkkkk..d.d.d.....1...z...r.r.rorr..A.droR.....u......R...h.h.h.h..1..z.....1..vvvlll...t....d..d1..d..d..G...A..A...A...o..m.m.m.........1.....rrrr...mm....m....ll......d.d...cccv..d..cccv..cccv....1....ccccc...p....p....o..A....d...A..d",
 "..............i..d.h..dh..dh..ccc...d..G...rhhhh.0..o..vvvv...rmm...1.mm....mm..o..i......i..li...li..l...rrrrk...kkkk...G...ll..m.mc..vvvv...dd.dd.dd....ccc..G...G....i..kk...i..i.R..hvvvvv...p...ll..hcccc......kk.....u....hh...p.p.p.p.o......d.d.d",
 ".................o...o...G...rrrr...RRRR....u....vvvivv..m...m....m...1....w...mmd...0.u....ddk....i.i.i.i.i...k...kk..1..lpp..pp..lpp.kk...0..k.kk....rrrr..dddd..1.....w......kk.p.p.p.p.....ssssss1...G..d..scscs...csc...R..R0..R..1G.....1...0.....G1mcccvvvvv..R..R..R",
 "...............u..u..u.1.u....A....w......1....iii..ii..i..0...A...kkkkk...G...G..kkkk...oRRRRRv.....w....0....v.vvvv..z...ommmm..dd.d.d..mm.pppp.....2...G...hhi.hi.hi.o....ccc..cc..RRR...2....w......1....G...G...cc..G..vvvvv......w..llll..hhhhRRR...A..A...A.RRR.g...A....ccccc...z...zw..0....z....z....z......................0",
 "..............1....1.....1......1.v.v.1..v.v.vv1...v..1...v.vv..1...1v..1...vv....1...cc..cc...1...1....1......1.cc..1....1.vvv..1...1.ccc1",
 "..............s....s.....l....s...u..o..l....l...s...l...u....u.l...s..s..s...l...u....l..l..l..l..u..u..s...s...s....s..u...u....u....s..s..s",
 "..............vs..s..ss..A..a...au...A..a..a..k..k..kk...G..k..r..o..z...r..r..r..z.z..u...vvv..A....z....0..c.c.p..cp...cp.c..A...A...a...G...A...A.a..a..k...k..kkk.kkk..v...vv.v..A.vvv",
 ".............8..9.8.8...9.9.9.9.999.8888.8...88..888.9.99...888..99.99..88.8.8.9889...989.......8.8.9..9.9.8..888.8..8.8..888..9.9.9.8.....9.9.9..99",
 "..............1....z..z..z..z..cc..vvvv...G......2....R....2...o...o...R..R...R...r..r..r..r..m..l.l.l....k..k..k.vvvvvvG.......1...a..a..a...o..1...s..a..a..s....vvvv...p..pcr..p......"];

    this.monsterQueue;
    this.sNormal = 1;
    this.sBoss = 2;
    this.lastStep = 0;
    this.state = this.sNormal;
    this.stepDelay = 330;
}

MM.inst = new MM();


MM.prototype.spawnSimpleMonster = function()
{
    var m = new CMonster(SCR_WIDTH+100,300,"mister chicken");
    m.longJump();

    this.lastSpawnSimple =(new Date()).getTime();
    this.simpleMonsterDelay = Math.random() * 1000 + 2000;
}

MM.prototype.doStep = function()
{
    var s = this.monsterQueue.charAt(0);
    this.monsterQueue = this.monsterQueue.slice(1);

    if (s == "s") this.spawnSimpleMonster();
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

MM.prototype.process = function()
{
    var d = (new Date()).getTime();
    if (this.state == this.sNormal && d - this.lastStep > this.stepDelay)
    {
        this.lastStep = d;
        this.doStep();
    }
}