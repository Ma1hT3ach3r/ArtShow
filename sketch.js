var man;
var bad = [];
var bad2 = [];
var sceneNum = 0;
let timer = 3;
//finish up hit function https://www.youtube.com/watch?v=l0HoJHc-63Q&t=1027s
function setup() {
  createCanvas(640, 360);
  man = new Person();
  for (let i = 0; i < 100; i++) {
    bad[i] = new obstacle();
  }
  for (let l = 0; l < 100; l++) {
    bad2[l] = new obstacle2();
  }
}

function keyPressed() {
  if (key == ' ') {
    let force = createVector(0, -5);
    man.applyForce(force);
  } else if (key == 's') {
    sceneNum++;

  }

  if (sceneNum > 2) {
    sceneNum = 0;
  }
}

function draw() {

  if (sceneNum === 0) {
    scene0();
  } else if (sceneNum === 1) {
    scene1();
    fill(0, 255, 255);
    textSize(35);
    text(timer, 400, 50);

    if (frameCount % 60 == 0 && timer > 0) {
      timer--;

    }else if(timer<=0){
      timer=3;
    }
    if (timer == 0) {
      sceneNum = 2;
    }


  } else if (sceneNum === 2) {
    scene2();
  }
}

function scene1() {
  background(51);
  translate(-man.pos.x + 100, 0);
  let gravity = createVector(0, 0.05)

  man.applyForce(gravity);
  man.update();
  man.display();
  man.edges();


  //Silly hard code or obstacle
  //fill(50, 30, 200);
  //rect(200, height - 50, 100, 100);



  for (let i = 0; i < 100; i++) {
    if (man.hits(bad[i])) {
      console.log("Game Over!");
      console.log(bad[i].pos.x);
    }
    //console.log(bad[i].pos.x);

    bad[i].show();
    bad[i].update();
  }

  for (let l = 0; l < 100; l++) {
    if (man.hits(bad2[l])) {
      console.log("Game Over!");
      console.log(bad2[l].pos.x);
    }
    //console.log(bad2[l].pos.x);

    bad2[l].show();
    bad2[l].update();
  }
}


function scene0() {
  background("black");
  textSize(50);
  fill(255, 255, 0);
  text("Side Scrolller!", 150, 100);
  textSize(20);
  text("Press the space bar to jump", 190, 145);
  text("Collect as much squares as you can in 22 seconds", 100, 205);
  text("Press S to Start", 240, 300);
}

function scene2() {
  background("black");
  fill(255, 255, 0);
  textSize(40);
  text("Game Over", 200, 100);
  fill(255, 255, 255);
  textSize(30);
  text("You collected‏‏‎ ‎" + man.score + "‏‏‎ ‎cubes!", 160, 195);
  fill("yellow");
  text("Reload tab to play again", 150, 300);

}
