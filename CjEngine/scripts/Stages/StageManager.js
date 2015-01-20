/**
 * Created by Михаил on 24.06.2014.
 */


var SM = function() {
    this.fg = new PIXI.DisplayObjectContainer();
    this.bg = new PIXI.DisplayObjectContainer();
    this.ol = new PIXI.DisplayObjectContainer();
    this.guiLayer = new PIXI.DisplayObjectContainer();
    this.fontLayer = new PIXI.DisplayObjectContainer();
//add layers on stage
    this.bg.interactive = true;
    this.fg.interactive = false;
    this.ol.interactive = false;
    this.guiLayer.interactive = true;
    this.fontLayer.interactive = false;

    this.currentStage = null;
    this.transStart = 0;
    this.transTime = 600;
    this.doTrans = false;

    var mouseWheelHandler = function(e)
    {
        if (CObj.objects)
        for (var i = 0; i < CObj.objects.length; ++i)
        {
            if (CObj.checkType(CObj.objects[i], CScrollbar),
                    CObj.objects[i].mover)
            {
                CObj.objects[i].onWheel(e);
            }

        }

    }
    document.addEventListener("mousewheel", mouseWheelHandler, false);


}

SM.inst = new SM();


SM.prototype.addDisableWindow = function(title)
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
        var text = CTextField.createTextField({text: "ХУЙ", fontSize: 25, align: "center"});
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
    stage.addChild(d);
    return g;
}

SM.prototype.addLayersToStage = function()
{
    stage.addChild(this.bg);
    stage.addChild(this.ol);
    stage.addChild(this.fg);
    stage.addChild(this.guiLayer);
    stage.addChild(this.fontLayer);

    this.bg.mousemove = function(md){
        window.mouseX = md.global.x/SCR_SCALE;
        window.mouseY = md.global.y/SCR_SCALE;
    }
}

SM.prototype.fadeBegin = function(newStage) {
        if (this.currentStage) {
            this.currentStage.onHide(newStage);
            this.currentStage.doProcess = false;
        }

        newStage.doProcess = true;
        newStage.onShow();
        this.fadeEnd(newStage);
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
            newStage.onShow();
        }
        newStage.previousStage = this.currentStage;
    }

SM.prototype.deleteMC = function(_do) {
        _do.dispose();
        if (_do.parent)
            _do.parent.removeChild(_do);
        }

