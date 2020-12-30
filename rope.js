class rope{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB:pointB,
          stiffness: 0.04,
          length: 400
      }
      this.pointB=pointB;
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
  }
 
  display(){
    
    
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
     
      strokeWeight(5);
      stroke(this.color); 
      
      line(pointB.x, pointB.y, pointA.x, pointA.y);
  
}

  
}