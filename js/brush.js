function setup () {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(random(0,100), random(0,100), random(130,200), 20);
    fill(random(0,255), random(0,255), random(0,255), 50);
    stroke("goldenrod");
    ellipse(mouseX, mouseY, 25, 25);
}