let bgColor;
let canvasW = 800;
let canvasH = 800;

function setup () {
  createCanvas(canvasW, canvasH);
  bgColor = color('hsl(179, 48%, 64%)');
  background(bgColor);
}

function draw () {
  // house shape
  noStroke();
  fill('hsl(306, 48%, 64%)');
  rect(200, 400, 400, 400);

  //doors
  scale(1);
  noStroke();
  fill('hsl(48, 48%, 64%)');
  beginShape(QUADS);
  vertex(450, 600);
  vertex(450, 800);
  vertex(550, 800);
  vertex(550, 600);
  
  vertex(250, 600);
  vertex(250, 800);
  vertex(350, 800);
  vertex(350, 600);
  endShape(CLOSE);

  //roof
  fill('hsl(359, 48%, 64%)');
  triangle(200, 400, 600, 400, 400, 200);

  
  //sun
  stroke('yellow');
  strokeWeight(2);
  fill("yellow");
  scale(0.5);
  ellipse(100, 100, 90, 90);

  //sun rays
  line(100, 100, 180, 10);
  line(100, 100, 10, 180);
  line(100, 100, 20, 200);
  line(100, 100, 200, 20);
  line(100, 100, 200, 50);
  line(100, 100, 50, 200);
  line(100, 100, 180, 200);
  line(100, 100, 200, 180);
  line(100, 100, 20, 20);
  line(100, 100, 0, 20);



}