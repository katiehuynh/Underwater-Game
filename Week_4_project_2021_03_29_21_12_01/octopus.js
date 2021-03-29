
class Octopus {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.xdirection = random(-1,1);
    this.ydirection = random(-1,1);
    this.octoWidth = w;
    this.angle = 0;
    this.health =  4;
  }
  swim() {
    push();
    //translate(this.x + this.xdirection, this.y + this.ydirection);
    translate(this.x, this.y);
    //rotate(this.angle)
    imageMode(CENTER)
    
      image(octopus, 0, 0, this.octoWidth, this.octoWidth);
      //octopus.resize(435 ,267);
    
    if(hurty === true){
      image(hurtocto, 0,0, this.octoWidth, this.octoWidth);
      //hurtocto.resize(435 - invaderSize ,267 - invaderSize);
      hurty = false;
    }
    
    
    pop();
    
    this.x = noise(this.xdirection * 0.002) * width;
    this.y = noise(this.ydirection * 0.001) * height;
     
  //  this.x +=  this.xdirection;
    //this.x += this.xdirection * random(width);
  //  this.y += this.ydirection;
   // this.y * this.ydirection;
    
    this.x * this.xdirection++;
    this.x += this.xdirection;
    this.y * this.ydirection;
    this.y += this.ydirection;
  }
  
  hurt(){
    if(hurty === true){
      hp = hp - 50;
      
      if(hp === 0){
        game3IsOn = 13; // octopus killed when hp = 0
      }
      return true;
    }
  }
  
  bar(){    
    //rectMode(CENTER);
    push();
    stroke('black');
    strokeWeight(5);
    fill('black');
    rect(200,100,400,20);
    pop();
    
    push();
    fill('red');
    noStroke();
    rect(200, 100, hp, 20);
    pop();
    
    push();
    if(hurty === true){
      let decrease = 125;
      fill('red');
      noStroke();
      rect(200,100,hp,20);
    }
    pop();
  }

  checkEdges() {
    if (this.x > width || this.x < 0) {
      this.xdirection = -this.xdirection;
    }
    if(this.xdirection<0){
      this.angle=0
    }else{
      this.angle=0
    }
  }
  
  contains(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.octoWidth * 2) {
      return true;
    } else {
      return false;
    }
  }
}