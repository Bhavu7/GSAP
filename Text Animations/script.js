function brokenText() {
  var h1 = document.querySelector("h1");
  var h1Text = document.querySelector("h1").textContent;

  var splittedText = h1Text.split("");
  var halfWord = splittedText.length / 2;

  var clutter = "";

  splittedText.forEach(function (char, index) {
    if (index < halfWord) {
      clutter += `<span class="left">${char}</span>`;
    } else {
      clutter += `<span class="right">${char}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

brokenText();

gsap.from("h1 .left", {
  y: 70,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.15,
  // stagger: -0.15, reverse order
  ease: "back.out(1.7)",
});

gsap.from("h1 .right", {
  y: 70,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: -0.15,
  ease: "back.out(1.7)",
});
