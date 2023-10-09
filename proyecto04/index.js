let cell = 25;
let walkers = [];

class Walker {
    constructor(x, y) {
        this.x = x || floor((width / cell) / 2) * cell;
        this.y = y || floor((height / cell) / 2) * cell;
        this.px = x;
        this.py = y;
        this.velocityX = random(-2, 2);
        this.velocityY = random(-2, 2);
    }
    
    isOut() {
        return(this.x < 0 || this.x > width || this.y < 0 || this.y > height);
    }

    move() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    velocity () {
        const simila = 0.005;
        this.velocityX += map(noise(this.x * simila, this.y * simila), 0, 1, -1, 1);
        this.velocityY += map(noise(this.y * simila, this.x * simila), 0, 1, -1, 1);
    }

    draw () {
        stroke(0.001)
        line(this.x, this.y, this.px, this.py);
        this.px = this.x;
        this.py = this.y;
    }
}

function setup() {
    let size = min(innerWidth, innerHeight) * 0.9;
    size -= (size % cell);
    createCanvas(size, size);
    for (let i = 0; i < 20; i++){
        walkers.push(new Walker());
    }
}

// function mouseClicked () {
//     for (let i = 0; i < 20; i++){
//         walkers.push(new Walker(mouseX, mouseY));
//     }
// }


function draw() {
    fill('rgba(0, 0, 0, 0.3');
    stroke(0, 0);
    rect(this.x, this.y, cell, cell);
    walkers.forEach(walker => {
        if (!walker.isOut()) {
            walker.velocity();
            walker.move();
            walker.draw();
        }
    });
}