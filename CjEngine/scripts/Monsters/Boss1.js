/**
 * Created by KURWINDALLAS on 08.02.2015.
 */
extend(Boss1, CMonster, true);

function Boss1(in_x,in_y,animname,cr_bar){
    this.hitTestCircles = [{x: 10, y: 0,r: 60}, {x:10,y: -130,r: 60}, {x:0, y: -260,r: 60}];
    CMonster.apply(this,[in_x,in_y,null,null]);
    this.gfx = new PIXI.Spine(animname);
  //  g.skeleton.setSkinByName('perded');
    this.gfx.state.setAnimationByName(0, "animation", true);
    this.updateGraphics();
    this.gfx.scale.x = 0.48;
    this.gfx.scale.y = 0.48;
    this.maxHp = 700;
    this.hp = this.maxHp;
    SM.inst.ol.addChild(this.gfx);
}


Boss1.prototype.showUpAnimation = function()
{
    var t = this;
    new TweenMax(this, 3, {x: this.x - 450, onComplete: function()
    {
        new TweenMax(t, 5, {x: t.x + 80, yoyo: true, repeat: -1});
    }});
}

Boss1.prototype.destroy = function()
{
    CMonster.prototype.destroy.call(this);

    MM.inst.currentBoss = null;
}