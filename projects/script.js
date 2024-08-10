let body = document.querySelector("body");

body.addEventListener("mousemove", (event)=>{
    let x = event.offsetX;
    let y = event.offsetY;
    let span1 = document.createElement("span")
    body.appendChild(span1);
    size = Math.random()*150 + 10;
    span1.style =`left:${x}px; top:${y}px; width:${size}px; height:${size}px`
    setTimeout(()=>{
        span1.remove()
    }, 3000)
})