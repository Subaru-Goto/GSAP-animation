/* 
// Only club member, so no free one

gsap.registerPlugin(GSDevTools, SplitText)


function init() {
  gsap.set(".wrapper", {autoAlpha:1})
  let split = new SplitText("h1", {type:"chars"})
  let chars = split.chars
  let animation = gsap.timeline()
  let startY = gsap.utils.wrap([-100, 100])
  let rotation = gsap.utils.wrap([-100, 100])
  let colors = gsap.utils.wrap(["pink", "yellow", "aqua"])
  let endY = gsap.utils.wrap([-50, -50, -50, 50, 50, 50])
  
  
  animation.from(chars, {
    y:startY,
    rotation:rotation,
    opacity:0, stagger:{each:0.05, from:"center"}
  })
  
  .to(chars, {color:colors})
  
  .to(chars, {y:endY})
  
  
  
  GSDevTools.create({animation:animation})
}

window.addEventListener("load", init) */

// No GSDevTools and SplitText plugins
const $wrapper = document.querySelector(".wrapper");

function init() {
  gsap.set(".wrapper", { autoAlpha: 1 });

  // Manually split the text into characters
  const heading = document.querySelector("h1");
  const headingText = heading.textContent;
  heading.textContent = "";

  const chars = headingText.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    $wrapper.appendChild(span);
    return span;
  });

  let animation = gsap.timeline();
  let startY = gsap.utils.wrap([-100, 100]);
  let rotation = gsap.utils.wrap([-100, 100]);
  let colors = gsap.utils.wrap(["pink", "yellow", "aqua"]);
  let endY = gsap.utils.wrap([-50, -50, -50, 50, 50, 50]);

  animation
    .from(chars, {
      y: startY,
      rotation: rotation,
      opacity: 0,
      stagger: { each: 0.05, from: "center" },
    })
    .to(chars, { color: colors })
    .to(chars, {
      y: endY,
      onComplete: () => {
        gsap.to(chars, { y: 0 });
      },
    });
}

window.addEventListener("load", init);
