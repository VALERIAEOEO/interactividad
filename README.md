*/ Contenido

folder: Interactividad
    file:index.html
    file: readme.md
    subfolder: css
        file: style.css
    subfolder: img
    subfolder: js
        file: script.js
    
intex.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>interactividad</title>

</head>
<body>
    <script src="./js/script.js">
/* let nombre = "Valeria";
        alert(nombre);  
        nombre = "Valeria ";
        const PI = 3.1416;
        console.log(PI);
        así pones comentarios en JavaScript
*/ 
comentario
*/
// Your JavaScript code here
    </script>
</body>
</html>

script.js content:

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

style.css content:

body {
transition: background-color 1s;
}

/*