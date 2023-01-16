// Obtener el botón hamburguesa
var hamburger = document.querySelector(".hamburger-menu");

// Obtener los enlaces del menú
var links = document.querySelector(".nav-links");

// Añadir un evento click al botón hamburguesa
hamburger.addEventListener("click", function () {
    // Añadir/eliminar la clase active a los enlaces del menú
    links.classList.toggle("active");
});
