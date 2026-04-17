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
