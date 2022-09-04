
function Snake(){
    this.x=0;
    this.y=0;
    this.xspeed=1;
    this.yspeed=0;

    this.dir=function(x,y){
        this.xspeed=x;
        this.yspeed=y;
    }
    
    this.update=function(){
        this.x=this.x+  this.xspeed  +scl;
        this.y=this.y+  this.yspeed   +scl;
    }

  this.show=function(){
    fill(255)
    rect(this.x,this.y,scl,scl)
  }
}