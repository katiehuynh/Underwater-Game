// Katie Huynh Week 4 project
// all images imported and drawn by me

let myCanvas;
let bubbleSound, aqua;
let bubbly = true;
let noiseY;
let noiseSpeed = 0.01;
let noiseHeight = 20;
let smolBubbles = [];
let particleSystem = [];
let jellyfishes = [];
let octopushy = [];
let vx = 0, vy = 0;
let myFishes = [];
let rockright, rockleft, coral, rrockeu, lrockeu;
let fishy, creaturey, coralland, penguin, jellyfisheu, turtle, octopus, hurtocto, levu, levufight, turtletasty;
let invaderSize = 0;
let posX = 0, posY = 0;
let posx = 0, posy;
let start = true;
let fight = false;
let hurty = false;
let game1IsOn = 10; //gameOn starts w 10
let game2IsOn = 10; //gameOn2 starts w 10
let game3IsOn = 10; //gameOn3 starts w 10
let numFish = 50;
let hp = 400;
let t = 10, time = 10, time1 = 20;

function preload(){
  aqua = loadSound('assets/aqua.mp3');
  bubbleSound = loadSound('assets/bubbless.mp3');
  rockright = loadImage('assets/rockright.png');
  rockleft = loadImage('assets/rockleft.png');
  coral = loadImage('assets/coral.png');
  rrockeu = loadImage('assets/rightrocky.png');
  lrockeu = loadImage('assets/leftrocky.png');
  fishy = loadImage('assets/fishy.png');
  creaturey = loadImage('assets/creaturey.png');
  coralland = loadImage('assets/coralland.png');
  penguin = loadImage('assets/penguin.png');
  jellyfisheu = loadImage('assets/jellyfish.png');
  turtle = loadImage('assets/turtle.png');
  octopus = loadImage('assets/octopus.png');
  hurtocto = loadImage('assets/hurtocto.png');
  levu = loadImage('assets/levu.png');
  levufight = loadImage('assets/levufight.png');
  turtletasty = loadImage('assets/turtletasty.png');
}

function setup() {
  let canvasW = 800;
  let canvasH = 800;
  myCanvas = createCanvas(canvasW, canvasH);
  
 // myCanvas.position((windowWidth-canvasW)/2,(windowHeight - 620));
  myCanvas.position((windowWidth-canvasW)/2,(windowHeight - canvasH)/2);

  //createCanvas(800, 800);
  angleMode(DEGREES);
  
  for(let i = 0; i< 10; i++){
    smolBubbles[i] = new smolBubble(random(100,750), random(100,800));
  }
  
  for (let i = 0; i <80; i++) {
    particleSystem.push(new particle());
  }
  
  for (let i = 0; i < numFish; i++) {
    myFishes.push(new Fish(i * 20, i * 20, 20 + random(40)));
  }
  
  for (let i = 0; i < numFish; i++) {
    jellyfishes.push(new jellyfish(i * 20, i * 20, 20 + random(40)));
  }
  
  for (let i = 0; i < 1; i++) {
    octopushy.push(new Octopus(random(width), random(height/2), 250 + random(40)));
  }

  if(bubbly === true){
    bubbleSound.loop();
    bubbleSound.setVolume(0.2);
  } 
  
}

function draw() {
  background(79,174,217);
  
  if(game1IsOn == 11){
    // left rockey behind
    push();
    image(lrockeu, -110, 20);
    pop();
  
    //right rockeu behind
    push();
    image(rrockeu, -50,-200);
    pop();

    //corrlaland
    push();
    image(coralland, 0,160);
    coralland.resize(900,700);
    pop();
  }
  
  //particles
  push();
  for (let i = 0; i < particleSystem.length; i++) {
    particleSystem[i].move();
    particleSystem[i].display();
    particleSystem[i].checkedge();
  }
  pop();
  
  if(start){
    background('midnightblue');
    textAlign(CENTER)
    fill('white')
    textStyle(BOLDITALIC);
    textSize(15);
    text('welcome to the ocean of backwards creatures.', (width/2) - 20, (height/2) - 20);
    text('want to catch some fish?',width/2,height/2)
    
    push();
    noStroke();
    fill(random(100,200), random(100,200), random(200,300));
    text('press "y" to enter',width/2,height/2+30)
    pop();
    
    push();
    textSize(30);
    text('Press SHIFT to absorb/kill', width/2 + 100, (height/2) + 200);
    text('Use ARROWS to move', (width/2) + 120, height/2 + 250);
    pop();
    
  }
  
  
  if(game1IsOn == 11){ //gameON now is 11
    for (var i = 0; i < myFishes.length; i++) {
      myFishes[i].swim();
      myFishes[i].checkEdges()
    }
    
    //draw a invader penguin
  if(game1IsOn == 11){
    noCursor();
    penguin.resize(145 + invaderSize, 107 + invaderSize);
    image(penguin, vx,vy);
  }
    
    movenav();
  }
  
  if(game1IsOn == 11){
    //rock1
    push();
    moveRock1(rockright, -50, -200, 2);
    pop();
    
    push();
    translate(posx - 2, 0);
    image(rockleft, -110,-50);
    posx--;
    pop();
    
    bubbly = false;
  }
  
  if(game2IsOn == 11 || game2IsOn == 12 || game2IsOn == 13){
    game13();
  }
  
  if(game3IsOn == 11 || game3IsOn == 12 || game3IsOn == 13){
    level3();
  }

  
  
  //bubbles
  for(let i =0; i < smolBubbles.length; i++){
    smolBubbles[i].display();
    smolBubbles[i].move();
  }
  
  push();
  noiseY = height * 1/ 4;
  for (let j = 0; j < 3; j++) {
    let offsetY = j * 100;
    noFill();
    stroke(0, 0, 255, 10);
    strokeWeight(height / 2);
    beginShape();
    curveVertex(0, height / 2);
    for (let i = 0; i < width; i += 50) {
      let y = noise(frameCount * noiseSpeed + i + j) * noiseHeight + noiseY + offsetY;
      curveVertex(i, y);
    }
    curveVertex(width, height / 2);
    endShape(LINES);
  }
  pop();
  
  /*// light lines
  push();
  for (let i = 0; i < particleSystem.length; i++) {
    particleSystem[i].lines();
  }
  pop();*/
  
  if(game1IsOn == 11){
    push();
    translate(0, posX++);
    image(coral, 0,-260);
    pop();
  }
  
  // score
  //timer on
  if(game1IsOn == 11){
    textAlign(CENTER);
  if (frameCount % 60 === 0 && t > 0) {
    t--;
  } else if (t === 0) {
    game1IsOn = 12; //gameon is 12 to end
  }
    
    push();
    fill('white');
    text(t, width / 2, 100);
    textStyle(BOLD);
    text("LEVEL ONE", width/2, 85);
    pop();
  }
  
  
  if(game1IsOn === 12){
    fill('white');
    stroke('lightblue')
    textStyle(BOLDITALIC)
    text("LEVEL ONE OVER", width / 2, height / 2);
    text("your score is: " + (numFish - myFishes.length), width / 2, height / 2 + 30);
    
    text("press 'x' to continue", width/2, (height/2) + 100); // game1ison = 13
  }
  
  // GAME 2
  
  // score
  //timer on
  if(game2IsOn === 12){
    textAlign(CENTER);
    if (frameCount % 60 === 0 && time > 0) {
      time--;
    } else if (time === 0) {
      game2IsOn = 13; //gameon is 12 to end
    }
    
    push();
    fill('white');
    text(time, width / 2, 100);
    textStyle(BOLD);
    text("LEVEL TWO", width/2, 85);
    pop();
  }
  
  // GAME 3
  
  // score
  //timer on
  if(game3IsOn === 12){
    textAlign(CENTER);
    if (frameCount % 60 === 0 && time1 > 0) {
      time1--;
    } else if (time1 === 0) {
      game3IsOn = 13; //gameon is 12 to end
    }
    
    push();
    fill('white');
    text(time1, width / 2, 50);
    textStyle(BOLD);
    for(let i = 0; i < 1; i++){
      text("octopus health bar: " + hp + "/400" , width/2, 75);
    }
    pop();
    
    
    push();
    fill('white');
    text(time1, width / 2, 100);
    textStyle(BOLD);
    text("LEVEL THREE", width/2, 85);
    pop();
  }
  
}

function keyPressed(){
  if(key== 'Y' || key == 'y'){
    start = false;
    game1IsOn++;
    bubbly = false;
    aqua.loop();
  }
  
  if(key == 'X' || key == 'x'){
    game1IsOn = 9;
    game2IsOn++; // starts game 13, level 2 = 11
  }  
  
  if(key == 'Z' || key == 'z'){
    game2IsOn = 9;
    game3IsOn++; // starts level3 at 11;
  }
  
  if(game1IsOn === 11){
    if(keyCode === SHIFT){
          // when the event happens
      for (var i = myFishes.length - 1; i > -1; i--) {
        if (myFishes[i].contains(vx, vy)) {
          myFishes.splice(i, 1);
          invaderSize += 2;
        }
      }
    }
  }
  
  if(game2IsOn === 12){
    if(keyCode === SHIFT){
          // when the event happens
      fight = true;
      for (let i = jellyfishes.length - 1; i > -1; i--) {
        if (jellyfishes[i].contains(vx, vy)) {
          jellyfishes.splice(i, 1);
          invaderSize += 2;
        }
      }
    }
  }
  
  if(game3IsOn === 12){
    if(keyCode === SHIFT){
          // when the event happens
      fight = true;
      for (let i = 0 ; i < octopushy.length; i++) {
        if (octopushy[i].contains(vx, vy)) {
          hurty = true;
          octopushy[i].hurt();
          
          //octopushy.splice(i, 1);
          //invaderSize += 10;
        }
      }
    }
  }
    
}

function movenav(){
  //navigation
    if (keyIsDown(LEFT_ARROW)) {
      vx -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      vx += 5;
    }

    if (keyIsDown(UP_ARROW)) {
      vy -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      vy += 5;
    }
}

function moveRock1(rock, imageX, imageY, transition){
  translate(posX + transition, 0);
  //rock.resize(posX + 2, posY + 2);
  image(rock, imageX,imageY);
  
  if(transition > 0){
    posX++;
  } else{
    posX--;
  }
}
