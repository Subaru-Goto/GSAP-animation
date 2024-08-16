
document.querySelectorAll(".box").forEach( function(elem) {
  elem.addEventListener("click", function() {
      gsap.to(this, {duration:0.3, width:"75%", backgroundColor:"gray"})
  });
});

document.querySelector("#reset").addEventListener("click", () => {
gsap.set(".box", {clearProps:"all"})
// clearProp will remove inlineStyle but not css
//or clearProps:true works the same way
// or specify backgroundColor etc
})