let title = document.querySelector("h1");
let inputText = document.getElementById("input-text");
let inputcolor = document.getElementById("input-color");
inputText.addEventListener("input", function() {
    const value = inputText.value;
    title.innerText = value;

});

inputcolor.addEventListener("input", function() {
    const color = inputcolor.value;
    title.style.color = color;
});

let btnDark = document.getElementById("btn-dark");
btnDark.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

});

let size = 10;
let fill_color = "goldenrod";
let stroke_color = "goldenrod";

function setup () {
    createCanvas(windowWidth, windowHeight);
    background(100);
    noCursor();
}
    function draw() {
        background(30,70,170,50);
        fill(fill_color);
        stroke(stroke_color);   
        ellipse(mouseX, mouseY, size);
}