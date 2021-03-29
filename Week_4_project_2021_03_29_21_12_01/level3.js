

function level3(){
  
  if(game3IsOn == 11){
    background(6,25,46);
    textAlign(CENTER)
    fill('white')
    textStyle(BOLDITALIC);
    text('ready for LEVEL 3?', (width/2) - 20, (height/2) - 20);
    text('use Levi to fight the octopus!',width/2,height/2);
    
    push();
    noStroke();
    fill(random(100,200), random(100,200), random(200,300));
    text('press "z"',width/2,(height/2)+30);
    pop();
  }
   // pressing z will lead to game2IsOn == 12
  
  if(game3IsOn == 12){
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
  if(game3IsOn == 12){
    movenav();
    
    for (var i = 0; i < octopushy.length; i++) {
      octopushy[i].swim();
      octopushy[i].checkEdges();
      octopushy[i].bar();
    }
    
    // cursor is trutle
    noCursor();
    //levu.resize(145 + invaderSize, 80 + invaderSize);
    if(fight === true){
      image(levufight, vx, vy);
      fight = false;
    } else{
      image(levu, vx, vy);
    }
   // image(levu, vx, vy);
    
  }
  
  // move the front rocks
  if(game3IsOn == 12){
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

  if(time1 === 0 && hp != 0){
    fill('white');
    stroke('lightblue')
    textStyle(BOLDITALIC)
    text("LEVEL THREE OVER", width / 2, height / 2);
    text("You didn't kill the octopus!! ", width / 2, height / 2 + 30);
  }
  
  if(game3IsOn === 13){
    fill('white');
    stroke('lightblue')
    textStyle(BOLDITALIC)
    text("LEVEL THREE OVER", width / 2, height / 2);
    text("Levi killed the octopus!! ", width / 2, height / 2 + 30);
    //text("your score is: " + (numFish - octopushy.length), width / 2, height / 2 + 30);
    
    push();
    textSize(30);
    noStroke();
    fill(random(10,90), random(50,200), random(100,300));
    text("CONGRATULATIONS!", width / 2, height / 2 - 60);
    pop();
    
   // text("press 'x' to continue", width/2, (height/2) + 100); // game2ison = 14
  }
  
}





