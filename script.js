const btn = document.querySelector(".btn");
const rotateElement = document.querySelector(".rotate");

btn.addEventListener("click",()=>{
    if(btn.innerText === 'START')
    {
        btn.innerText = 'STOP';
        rotateElement.style.animationPlayState = 'paused';
    }
    else
    {
        btn.innerText = 'START';
        rotateElement.style.animationPlayState = 'running';
    }
})
