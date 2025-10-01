var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imgDiv = document.querySelector("#image")

main.addEventListener("mousemove",(event) => {
    gsap.to(cursor,{
        x:event.clientX,
        y:event.clientY,
        duration:0.5,
        // ease:"back.out"
    })
})

imgDiv.addEventListener("mouseenter", () => {
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale: 4,
    })
})

imgDiv.addEventListener("mouseleave", () => {
    gsap.to(cursor,{
        scale: 1,
    })
})