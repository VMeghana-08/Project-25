class Paper{
    constructor(x,y,r){
        var options ={

          
            restitution :0.3,
            friction :0.5,
            density :1.2
            
        }
        this.x=x;
        this.y=y;
        this.r=r;


        this.body=Bodies.circle(this.x ,this.y ,17,options);
        
        this.width=width;
        this.height=height;
        this.image = loadImage("Sprites/paper.png");
        World.add(world,this.body);
        
       
       
    }
    display(){
      
        var pos=this.body.position;
    
        push ()
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,0,50,50);     
        pop ()
    }
}
       
        

   
   