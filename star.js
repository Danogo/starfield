function Star() {

  this.x = random(-width / 2, width / 2);
  this.y = random(-height / 2, height / 2);
  this.z = random(width);
  this.pz = this.z;


  this.update = function() {
    this.z = this.z - 15;
    if (this.z < 1) {
      this.x = random(-width / 2, width / 2);
      this.y = random(-height / 2, height / 2);
      this.z = width;
      this.pz = this.z;
    }
  }

  this.show = function() {

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    noStroke();
    fill(255);
    var r = map(this.z, 0, width, 13, 2);
    //ellipse(sx, sy, r, r);

    this.pz = this.z;

    push();
    translate(mouseX, mouseY);
    stroke(255);
    line(px, py, sx, sy);
    pop();
  }
}
