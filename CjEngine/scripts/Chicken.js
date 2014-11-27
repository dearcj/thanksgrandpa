/**
 * Created by KURWINDALLAS on 11.07.2014.
 */
extend(Chicken, CObj, true);

function Chicken(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    if (!Chicken.count) Chicken.count = 1; else
    Chicken.count++;
    this.amount = 200;
}

Chicken.prototype.process = function()
{
    CObj.prototype.process.call(this);

    if (this.y > SCR_HEIGHT + 200)
    {
    //    this.mechanicalDestroy = undefined;
        this.destroy();

    }
}


Chicken.prototype.destroy = function(){
    if (this.doRemove) return;


    Chicken.count--;
    if (this.mechanicalDestroy == undefined)
    {

        var deadChickenObj = {"drawAsTexture": false,
            "friction": 1,
            "offsetR": 0,
            "baseDim": {
                "y": 50,
                "x": 80
            },
            "allowRotation": true,
            "cls": "ZEngine::ZObj",
            "rotation": 0,
            "layer": 1,
            "density": 1,
            "elasticity": 0,
            "autoPlay": false,
            "isClip": false,
            "scaleX": 0.8,
            "actions": [],
            "offsetX": 0,
            "scaleY": 0.8,
            "offsetY": 0,
            "frictionStatic": 2,
            "body": {
                "shapes": [
                    {
                        "localVerts": [
                            {
                                "y": -1.9074413194729098,
                                "x": -44.43949885053283
                            },
                            {
                                "y": -21.574107986139566,
                                "x": -11.772832183866154
                            },
                            {
                                "y": 15.759225347193777,
                                "x": 17.560501149467175
                            },
                            {
                                "y": 28.425892013860434,
                                "x": 16.560501149467175
                            },
                            {
                                "y": 27.425892013860434,
                                "x": -33.77283218386616
                            }
                        ],
                        "localCOM": {
                            "y": 8.129663541695152,
                            "x": -13.782723371689402
                        },
                        "type": "POLYGON"
                    },
                    {
                        "localVerts": [
                            {
                                "y": -21.57410798613957,
                                "x": -11.772832183866154
                            },
                            {
                                "y": -18.57410798613957,
                                "x": 35.56050114946717
                            },
                            {
                                "y": 15.759225347193773,
                                "x": 17.560501149467175
                            }
                        ],
                        "localCOM": {
                            "y": -8.129663541695122,
                            "x": 13.782723371689395
                        },
                        "type": "POLYGON"
                    }
                ],
                "type": "DYNAMIC"
            },
            "frictionRolling": 0.001,
            "userData": "",
            "x": -131.56050114946717,
            "y": 261.57410798613955,
            "clip": "pussyatlas.png.chickendead",
            "fps": 30,
            "id": "",
            "isSensor": false
        }
        var newObj = CObj.DeserializeCObj(deadChickenObj, false);
        CObj.setBodyMass(newObj.body, 2);
        newObj.isConductor = false;
        newObj.gfx = new PIXI.Sprite(PIXI.Texture.fromFrame("chickendead.png"));
        newObj.gfx.anchor.x = 0.5;
        newObj.gfx.anchor.y = 0.63;
        newObj.gfx.scale.x = 0.65* window.addScale;
        newObj.gfx.scale.y = 0.65* window.addScale;
        newObj.x = this.x;
        newObj.y = this.y;
     //   world.removeBody(newObj.body);
        var shapes = [];
        for (var i = 0; i < newObj.body.shapes.length; ++i) {
            shapes.push(newObj.body.shapes[i]);
        }

       /* for (var i = 0; i < shapes.length; ++i) {
            newObj.body.removeShape(newObj.body.shapes[0]);
        }*/
        for (var i = 0; i < shapes.length; ++i) {
            shapes[i].collisionGroup = world.cgDYNAMIC;
            shapes[i].collisionMask = world.cgSTATIC;
       //     newObj.body.addShape(shapes[i]);
        }

    //    world.addBody(newObj.body);

        newObj.body.force[1]= - 18000;
        newObj.body.angularForce = 18000*(Math.random() - 0.5);

        PlayerData.inst.score += this.amount;
        gameStage.updateScore();

        Coin.generateTextParticle(this);
        gameStage.grilled ++;
        SM.inst.ol.addChildAt(newObj.gfx, 1);
        if (Chicken.count == 0 && gameStage.doProcess)
        {
            if (!gameStage.losing)
            gameStage.doLevelComplete();
        }
    }

    CObj.prototype.destroy.call(this);
}

Chicken.prototype.destroyFX = function() {
    var t = this;
    var chickenEffect = pool.Pop("chickeneffect");
  //  return;
    if (chickenEffect) {
    this.gfx.parent.removeChild(this.gfx);

    this.gfx = chickenEffect;
    this.gfx.scale.x = 0.95*window.addScale;
    this.gfx.scale.y = 0.95*window.addScale;
    this.updateGraphics();

    if (!this.gfx.parent)
        SM.inst.ol.addChildAt(chickenEffect, SM.inst.ol.children.length - 2);

    this.gfx.animationSpeed = 0.5;
    this.gfx.gotoAndPlay(0);
    }
    TweenMax.to(this.gfx.scale, 0.1, {x: 0.75* window.addScale, y: 0.75* window.addScale, yoyo:true, repeat:6});
    TweenMax.delayedCall(0.6, function () {
        if (t.gfx) {
            rp(t.gfx);
            pool.Push(t.gfx);
            t.gfx = null;
        }   t.destroy();

    });
}

Chicken.prototype.setElectricity = function(state){
    CObj.prototype.setElectricity.call(this);
    if (state && !this.preDestroy) {
        this.destroyFX();
        this.preDestroy = true;
        ZSound.Play("electro1");
    }
    //this.destroy();
    this.sElectricity = state;
}
