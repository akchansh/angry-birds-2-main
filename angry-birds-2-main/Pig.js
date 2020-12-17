class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255
  }
  display(){
    if(this.body.speed >= 3 || this.visibility < 255){
    
      this.visibility-= 20
    }
    if (this.visibility < 0){
      World.remove(world,this.body)
    }
    else{
    push()
    tint(255,this.visibility)
    super.display()
    pop()
    }
  }
  score(){
    if (this.visibility < 255 && this.visibility >- 500){
      score = score+10
    }
  }
};