/**
 * Created by KURWINDALLAS on 16.07.2014.
 */
extend(PanelSpeed, CObj, true);

function PanelSpeed(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += 'panelSpeed';
}

PanelSpeed.prototype.init = function ()
{
    var mat = new p2.Material();
    for (var i = 0; i < world.materials.length; ++i)
    {
        var cm = new p2.ContactMaterial(mat, world.materials[i],
            {
                surfaceVelocity: this.panelSpeed
            });
        world.addContactMaterial(cm);
    }

    var sl = this.body.shapes.length;
    for (i = 0; i < sl; ++i)
    {
        this.body.shapes[i].material = mat;
    }


    CObj.prototype.init.call(this);
}