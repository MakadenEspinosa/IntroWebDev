window.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slideshow-container .mySlides');
    let currentIndex = 0;
    if (slides.length === 0) return;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    showSlide(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000); 
});
