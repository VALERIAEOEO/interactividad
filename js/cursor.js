let size = 42;
let fill_color = 0;
let stroke_color = 255;

function setup () {
    createCanvas(windowWidth, windowHeight);
    background(0);
}
    function draw() {
        ellipse(mouseX, mouseY, size);
}