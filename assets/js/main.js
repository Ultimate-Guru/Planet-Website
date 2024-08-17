/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navCLose = document.getElementById('nav-close');

// Menu Show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}

// Menu hidden
if (navCLose) {
    navCLose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('blur-header');
    } else {
        header.classList.remove('blur-header');
    }
}
window.addEventListener('scroll', blurHeader);

/*=============== SWIPER PLANETS ===============*/
const swiperTravel = new Swiper('.travel__swiper', {
    loop: true,
    spaceBetween: '32',
    grabCursor: true,
    centeredSlides: 'auto',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    },
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 500) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= screenTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const scroll = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 200,
    // reset: true,  // Animation repeat
})

scroll.reveal('.home__data, .travel__swiper, .contact__container')
scroll.reveal('.home__img', { origin: 'bottom' })
scroll.reveal('.home__onvi', { delay: 800 })
scroll.reveal('.explore_img', { origin: 'left' })
scroll.reveal('.explore__data', { origin: 'right' })
scroll.reveal('.explore__planet', { origin: 'right', delay: 800 })
scroll.reveal('.history__card', { interval: 100 })
scroll.reveal('.history__planet-1', { origin: 'left', delay: 1000 })
scroll.reveal('.history__planet-2', { origin: 'right', delay: 1200 })
scroll.reveal('.footer__planet-1', { origin: 'bottom', delay: 600 })
scroll.reveal('.footer__planet-2', { delay: 800 })