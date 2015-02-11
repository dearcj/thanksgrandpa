/**
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
    this.acting = true;

    this.progressbg.visible = true;
    this.progressfore.visible = true;
    this.pos = 0;
    new TweenMax(this, this.event.exectime, {pos: 1, onComplete: this.endAction, onCompleteParams: [this]});
}

CEActionGUI.prototype.endAction = function(p)
{
    p.progressbg.visible = false;
    p.progressfore.visible = false;

    p.eventpl.lastused = new Date();
    if (p.event.money_gain)
        PlayerData.inst.playerItem.money += p.event.money_gain;
    if (p.event.xp_gain)
        PlayerData.inst.playerItem.xp += p.event.xp_gain;

    if (p.event.crystal_gain)
        PlayerData.inst.playerItem.xp += p.event.crystal_gain;

    incMetric("USED EVENT " + p.event.name);

    PlayerData.inst.savePlayerEvents();
    PlayerData.inst.savePlayerData();
    shopStage.updateStatsPanel();

    p.acting = false;
}


CEActionGUI.prototype.updateRecharge= function()
{
    if (!this.eventpl) return;
    if (!this.eventpl.lastused) d = -10000;
    else {
        var nd = new Date();
        var offs = this.eventpl.lastused.getTimezoneOffset();

        var d = nd.getTime() - this.eventpl.lastused.getTime();
        d = this.event.delay_min * 60 * 1000 - d;

        d /= 1000;

        var h = Math.floor(d / 3600);

        d = d % 3600;

        var m = Math.floor(d / 60);

        d = d % 60;

        var s = Math.floor(d % 60);
    }

    this.timeleft.tint = 0x333333;
    if (d < 0 && this.event.reqlvl <= PlayerData.inst.playerItem.lvl) {
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
            str = "Доступно через " + (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s);
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

    var gainbgsprite = new PIXI.Sprite(PIXI.Texture.fromFrame(gainbg));
    gainbgsprite.anchor.x = 0.5;
    gainbgsprite.anchor.y = 0.5;
    gainbgsprite.x = 140;
    gainbgsprite.y = 12 + 8;
    this.gfx.addChild(gainbgsprite);

    this.timeleft = CTextField.createTextField({tint: "0x333333", text: "", fontSize: 17, align: "center"});
    this.timeleft.x = 50;
    this.timeleft.y = -28;
    this.gfx.addChild(this.timeleft);

    var tf = CTextField.createTextField({tint: "0x333333", text: gain.toString(), fontSize: 16, align: "center"});
    tf.x = 140;
    tf.y = 3 + 8;
    this.gfx.addChild(tf);

    var edeventgui = this;
    //this.gfx.interactive = true;
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

    gf.click = function()
    {
        if (edeventgui.ready)
        {
            edeventgui.startAction();
        }
    }

    this.progressbg.interactive = true;
    this.progressbg.click = this.onclick;
    this.progressbg.tap = this.onclick;
    if (this.eventpl.lastused == null)
    {
        this.pos = 1;
    }

    var tf = CTextField.createTextField({fontFamily: "dedgamedesc", tint: "0x1111111", text: PlayerData.inst.events[i].desc, fontSize: 20, align: "center"});
    tf.x = 50;
    tf.y = -55;
    this.gfx.addChild(tf);

    this.progressbg.visible = false;
    this.progressfore.visible = false;
}