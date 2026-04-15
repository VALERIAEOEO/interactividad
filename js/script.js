/* pop-ups matematicos

let a = 1;
let b = 2;

function suma(a = 0, b = 0) {
    
        const resultado = a + b;
        alert(resultado);
    }

    function resta(a = 0, b = 0) {
        
            const resultado = a - b;
            alert(resultado);
        }

        suma(2, 5);
        resta(5, 2);
        */

function suma(a = 0, b = 0) {
    const resultado = a + b;
    console.log(resultado);
}
document.addEventListener("click", function() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const rgb = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = rgb;
});