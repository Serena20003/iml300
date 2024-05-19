let c1,c2;

function windowResized() {
  resizeCanvas($(document).width(), $(document).height());
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function setup() {
  canvas = createCanvas($(document).width(), $(document).height());
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function draw() {
  c1 = color(235, 222, 240);
  c2 = color(153,91,220);
  
  var prevh;
  var h = document.documentElement.scrollTop || document.body.scrollTop;
  
  if (h != prevh) {
    for(let y=0; y<height; y++){
    n = map(y,-20,h,0.1,1);
    let newc = lerpColor(c2,c1,n);
    stroke(newc);
    line(0,y,width, y);
    prevh = h;
  }
  }
}