let capture;
var canvas;

function windowResized() {
  resizeCanvas(windowWidth, windowWidth/4*3);
  canvas.position(0, (windowHeight-height)/2);
  canvas.style('z-index', '0');
}

function setup() {
  var height = windowWidth/4*3;
  canvas = createCanvas(windowWidth, height);
  canvas.position(0, (windowHeight-height)/2);
  canvas.style('z-index', '-1');
  capture = createCapture(VIDEO);
  capture.size(windowWidth, height);
  capture.hide();
}

function draw() {  
  push();
  translate(width,0);
  scale(-1, 1);
  image(capture, 0, 0, windowWidth, height);
  fill(255, 90);
  rect(0,0,windowWidth, windowWidth/4*3);
  pop();
}