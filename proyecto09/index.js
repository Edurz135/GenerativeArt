//-----------------
//Written in p5js
//-----------------
//C=0,H=128
//draw=_=>{createCanvas(W=640,W)
//C+=.002
//for(j=0;j<W;j+=H)for(i=0;i<W;i+=H)D(i,j,H)}
//D=(x,y,s)=>{a=x+s/2,b=y+s/2
//abs(noise(a/W,b/W,mag(a,b)/W-C)-.5)>
//map(s,4,H,.05,.18)?
//square(x,y,s):
//(s/=2)>4&&(D(x,y,s),D(x+s,y,s),D(x,y+s,s),D(x+s,y+s,s))}

//-----------------
//Written in Processing(Java)
//-----------------
var Unit;
var Counter;
var MX, MY;

let img;
function preload() {
    img = loadImage('a.png');
}

function setup() {
    Unit=128; // largest size of a square
    Counter=0;
    createCanvas(innerWidth, innerHeight)
    stroke(0);
    noFill();
    // noLoop();
}
  
function draw() {
    background(255);
    image(img, 0, 0);
    loadPixels();

    Counter+=0.002;
    MX=mouseX*0.001;
    MY=mouseY*0.001;
    for (let j=0; j<height; j+=Unit) {
        for (let i=0; i<width; i+=Unit) {
            DrawRect(i, j, Unit);
        }
    }
}

function rotating(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
    cos = Math.cos(radians),
    sin = Math.sin(radians),
    nx = (cos * (cx - x)) + (sin * (cy - y)) + cx,
    ny = (cos * (cy - y)) - (sin * (cx - x)) + cy;
    return [nx, ny];
}

function DrawRect(x, y, size) {
    var cx = x + size/2; // center in the square for noise
    var cy = y + size/2;
    var n = noise(cx/width-MX, cy/height-MY, mag(cx, cy)/height-Counter);
    var threshold = map(size, Unit, 4, 0.18, 0.05);
    if (abs(n-0.5) > threshold) {
        rect(x, y, size, size);
    } else {
        size = size/2;
        if (size >= 4) { // smallest size of a square = 4pixels
            DrawRect(x, y, size);
            DrawRect(x+size, y, size);
            DrawRect(x, y+size, size);
            DrawRect(x+size, y+size, size);
        }
    }
}