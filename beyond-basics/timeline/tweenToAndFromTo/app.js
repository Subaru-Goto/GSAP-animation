const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
const blue = select(".blue");
const btn = select("#btn");

gsap.defaults({ duration: 0.8 });

const blueAni = gsap
  .timeline({ paused: true })
  .from(blue, { x: -200 }) 
  .to(blue, { scale: 2 }) 
  .to(blue, { rotation: 360 }) 
  .add("middle")
  .to(blue, { scale: 1 }) 
  .to(blue, { x: 200 }) 
  .add("end");

let tween = blueAni.tweenFromTo("end", "middle");

btn.addEventListener("click", () => {
  tween.restart();
});
