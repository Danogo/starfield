function Space() {

  this.strs_am = 200;
  this.strs = [];
  this.ship = new Ship();

  for (var i = 0; i < this.strs_am; i++) {
    this.strs[i] = new Star();
  }

  this.run = function() {

    for (var i = 0; i < this.strs.length; i++) {
      this.strs[i].update();
      this.strs[i].show();
    }

    this.ship.update();
    this.ship.show();
  }
}
