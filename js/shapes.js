function setup() {
    createCanvas(windowWidth, windowHeight);
    x = 0;
    y = 0;
}

function draw() {
        background(random(0,100), random(0,100), random(130,200), 20);
        stroke("goldenrod");
        noFill()
        rect(x, y, 100, 100);

        x += 5;
        y += 5;

        if (x > width) {
            x = -7;   }

        if (y > height) {
            y = -5;        }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}