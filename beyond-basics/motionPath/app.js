gsap.registerPlugin(MotionPathPlugin)

let select = e => document.querySelector(e);
let selectAll = e => document.querySelectorAll(e);

let progressSlider = select("#progressSlider");
let time = select("#time");
let pause = select("#pause");

let animation = gsap.to("#herman", { duration:6, ease:"none",
  motionPath:{
    path:"#motionpath",
    align:"#herman"
  },
  onComplete: () => pause.innerHTML = "play"
});

/* let animation = gsap.to("#herman", { 
  duration: 6, 
  ease: "none",
  bezier: {
    type: "cubic",
    values: [
      { x: 100, y: 0 },
      { x: 200, y: 100 },
      { x: 300, y: 0 },
      { x: 400, y: 100 }
    ],
    autoRotate: true
  },
  onComplete: () => pause.innerHTML = "play"
}); */

pause.addEventListener("click", ()=> {
  animation.paused(!animation.paused());
  if(animation.progress() == 1){
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? "play" : "pause";
})