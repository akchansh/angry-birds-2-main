class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
    Matter.Body.setPosition(body, {x : 250, y: 130})
    Matter.Body.setAngle(bird.body,0)
    this.sling.bodyA = body;
    bird.trajectory = []
    }
    display(){
        push()
        imageMode(CENTER)
        image(this.sling1,260,170,50,100)
        if (birdarr.length > 0){
        birdarr[birdarr.length-1].display();
        }
        //image(this.sling2,230,150,50,60)
        pop()
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
            stroke(80,40,20)
            line (275,134,pointA.x+20,pointA.y)
            line(220,137,pointA.x-20,pointA.y)
        }
        push()
        imageMode(CENTER)
        //image(this.sling1,260,170,50,100)
        //bird.display();
        image(this.sling2,230,150,50,60)
        pop()
    }
    
}
