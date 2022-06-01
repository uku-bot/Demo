var block;


function setup() {
  createCanvas(400, 400);
  block = createSprite(200, 200, 50, 50);
}

function draw() {
  background(220);
    if (keyDown("left")) {
      background(220, 150, 200);
      block.shapeColor = rgb(180,150,80);
    }
   if (keyDown("right")) {
     background(180, 150, 80);
     block.shapeColor = rgb(70,220,180);
   }
   if (keyDown("up")) {
     background(70, 220, 180);
     block.shapeColor = rgb(20, 50, 20);
   }
   if (keyDown("down")) {
     background(20, 50, 20);
     block.shapeColor = rgb(220, 150, 200);
   }
  drawSprites();

}