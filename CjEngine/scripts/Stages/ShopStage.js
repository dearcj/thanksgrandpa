/**
 * Created by KURWINDALLAS on 05.12.2014.
 */

function ShopStage() {
    CustomStage.apply(this);
}

extend(ShopStage, CustomStage);

ShopStage.prototype.onShow = function() {

    PlayerData.inst.playerItem.money = 10000;
    PlayerData.inst.playerItem.crystals = 1000;
    azureclient.getTable("tb_players").update(PlayerData.inst.playerItem);//

    LevelManager.loadLevel("levshop", this.onShowContinue);
}

ShopStage.prototype.checkEq = function(item)
{
    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
    {
        if (PlayerData.inst.items_enabled[i].id_item == item.id && PlayerData.inst.items_enabled[i].equipped == true) return true;
    }
    return false;
}

ShopStage.prototype.checkOwned = function(item)
{
    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
    {
        if (item.id == PlayerData.inst.items_enabled[i].id_item) return true;
    }
    return false;
}

ShopStage.prototype.unequipAll = function() {
    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i) {
        if (PlayerData.inst.getItemById(PlayerData.inst.items_enabled[i].id_item).type == shopStage.currentFilter)
            PlayerData.inst.items_enabled[i].equipped = false;
    }
}

ShopStage.prototype.createItemBtn = function(item)
{
    var g = new PIXI.DisplayObjectContainer();

    var ico = crsp(item.gfx)//;new PIXI.Sprite(PIXI.Texture.fromFrame(item.gfx+".png"));
    ico.x = 0;
    var bsX = 0.5;
    var bsY = 0.5;
    ico.scale.x = bsX;
    ico.scale.y = bsY;
    ico.y = ico.height / 2;
    g.addChild(ico);

    ico.interactive = true;
    var f = ico;
    ico.mouseover = function (evt) {

        if (item.type == tWeapon || item.type == tApp + tHat) {
            var gfxhat = null;
            var gfxweap = null;
            if (item.type == tWeapon) {
                gfxweap = item.gfx;
            }
            if (item.type == tApp + tHat) {
                gfxhat = item.gfx;
            }
            shopStage.pl.updateAppearence(true, false, null, gfxweap, gfxhat);
        }
        TweenMax.killTweensOf(f.scale);
        f.tint = CButton.tintColor;
        new TweenMax(f.scale, 0.6, {y: bsY+0.05, ease: Elastic.easeOut} );
        new TweenMax(f.scale, 0.4, {x: bsX+0.05, ease: Elastic.easeOut} );
    }
    ico.mouseout = function (evt) {
        if (item.type == tWeapon || item.type == tApp + tHat) {
            shopStage.pl.updateAppearence(true, false, null, null, null);
        }
        f.tint = 0xffffff;
        if (f.currentFrame)
            f.gotoAndStop(1);
        new TweenMax(f.scale, 0.3, {x: bsX, y: bsY, ease: Elastic.easeOut} );
    }

    var owned = this.checkOwned(item);
    var equipped = this.checkEq(item);

    tftext = "";
     if (!owned) {
        if (item.pricecrys < 0 && item.price < 0)
        tftext = ""; else {
            if (item.pricecrys > 0)
                tftext = item.pricecrys.toString(); else
                tftext = item.price.toString();
        }
    }

    var clickFunc;
var infoText = "";
    var dy = 0;
    var btnName = "buy button";
    if (!owned) {
        if (item.reqlvl > PlayerData.inst.playerItem.lvl) {
            clickFunc = unlockItem;
            btnName = "unlock button";
            infoText = "МИН " + item.reqlvl.toString() + " УР.";
        } else {
            clickFunc = buyItem;
            btnName = "buy button";
            dy = -15;
        }
    } else
    {
        dy = -45;
        if (equipped == true)
        btnName = "equipped button"; else {
            clickFunc = wearItem;
            btnName = "wear button"
        }
    }
        var btn = new CButton(0, 182 + dy, btnName);
        if (btnName == "equipped button")
        {
            btn.gfx.mouseout = null;
            btn.gfx.mouseover = null;
        };
        btn.fontSize = 33;
        btn.addToSameLayer = true;
        btn.gfx.anchor.x = 0.5;
        btn.gfx.anchor.y = 0.5;
        btn.gfx.scale.x = 0.8;
        btn.gfx.scale.y = 0.8;
        btn.init();
        btn.gfx.parent.removeChild(btn.gfx);
        btn.item = item;
        btn.gfx.btn = btn;
        btn.click = clickFunc;

        function unlockItem(event) {

        }

        function wearItem(event) {
         //   shopStage.unequipAll();

            PlayerData.inst.equipItem(item);
            shopStage.updateBar(shopStage.currentTab, shopStage.currentFilter, shopStage.bar.pos);
        }
        function buyItem(event)
        {

            var buyitem =  event.target.btn.item;
            if ((buyitem.price > 0 && PlayerData.inst.playerItem.money >= buyitem.price) ||
                (buyitem.pricecrys> 0 && PlayerData.inst.playerItem.crystals >= buyitem.pricecrys))
            {

               // shopStage.unequipAll();
                shopStage.transScreen = SM.inst.addDisableWindow("ПРОВОДИТСЯ ТРАНЗАКЦИЯ" +'\n' + "ПОЖАЛУЙСТА ПОДОЖДИТЕ");

                if  (buyitem.pricecrys > 0)
                    PlayerData.inst.playerItem.crystals -= buyitem.pricecrys; else

                PlayerData.inst.playerItem.money -= buyitem.price;

                azureclient.invokeApi("buy_item", {
                    body: {id_item: buyitem.id, id_player: PlayerData.inst.playerItem.id},
                    method: "post"
                }).done(function (results) {

                    PlayerData.inst.loadData(function()
                    {
                        PlayerData.inst.equipItem(buyitem);

                        shopStage.updateBar(shopStage.currentTab, shopStage.currentFilter, shopStage.bar.pos);
                        shopStage.transScreen.parent.removeChild(shopStage.transScreen);
                        shopStage.transScreen = null;
                    });
                }, function(error) {
                    shopStage.transScreen.parent.removeChild(shopStage.transScreen);
                    shopStage.transScreen = null;
                });
            }
        }


        g.addChild(btn.gfx);
    if (btn.text)
    btn.text = btn.text;
    g.btn = btn;

    if (tftext) {
        if (item.price > 0)
            var bgSprite = "price coin.png";
        if (item.pricecrys > 0)
            bgSprite = "price star.png";

        if (bgSprite) {
            var tfBg =crsp(bgSprite);
            tfBg.x = 0;
            tfBg.y = 110;
            g.addChild(tfBg);
        }
    }

    var infoTF = new CTextField();
    infoTF.tint = "0x333333";
    infoTF.fontSize = 15;
    infoTF.align = "center";
    infoTF.init();
    g.infoTF = infoTF;
    infoTF.x = 0;
    infoTF.y = 135;
    infoTF.gfx.parent.removeChild(infoTF.gfx);
    infoTF.text = infoText;
    g.addChild(infoTF.gfx);


    var priceTF = new CTextField();
    priceTF.tint = "0x333333";
    priceTF.fontSize = 17;
    priceTF.align = "left";
    priceTF.text = tftext;
    priceTF.init();
    g.tfprice = priceTF;
    priceTF.x = 2;
    priceTF.y = 100;
    priceTF.gfx.parent.removeChild(priceTF.gfx);
    g.addChild(priceTF.gfx);
    priceTF.text = priceTF.text;
    g.destroy = function()
    {
        g.tfprice.destroy();
        if (g.btn) {
            g.btn.destroy();
            g.btn = null;
        }
        g.tfprice = null;
        g.parent.removeChild(g);
    }
  //  btn.updateGraphics();
    return g;
}

ShopStage.prototype.updateBar = function(tab, filter, baroffset)
{
    shopStage.updateStatsPanel();
    shopStage.currentTab = tab;
    shopStage.currentFilter = filter;

    CObj.getById("bstuff").gfx.alpha = 0.1;
    CObj.getById("bweap").gfx.alpha = 0.1;
    CObj.getById("bcloth").gfx.alpha = 0.1;

    CObj.getById(tab).gfx.alpha = 1;

    for (var i = 0; i < this.bar.container.children.length; ++i)
    {
        this.bar.container.children[i].destroy();
        i--;
    }

    var numColumns = 2;
    if (tab == "bweap")
    {
        numColumns = 2;
    }
    var d = this.bar.gfx.width / numColumns - 6;
    var l = 0;
    for (var i = 0; i < PlayerData.inst.items.length; ++i) {
        if (PlayerData.inst.items[i].type.indexOf(filter) < 0) continue;

        var g = shopStage.createItemBtn(PlayerData.inst.items[i]);
        g.x = d / 2 + (l % numColumns)*(d);
        g.y = 40+Math.floor(l / numColumns)*220;
        this.bar.container.addChild(g);
        l++;
    }
    if (!baroffset) baroffset = 0;
    this.bar.pos = baroffset;
}

ShopStage.prototype.updateStatsPanel = function() {
    var b = CObj.getById("bar");
    b.gfx.width = 200;
    b.prop = PlayerData.inst.playerItem.xp / PlayerData.inst.xpLevel[PlayerData.inst.playerItem.lvl].xp;
    CObj.getById("tflev").text = PlayerData.inst.playerItem.lvl.toString();
    if (!CObj.getById("bar").gfx.parent) {
             SM.inst.fg.addChild(CObj.getById("bar").gfx);
        }
    CObj.getById("tfmoney").text = PlayerData.inst.playerItem.money.toString();
    CObj.getById("tfcry").text = PlayerData.inst.playerItem.crystals.toString();
    CObj.getById("tfenergy").text = Math.round(PlayerData.inst.playerItem.energy).toString();
}

ShopStage.prototype.onShowContinue = function()
{
    CustomStage.prototype.onShow.call(this);
    shopStage.bar = new CScrollbar(610,335, "", 380, 524);
    shopStage.bar.gfx.parent.removeChild(shopStage.bar.gfx);
    SM.inst.ol.addChildAt( shopStage.bar.gfx,1);
    shopStage.updateStatsPanel();

    CObj.getById("bback").click = function() {
        SM.inst.openStage(charStage);
    }

    CObj.getById("bstuff").click = function() {
        shopStage.updateBar("bstuff", tBoost);
    }
    CObj.getById("bweap").click = function() {
        shopStage.updateBar("bweap", tWeapon);
    }

    CObj.getById("bcloth").click = function () {
        shopStage.updateBar("bcloth", tApp);
    }

    shopStage.updateBar("bstuff", tBoost);

    var pl = new CPlayer(180, 430);
    shopStage.pl = pl;
    shopStage.pl.updateAppearence(true, false, "breath", null, null);
    pl.gfx.scale.x = 0.4;
    pl.gfx.scale.y = 0.4;
    SM.inst.ol.addChild(pl.gfx);
}

function levelClick(evt){
    gameStage.currentLevel = evt.target.levelNum;
    SM.inst.openStage(gameStage);
}

ShopStage.prototype.onHide = function(newStage) {

    shopStage.pl = null;
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

ShopStage.prototype.process = function() {
    CObj.processAll();
}
