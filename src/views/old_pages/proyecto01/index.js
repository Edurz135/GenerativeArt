function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
}

var pos_x = 200, pos_y = 200;
var speed = 20;
function draw() {
    var speed_x = random(-1.0, 1.0) * speed;
    var speed_y = random(-1.0, 1.0) * speed;
    pos_x += speed_x;
    pos_y += speed_y;
    ellipse(pos_x, pos_y, 100, 100)
}