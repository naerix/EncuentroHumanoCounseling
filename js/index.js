const header = document.getElementById('Header');

// Carousel
const carouselButtonBefore = document.getElementById('Carousel-button-before');
const carouselButtonNext = document.getElementById('Carousel-button-next');
const carouselItems = [...document.getElementsByClassName('Carousel-item')];

// Navbar
const navbar = document.getElementById('Navbar');
const hamburger = document.getElementById('Hamburger');

// Slide
const ReferencesItem = [...document.getElementsByClassName('References-item')];
const ReferencesButtonBefore = document.getElementById('References-button-before');
const ReferencesButtonAfter = document.getElementById('References-button-after');
const ReferencesCircles = [...document.getElementsByClassName('References-circle')];

// Button top
const buttonTop = document.getElementById('To-top');


// Margen a todo el body
document.body.style.marginTop = header.offsetHeight + 'px';

// ButtonTop
buttonTop.addEventListener('click', () => window.scroll(0, 0));


// Carousel
function handleCarousel(array, after, before, circles) {
    if(array) {
        if (array.length > 0) {
            let i = 0;
            array[0].classList.add('is-active');
            circles ? circles[0].classList.add('is-active') : null;
            function toggleActive() {
                i >= array.length ? i = 0 : null;
                i < 0 ? i = array.length - 1 : null;
                array.forEach(item => item.classList.remove('is-active'));
                array[i].classList.add('is-active');
                circles ? circles.forEach(item => item.classList.remove('is-active')) : null;
                circles ? circles[i].classList.add('is-active') : null;
            }
            after.addEventListener('click', () => {
                i++;
                toggleActive();
            });
            before.addEventListener('click', () => {
                i--;
                toggleActive();
            });
        }
    }
}

carouselItems ? handleCarousel(carouselItems, carouselButtonNext, carouselButtonBefore) : null;
ReferencesItem ? handleCarousel(ReferencesItem, ReferencesButtonAfter, ReferencesButtonBefore, ReferencesCircles) : null;


navbar.style.top = header.offsetHeight + 'px';

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('is-active');
});