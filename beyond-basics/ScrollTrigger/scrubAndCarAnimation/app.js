gsap.registerPlugin(ScrollTrigger);

let width = window.innerWidth;
let speed = 350; //pixels per second
let endX = width - 500;

// Get the outer size of wheel
let circumference = document.querySelector("#wheel1").getBBox().width * Math.PI;
// Get the how many rotation is needed to reach the end point *360 is degree
let rotation = (endX / circumference) * 360;
// get the duration
let duration = endX / speed;
let ease = "sine.inOut";

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".carWrapper",
      start: "top 50%",
      end: "bottom 50%",
      markers: true,
      scrub: 1,
    },
  })
  .to("svg", { duration: duration, x: endX, ease: ease })
  .to(
    "#wheel1, #wheel2",
    {
      duration: duration,
      rotation: rotation,
      transformOrigin: "50% 50%",
      ease: ease,
    },
    0
  );
