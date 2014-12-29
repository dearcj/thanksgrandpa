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
    s.anchor.x = -0.2;
    s.anchor.y = -0.2;
    var txtName = CTextField.createTextField({align: "left", fontSize: "24"});
    s.addChild(txtName);
    txtName.x = 20;//-bg.width / 2;
    txtName.y = 10;//-bg.height / 2;
    var txtDesc = CTextField.createTextField({align: "left", fontSize: "24"});
    txtDesc.x = 20;//-bg.width / 2;

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
   // achStage.desc = achStage.createDesc();

   // SM.inst.fg.addChild(achStage.desc);//achStage.updateDesc(AM.inst.achs[1]);
    var numColumns = 3;
    for (var i = 0; i < AM.inst.achs.length ;++i)
    {
        var ach = AM.inst.achs[i];
        achObject = new PIXI.Sprite(PIXI.Texture.fromFrame("orden.png"));

        achObject.x = 220 + (i % numColumns)*200;
        achObject.y = 120+Math.floor(i / numColumns)*220;
        achObject.width = 90;
        achObject.scale.y = achObject.scale.x;
        achObject.anchor.x = 0.5;
        achObject.anchor.y = 0.5;
        achObject.interactive = true;


        var txtName = CTextField.createTextField({text: ach.name, align: "left", fontSize: "24"});
        txtName.x = 80;//-bg.width / 2;
        txtName.y = 20 + i*90;//-bg.height / 2;
        var txtDesc = CTextField.createTextField({text: ach.desc, align: "left", fontSize: "24"});
        txtDesc.x = 80;//-bg.width / 2;
        txtDesc.y = 50 + i*90;//-bg.height / 2;
        achStage.bar.container.addChild(txtName);
        achStage.bar.container.addChild(txtDesc);



        achStage.bar.container.addChild(achObject);





    }
    achStage.bar.pos = 0;
}

AchStage.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

AchStage.prototype.onShowContinue = function()
{
    achStage.doProcess = true;
    var btn = CObj.getById("btnback");
    btn.click = function(){
        SM.inst.openStage(charStage);
    };

    achStage.bar = new CScrollbar(400,338, "", SCR_WIDTH, 524, "ordena background 1 px.png");
    achStage.bar.gfx.parent.removeChild(achStage.bar.gfx);
    SM.inst.bg.addChild(achStage.bar.gfx);
    achStage.updateAchievements();
}



AchStage.prototype.process = function() {
    CObj.processAll();
  //  if (achStage.desc.visible)
   // {
    //    achStage.desc.position.x = window.mouseX;
     //  achStage.desc.position.y = window.mouseY;
   // }
}
