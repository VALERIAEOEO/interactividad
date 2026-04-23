function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
        background(0);
        stroke("white");
        noFill()
        rect(x, y, 100, 100);

        x += 1;
        y += 1;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}