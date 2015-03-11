/**
 * Created by KURWINDALLAS on 10.03.2015.
 */
extend(Boss2, Boss1, true);

function Boss2(in_x,in_y,animname,cr_bar){
    Boss1.apply(this,[in_x,in_y,animname,null]);
    this.gfx.skeleton.setAttachment("b_legs", "b_legs1");
    this.gfx.skeleton.setAttachment("b_body", "b_body1");
    this.gfx.skeleton.setAttachment("b_head", "b_head1");
    this.gfx.skeleton.setAttachment("b_top_body", "b_top_body1");
}

