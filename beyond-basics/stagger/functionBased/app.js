function custom(index, target, targets) {
  // console.log(index)
  // console.log(target)
  // console.log(targets)
  if(target.innerHTML == "B"){
    return 50;
  }
  return index * 20;
}

// each box gets index

gsap.to(".box", {
y: custom, 
x: custom
})