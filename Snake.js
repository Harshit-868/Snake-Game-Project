class Snake {

  constructor() {
    this.body = [];
    this.body[0] = createVector(10, 10);
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }

  setVelocity(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  endGame() {
    var x = this.body[this.body.length - 1].x;
    var y = this.body[this.body.length - 1].y;
    var c = width/20;
    if (x >= c+1 || x <= -1 || y >= c+1 || y <= -1) {
      return true;
    }
    for (var i = 0; i < this.body.length - 1; i++) {
      var part = this.body[i];
      if (part.x == x && part.y == y && this.xdir != 0 ||
        part.x == x && part.y == y && this.ydir != 0) {
        return true;
      }
    }
    return false;
  }

  eat(pos) {
    var x = this.body[this.body.length - 1].x;
    var y = this.body[this.body.length - 1].y;
    if (x == pos.x && y == pos.y) {
      var head = this.body[this.body.length - 1].copy();
      this.len++;
      this.body.push(head);
      return true;
    }
    return false;
  }

  display() {
    var head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);

    for (var i = 0; i < this.body.length; i++) {
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

}