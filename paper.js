/*class Paper{
    constructor(x,y,r){
   var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2,
   }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("purple");
        translate(pos.x,pos.y);
        circle(pos.x,pos.y,this.r);
        pop();
    }
}*/

class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2,

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		this.image = loadImage("MatterJSBoilerPlate-master/paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(3);
			image(this.image,0,0,this.r);
			pop()
			
	}

}