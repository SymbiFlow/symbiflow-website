"use strict";

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  offset: function offset(anchor, toggle) {
    if (anchor.classList.contains('row__subprojects')) {
      return 100;
    } else if (anchor.classList.contains('project')) {
      return 200;
    } else if (anchor.classList.contains('row__boards')) {
      return 100;
    } else if (anchor.classList.contains('row__downloads')) {
      return 150;
    } else if (anchor.classList.contains('row__about')) {
      return 100;
    } else if (anchor.classList.contains('row__help')) {
      return 100;
    } else {
      return 0;
    }
  }
});
var hamburgerBtn = document.querySelector('.nav__toggle'),
    hamburger = document.querySelector('.nav__toggle .hamburger'),
    nav = document.querySelector('.nav__links');
var navOpen = false;

function navToggle() {
  hamburgerBtn.classList.toggle('nav__toggle--open');
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('nav__links--open');
  navOpen = !navOpen;
  console.log(navOpen);
}

hamburgerBtn.onclick = function (evt) {
  navToggle();
};

nav.onclick = function (evt) {
  if (evt.target.tagName === 'A') navToggle();
};

new Glide('.glide', {
  type: 'carousel',
  perView: 3,
  gap: 30,
  peek: {
    before: 20,
    after: 20
  },
  breakpoints: {
    800: {
      perView: 2
    },
    550: {
      perView: 1
    }
  }
}).mount();