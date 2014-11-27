/**
 * Created by Михаил on 24.06.2014.
 */

function CustomStage() {

    this.visible = false;
    this.doProcess = true;
  }

CustomStage.prototype.process = function() {};
CustomStage.prototype.onRemove = function() {};
CustomStage.prototype.onHide = function(newStage) {};
CustomStage.prototype.onShow = function(){};
