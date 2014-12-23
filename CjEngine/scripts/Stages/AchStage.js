





function AchStage() {
    CustomStage.apply(this);
}

extend(AchStage, CustomStage);

AchStage.prototype.onShow = function() {
    this.doProcess = false;
    CustomStage.prototype.onShow.call(this);

    LevelManager.loadLevel("levach", this.onShowContinue);
}

AchStage.prototype.createDesc = function()
{
    var s = crsp("yashick");
    s.interactive = false;
  //  var bg = crsp("yashick");
    s.anchor.x = -0.2;
    s.anchor.y = -0.2;
    var txtName = CTextField.createTextField({align: "left", fontSize: "24"});
    s.addChild(txtName);
    txtName.x = 20;//-bg.width / 2;
    txtName.y = 10;//-bg.height / 2;
    var txtDesc = CTextField.createTextField({align: "left", fontSize: "24"});
    txtDesc.x = 20;//-bg.width / 2;
    txtDesc.y = 10 + 20;//-bg.height / 2;
   // s.visible = false;
    s.addChild(txtDesc);
    s.alpha = 0;
    return s;
}

AchStage.prototype.updateDesc = function(ach)
{
    var tname = achStage.desc.getChildAt(0);
    var tdesc = achStage.desc.getChildAt(1);
    tname.text = ach.name;
    tdesc.text = ach.desc;
    if (ach.desc) tdesc.updateText();
    if (ach.name) tname.updateText();
}

AchStage.prototype.updateAchievements = function()
{
    achStage.desc = achStage.createDesc();
  //  achStage.desc.anchor.x = 1;
   // achStage.desc.anchor.y = 1;
    SM.inst.fg.addChild(achStage.desc);
    achStage.updateDesc(AM.inst.achs[1]);
    for (var i = 0; i < AM.inst.achs.length ;++i)
    {
        var ach = AM.inst.achs[i];


        achObject = new PIXI.Sprite(PIXI.Texture.fromFrame(ach.img+ ".png"));
        achObject.anchor.x = 0.5;
        achObject.anchor.y = 0.5;
        achObject.interactive = true;
        achStage.bar.container.addChild(achObject);
   //    achObject.gfx.hitArea =new PIXI.Rectangle(-150, -150, 300, 300);
        achObject.mouseover = function (evt) {
            achStage.desc.position.x = window.mouseX*SCR_SCALE;
            achStage.desc.position.y = window.mouseY*SCR_SCALE;
            achStage.desc.alpha = 1;
            //    SM.inst.ol.addChild(achStage.desc);
            //achStage.desc.parent.add = true;
        }



        achObject.gfx.mouseout = function (evt) {
            achStage.desc.alpha = 0;
        //    if (SM.inst.ol.children.indexOf(achStage.desc) >= 0)
        //    SM.inst.ol.removeChild(achStage.desc);
            console.log("mouseout");
        }
    }
}

AchStage.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

AchStage.prototype.onShowContinue = function()
{https://github.com/dearcj/thanksgrandpa.git
    achStage.doProcess = true;
    CObj.getById("btnback").click = function(){SM.inst.openStage(charStage);};

    achStage.bar = new CScrollbar(330,332, "", 380, 524);
    achStage.updateAchievements();

}



AchStage.prototype.process = function() {
    CObj.processAll();
  //  if (achStage.desc.visible)
    {
        achStage.desc.position.x = window.mouseX;
       achStage.desc.position.y = window.mouseY;
    }
}
