





function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(40 , 60 , 50 , 40);
  fixedrect.shapeColor = " green " 
  movingrect = createSprite(100 , 60 , 50 , 40);
  movingrect.shapeColor = "green"

}

function draw() {
  background("yellow");  
  drawSprites();
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;

  if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && movingrect.y - fixedrect.y < movingrect.height / 2 + fixedrect.height / 2 && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && fixedrect.y - movingrect.y < fixedrect.height / 2 + movingrect.height / 2
    )  {
movingrect.shapeColor = "red"
fixedrect.shapeColor = "red"
  }
  else {
    movingrect.shapeColor = "green"
    fixedrect.shapeColor = "green"
  }
}