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
