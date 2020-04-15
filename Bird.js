
class Bird{
  constructor(){
    this.pos=createVector(W/10,H/2);
    this.vel=createVector(0,5);
    this.gravity=createVector(0,0.5);
    this.r=40;
  }
  show(){
    if(bird.vel.y>=0){image(img1,this.pos.x-28,this.pos.y-26,this.r+10,this.r+10);}
    else if(bird.vel.y<0){image(img2,this.pos.x-28,this.pos.y-26,this.r+10,this.r+10);}
  }
  update(){
    this.vel.add(this.gravity);
    this.pos.add(this.vel);
  }

}
