const boxWrapper = document.querySelector(".boxWrapper")
const boxes = document.querySelectorAll(".box")
const demoWidth = 600
const boxWrapperWidth = boxWrapper.offsetWidth
const scrollAmount = boxWrapperWidth - demoWidth
console.log(scrollAmount)

boxes.forEach((box, index) => {
  box.textContent = index+1
})

const tween = gsap.to(boxWrapper, {x:-scrollAmount, duration:10, ease:"none"})

demo.addEventListener("mousemove", function(e) {
  mouseX.textContent = e.offsetX  
  let distance = e.offsetX - 300
  distanceX.textContent = distance
  let timeScale = gsap.utils.mapRange(-300, 300, -3, 3, distance)
  tween.timeScale(timeScale)
})