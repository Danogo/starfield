function Ship() {

  this.x = width / 2;
  this.y = height / 2;


  this.update = function() {

    this.x = mouseX;
    this.y = mouseY;
  }

  this.show = function() {

    noFill();
    stroke(255);

    //hull
    beginShape();
    vertex(this.x - 5, this.y - 40); //1
    vertex(this.x + 5, this.y - 40); //2
    vertex(this.x + 7, this.y - 25); //3
    vertex(this.x + 9, this.y - 10); //4
    vertex(this.x + 11, this.y); //5
    vertex(this.x + 11, this.y + 20); //6
    vertex(this.x + 7, this.y + 30); //7
    vertex(this.x - 7, this.y + 30); //8
    vertex(this.x - 11, this.y + 20); //9
    vertex(this.x - 11, this.y); //10
    vertex(this.x - 9, this.y - 10); //11
    vertex(this.x - 7, this.y - 30); //12
    endShape(CLOSE);

    //leftwing
    beginShape();
    vertex(this.x - 7, this.y - 25); //1lw
    vertex(this.x - 17, this.y); //2l
    vertex(this.x - 45, this.y + 12); //3l
    // vertex(this.x - 55, this.y + 20); //4l
    vertex(this.x - 45, this.y + 20); //5l
    vertex(this.x - 11, this.y + 20); //6l
    endShape();

    //righttwing
    beginShape();
    vertex(this.x + 7, this.y - 25); //1r
    vertex(this.x + 17, this.y); //2r
    vertex(this.x + 45, this.y + 12); //3r
    //vertex(this.x + 55, this.y + 20); //4r
    vertex(this.x + 45, this.y + 20); //5r
    vertex(this.x + 11, this.y + 20); //6r
    endShape();

    line(this.x + 9, this.y - 10, this.x - 9, this.y - 10); // 4-11
    line(this.x - 17, this.y, this.x + 17, this.y); //2l-2r
    line(this.x + 11, this.y + 20, this.x - 11, this.y + 20); //6-9
    line(this.x - 45, this.y + 12, this.x - 45, this.y + 20); //3l -5l
    line(this.x + 45, this.y + 12, this.x + 45, this.y + 20); // 3r -5r
    arc(this.x, this.y - 25, 14, 7, PI, TWO_PI);

    triangle(this.x - 45, this.y + 12, this.x - 45, this.y + 20, this.x - 55, this.y + 20);
    triangle(this.x + 45, this.y + 12, this.x + 45, this.y + 20, this.x + 55, this.y + 20);

  }
}
