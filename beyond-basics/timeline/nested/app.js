gsap.registerPlugin(TextPlugin)
const select = e => document.querySelector(e)
const selectAll = e => document.querySelectorAll(e)
const blue = select(".blue")
const pink = select(".pink")
const yellow = select(".yellow")
const herman = select(".herman")
const quote = select(".quote")

gsap.set([herman, quote], {y:80})

const master = gsap.timeline()

const blueAni = gsap.timeline()
  .to(blue, {scale:2})
  .to(blue, {rotation:360})
  .to(blue, {scale:1})

const pinkAni = gsap.timeline()
  .to(pink, {y:-50})
  .to(pink, {rotation:360})
  .to(pink, {y:0})

const yellowAni = gsap.timeline()
  .to(yellow, {scale:0.5})
  .to(yellow, {rotation:360})
  .to(yellow, {scale:1})

function hermanAni(message){
  let tl = gsap.timeline()
    .set(quote, {text:message}) 
    .to([herman, quote], {y:0, stagger:0.2, repeat:1, yoyo:true, repeatDelay:0.2})
  return tl
}

master.add(blueAni)
    .add(hermanAni("isn't that special"))
    .add(pinkAni)
    .add(hermanAni("that's nice"))
    .add(yellowAni)
    .add(hermanAni("well done!"))
    
 GSDevTools.create({animation:master})