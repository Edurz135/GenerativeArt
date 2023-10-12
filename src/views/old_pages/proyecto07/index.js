var angnoise = 0, radiusnoise = 0;
var xnoise = 0, ynoise = 0;
var angle = -Math.PI/2;
var radius = 50;
var strokeCol = 254;
var strokeChange = -1;

function setup() {
    createCanvas(innerWidth, innerHeight)
    smooth();
    frameRate(200);
    background(255);
    noFill();
}


function draw() {
    radiusnoise += 0.005;
    radius = noise(radiusnoise) * 550 + 1;
    console.log(radius)
    angnoise += 0.005;
    angle += noise(angnoise) * 6 - 3;
    if(angle > 360) angle -= 360;
    if(angle < 0) angle += 360;
    
    xnoise += 0.01;
    ynoise += 0.01;
    
    var centerX = innerWidth / 2 + noise(xnoise) * 100 - 50;
    var centerY = innerHeight / 2 + noise(xnoise) * 100 - 50;
    
    var rad = radians(angle);
    var x1 = centerX + (radius * Math.cos(rad))
    var y1 = centerY + (radius * Math.sin(rad))
    
    var opprad = rad + Math.PI;
    var x2 = centerX + (radius * Math.cos(opprad))
    var y2 = centerY + (radius * Math.sin(opprad))
    
    strokeCol += strokeChange;
    if(strokeCol > 360) strokeCol -= 1;
    if(strokeCol < 0) strokeCol += 1;
    stroke(strokeCol, 60);
    strokeWeight(1);
    line(x1, y1, x2, y2);
}