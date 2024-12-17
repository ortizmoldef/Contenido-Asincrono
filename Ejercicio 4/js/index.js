// Obtener todos los elementos con la clase "word"
const words = document.querySelectorAll('.word');

// Función para manejar el efecto cuando se pasa el ratón
function handleMouseOver(event) {
    // Obtener el fondo de la palabra desde el atributo "data-background"
    const backgroundUrl = event.target.getAttribute('data-background');

    // Establecer el fondo específico de la palabra seleccionada
    const backgroundElement = document.getElementById('background');
    backgroundElement.style.backgroundImage = backgroundUrl;

    // Mostrar el fondo
    backgroundElement.style.opacity = '1';

    // Establecer la palabra activa
    words.forEach(word => {
        word.classList.remove('active');  // Eliminar la clase active de todas las palabras
        word.classList.add('inactive');   // Poner la clase inactive a todas las palabras
    });

    event.target.classList.add('active');  // Poner la clase active en la palabra seleccionada
}

// Función para restaurar el estado original al sacar el ratón
function handleMouseOut() {
    // Ocultar el fondo cuando se saque el ratón
    const backgroundElement = document.getElementById('background');
    backgroundElement.style.opacity = '0';

    // Restaurar el estado de las palabras
    words.forEach(word => {
        word.classList.remove('active');  // Eliminar la clase active
        word.classList.remove('inactive');  // Eliminar la clase inactive
    });
}

// Agregar los eventos de ratón para cada palabra
words.forEach(word => {
    word.addEventListener('mouseover', handleMouseOver);
    word.addEventListener('mouseout', handleMouseOut);
});
