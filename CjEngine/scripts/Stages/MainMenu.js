/**
 * Created by Михаил on 27.06.2014.
 */

function MainMenu() {
CustomStage.apply(this);
}

extend(MainMenu, CustomStage);

MainMenu.prototype.onShow = function() {
    CustomStage.prototype.onShow.call(this);
    LevelManager.loadLevel("mainmenu", this.onShowContinue);

}

MainMenu.prototype.onShowContinue = function()
{
    window.loadedMenu = true;
    ZSound.PlayMusic("trackmenu");


    CObj.getById("credits").click = function()
    {
        SM.inst.openStage(credStage);
    }
    mainMenu.muteBtn = CObj.getById("mutebtn");

   mainMenu.muteBtn.click = function () {

       if (ZSound.available)
           ZSound.Mute(); else
           ZSound.UnMute();

       dataStorage.soundEnabled = ZSound.available;
       updateDS();
       gameStage.updateSoundBtn(mainMenu.muteBtn);
    }

  //  window.addRotationText();
    CObj.getById("playgame").click = function (e) {
    /*    if (dataStorage.soundEnabled == undefined)
        {
            LevelManager.loadLevel("levelsoundcheck", mainMenu.soundCheckLoaded, SM.inst.fontLayer);
        } else*/
        SM.inst.openStage(levSel);
    }

    gameStage.updateSoundBtn(mainMenu.muteBtn);

}

MainMenu.prototype.soundCheckLoaded = function ()
{
    CObj.getById("layer").gfx.interactive = true;

    CObj.getById("byes").click = function()
    {
        dataStorage.soundEnabled = ZSound.available;
        updateDS();
        ZSound.UnMute();
        SM.inst.openStage(levSel);
    }

    CObj.getById("bno").click = function()
    {
        dataStorage.soundEnabled = ZSound.available;
        updateDS();
        ZSound.Mute();
        SM.inst.openStage(levSel);
    }
}

MainMenu.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();


}

MainMenu.prototype.process = function() {
    CObj.processAll();

  //  if (CObj.getById("totalscore"))
   // CObj.getById("totalscore").text = window.innerWidth+ " / " + window.innerHeight.toString();
};