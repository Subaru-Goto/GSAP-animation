// This does not work well without paid split Text plugin

const $wrapper = document.querySelector(".wrapper");

gsap.registerEffect({
  name: "rainbow",
  extendTimeline: true,
  defaults: {
    y: -100,
    colors: ["aqua", "pink", "yellow"],
  },

  effect: (targets, config) => {

  const targetText = targets[0].innerText;
  targets[0].textContent = "";

  const chars = targetText.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    $wrapper.appendChild(span);
    return span;
  });


  let tl = gsap.timeline();

/*   let chars = element.querySelectorAll("span"); */
  tl.from(chars, { opacity: 0, y: config.y, stagger: 0.05 }).to(
        chars,
        { color: gsap.utils.wrap(config.colors), stagger: 0.05 },
        0
      );

    return tl;
  },
});

function init() {
  gsap.set(".wrapper", { autoAlpha: 1 });

  let animation = gsap.timeline();

  animation.rainbow("h1").rainbow("h2", { y: -100 }, 0);
}

window.addEventListener("load", init);