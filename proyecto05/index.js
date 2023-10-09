function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    noFill();
    noLoop();
    strokeWeight(0.4);
}

function drawMaxiCircle(px, py, separation, num_circles, color) {
    stroke(color)
    var factor = 0;
    for(let i=0; i < num_circles; i++) {
        circle(px, py, 70 + separation * i + factor);
        factor += 0.037 * i;
        // ellipse(px, py, 70 + separation * i, 70 + separation * i)
    }
}

function rotating(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

const xcenter = Math.floor(window.innerWidth / 2);
const ycenter = Math.floor(window.innerHeight / 2);
var ang = 0;
function draw() {
    clear();
    let a = rotating(0, 0, -20, +0, ang);
    let b = rotating(0, 0, +20, +0, ang);
    let c = rotating(0, 0, -0, -20, ang);
    let d = rotating(0, 0, +0, +20, ang);
    drawMaxiCircle(xcenter + a[0], ycenter + a[1], 5, 100, "rgb(0, 0, 255)");
    drawMaxiCircle(xcenter + b[0], ycenter + b[1], 5, 100, "rgb(0, 0, 255)");
    drawMaxiCircle(xcenter + c[0], ycenter + c[1], 5, 100, "rgb(255, 0, 0)");
    drawMaxiCircle(xcenter + d[0], ycenter + d[1], 5, 100, "rgb(255, 0, 0)");
    ang += 1;
}