// gsap.to("#box1", {
//     x: 300,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "green",
//     borderRadius: "50%",
//     scale: 0.5,
// })

// gsap.to("#box2", {
//     y: 300,
//     duration: 2,
//     delay: 1,
// })

// gsap.from("h1",{
//     // color:"red",
//     // opacity:0,
//     x:-200,
//     duration:2,
//     delay:1,
//     stagger:0.5,
// })

// gsap.to("#box1", {
//     x:800,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     repeat:-1,
//     yoyo:true
// })

// gsap.to("#box1", {
//     x:1000,
//     rotate:360,
//     duration:5,
//     delay:1
// })

// gsap.to("#box2", {
//     x:700,
//     rotate:360,
//     duration:5,
//     delay:6,
//     backgroundColor:"purple",
// })

// gsap.to("#box3", {
//     x:400,
//     rotate:360,
//     duration:5,
//     delay:11,
//     backgroundColor:"orange",
// })

// let timeline = gsap.timeline();

// timeline.to("#box1", {
//     x: 1000,
//     rotate: 360,
//     duration: 5,
//     delay: 1
// })

// timeline.to("#box2", {
//     x: 600,
//     // rotate: 360,
//     duration: 5
// })

// timeline.to("#box3", {
//     x: 300,
//     // rotate: 360,
//     duration: 5
// })

let tl = gsap.timeline();

tl.from("h2", {
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    // ease:"bounce.out"
})

tl.from("h4", {
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    // ease:"bounce.out",
    stagger:0.5
})