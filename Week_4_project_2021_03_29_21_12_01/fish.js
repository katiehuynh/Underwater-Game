class Fish {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.xdirection = random(width);
    this.ydirection = random(height);
    this.fishWidth = w;
    this.angle = 0;
  }
  swim() {
    push();
    translate(this.x, this.y);
    rotate(this.angle)
    imageMode(CENTER)
    image(fishy, 0, 0, this.fishWidth, this.fishWidth / 2);
    pop();
    
    this.x = noise(this.xdirection * 0.008 ) * width;
    this.y = noise(this.ydirection * 0.06) * height;
    
    this.x * this.xdirection++;
    //this.x += this.xdirection * random(width);
   // this.x += this.xdirection;
    this.y * this.ydirection;
    
    //this.x += this.xdirection;
    //this.y += this.ydirection * random(height);
    this.y += this.ydirection;
  }

  checkEdges() {
    if (this.x > width || this.x < 0) {
      this.xdirection = -this.xdirection;
    }
    if(this.xdirection<0){
      this.angle=0
    }else{
      this.angle=180
    }
  }
  
  contains(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.fishWidth * 2) {
      return true;
    } else {
      return false;
    }
  }
}