let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Inicializar el carrusel
showSlide(currentSlide);
setInterval(nextSlide, 3000);

//imagenes contraidas y expandidas
window.addEventListener('scroll', function() {
  var principal = document.getElementById('principal');
  if (window.scrollY > 0) {
      principal.style.height = '50vh';
  } else {
      principal.style.height = '100vh';
  }
});