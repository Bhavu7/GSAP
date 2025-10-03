var tl = gsap.timeline();

tl.from("nav h1,nav h4, nav button", {
  y: -30,
  delay: 1,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
});
tl.from(".center-part1 h1", { x: -50, opacity: 0, duration: 0.5 });
tl.from(".center-part1 p", { x: -50, opacity: 0, duration: 0.4 });
tl.from(".center-part1 button", { x: -50, opacity: 0, duration: 0.4 });
tl.from(".center-part2 img", { x: 50, opacity: 0, duration: 0.5 });
tl.from(".section1bottom img", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

tl.from(".services h3", { y: -30, opacity: 0, duration: 0.5 });
tl.from(".services p", { y: -30, opacity: 0, duration: 0.4 });
tl.from(".services .box", { y: 30, opacity: 0, duration: 0.4, stagger: 0.2 });

tl.from(".elem", { y: -30, opacity: 0, duration: 0.5 });
tl.from(".elem-part1 h2", { y: -30, opacity: 0, duration: 0.5 });
tl.from(".elem-part1 h4", { y: -30, opacity: 0, duration: 0.4 });
tl.from(".elem-part1 button", { y: -30, opacity: 0, duration: 0.4 });
tl.from(".elem-part2 img", { y: -30, opacity: 0, duration: 0.4 });
