let split
let animation = gsap.timeline({})
const wrapper = document.querySelector(".wrapper");

function splitTextToChars(element) {
  const text = element.textContent;
  element.innerHTML = '';
  return text.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char;
    wrapper.appendChild(span);
    return span;
  });
}

function init() {
  const h1 = document.querySelector('h1');
  split = { chars: splitTextToChars(h1) };
  //gsap.set("h1", {autoAlpha:1});
  gsap.set(split.chars, {transformPerspective:200});
  animation.to(split.chars, {duration:1.2, rotationY:360, ease:"back(2)", stagger:{amount:1, ease:"power2.in"}});

}

window.addEventListener("load", function(event) { 
  init(); //do stuff
});