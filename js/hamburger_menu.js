const burgerMenu = document.querySelector('.burger-menu');
      nav = document.querySelector('.nav');
      сompanyList = document.querySelector('.nav__list');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('burger-menu--active');
  nav.classList.toggle('nav__active');
  сompanyList.classList.toggle('nav__list-active');
  document.body.classList.toggle('body-overflow');
});
