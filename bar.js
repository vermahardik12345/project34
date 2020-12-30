class bar{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
       // this.image = loadImage("sprites/base.png");
       this.color=(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke(this.color);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        
        pop();
      }
}