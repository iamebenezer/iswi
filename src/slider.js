const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider-item');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;
  currentIndex = index;
  const offset = -slideWidth * currentIndex;
  slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds
