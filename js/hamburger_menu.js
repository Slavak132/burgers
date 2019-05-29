const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const сompanyList = document.querySelector('.nav__list');
const сompanyListLink = document.querySelectorAll('.nav__link');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('burger-menu--active');
  nav.classList.toggle('nav__active');
  сompanyList.classList.toggle('nav__list-active');
  document.body.classList.toggle('body-overflow');
});

сompanyListLink.addEventListener('click', function(){
  сompanyList.classList.remove('nav__list-active');
  nav.classList.remove('nav__active');
  document.body.classList.remove('body-overflow');
})