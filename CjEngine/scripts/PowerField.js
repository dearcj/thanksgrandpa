/**
 * Created by KURWINDALLAS on 24.07.2014.
 */
extend(PowerField, CObj, true);

function PowerField(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
}

PowerField.prototype.destroy = function ()
{
    if (this.doRemove) return;

    CObj.prototype.destroy.call(this);
}

/*
PowerField.prototype.init = function()
{
    CObj.prototype.init.call(this);
}

 */

PowerField.prototype.setElectricity = function(state)
{

    CObj.prototype.setElectricity.call(this, state);

    if (!this.gfx) return;

    if (!this.sElectricity){
        if (this.gfx.currentFrame > 1) {
            this.gfx.loop = false;
            this.gfx.gotoAndStop(0);
        }
            for (var i = 0; i < this.body.shapes.length; ++i) {
                this.body.shapes[i].collisionMask = 8;
            }

    } else {
        if (!this.firstRun)
        {
            this.firstRun = true;
        } else {
            if (this.gfx.currentFrame != 6) {
                this.gfx.loop = false;
                this.gfx.play();
            }
            for (var i = 0; i < this.body.shapes.length; ++i) {
                this.body.shapes[i].collisionMask = world.cgDYNAMIC;
            }

        }
    }


}