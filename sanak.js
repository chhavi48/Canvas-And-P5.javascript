var s;
var scl=20
function setup(){
    createCanvas(640,360)
    s=new Snake()
}

function draw(){
    background(51)
    s.update()
    s.show()
}

function keyPressed(){
    if(key===UP_ARROW){
    s.dir(0,-1)
    }
    else if(keyCode===DOWN_ARROW){
           s.dir(0,1)
    }
    else if(keyCode===LEFT_ARROW){
        s.dir(-1,0)
 }
 else if(keyCode===RIGHT_ARROW){
    s.dir(1,0)
}
}

