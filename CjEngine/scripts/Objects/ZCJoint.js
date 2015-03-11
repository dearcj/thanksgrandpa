/**
 * Created by KURWINDALLAS on 12.07.2014.
 */


extend(ZCJoint, CObj, true);

function ZCJoint(in_x,in_y,textname,in_body){
    CObj.apply(this,[in_x,in_y,textname,in_body]);
    this.PublicFields += "body1Id,body2Id,collideConnected,breakOnForce,angleConstraint,angleMin,angleMax,frequency,damping,rate,isStopped,";
}


ZCJoint.prototype.CreateMotor = function()
{
    if (!joint) return;
    if (Math.abs(rate) > 0.000001) {
        if (!motor)	motor = new MotorJoint(joint.body1, joint.body2, 2 * Math.PI * rate);
        if (isStopped) motor.rate = 0; else motor.rate = 2 * Math.PI * rate;
        motor.ignore = !collideConnected;
        motor.space = ZNape.Inst.World;
    }
}

ZCJoint.getFirstStatic = function () {
    var ol = CObj.objects.length;
    for (var i = 0; i < ol; ++i)
    {
        if (CObj.objects[i].body && CObj.objects[i].body.type == p2.Body.STATIC)
        {
            return CObj.objects[i].body;
        }

    }
}


ZCJoint.prototype.init = function()
{
    CObj.prototype.init.call(this);

    var bl  = world.hitTest([this.x, this.y], world.bodies, 3.);
    var b1, b2;
    var b2worldStatic = false;


    if (bl.length == 1) {
    b1 = bl[0];
    if (this.body1Id != "") b1 = CObj.getById(this.body1Id).body;
    if (b1 != null) {
        if (b1.type != p2.Body.STATIC) {
            b2worldStatic = true;
            b2 = ZCJoint.getFirstStatic();
            this.joint = new p2.Constraint(b1, b2, {collideConnected: this.collideConnected, worldPivot: [this.x, this.y]});
            // b1.worldPointToLocal(Vec2.get(Position.x, Position.y)), Vec2.get(Position.x, Position.y));
        }
    }
} else
if (bl.length >= 2) {
    b1 = bl[0];
    b2 = bl[1];
    if (this.body1Id != "") b1 = CObj.getById(this.body1Id).body;
    if (this.body2Id != "") b2 = CObj.getById(this.body2Id).body;
}



    if (!b2worldStatic) {
        b1.userData.onContactBegin(b2);
        b2.userData.onContactBegin(b1);
    }
    if (!b1) b1 = bl[0];
    if (!b2) b2 = bl[1];
    if (this.body1Id != "") b1 = CObj.getById(this.body1Id).body;
    if (this.body2Id != "") b2 = CObj.getById(this.body2Id).body;



    if (b1 != null && b2 != null) {
        if (!(b1.type == p2.Body.STATIC && b2.type == p2.Body.STATIC)) {
            this.joint = new p2.RevoluteConstraint(b1, b2, {collideConnected: this.collideConnected, worldPivot: [this.x, this.y]});
        //    this.joint = new PivotJoint(b1, b2, b1.worldPointToLocal(Vec2.get(Position.x, Position.y)), b2.worldPointToLocal(Vec2.get(Position.x, Position.y)));
        }
    }


if (this.joint != null) {

    if (this.rate != 0) {
        if (b1.motionState != p2.Body.STATIC)
            b1.userData.motorSpeed = this.rate;

        if (b2.motionState != p2.Body.STATIC)
            b2.userData.motorSpeed = this.rate;

        this.joint.motor = true;
    }

    //if (UserData != "") joint.userData.obj = UserData;

 /*

    if (Math.abs(breakOnForce) > 0.00001) {
        joint.maxForce = breakOnForce;
        joint.breakUnderForce = true;
        joint.removeOnBreak = true;
    } else {
        joint.breakUnderForce = false;
    }

    //CreateMotor();
*/
    world.addConstraint(this.joint);
}

/*if (angleConstraint && b1 && b2) {
    var angle : Number = (b2.rotation - b1.rotation);
    angleJoint = new AngleJoint(b1, b2, angle + angleMin * ZMath.DEG_TO_RAD, angle + angleMax * ZMath.DEG_TO_RAD, 0);
    angleJoint.ratio = 1;
    angleJoint.stiff = false;
    // ********* cahnged, may cause bugs
    //angleJoint.stiff = Damping > 0.0001;
    angleJoint.frequency = frequency;
    angleJoint.damping = damping;
    if (Math.abs(breakOnForce) > 0.00001) {
        angleJoint.maxForce = breakOnForce;
        angleJoint.breakUnderForce = true;
        angleJoint.removeOnBreak = true;
    } else {
        angleJoint.breakUnderForce = false;
    }
    angleJoint.space = ZNape.Inst.World;
}
*/
b1 = null;
b2 = null;
};

/*
public function get rate():Number
{
    return _rate;
}

public function set rate(value:Number):void
{
    _rate = value;
CreateMotor();
}

public function get angleMin():Number
{
    return _angleMin;
}

public function set angleMin(value:Number):void
{
    _angleMin = value;
if (angleJoint) {
    var angle : Number = (angleJoint.body2.rotation - angleJoint.body1.rotation);
    angleJoint.jointMin = angle + _angleMin * ZMath.DEG_TO_RAD;
}
}

public function get angleMax():Number
{
    return _angleMax;
}

public function set angleMax(value:Number):void
{
    _angleMax = value;
if (angleJoint) {
    var angle : Number = (angleJoint.body2.rotation - angleJoint.body1.rotation);
    angleJoint.jointMax = angle + _angleMax * ZMath.DEG_TO_RAD;
}
}

public function get isStopped():Boolean
{
    return _isStopped;
}

public function set isStopped(value:Boolean):void
{
    _isStopped = value;
if (motor) {
    if (isStopped) motor.rate = 0; else motor.rate = 2 * Math.PI * _rate;
}
}

public function get angleConstraint():Boolean
{
    return _angleConstraint;
}

public function set angleConstraint(value:Boolean):void
{
    _angleConstraint = value;
if (angleJoint) angleJoint.active = angleConstraint;
}

public function get damping():Number
{
    return _damping;
}

public function set damping(value:Number):void
{
    _damping = value;
if (angleJoint) angleJoint.damping = _damping;
}

public function get frequency():Number
{
    return _frequency;
}

public function set frequency(value:Number):void
{
    _frequency = value;
if (angleJoint) angleJoint.frequency = _frequency;
}

public function get collideConnected():Boolean
{
    return _collideConnected;
}

public function set collideConnected(value:Boolean):void
{
    _collideConnected = value;
if (joint) joint.ignore = !_collideConnected;
if (motor) motor.ignore = !_collideConnected;
}

*/