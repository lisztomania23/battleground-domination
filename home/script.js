let currentIndex = 0;

function showSlide(index) {
    const images = document.querySelector('.carousel-images');
    const totalSlides = document.querySelectorAll('.carousel-image').length;
    currentIndex = (index + totalSlides) % totalSlides;

    const translateValue = -currentIndex * 100 + '%';
    images.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

setInterval(() => {
    nextSlide();
}, 3000);
