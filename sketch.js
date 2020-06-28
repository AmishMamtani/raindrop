const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var world,engine,drop1;
var arr,drop,drop1;
function setup() {
  createCanvas(1440,812);
  engine = Engine.create();
  world = engine.world; 
  arr = [];

    for(var i=0; i<100; i++){
  arr.push(new Drops(random(0,1400),random(-500,0),10,40,random(2,10)));
  console.log(arr);
    }
    //drop = arr[1];
    //drop1 = arr[2];
  //}
  //console.log(Window,innerHeight);
  //rain = createSprite(100,0,10,30);
}

function draw() {
  background(0);
  Engine.update(engine);
  for(var i =0; i<arr.length; i++){
    arr[i].display();
    console.log(arr[i].speed)
  }
  
  drawSprites();
}