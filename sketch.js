var W=800;
var H=600;
var isMenu=1;
var score=0;
var LastScore;
var pipe1;
var pipe2;
var bird;
let img1;
let img2;
let back;
let flap;
let gameover;
var button;

function preload() {
  img1 = loadImage('assets/frame-1.png');
  img2 = loadImage('assets/frame-2.png');
  back = loadImage('assets/back.jpg');
  flap = loadSound('sounds/flap.mp3');
  gameover = loadSound('sounds/gameover.wav');
}

function Reset(){
  createCanvas(W,H);
  pipe1=new Pipe(0);
  pipe2=new Pipe(450);
  bird=new Bird();
  frameRate(60);
  score=0;
  if(isMenu==1){isMenu=0;}
  else if(isMenu==0){isMenu=1;}
}

function setup(){
  button=createButton("PLAY",300);
  button.mousePressed(Reset);
}

function draw(){
  if(!isMenu){
    LastScore=score;
    background(200);
    image(back,0,0,800,600);
    pipe1.update();
    pipe2.update();
    bird.show();
    bird.update();
    collison(bird.pos.x,bird.pos.y,pipe1.x,pipe1.y,pipe1.w,canvas.height,bird.r);
    collison(bird.pos.x,bird.pos.y,pipe1.x,0,pipe1.w,pipe1.h,bird.r);
    collison(bird.pos.x,bird.pos.y,pipe2.x,pipe2.y,pipe2.w,canvas.height,bird.r);
    collison(bird.pos.x,bird.pos.y,pipe2.x,0,pipe2.w,pipe2.h,bird.r);
    edges(bird.pos.y,canvas.height);
    Score(bird.pos.x,pipe1.x);
    Score(bird.pos.x,pipe2.x);
    if(score%1==0){
      textSize(32);
      text(s(LastScore),W/2,H/2-200);
    }
  }
}


function mousePressed() {
  bird.vel.y=-10;
  flap.play();
}

function collison(x1,y1,x2,y2,w1,h1,r){
  if(x1+r/4>=x2 && x1-r/4<=x2+w1 && y1+r/4>=y2 && y1-r/4<=y2+h1){
    Reset();
    gameover.play();
    textSize(32);
    text("GAME OVER!",W/2-100,H/2);
  }
}
function edges(y1,y2){
  if(y1>y2||y1<0){
    Reset();
    gameover.play();
    textSize(32);
    text("GAME OVER!",W/2-100,H/2);
  }
}

function Score(x1,x2){
  if(x1>x2&&x1>x2+5){
    score++;
    LastScore=score;
  }
}
function s(score){
  score=Math.floor(score/22);
  return score;
}
