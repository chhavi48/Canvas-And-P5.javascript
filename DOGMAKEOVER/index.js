let currele="";
let initX=0;
let initY=0;

const isTouch=()=>{
    try{
        document.createEvent("TouchEvent")
        return true;

        


    }catch(e){
    return false;
    }
};

function dragStart(e){
    initX=isTouch() ? e.touches[0].clientX :
    e.clientX;
    initY=isTouch() ? e.touches[0].clientY :
    e.clientY;
    currele=e.target;

}
function dragover(e){
     e.preventDefault();

}
const drop=(e)=>{
   e.preventDefault()
   let newX = isTouch() ? e.touches[0].clientX : e.clientX;
  let newY = isTouch() ? e.touches[0].clientY : e.clientY;
  currele.style.top =
  currele.offsetTop-(initY-newY)+"px";
  currele.style.left=
  currele.offsetLeft-(initX-newX)+"px";
};

window.onload=()=>{
    currele="";
    let body=document.body;
    body.addEventListener('dragstart',dragStart,
    false);
    body.addEventListener('dragover',dragover,
    false);
    body.addEventListener('drop',drop,
    false);
    body.addEventListener('touchstart',dragStart,
    false);
    body.addEventListener("touchmove", drop, false);
}
