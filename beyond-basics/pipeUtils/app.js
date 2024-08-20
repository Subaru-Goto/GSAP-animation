const mapRange = gsap.utils.mapRange(0, 600, 0, 360);
const snap = gsap.utils.snap(45);
const setRotation = gsap.quickSetter(".box", "rotation", "deg");

const pipe = gsap.utils.pipe(
  mapRange,
  snap,
  setRotation
)

demo.addEventListener("mousemove", function (e) {
  mouseX.textContent = e.offsetX;
  pipe(e.offsetX)
});
