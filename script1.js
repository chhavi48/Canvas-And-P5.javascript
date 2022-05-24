// first happynesss



const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let particalArr=[];
const mouse={
    x:null,
    y:null,
    radius:150

}
window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    mouse.radius=150;
    // console.log(mouse.x,mouse.y)
});
ctx.fillStyle='white';
ctx.font='40px Verdana';
ctx.fillText('A',0,30);
ctx.strokeStyle='white';
ctx.strokeRect(0,0,100,100)
const data=ctx.getImageData(0,0,100,100)
class Partical{
    constructor(x,y){
         this.x=x;
         this.y=y;
         this.size=3;
         this.baseX=this.x;
         this.baseY=this.y;
         this.density=(Math.random()*30)+1;


    }
    draw(){
        ctx.fillStyle='red';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.closePath()
        ctx.fill()

    }
    update(){
        let dx=mouse.x-this.x;
        let dy =mouse.y-this.y;
       
        let distance=Math.sqrt(dx*dx+dy*dy);
        let forceDirectionX=dx/distance;
        let forceDirectionY=dy/distance;
        let maxDistance=mouse.radius;
        let force=(maxDistance-distance)/maxDistance;
        if(distance<300){
            this.x+= forceDirectionX*3;
            this.y+= forceDirectionY*3;

        }
        else{
            this.size=3;
        }

    }
}

function init(){
    particalArr=[];

for(let i =0;i<1000;i++){
    let x=Math.random()*canvas.width;
    let y=Math.random()*canvas.height;
    particalArr.push(new Partical(x,y))
}
    // particalArr.push(new Partical(200,200))
    // particalArr.push(new Partical(50,50))
}
init();
console.log(particalArr)

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<particalArr.length;i++){
        particalArr[i].draw();
        particalArr[i].update()
    }
    requestAnimationFrame(animate)
}
animate();