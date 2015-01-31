/**
 * Created by KURWINDALLAS on 10.12.2014.
 */
extend(CEActionGUI, CObj, true);

function CEActionGUI(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
}

Object.defineProperty(CEActionGUI.prototype, 'pos', {
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
        var r = 58;
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

CEActionGUI.prototype.destroy = function()
{
    this.progressbg = null;
    this.progressfore = null;
    this.icoevent = null;
    this.event = null;
    this.eventpl = null;
    CObj.prototype.destroy.call(this);
}


CEActionGUI.prototype.process= function()
{
    this.updateRecharge();
    CObj.prototype.process.call(this);
}

CEActionGUI.prototype.startAction = function()
{
    this.acting = true;
    /*var b = new PIXI.BlurFilter();
    b.blur = 20;
    SM.inst.ol.filters = [b];*/
    this.progressbg.visible = true;
    this.progressfore.visible = true;
    this.pos = 0;
    new TweenMax(this, 5, {pos: 1, onComplete: this.endAction, onCompleteParams: [this]});
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

    PlayerData.inst.savePlayerEvents();
    PlayerData.inst.savePlayerData();



//    PlayerData.inst.playerItem.xp+=10;
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
    if (d < 0) {
        str = "ГОТОВО";
        this.ready = true;
    }else {
        var str = "ДОСТУПНО ЧЕРЕЗ " + '\n' + (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" +m : m) + " : " + (s < 10 ? "0" + s : s);
        this.ready = false;
    }
    this.timeleft.text = str;
    this.timeleft.updateText();
}

CEActionGUI.prototype.init = function(pledevent)
{
    this.gfx = new PIXI.Sprite(PIXI.Texture.fromFrame("action bg.png"));

    this.icoevent =  new PIXI.Sprite(PIXI.Texture.fromFrame("action.png"));
    this.icoevent.anchor.x = 0.5;
    this.icoevent.anchor.y = 0.5;

    this.progressbg = new PIXI.Sprite(PIXI.Texture.fromFrame("progress bg.png"));
    this.progressbg.anchor.x = 0.5;
    this.progressbg.anchor.y = 0.5;
    this.progressfore = new PIXI.Sprite(PIXI.Texture.fromFrame("progress fore.png"));
    this.progressfore.anchor.x = 0.5;
    this.progressfore.anchor.y = 0.5;
    this.mask = new PIXI.Graphics();
    this.gfx.addChild(this.progressbg);
    this.gfx.addChild(this.progressfore);
    this.gfx.addChild(this.icoevent);
    this.gfx.addChild(this.mask);
    this.gfx.anchor.x = 0.5;
    this.gfx.anchor.y = 0.5;
    this.progressfore.mask = this.mask;
    this.pos = 0.;
    this.updateGraphics();

    var id = pledevent.id_edevent;
    for (var i = 0; i < PlayerData.inst.events.length; ++i) {if (PlayerData.inst.events[i].id == id) break;}


    this.eventpl = pledevent;
    this.event = PlayerData.inst.events[i];

    var gain = 0;
    var gainbg = "";
    if (this.event.xp_gain > 0)
    {
        gain = this.event.xp_gain;
        gainbg = "price star.png";
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

    gainbgsprite.y = 72;
    this.gfx.addChild(gainbgsprite);

    this.timeleft = CTextField.createTextField({text: "ОСТАЛОСЬ 200 МИНУТ", fontSize: 22, align: "center"});
    this.timeleft.x = 50;
    this.timeleft.y = -20;
    this.gfx.addChild(this.timeleft);


    var tf = CTextField.createTextField({text: gain.toString(), fontSize: 22, align: "center"});
    tf.x = 4;
    tf.y = 60;
    this.gfx.addChild(tf);

    var edeventgui = this;
    this.gfx.interactive = true;
    this.gfx.click = function()
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

    var tf = CTextField.createTextField({text: PlayerData.inst.events[i].name.toUpperCase(), fontSize: 22, align: "center"});
    tf.x = 50;//-tf.width / 2;
    tf.y = -45;
    //tf.al
    this.gfx.addChild(tf);

    this.progressbg.visible = false;
    this.progressfore.visible = false;

    this.updateRecharge();
}