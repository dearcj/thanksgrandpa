/**
 * Created by KURWINDALLAS on 08.07.2014.
 */
extend(Generator, CObj, true);

function Generator(in_x,in_y,textname,in_body) {
    CObj.apply(this, [in_x, in_y, textname, in_body]);
    this.isConductor = true;
    if (!Generator.gens) Generator.gens = [];
    Generator.gens.push(this);
}


Generator.prototype.destroy = function () {
   if (this.doRemove) return;

   Generator.gens.splice(Generator.gens.indexOf(this), 1);

   CObj.prototype.destroy.call(this);
}

Generator.electrifyNeighbours = function(obj)
{
    //if (!obj.isConductor) return;
    if (!obj.connected) return;

    obj.sElectricity  = true;
    for (var i = 0; i < obj.connected.length; ++i)
    {
        if (!obj.connected[i].sElectricity && obj.connected[i].isConductor)
        {
            Generator.electrifyNeighbours(obj.connected[i]);
        }
    }
}

Generator.prototype.genProcess = function () {
    Generator.electrifyNeighbours(this);
}


Generator.resetElectricity = function()
{
    var objlen = CObj.objects.length;
    for (var i = 0; i < objlen; ++i)
    {
        if (CObj.objects[i].body)
        {

            CObj.objects[i].sElectricity = false;
        }
    }
}
