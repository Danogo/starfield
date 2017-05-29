var space;

function setup() {
  createCanvas(600, 600);
  space = new Space();
}

function draw() {
  background(0);
  space.run();
}
