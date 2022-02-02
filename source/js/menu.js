var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');

pageHeader.classList.remove('page-header--no-js');
navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-nav__toggle--no-js');
navMain.classList.add('main-nav--closed');
navToggle.classList.add('toggle--closed');
navToggle.classList.remove('main-nav__toggle--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('toggle--closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('toggle--closed');
  }
});
