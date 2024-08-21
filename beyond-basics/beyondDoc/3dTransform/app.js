gsap.set(".noPerspective .box", {transformPerspective:"200"})

let animation = gsap.timeline()

gsap.set(".noPerspective", {transformPerspective:400});
//Tthis line will delete the shared vanishing point is relative to self

animation.to(".box", {
  rotationY:360, 
  duration:8, 
  ease:"none",
  transformOrigin:"50% 50%"
}).to(".around", {transformOrigin:"50% 50%, -100"}, "<")