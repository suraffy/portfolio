const nav = document.querySelector('nav');
const LogoImage = document.getElementById('logo-img');
const mainNav = document.querySelector('.main-nav');
const navbarToggler = document.querySelector('.navbar-toggler');

// const h2Underlines = document.querySelectorAll('.h2-underline');
const bannerText = document.querySelector('.banner-text');
const bannerTextP = document.querySelector('.banner-text p');



// const windowHeight = document.documentElement.clientHeight;




LogoImage.addEventListener('click', () => {
  window.scrollTo(0, 0);
  
  bannerText.classList.add('banner-text-rmv-anim');
  bannerTextP.classList.add('banner-text-p-rmv-anim');

  setTimeout(() => {
    bannerText.classList.remove('banner-text-rmv-anim');
    bannerTextP.classList.remove('banner-text-p-rmv-anim');
  }, 0);
});


// for (let h2 of h2Underlines) {
//   h2.classList.add('shrink-width');
// }

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
  

  // for (let h2 of h2Underlines) {
  //   const coords = h2.getBoundingClientRect();
  
  //   const aboveBottom = windowHeight - coords.bottom;
  

  //   h2.classList.remove('shrink-width');
  
  //   if (aboveBottom < 0 || aboveBottom > windowHeight) {
  //     h2.classList.add('shrink-width');
  //   }
  // }

});

navbarToggler.addEventListener('click', () => {
  mainNav.classList.toggle('show-main-nav');
});

mainNav.addEventListener('click', (e) => {
  mainNav.classList.remove('show-main-nav');

  const targetId = e.target.href.split('#')[1];
  console.log(targetId)

  const targetElem = document.querySelector(`#${targetId} .h2-underline`);
  
  targetElem.classList.add('rmv-underline');

  setTimeout(() => {
    targetElem.classList.remove('rmv-underline');
  }, 0);

});

document.body.addEventListener('click', (event) => {
  // 320 = mainNav height + nav height
  if (event.clientY > 320) {
    mainNav.classList.remove('show-main-nav');
  }
});



