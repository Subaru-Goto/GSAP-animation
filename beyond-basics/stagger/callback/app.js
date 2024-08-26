let tween = gsap.to(".box", {opacity:0.5, scale:0.2, stagger:{
	each:0.5,
	onStart:function() {
		let target = this.targets()[0]
		if(target.getAttribute("data-name") === "stop"){
			tween.reverse()
      
      /*.pause(this.startTime())
      this.kill()
			console.log(tween.time(), this.startTime())*/
		}
	}
}})

document.querySelector(".demo").addEventListener("click", function(event) {
	if (event.target.matches('.box')) {
		event.target.setAttribute("data-name", "stop")
		gsap.to(event.target, {backgroundColor:"red", duration:0.2})
	}
})