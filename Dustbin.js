class Dustbin{
    constructor(x,y){
       var options ={
           isStatic:true
       }
       this.dustbinHeight = 200;
       this.dustbinWidth = 180;
       this.bottomBody = Bodies.rectangle(x,y+50,this.dustbinWidth,this.dustbinHeight/4,options);
       this.rightBody = Bodies.rectangle(x+this.dustbinWidth/2,y-this.dustbinHeight/2,this.dustbinWidth/2,this.dustbinHeight,options);
       this.leftBody = Bodies.rectangle(x-this.dustbinWidth/2,y-this.dustbinHeight/2,this.dustbinWidth/2,this.dustbinHeight,options);
      // this.width = 180;
     //  this.height = 200;
       this.image = loadImage("Sprites/dustbingreen.png");
       World.add(world,this.bottomBody);
       World.add(world,this.rightBody);
       World.add(world,this.leftBody);
    }
    display(){
      
        var pos=this.bottomBody.position;
    
        push ()
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,-100,this.dustbinWidth,this.dustbinHeight);     
        pop ()
    
     
      }
}
