/**
 * Created by KURWINDALLAS on 21.11.2014.
 */

AM = function() {
    this.achs = [
        {
            name: "Heavy Medal",
            desc: "asda dasd jasjd ij ioasdj io",
            img: "propeller0009",
            enabled: false
        },
        {
            name: "Heavy Medal2",
            desc: "asda dasd jasjd ij ioasdj io",
            img: "tracktorwheel",
            enabled: true
        },
        {
            name: "asdas",
            desc: "asda dasd jasjd ij ioasdj io",
            img: "bomb1",
            enabled: false
        }


    ];

    //"" "" ""
}

AM.inst = new AM();

AM.prototype.getState = function(ach)
{
    return true;
}


AM.prototype.updateAchievements = function()
{
    for (var i = 0; i < this.achs.length; ++i)
    {
        this.getState(this.achs[i]);
    }
}


