var body = document.querySelector('body');
var lista = document.createElement('ul');
do {
    r = prompt('Ingrese un nombre o exit para terminar');

    if (r != 'exit') {
        li = document.createElement('li');
        li.innerText = r;
        lista.appendChild(li);

        var numero = lista.children.length;

        if (numero % 2 === 0) {
            li.style.backgroundColor = 'palevioletred';
        } else {
            li.style.backgroundColor = 'pink';
        }
    }
} while (r != 'exit');

body.appendChild(lista);
