var primerBoton = document.querySelector('button');

function onclick() {
    alert('Hiciste click en un botón controlado con addEventListener');
}

primerBoton.addEventListener('click', onclick);
