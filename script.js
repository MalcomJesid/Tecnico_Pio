let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-inner img');
    const totalSlides = slides.length;

    // Asegúrate de que el índice esté dentro del rango
    if (index >= totalSlides) {
        currentSlide = 0; // Reinicia al primer slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Va al último slide
    } else {
        currentSlide = index; // Muestra el slide indicado
    }

    const offset = -currentSlide * 100; // Calcula el desplazamiento
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
}

function moveSlide(direction) {
    showSlide(currentSlide + direction); // Mueve el slide
}

// Muestra el primer slide al cargar
showSlide(currentSlide);
