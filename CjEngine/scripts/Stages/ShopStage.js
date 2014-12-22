/**
 * Created by KURWINDALLAS on 05.12.2014.
 */

function ShopStage() {
    CustomStage.apply(this);
}

extend(ShopStage, CustomStage);

ShopStage.prototype.onShow = function() {

    PlayerData.inst.playerItem.money = 10000;
    azureclient.getTable("tb_players").update(PlayerData.inst.playerItem);//
    // .read({success: function(r)
    /*{
        console.log();
    }, error: function(e) {
        console.log();
    }});
*/
    LevelManager.loadLevel("levshop", this.onShowContinue);
}

ShopStage.prototype.checkEq = function(item)
{
    for (var i = 0; i < PlayerData.inst.items_enabled.length; ++i)
    {
        if (PlayerData.inst.items_enabled[i].equipped == true) return true;
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

ShopStage.prototype.createItemBtn = function(item)
{
    var g = new PIXI.DisplayObjectContainer();

    var itemback = new PIXI.Sprite(PIXI.Texture.fromFrame("item back.png"));
    itemback.anchor.x = 0;
    itemback.anchor.y = 0;
    itemback.x = 0;
    itemback.y = -10;
    itemback.scale.x = 0.6;
    itemback.scale.y = 0.6;
    g.addChild(itemback);

    var ico = new PIXI.Sprite(PIXI.Texture.fromFrame(item.gfx+".png"));
    g.addChild(ico);

    var owned = this.checkOwned(item);
    var equipped = this.checkEq(item);

    item.pricecrys = 10;

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

    if (!owned) {
        if (item.reqlvl > PlayerData.inst.playerItem.lvl) {
            clickFunc = unlockItem;
            btnName = "unlock button";
            tftext.text = "МИНИМУМ " + item.reqlvl.toString() + " УРОВЕНЬ";
        } else {
            clickFunc = buyItem;
            btnName = "buy button"
        }
    } else
    {
        if (equipped)
        btnName = "equipped button"; else {
            clickFunc = wearItem;
            btnName = "wear button"
        }
    }
        var btn = new CButton(50, 162, btnName);
        btn.fontSize = 33;
        btn.addToSameLayer = true;
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
            PlayerData.inst.equipItem(item);
        }
        function buyItem(event)
        {
            var buyitem =  event.target.btn.item;
            if (buyitem.price > 0 && PlayerData.inst.playerItem.money >= buyitem.price)
            {
                shopStage.transScreen = SM.inst.addDisableWindow("ПРОВОДИТСЯ ТРАНЗАКЦИЯ" +'\n' + "ПОЖАЛУЙСТА ПОДОЖДИТЕ");

                PlayerData.inst.playerItem.money -= buyitem.price;

                azureclient.invokeApi("buy_item", {
                    body: {id_item: item.id, id_player: PlayerData.inst.playerItem.id},
                    method: "post"
                }).done(function (results) {

                    shopStage.transScreen.parent.removeChild(shopStage.transScreen);
                    shopStage.transScreen = null;
                    console.log();
                }, function(error) {
                    shopStage.transScreen.parent.removeChild(shopStage.transScreen);
                    shopStage.transScreen = null;
                    console.log();
                    //    loginCallback();
                });


            }
            if (buyitem.pricecrys> 0 && PlayerData.inst.playerItem.crystals >= buyitem.pricecrys) {
                PlayerData.inst.playerItem.crystals -= buyitem.pricecrys;
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
            var tfBg = new PIXI.Sprite(PIXI.Texture.fromFrame(bgSprite));
            tfBg.anchor.x = 0.5;
            tfBg.anchor.y = 0.5;
            tfBg.x = 50;
            tfBg.y = 110;
            g.addChild(tfBg);
        }
    }
    var priceTF = new CTextField();
    priceTF.fontSize = 22;
    priceTF.align = "center";
    priceTF.text = tftext;
    priceTF.init();
    g.tfprice = priceTF;
    priceTF.x = g.width / 2 + 10;
    priceTF.y = 112;
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

ShopStage.prototype.updateBar = function(tab)
{
    shopStage.currentTab = tab;
    CObj.getById("tabsheet").x = CObj.getById(tab).x;


    for (var i = 0; i < this.bar.container.children.length; ++i)
    {
        this.bar.container.children[i].destroy();
        i--;
    }

    var numColumns = 3;

    for (var i = 0; i < PlayerData.inst.items.length; ++i) {
        var g = shopStage.createItemBtn(PlayerData.inst.items[i]);
        g.x = 10 + (i % numColumns)*120;
        g.y = 20+Math.floor(i / numColumns)*220;
        this.bar.container.addChild(g);
    }
    this.bar.pos = 0;
}

ShopStage.prototype.updateStatsPanel = function() {
    var b = CObj.getById("bar");
    b.gfx.width = 200;
    b.prop = PlayerData.inst.playerItem.xp / PlayerData.inst.xpLevel[PlayerData.inst.playerItem.lvl];
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
    shopStage.bar = new CScrollbar(610,332, "", 380, 524);
    shopStage.bar.gfx.parent.removeChild(shopStage.bar.gfx);

    shopStage.updateStatsPanel();

    CObj.getById("bback").click = function() {
        SM.inst.openStage(charStage);
    }


    CObj.getById("bstuff").click = function() {
        shopStage.updateBar("bstuff");
    }
    CObj.getById("bweap").click = function() {
        shopStage.updateBar("bweap");
    }

    CObj.getById("bcloth").click = function () {
        shopStage.updateBar("bcloth");
    }

    shopStage.updateBar("bstuff");
}

function levelClick(evt){
    gameStage.currentLevel = evt.target.levelNum;
    SM.inst.openStage(gameStage);
}

ShopStage.prototype.onHide = function(newStage) {
    CustomStage.prototype.onHide.call(this, null);
    CObj.destroyAll();
    CObj.processAll();
}

ShopStage.prototype.process = function() {
    CObj.processAll();
}
