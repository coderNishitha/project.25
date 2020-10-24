class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      'restitution':1.0,
      'friction':1.0,
      'density':3
    }

    
    this.body = Bodies.circle(80,540,20, options);
    this.radius = 33;
    this.image=loadImage("crumpledPaper.png") 
    World.add(world, this.body);

    console.log(this.body)
    }
  display(){

    var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
      rectMode(CENTER)
			
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.radius, this.radius)
			
      pop()
  }
  };