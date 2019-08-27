var titulo = document.querySelector('h1');
var descripcion = document.querySelector('div');

var elementos = function(elemento) {
    if (elemento.hasAttributes()) {
        elemento.classList.add('tachado');
        return elemento.classList[0];
    } else {
        elemento.classList.add('negrita');
        return elemento.classList[0];
    }
};
console.log(elementos(titulo));
console.log(elementos(descripcion));
