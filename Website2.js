const menu = document.querySelector('#menubar');
const navbarEl = document.querySelector('.navbar-menu');
const captionEl = document.querySelector('.home-caption');
const menuCaption = document.querySelector('.menu-caption');

menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    navbarEl.classList.toggle('active');
    menuCaption.classList.toggle('active');
    captionEl.classList.toggle('active');
})