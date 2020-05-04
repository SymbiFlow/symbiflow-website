let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  offset: (anchor, toggle) => {
    if (anchor.classList.contains('diagram') || anchor.classList.contains('project')) {
      return 200
    } else {
      return 100
    }
  }
})

const hamburgerBtn = document.querySelector('.nav__toggle'),
  hamburger = document.querySelector('.nav__toggle .hamburger'),
  nav = document.querySelector('.nav__links'),
  footerCopy = document.querySelector('.footer__copy span')

let navOpen = false

function navToggle() {
  hamburgerBtn.classList.toggle('nav__toggle--open')
  hamburger.classList.toggle('is-active')
  nav.classList.toggle('nav__links--open')
  navOpen = !navOpen
  console.log(navOpen)
}

hamburgerBtn.onclick = evt => {
  navToggle()
}

nav.onclick = evt => {
  if (evt.target.tagName === 'A') navToggle()
}

footerCopy.innerHTML = ` - ${new Date().getFullYear()}`
