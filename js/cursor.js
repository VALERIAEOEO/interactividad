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

        x += (mouseX - x) * friction;
        y += (mouseY - y) * friction;
        fill_color1 = map(x, 0, width, 0, 255,40);
        fill_color2 = map(y, 0, height, 0, 255,50);
        fill_color3 = map(x, 0, width, 0, 255,20);

        fill(fill_color1, fill_color2, fill_color3);
        stroke(stroke_color);
        ellipse(x, y, size, size);
        ellipse(mouseX, mouseY, size/2, size/2);
        ellipse(mouseX, mouseY, size/2, size/2);


}