gsap.registerPlugin(MotionPathPlugin);

let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectorAll(e);

let progressSlider = select("#progressSlider");
let time = select("#time");
let pause = select("#pause");

let home = select("#home");
let candy = select("#candy");
let dogpark = select("#dogpark");
let school = select("#school");

const setButtonState = () => {
  pause.innerHTML = animation.paused() ? "play" : "pause";
};

let animation = gsap.to("#herman", {
  duration: 6,
  ease: "none",
  motionPath: {
    /*[
      { x: 100, y: 0 },
      { x: 200, y: 100 },
      { x: 300, y: 0 },
      { x: 400, y: 100 }
    ],*/
    path: "#motionpath",
    align: "#herman",
  },
  onUpdate: animationUpdate,
  onComplete: () => (pause.innerHTML = "play"),
});

progressSlider.addEventListener("input", function () {
  animation.progress(this.value).pause();
});

progressSlider.addEventListener("change", function () {
  pause.innerHTML = "play";
});

function animationUpdate() {
  progressSlider.value = animation.progress();
  time.innerHTML = this.progress().toFixed(2);
}

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

/*
An Array of objects with x,y coordinates. 
A curved path will be plotted through these coordinates, 
or set type: "cubic" to have them interpreted as sequential cubic bezier coordinates 
(ordered like: anchor, two control points, anchor, two control points, etc.):
*/

pause.addEventListener("click", () => {
  // Toggle
  animation.paused(!animation.paused());
  if (animation.progress() == 1) {
    animation.restart();
  }
  setButtonState();
});

// Manipulate progress
gsap.to(animation, { progress: 0.9, duration: 3, ease: "bounce" });

home.addEventListener("click", () => {
  animation.pause();
  gsap.to(animation, { progress: 0, onComplete: setButtonState });
});

candy.addEventListener("click", () => {
  animation.pause();
  gsap.to(animation, { progress: 0.5, onComplete: setButtonState });
});

dogpark.addEventListener("click", () => {
  animation.pause();
  gsap.to(animation, { progress: 0.9, onComplete: setButtonState });
});

school.addEventListener("click", () => {
  animation.pause();
  gsap.to(animation, {
    progress: 1,
    ease: "bounce",
    onComplete: setButtonState,
  });
});
