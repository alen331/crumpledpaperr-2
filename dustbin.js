class Dustbin{
    constructor(x,y,width,height){
        var op = {
        isStatic:true,
        }
   this.body = Bodies.rectangle(x,y,width,height,op); 
   this.width = width;
   this.height = height;
   this.image = loadImage("MatterJSBoilerPlate-master/dustbingreen.png");
   World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("white");
        imageMode(CENTER);
        image(pos.x,pos.y,this.width,this.height);
        pop();
    }
}