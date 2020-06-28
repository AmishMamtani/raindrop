class Drops{
constructor(x,y,width,height,speed){
this.body = Bodies.rectangle(x,y,width,height,speed);
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.speed = speed;
World.add(world,this.body);
}

display(){
    var pos = this.body.position
    fill(0,255,0);
    rect(pos.x,pos.y,this.width,this.height,this.body.speed);
   

}
}