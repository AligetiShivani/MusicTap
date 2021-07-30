window.addEventListener('load',()=>
{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const colors=["#F16745","#ffc14f","#4db484","#3395a7","#93648D","#404040"]
    const visual=document.querySelector(".visual");
    
    pads.forEach((pad,index) => {
        pad.addEventListener('click',()=>{
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubble(index);
        });
    });
    function createBubble(index){
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation= "jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
     };
});
