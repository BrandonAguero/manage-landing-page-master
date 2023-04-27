const cardsContainer = document.querySelector('.cards-container');
const dotsContainer = document.querySelector('.dots-container');
const dots = dotsContainer.querySelectorAll('.dot');

let activeDotIndex = 0; // Índice del punto anaranjado activo

cardsContainer.addEventListener('scroll', function() {
  const cardWidth = cardsContainer.querySelector('.card').offsetWidth;
  const scrollLeft = cardsContainer.scrollLeft;
  const dotIndex = Math.round(scrollLeft / cardWidth); // Índice del punto correspondiente a la card visible actualmente

  if (dotIndex !== activeDotIndex) { // Si cambió el punto activo
    dots[activeDotIndex].classList.remove('active-dot');
    dots[dotIndex].classList.add('active-dot');
    activeDotIndex = dotIndex;
  }
});
