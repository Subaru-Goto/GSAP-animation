let monsters = ["alien", "crab", "yeti"];
let randomMonster = weightedRandom(monsters, "linear");

for (let i = 0; i < 20; i++) {
  let monster = document.createElement("div");
  monster.setAttribute("class", randomMonster());
  document.body.appendChild(monster);
  gsap.set(monster, {
    x: i * 60,
    y: 200,
    yPercent: -100,
    scale: "random(0.4, 0.6)",
    transformOrigin: "left bottom",
  });
}

function weightedRandom(collection, ease) {
  return gsap.utils.pipe(
    Math.random, //random number between 0 and 1
    gsap.parseEase(ease), //apply the ease
    gsap.utils.mapRange(0, 1, -0.5, collection.length - 0.5), //map to the index range of the array
    gsap.utils.snap(1), //snap to the closest integer
    (i) => collection[i] //return that element from the array
  );
}
