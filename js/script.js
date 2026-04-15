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
    document.body.style.backgroundColor = "lightblue";
});