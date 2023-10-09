var xstart, xnoise, ystart, ynoise;

function setup() {
    createCanvas(innerWidth, innerHeight)
    background(255);
    xstart = random(10);
    ystart = random(10)
    
}

function drawPoint(x, y, noiseFactor) {
    // pixeles   --------
    var len = 10 * noiseFactor;
    rect(x, y, len, len)
    
    // lines     --------
    // push();
    // translate(x, y);
    // stroke(210, 210, 250);
    // rotate(noiseFactor * radians(360));
    // line(0, 0, 20, 0);
    // pop();

    // clouds    --------
    // push();
    // translate(x, y);
    // rotate(noiseFactor * radians(540));
    // var edgeSize = noiseFactor * 35;
    // var grey = 150 + noiseFactor * 120;
    // var alph = 150 + noiseFactor * 120;
    // noStroke();
    // fill(grey, alph);
    // ellipse(0, 0, edgeSize, edgeSize/2);
    // pop();
}

function draw() {
    background(0);
    xstart += 0.1;
    ystart += 0.1;
    
    xnoise = xstart;
    ynoise = ystart;

    for(let y = 0; y < innerHeight; y+=5) {
        ynoise += 0.04;
        xnoise = xstart;
        for(let x = 0; x < innerWidth; x+=5) {
            xnoise += 0.04;
            drawPoint(x, y, noise(xnoise, ynoise))
        }
    }
}