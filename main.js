'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');

  }
});

// home 점점 투명하게
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {


  if (window.scrollY > homeHeight * 0.3 && window.scrollY < homeHeight * 0.6) {
    home.classList.add('home--pale');
    home.classList.remove('home--too--pale');
  } else if (window.scrollY > homeHeight * 0.6 && window.scrollY < homeHeight) {
    home.classList.remove('home--pale');
    home.classList.add('home--too--pale');
  } else {
    home.classList.remove('home--pale');
    home.classList.remove('home--too--pale');
  }
});


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle scrolling when tapping on ContactMe button
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event) => {
  scrollIntoView('#contact');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}