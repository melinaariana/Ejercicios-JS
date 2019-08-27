var ul = document.querySelector('ul');
var hijos = ul.children;
console.log(hijos);

var segundoHijo = hijos[1];
segundoHijo.classList.add('verde');

var cuartoHijo = hijos[3];
cuartoHijo.classList.add('rojo');

var elementoPadre = cuartoHijo.parentElement;
console.log(elementoPadre);
elementoPadre.classList.add('naranja');
