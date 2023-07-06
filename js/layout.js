let nav = document.querySelector('nav');
let LogoImage = document.getElementById('logo-img');
let mainNav = document.querySelector('.main-nav');
let navbarToggler = document.querySelector('.navbar-toggler');

LogoImage.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.style.padding = '4px 0px';
    nav.style.backgroundColor = '#f8f8f8';
    nav.style.boxShadow = '0 1px 2px #ccc';
    mainNav.style.top = '48px';
  } else {
    nav.style.padding = '25px 0px';
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = 'none';
    mainNav.style.top = '70px';
  }

  mainNav.classList.remove('show-main-nav');
});

navbarToggler.addEventListener('click', () => {
  mainNav.classList.toggle('show-main-nav');
});

mainNav.addEventListener('click', () => {
  mainNav.classList.remove('show-main-nav');
});

document.body.addEventListener('click', (event) => {
  // 320 = mainNav height + nav height
  if (event.clientY > 320) {
    mainNav.classList.remove('show-main-nav');
  }
});
