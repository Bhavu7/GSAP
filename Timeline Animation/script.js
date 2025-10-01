var openMenu = document.querySelector("#nav i");
var closeMenu = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.5,
  ease: "power2.inOut",
});

tl.from("#full h4", {
  x: 150,
  opacity: 0,
  duration: 0.5,
  ease: "power2.inOut",
  stagger: 0.3,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

openMenu.addEventListener("click", function () {
  tl.play();
});

closeMenu.addEventListener("click", function () {
  tl.reverse();
});
