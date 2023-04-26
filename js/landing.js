const burgerMenu = () => {
    const burgerBtn = document.querySelector('.burger');
    const menuList = document.querySelector('.menu');

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
        document.body.style.userSelect = 'none';
    }
    const enableScroll = () => {
        document.body.style.overflow = 'auto';
        document.body.style.userSelect = 'auto';
    }    

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

    window.addEventListener('click', event => {
        if(!event.target.matches('.active span')) {
            menuList.classList.remove('menu-opened');
            burgerBtn.classList.remove('active');
            enableScroll();
        }
    })
}

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