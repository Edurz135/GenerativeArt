
class CA {
    constructor() {
        this.w = 5;
        this.generation = 0;
        this.cells = new Array(Math.floor((window.innerWidth - 50) / this.w));
        for(let i=0; i < this.cells.length; i++) {
            this.cells[i] = 0;//Math.floor(Math.random() * 2);
        }
        this.ruleset = [0, 1, 0, 1, 1, 0, 1, 0];
        // for(let i=0; i < this.ruleset.length; i++) {
        //     this.ruleset[i] = Math.floor(Math.random() * 2);
        // }
        console.log(this.ruleset)
        this.cells[Math.floor(this.cells.length / 2)] = 1;
    }

    rules(a, b, c) {
        if (a==1 && b==1 && c==1) return this.ruleset[0];
        if (a==1 && b==1 && c==0) return this.ruleset[1];
        if (a==1 && b==0 && c==1) return this.ruleset[2];
        if (a==1 && b==0 && c==0) return this.ruleset[3];
        if (a==0 && b==1 && c==1) return this.ruleset[4];
        if (a==0 && b==1 && c==0) return this.ruleset[5];
        if (a==0 && b==0 && c==1) return this.ruleset[6];
        if (a==0 && b==0 && c==0) return this.ruleset[7];
    }

    generate() {
        var nextGen = new Array(this.cells.length);
        for(let i=0; i < this.cells.length; i++) {
            let a = this.cells[i - 1] || 0;
            let b = this.cells[i];
            let c = this.cells[i + 1] || 0;
            
            let newValue = this.rules(a, b, c);
            nextGen[i] = newValue;
        }
        this.cells = nextGen;
        this.generation++;
    }

    draw() {
        for(let i=0; i < this.cells.length; i++) {
            let cell = this.cells[i];
            if(cell == 1) {
                fill("black");
            } else {
                fill("white");
            }
            rect(i * this.w , this.generation * this.w, this.w, this.w)
        }
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    // noLoop()
    noStroke()
}

var ca = new CA();

function draw() {
    ca.draw();
    ca.generate();
}