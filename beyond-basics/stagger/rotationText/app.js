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
