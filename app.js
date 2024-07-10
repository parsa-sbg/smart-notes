const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const menu = document.querySelector('.menu')


const handleOpenMobileMenu = () => {
    menu.classList.toggle('menu--open')
    const mobileMenuBtnLine = mobileMenuBtn.querySelector('div')
    mobileMenuBtnLine.classList.toggle('mobile-menu-btn__line--open')
}



mobileMenuBtn.addEventListener('click', () => {
    console.log('click');
    handleOpenMobileMenu()
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 5,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      waitForTransition: false, 
    },
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    grabCursor: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,

        },
        400: {
            slidesPerView: 3,
          },
        // when window width is >= 480px
        500: {
          slidesPerView: 4,
        },
        // when window width is >= 640px
        700: {
          slidesPerView: 5,
        },
        800: {
            slidesPerView: 6,
        },
        950: {
            slidesPerView: 7,
        }
      }
});