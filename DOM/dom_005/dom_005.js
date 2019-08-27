var elemento = document.querySelector('a');

if (elemento.hasAttribute('class') == true) {
    elemento.classList.add('azul');
} else {
    elemento.classList.add('rojo');
}
