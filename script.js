document.addEventListener('DOMContentLoaded', function () {

    const heroSwiper = new Swiper('.hero-slider', {
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
        on: {
            slideChangeTransitionStart: function () {
                 this.slides.forEach(slide => {
                    const img = slide.querySelector('img');
                    if(img) img.style.transform = 'scale(1.1)';
                });
            },
            slideChangeTransitionEnd: function () {
                const activeSlideImg = this.slides[this.activeIndex].querySelector('img');
                 if(activeSlideImg) activeSlideImg.style.transform = 'scale(1)';
            },
        }
    });


    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.product-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.target).classList.add('active');
        });
    });

    const videoSection = document.querySelector('.video-parallax-section');
    const videoWrapper = document.querySelector('.video-wrapper');
    window.addEventListener('scroll', function() {
        if (videoSection && videoWrapper) {
            const sectionRect = videoSection.getBoundingClientRect();
            if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
                const moveDistance = sectionRect.top * -0.3;
                videoWrapper.style.transform = `translateY(${moveDistance}px)`;
            }
        }
    });

    const collectionSwiper = new Swiper('.collection-slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        slidesOffsetBefore: 0,
        navigation: {
            nextEl: '.collection-nav .swiper-button-next',
            prevEl: '.collection-nav .swiper-button-prev',
        },
        on: {
            click: function (swiper) {
                if (swiper.clickedIndex !== undefined) {
                    swiper.slideTo(swiper.clickedIndex);
                }
            },
        },
    });

    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    const dropdownToggle = document.querySelector('.mobile-nav .dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(event) {
            event.preventDefault();
            this.parentElement.classList.toggle('open');
        });
    }

    const toTopBtn = document.getElementById('scroll-to-top');
    const toBottomBtn = document.getElementById('scroll-to-bottom');

    window.addEventListener('scroll', () => {
        const docHeight = document.documentElement.scrollHeight;
        const viewHeight = window.innerHeight;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > viewHeight / 2) {
            toTopBtn.classList.add('visible');
        } else {
            toTopBtn.classList.remove('visible');
        }

        if (scrollTop < docHeight - viewHeight * 1.5) {
            toBottomBtn.classList.add('visible');
        } else {
            toBottomBtn.classList.remove('visible');
        }
    });

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toBottomBtn.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    const header = document.querySelector('.main-header');
    const scrollThreshold = 50;

    const handleHeaderScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); 

});
