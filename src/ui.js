function clickBox(options) {
  this.x = options.x;
  this.y = options.y;
  this.w = options.w;
  this.h = options.h;
  this.active = options.active;
  this.draw = options.draw || function () { };
}

clickBox.prototype.testClick = function(clickX, clickY) {
  if (this.active) {
    if (clickX >= this.x && clickX <= this.x + this.w) {
      if (clickY >= this.y && clickY <= this.y + this.h) {
        return 1;
      }
    }
  }
  return 0;
}