

function game13(){
  
  if(game2IsOn == 11){
    background('black');
    textAlign(CENTER)
    fill('white')
    textStyle(BOLDITALIC);
    text('ready for LEVEL 2?', (width/2) - 20, (height/2) - 20);
    text('want to catch some jellyfish?',width/2,height/2);
    
    push();
    noStroke();
    fill(random(100,200), random(100,200), random(200,300));
    text('press "x"',width/2,(height/2)+30);
    pop();
  }
   // pressing x will lead to game1IsOn == 12
  
  if(game2IsOn == 12){
    background(79,174,217);
  
    // left rockey behind
    push();
    image(lrockeu, -110, 20);
    pop();
  
    //right rockeu behind
    push();
    image(rrockeu, -50,-200);
    pop();
    
    //particles
  push();
  for (let i = 0; i < particleSystem.length; i++) {
    particleSystem[i].move();
    particleSystem[i].display();
    particleSystem[i].checkedge();
  }
  pop();
  

    //corrlaland
    push();
    image(coralland, 0,160);
    coralland.resize(900,700);
    pop();
    
  }
  
  // cursor
  if(game2IsOn == 12){
    movenav();
    
    for (var i = 0; i < jellyfishes.length; i++) {
      jellyfishes[i].swim();
      jellyfishes[i].checkEdges()
    }
    
    // cursor is trutle
    noCursor();
    if(fight === true){
      image(turtletasty, vx, vy);
      fight = false;
    } else{
      turtle.resize(107 + invaderSize, 145 + invaderSize);
    image(turtle, vx, vy);
    }
    
    
  }
  
  // move the front rocks
  if(game2IsOn == 12){
    //rock1
    push();
    moveRock1(rockright, -50, -200, 2);
    pop();
    
    push();
    translate(posx - 2, 0);
    image(rockleft, -110,-50);
    posx--;
    pop();
  }

  
  if(game2IsOn === 13){
    fill('white');
    stroke('lightblue')
    textStyle(BOLDITALIC)
    text("LEVEL TWO OVER", width / 2, height / 2);
    
    text("your score is: " + (numFish - jellyfishes.length), width / 2, height / 2 + 30);
    
    
    noStroke();
    text("press 'z' to continue", width/2, (height/2) + 100); // game2ison = 14
    
  }
  
}





