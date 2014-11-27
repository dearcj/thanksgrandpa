/**
 * Created by KURWINDALLAS on 20.07.2014.
 */
/**
 * Created by KURWINDALLAS on 16.07.2014.
 */
extend(Propeller, CObj, true);

function Propeller(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'power, direction, ';
}




Propeller.prototype.setElectricity = function(state){
    if (state) this.gfx.play(); else
        this.gfx.stop();
    CObj.prototype.setElectricity.call(this, state);
    //this.destroy();
    //   this.sElectricity = state;
}


Propeller.prototype.destroy = function ()
{
    if (this.doRemove) return;
    this.sensorObj.destroy();
    this.sensorObj.bodiesToPush
    this.sensorObj.owner = null;
    this.sensorObj = null;

    CObj.prototype.destroy.call(this);
}

Propeller.prototype.process = function()
{
    if (this.doRemove) return;

    CObj.prototype.process.call(this);

    this.sensorObj.x = this.x;
    this.sensorObj.y = this.y;
    this.sensorObj.rotation = this.rotation;
}

Propeller.prototype.init = function()
{
    var body = new p2.Body({mass: 1});
    var w = 240;
    var h = 90;
    var h2 = 18;
    var dir;
    if (this.gfx.scale.x > 0) dir = -1; else
        dir = 1;

    if (dir > 0)
    var v = [[0,-h2],[w, -h], [w, h], [0, h2]];
    else v = [[0,-h2],[0,h2],[-w, h], [-w, -h]];
    var shape = new p2.Convex(v);//new p2.Rectangle(w, h);

    body.addShape(shape);
    this.sensorObj = new CObj(this.x, this.y, null, body);
    this.sensorObj.dir = dir;
    var ownerBody = this.body;
    this.sensorObj.owner = this;
    this.sensorObj.bodiesToPush = [];
    this.sensorObj.sensor = true;
    this.sensorObj.body.mass = 0;
     gameStage.sensorObjBody = this.sensorObj.body;
   this.sensorObj.forcePower = 1250 / 20 * this.power;

    this.sensorObj.process = function()
    {
        if (this.doRemove) return;
        CObj.prototype.process.call(this);

        if (!this.owner.sElectricity) return;

        for (var i = 0; i < this.bodiesToPush.length;++i)
        {
            var angle = this.rotation + Math.PI / 2 * (this.dir - 1);
            var mc = Math.cos(angle);
            var ms = Math.sin(angle);
            var d = vec2.dist(this.bodiesToPush[i].position, this.body.position);
            var pow = 1 - Math.pow(d / 400, 1.8);
            this.bodiesToPush[i].applyForce([this.forcePower*pow*mc, this.forcePower*pow*ms], [this.bodiesToPush[i].position[0], this.bodiesToPush[i].position[1]]);
        }
    }

    this.sensorObj.onContactBegin = function(b)
    {
        if (b.motionState == p2.Body.STATIC) return;
        if (b == ownerBody) return;
        this.bodiesToPush.push(b);
    }

    this.sensorObj.onContactEnd = function(b)
    {
        if (b == ownerBody) return;

        var inx = this.bodiesToPush.indexOf(b);
        if (inx >= 0)
            this.bodiesToPush.splice(inx, 1);
    }

    CObj.prototype.init.call(this);
}