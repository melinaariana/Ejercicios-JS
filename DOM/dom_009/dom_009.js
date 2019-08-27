var titulo = document.querySelector('h1');
var contenidoTitulo = titulo.innerText;

var parrafo = document.querySelector('p');
var contenidoParrafo = parrafo.textContent;

titulo.innerText = contenidoParrafo;
parrafo.textContent = contenidoTitulo;
