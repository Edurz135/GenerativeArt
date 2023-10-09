function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    noFill();
    noLoop();
}

function drawSemiCircle(pos_x, pos_y, radius, num_circles, x_factor, y_factor) {
    var px = pos_x
    var py = pos_y
    for(let i = 1; i < num_circles / 2; i++) {
        var theta = i * Math.PI / (num_circles / 2);
        py += y_factor * (Math.sin(theta) * Math.PI * radius / num_circles);
        px += x_factor * (Math.cos(theta) * Math.PI * radius / num_circles);
        ellipse(px, py, radius, radius)
    }
}

var pos_x = 400, pos_y = 200;
const num_circles = 100;
const radius = 200;
function draw() {
    drawSemiCircle(pos_x, pos_y, radius, num_circles, 1, 1);
    drawSemiCircle(pos_x, 2 * pos_y, radius, num_circles, -1, 1);
}