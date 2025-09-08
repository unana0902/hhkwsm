document.addEventListener('DOMContentLoaded', function () {

    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }

    const dropdownToggle = document.querySelector('.mobile-nav .dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(event) {
            event.preventDefault();
            this.parentElement.classList.toggle('open');
        });
    }

    const tabButtons = document.querySelectorAll('.tab-btn');
    const productContents = document.querySelectorAll('.product-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            productContents.forEach(content => content.classList.remove('active'));
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    const heroSlider = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.hero-slider .swiper-button-next',
            prevEl: '.hero-slider .swiper-button-prev',
        },
    });

    const collectionSlider = new Swiper('.collection-slider', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.collection-nav .swiper-button-next',
            prevEl: '.collection-nav .swiper-button-prev',
        },
        breakpoints: {
            768: {
              spaceBetween: 20
            }
        }
    });

    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const scrollToBottomBtn = document.getElementById('scroll-to-bottom');

    if (scrollToTopBtn && scrollToBottomBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > window.innerHeight / 2) {
                scrollToTopBtn.classList.add('visible');
                scrollToBottomBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
                scrollToBottomBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        scrollToBottomBtn.addEventListener('click', function() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    }
});
