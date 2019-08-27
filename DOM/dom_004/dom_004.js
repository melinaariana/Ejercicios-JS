var color = prompt('Ingrese uno de estos colores: verde, rojo, azul');
var elemento = document.querySelector('a');

if (color == 'rojo') {
    elemento.classList.add('rojo');
} else {
    if (color == 'verde') {
        elemento.classList.add('verde');
    } else {
        if (color == 'azul') {
            elemento.classList.add('azul');
        } else {
            prompt('Ingrese un color válido');
        }
    }
}
