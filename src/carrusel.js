export function carruselSlide() {
    const carousel = document.querySelector('.carousel');
    const imgs = carousel.querySelectorAll('img');
    let index = 0;

    imgs[index].classList.add('active');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function updateCarousel() {
        imgs.forEach(img => img.classList.remove('active'));

        imgs[index].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = imgs.length - 1;
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index++;
        if (index >= imgs.length) {
            index = 0;
        }
        updateCarousel();
    });
}