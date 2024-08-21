var select = e => document.querySelector(e);
var selectAll = e => document.querySelectorAll(e);
var easeSelect = select(".ease-select");
var fromRadio = selectAll("radiol[name='radio']");
var tween = gsap.timeline();
var split = new SplitText("h1", {type:"chars"})

var config = {
  
  from:"0",
  ease:"linear"
}

function createElements(newClass, amount, parent){
  for(var i = 0; i < amount; i++){
    var newDiv = document.createElement("div");  
      newDiv.classList.add(newClass);
    parent.appendChild(newDiv)  
  }
}


createElements("bar", 66, select(".bars"));


function update() {
  tween.progress(0).kill();
  
  tween = gsap.timeline().fromTo(".bar", {scaleY:1},
          {transformOrigin:"center bottom", scaleY:12, duration:0.5,stagger:{
            ease:config.ease,
            from:config.from,
            amount:1
          }})

    .fromTo(split.chars, {scale:0, opacity:0},
          {scale:1, opacity:1, duration:0.5, stagger:{
            ease:config.ease,
            from:config.from,
            amount:1,
            grid:[19,1]
          }}, 0)
}

function radioUpdate(value) {
  config.from = value;
  update();
}

var targets = gsap.utils.toArray(".bar");




easeSelect.addEventListener("change", function(e) {
  //if(this.selectedIndex > 0){
    config.ease = e.target.value;
    update();
   // }  
});


select("#restart").onclick = function() {
  tween.restart();
}

update();