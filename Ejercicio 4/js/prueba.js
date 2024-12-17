document.querySelectorAll('.word').forEach((word, index) => {
    word.addEventListener('click', () => {
        // Desactivar todas las palabras
        document.querySelectorAll('.word').forEach(w => {
            w.classList.add('disabled'); // Hacer que las otras palabras sean invisibles
        });

        // Activar la palabra seleccionada
        word.classList.add('active');

        // Mostrar el fondo correspondiente
        document.querySelectorAll('.background').forEach((bg, bgIndex) => {
            if (bgIndex === index) {
                bg.classList.add('visible'); // Mostrar el fondo de la palabra seleccionada
            } else {
                bg.classList.remove('visible'); // Ocultar los otros fondos
            }
        });
    });
});
