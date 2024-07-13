const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const menu = document.querySelector('.menu')
const yearlyPricingSwitch = document.querySelector('.pricing__swich')
const planPricePertimeElem = document.querySelectorAll('.plan__price-pertime')
const planPriceNumberElem = document.querySelectorAll('.plan__price-number')


//////////////////////// funcs ////////////////////////////////////////
const handleOpenMobileMenu = () => {
    menu.classList.toggle('menu--open')
    const mobileMenuBtnLine = mobileMenuBtn.querySelector('div')
    mobileMenuBtnLine.classList.toggle('mobile-menu-btn__line--open')
}

const changePricePerTime = (isYear) => {
  if(isYear) {
    planPricePertimeElem.forEach(elem => {
      elem.innerHTML = '/ year'
    })
    planPriceNumberElem[0].innerHTML = '$89.9'
    planPriceNumberElem[1].innerHTML = '$239.9'
  }else {
    planPricePertimeElem.forEach(elem => {
      elem.innerHTML = '/ month'
    })
    planPriceNumberElem[0].innerHTML = '$9.99'
    planPriceNumberElem[1].innerHTML = '$19.99'
  }
}


// handle swiper
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


/////////////////////// events /////////////////////////////////////////

mobileMenuBtn.addEventListener('click', () => {
  console.log('click');
  handleOpenMobileMenu()
})

yearlyPricingSwitch.addEventListener('change', event => {

  if (event.target.checked) {
    changePricePerTime(true)
  }else{
    changePricePerTime(false)
  }
})