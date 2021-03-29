class smolBubble{
  constructor(tempX, tempY){
    this.x = tempX;
    this.y = tempY;
    this.size = random(5,10);
  }
  
  //move the bubbles
  move(){
    this.x += random(-4,4);
    this.y += random(-5,-3);
    if(this.y < 0){
      this.y = random(height,height + 100);
    }
    if(this.x > width){
      this.x = 0;
    }
    if(this.x < 0){
      this.x = width;
    }
  }
  
  display(){
    stroke('skyBlue');
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.size, this.size);
    ellipse(this.x + 10, this.y + 10, this.size, this.size);
  }
}

class particle {
  //similar to setup 
  constructor() {
    this.speed = createVector(random(-1, 1), random(-1, 1));
    this.xPos = random(width);
    this.yPos = random(height);
    this.diameter = random(0, 15);

  }
  // to move the object
  move() {
    this.xPos = this.xPos + this.speed.x;
    this.yPos = this.yPos + this.speed.y;
  }
  // to display the object
  display() {
    noStroke();
    //mouse interaction 
    if(dist(mouseX,mouseY,this.xPos,this.yPos)<160){
      fill(random(255),random(255),random(255));
    }else{
      fill(random(165,170), random(180,190),random(230,240));
    }
    //draw the particle
    circle(this.xPos, this.yPos, this.diameter);
    
  }
  
  lines(){
    strokeWeight(0.5);
    stroke(random(80,190), 220, random(200,255));
    line(0, (this.yPos + 14)/3, width, (this.yPos + 2)/6);
  }
  
  //bounce particle between edges
  checkedge() {
    if (this.xPos < 0 || this.xPos > width) {
      this.speed.x = -this.speed.x;
    }
    if (this.yPos < 0 || this.yPos > height) {
      this.speed.y = -this.speed.y;
    }
  }
  
}