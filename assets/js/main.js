//Scroll per menu background
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('scroll', function () {
    var nav = document.querySelector('.dp-scroll');
    var scrolled = window.scrollY > nav.offsetHeight;
    nav.classList.toggle('dp-scrolled', scrolled);
  });
});
// const menuBtn = document.querySelector('.menu-btn');
// const hamburger = document.querySelector('.menu-btn__burger');
// const nav = document.querySelector('.nav');
// const menuNav = document.querySelector('.menu-nav');
// const navItems = document.querySelectorAll('.menu-nav__item');

// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//     if(!showMenu) {
//         hamburger.classList.add('open');
//         nav.classList.add('open');
//         menuNav.classList.add('open');
//         navItems.forEach(item => item.classList.add('open'))

//         showMenu = true;
//     } else {
//         hamburger.classList.remove('open');
//         nav.classList.remove('open');
//         menuNav.classList.remove('open');
//         navItems.forEach(item => item.classList.add('remove'))

//         showMenu = false;
//     }
// }
//----------

// const navEl = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//    if (window.scrollY >= 20) {
//       navEl.classList.add('dp-navbar-scrolled')
//    } else if (window.scrollY < 20) {
//       navEl.classList.remove('dp-navbar-scrolled')
//    }
// });

//--------