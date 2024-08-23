gsap.registerPlugin(SplitText)
let mySplit = new SplitText("h1", {type:"chars"})
console.log(mySplit.chars) // an array of elements

let scaleDistributor = gsap.utils.distribute({
     base:0.2,
      amount: 1.5, 
      from:"center",
      ease: "power1"
})

let distanceDistributor = gsap.utils.distribute({
     base:-200, 
     amount: 400,        
     ease: "none"
})


gsap.from(mySplit.chars, { 
  scale:scaleDistributor, // change the scale to distribution (0.2, 1.5)
  x:distanceDistributor, // (-200, 200) distribution
  opacity:0,
  repeat:50,
  yoyo:true,
  stagger:{
    each:0.01,
    from:"center"
  }
})