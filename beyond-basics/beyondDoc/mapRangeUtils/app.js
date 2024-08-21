const setScaleX = gsap.quickSetter(".box", "scaleX")
const setScaleY = gsap.quickSetter(".box", "scaleY")

demo.addEventListener("mousemove", function(e) {
  mouseX.textContent = e.offsetX
  mouseY.textContent = e.offsetY
  let scaleX = gsap.utils.mapRange(0, 600, 1, 4, e.offsetX)
  let scaleY = gsap.utils.mapRange(0, 600, 1, 4, e.offsetY)
  setScaleX(scaleX)
  setScaleY(scaleY)
})