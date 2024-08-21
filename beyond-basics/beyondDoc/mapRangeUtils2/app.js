const setScaleX = gsap.quickSetter(".box", "scaleX");
const setScaleY = gsap.quickSetter(".box", "scaleY");
const distanceX = document.getElementById("distanceX");

let center = 300; // 600px wide

demo.addEventListener("mousemove", function (e) {
  mouseX.textContent = e.offsetX;
  let distance = Math.abs(center - e.offsetX);
  distanceX.textContent = distance;

  distance = gsap.utils.mapRange(0, center, 4, 1, distance);
  setScaleX(distance);
  setScaleY(distance);
});
