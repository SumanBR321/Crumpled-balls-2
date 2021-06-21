class Paper{
    constructor(x,y,r){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        //this.body = bodies.circle(x,y,25,options);
      this.image = loadImage("paperImage.png");
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
        World.add(world,this.body);
    }

display(){
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    translate(pos.x,pos.y);//to update the current position of the object
    image(this.image,0,0, this.r, this.r);
    //ellipse(0,0,this.r,this.r);
    pop();
}
};