document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY; // Obtiene la posición del scroll
    var windowHeight = window.innerHeight; // Altura de la ventana
    var parallaxElements = document.querySelectorAll('.parallax-background'); // Selecciona las imágenes

    parallaxElements.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top + scrollPosition;
        var distanceFromTop = elementPosition - scrollPosition;

        // Calcular el porcentaje de la página que se ha desplazado
        var scrollPercentage = (distanceFromTop - windowHeight) / windowHeight;
        
        // Reducir el valor de desplazamiento para que el movimiento sea menor
        var translateValue = scrollPercentage * 10; // Valor ajustado para un movimiento más pequeño
        
        element.style.transform = 'translateY(' + translateValue + '%)';
    });
});
