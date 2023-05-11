const popUpBtn = document.querySelector('.intro__button');
const popUp = document.querySelector('.popup');
const cross = document.querySelector('.cross');
const disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.userSelect = 'none';
};
const enableScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.userSelect = 'auto';
};

popUpBtn.addEventListener('click', () => {
    popUp.classList.toggle('popup--visible');
    disableScroll();
})
cross.addEventListener('click', () => {
    popUp.classList.remove('popup--visible');
    enableScroll();
})

const burgerMenu = () => {
    const burgerBtn = document.querySelector('.burger');
    const menuList = document.querySelector('.menu');
    const burgerLink = document.querySelectorAll('.menu__link');

    burgerLink.forEach(link => {
        link.addEventListener('click', () => {
            menuList.classList.remove('menu-opened');
            burgerBtn.classList.remove('active');
            enableScroll();
        })
    })

    burgerBtn.addEventListener('click', () => {
        if(burgerBtn.classList.contains('active')) {
            menuList.classList.remove('menu-opened');
            burgerBtn.classList.remove('active');
            enableScroll();
        } else {
            menuList.classList.add('menu-opened');
            burgerBtn.classList.add('active');
            disableScroll();
        }
    })
};

burgerMenu();

window.onload = () => {

    const onScrollHeader = () => {
      const header = document.querySelector('.page__header_grey')
      let prevScroll = window.pageYOffset
      let currentScroll
  
      window.addEventListener('scroll', () => {
        currentScroll = window.pageYOffset
        const headerHidden = () => header.classList.contains('header_hidden')
        if (currentScroll > prevScroll && !headerHidden()) {
          header.classList.add('header_hidden')
        }
        if (currentScroll < prevScroll && headerHidden()) {
          header.classList.remove('header_hidden')
        }
        prevScroll = currentScroll
      })
    }

    onScrollHeader()
};