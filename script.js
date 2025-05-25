document.addEventListener("DOMContentLoaded", function() {
    // Obtén todos los enlaces de anclaje dentro de la misma página
    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            // Prevenir la acción predeterminada del enlace
            event.preventDefault();
            
            // Desplazar suavemente a la sección correspondiente
            const destino = document.querySelector(this.getAttribute("href"));
            destino.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
