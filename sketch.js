
function setup() {
  createCanvas(400,400);
  box = createSprite(300,300,50,50)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
box.x += 3
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.x -= 3
      }
  drawSprites()

}




