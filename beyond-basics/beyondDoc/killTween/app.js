gsap.to(".blue, .pink", {scale:0.2, rotation:360, repeat:-1, ease:"power1.inOut", yoyo:true, duration:2})

document.querySelector("#stop_btn").addEventListener("click", stopBlueDivs)

function stopBlueDivs() {
  gsap.killTweensOf(".blue", "rotation")
}
