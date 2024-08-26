let animation = gsap.timeline();
let stagger = 1;

function init() {
  // Avoid unstiled content
  gsap.set(".demo", { autoAlpha: 1 });
  // z value makes it rotate in the center but with distance
  gsap.set(".demo div", { transformOrigin: "50% 50% -50" });

  animation.from(".demo div", {/* y: 80 */ rotationX: -90, opacity: 0, stagger:stagger })
    .to(".demo div", {/* y:-80 */rotationX:90, opacity:0, stagger:stagger }, stagger) // offset of 0.5 which is the stagger 0.5 of from tween



}

init();


/*
let animation = gsap.timeline({repeat:20})
let targets = document.querySelectorAll(".demo div")
let numberOfTargets = targets.length

let duration = 0.4 //change this
let pause = 0.75 // change this

let stagger = duration + pause
let repeatDelay = (stagger * (numberOfTargets - 1)) + pause

function init() {
  gsap.set(".demo", {autoAlpha:1})
  animation.from(targets, {y:80, duration:duration, opacity:0, stagger:{
    each:stagger,
    repeat:-1,
    repeatDelay:repeatDelay
  }})
     .to(targets, {y:-80, duration:duration, opacity:0, stagger:{
    each:stagger,
    repeat:-1,
    repeatDelay:repeatDelay
  }}, stagger)
}
//click anywhere to pause
window.addEventListener("click", () => animation.paused(!animation.paused()))
init()


*/
