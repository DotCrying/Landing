let burgerBtn = document.querySelector('.burger');
let menuList = document.querySelector('.menu');

burgerBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu-opened');
    burgerBtn.classList.toggle('active');
})

window.addEventListener('click', event => {
     if(!event.target.matches('.active span')) {
     menuList.classList.remove('menu-opened');
    burgerBtn.classList.remove('active');
     }
})

