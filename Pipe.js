class Pipe{
  constructor(mesafe){
    this.m=mesafe;
    this.w=100;
    this.x=canvas.width+this.w+this.m;
    this.speed=8;
    this.space=150;
    this.y=random(canvas.height-100,canvas.height/2-100)
    this.h=this.y-this.space;


  }
  show(){
    push();
    fill(88, 179, 8);
    strokeWeight(5);
    //UP PIPE
    rect(this.x,0,this.w,this.h);//this.h importont
    //DOWN PIPE
    rect(this.x,this.y,this.w,canvas.height);//this.t important
    pop();
  }

  move(){
    this.x-=this.speed;
  }

  update(){
    this.show();
    this.move();
    this.edge();
  }

  edge(){
    if(this.x+this.w<0)
    {
      this.x=width;
      this.y=random(canvas.height-100,canvas.height/2-100)
      this.h=this.y-this.space;
    }
  }
}
