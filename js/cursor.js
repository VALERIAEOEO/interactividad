let fill_color = "goldenrod";
let stroke_color = "goldenrod";
let size = 25; 
let x = 0, y=0, friction = 0.2;

function setup () {
    createCanvas(windowWidth, windowHeight);
    background(0);
}
    function draw() {
        background(30,70,170,40);
       updateCursor();
    }
    function updateCursor() {
        fill(fill_color);
        stroke(stroke_color);

        x += (mouseX - x) * friction;
        y += (mouseY - y) * friction;
        ellipse(x, y, size, size);

}