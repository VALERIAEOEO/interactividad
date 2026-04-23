const PALETTE = ["white", "black", "blue", "magenta", "purple"];
let bg_color =0;
let stroke_color = 0;
let stroke_weight = 0;
let cords =[];

function setup () {
    createCanvas(windowWidth, windowHeight);
    bg_color = random(PALETTE);
    stroke_color = random(PALETTE);
    stroke_weight = random(42, 100);
}

function draw() {
       background(bg_color);
       stroke(stroke_color);
       strokeWeight(stroke_weight);
       noFill();

        beginShape();
        for (let i = 0; i < cords.length; i++) {
            const [x,y] = cords[i];
            vertex(x,y);
        }
        endShape();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
    cords.push([mouseX, mouseY]);   
}