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
    this.eventpl.lastused = new Date();
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
    this.btnReward = new CButton(230, -3, "buy_button");
    this.btnReward.fontSize = 17;
    this.btnReward.gfx.scale.x = 0.8;
    this.btnReward.gfx.scale.y = 0.8;
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
        var timeRes = dateDiff(this.eventpl.lastused, this.event.delay_min);
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

    var gainbgsprite = new PIXI.Sprite(PIXI.Texture.fromFrame(gainbg));
    gainbgsprite.anchor.x = 0.5;
    gainbgsprite.anchor.y = 0.5;
    gainbgsprite.x = 120;
    gainbgsprite.y = 12 - 14;
    this.gfx.addChild(gainbgsprite);

    this.timeleft = CTextField.createTextField({tint: "0x333333", text: "", fontSize: 17, align: "center"});
    this.timeleft.x = 50;
    this.timeleft.y = 27;
    this.gfx.addChild(this.timeleft);

    var tf = CTextField.createTextField({tint: "0x333333", text: gain.toString(), fontSize: 16, align: "center"});
    tf.x = 120;
    tf.y = 3 -14;
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

    gf.click = function()
    {
        if (edeventgui.ready && !pledevent.reward_ready)
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

    var tf = CTextField.createTextField({fontFamily: "dedgamedesc", tint: "0x1111111", text: event.desc, fontSize: 20, align: "center"});
    tf.x = 50;
    tf.y = -55;
    this.gfx.addChild(tf);


    if (this.eventpl.reward_ready)
        this.addRewardButton();

    this.progressbg.visible = false;
    this.progressfore.visible = false;


}