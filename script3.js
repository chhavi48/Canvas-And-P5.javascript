const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let particalArr=[];
let adjustX=5;
let adjustY=10;

const mouse={
    x:null,
    y:null,
    radius:150

}
window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
   
    // console.log(mouse.x,mouse.y)
});
ctx.fillStyle='white';
ctx.font='40px Verdana';
ctx.fillText('CHHAVI',0,30);
ctx.strokeStyle='white';
ctx.strokeRect(0,0,100,100)
const textCoordinates=ctx.getImageData(0,0,100,100)
class Partical{
    constructor(x,y){
         this.x=x;
         this.y=y;
         this.size=3;
         this.baseX=this.x;
         this.baseY=this.y;
         this.density=(Math.random()*40)+5;


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
        let directionX=forceDirectionX*force*this.density;
        let directionY=forceDirectionY*force*this.density;
        if(distance<mouse.radius){
            this.x-= directionX;
            this.y-= directionY;

        }
        else{
            if(this.x!==this.baseX){
                let dx=this.x-this.baseX;
                this.x-=dx/10;
            }
            if(this.y!==this.baseY){
                let dy=this.y-this.baseY;
                this.y-=dy/10;
            }
        }

    }
}
// console.log(textCoordinates.data)
function init(){
    particalArr=[];
    for(let y=0, y2=textCoordinates.height; y < y2; y++){
        for(let x=0,x2=textCoordinates.height;x<x2;x++){
            if(textCoordinates.data[(y*4*textCoordinates.width)+(x*4)+3]>128){
                let positionX=x+adjustX;
                let positionY=y+adjustY;
                particalArr.push(new Partical(positionX*20,
                    positionY*20))
            }
        }
      
    }

// for(let i =0;i<1000;i++){
//     let x=Math.random()*canvas.width;
//     let y=Math.random()*canvas.height;
//     particalArr.push(new Partical(x,y))
// }
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
     connect()
    requestAnimationFrame(animate)
}
animate();
function connect(){
    for(let a=0;a<particalArr.length;a++){
        for(let b=a;b<particalArr.length;b++){
           let dx=particalArr[a].x-particalArr[b].x;
           let dy=particalArr[a].y-particalArr[b].y;
           let distance=Math.sqrt(dx*dx+dy*dy)
           if(distance<100){
               ctx.strokeStyle='white';
               ctx.lineWidth=2;
               ctx.beginPath();
               ctx.moveTo(particalArr[a].x,particalArr[a].y)
               ctx.lineTo(particalArr[b].x,particalArr[b].y)
               ctx.stroke();
           }

        }
    }
}