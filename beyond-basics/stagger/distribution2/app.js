gsap.registerPlugin(CustomEase) 

var select = e => document.querySelector(e);
var selectAll = e => document.querySelectorAll(e);
var easeSelect = select(".ease-select");
var fromRadio = selectAll("radiol[name='radio']");
var tween = gsap.to({}, {});

function createEaseVis() {
  let size=650;
  let svgNS = "http://www.w3.org/2000/svg";  
  let visualizer = document.createElementNS(svgNS,"g");
  let path = document.createElementNS(svgNS,"path");
  path.setAttribute('d', "M0," + size + " " + size + ", 0");
  path.setAttribute('id', "ease");
  for(var i = 0; i < 65; i++){
    let rect = document.createElementNS(svgNS,"rect");
    rect.setAttribute("width", 9);
    rect.setAttribute("height", 650);
    rect.setAttribute("fill", "#444");
    rect.setAttribute("x", i*10);
    visualizer.appendChild(rect);
  }
  visualizer.appendChild(path);
  document.getElementById("ease-vis").appendChild(visualizer);
}



var config = {
  from:"0",
  ease:"linear"
}


select("#ease-vis").addEventListener("click", () => {tween.paused(!tween.paused())})


//get a function that, when fed an index value, will return a value according to the configuration options

function update() {
  CustomEase.getSVGData(config.ease, {width: 650, height: 650, path: "#ease"});
  tween.progress(0).kill();
  gsap.set("rect", {scaleY:0, transformOrigin:"50% 100%"})
  tween = gsap.to("rect", 
          {scaleY:1,  duration:3, ease:"none", stagger:{
            ease:config.ease,
            from:config.from,
            amount:5
          }})
}

function radioUpdate(value) {
  config.from = value;
  update();
}

easeSelect.addEventListener("change", function(e) {
    config.ease = e.target.value;
    update();
});


select("#restart").onclick = function() {
  tween.restart();
}




createEaseVis();
update();