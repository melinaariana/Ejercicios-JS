var body = document.querySelector('body');
var nombres = ['sheldon', 'leslie', 'ana', 'mile', 'rocio', 'jenni', 'meli', 'leandro', 'shelcita', 'bebesita'];
var lista = document.createElement('ul');

nombres.forEach(function(nombre) {
    var elemento = document.createElement('li');
    elemento.textContent = nombre;
    lista.appendChild(elemento);
});

body.appendChild(lista);
