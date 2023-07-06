let nav = document.querySelector('nav');
let mainNav = document.querySelector('.main-nav');
let menuOpenerBtn = document.querySelector('.menu-opener-btn');

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

menuOpenerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('show-main-nav');
  console.log(nav.offsetHeight);
});

mainNav.addEventListener('click', () => {
  mainNav.classList.toggle('show-main-nav');
});

$(document).ready(function () {
  // // Navigation Scroll
  // $(function () {
  //   $('a[href*=#]:not([href=#])').click(function () {
  //     if (
  //       location.pathname.replace(/^\//, '') ==
  //         this.pathname.replace(/^\//, '') &&
  //       location.hostname == this.hostname
  //     ) {
  //       var target = $(this.hash);
  //       target = target.length
  //         ? target
  //         : $('[name=' + this.hash.slice(1) + ']');
  //       if (target.length) {
  //         $('html,body').animate(
  //           {
  //             scrollTop: target.offset().top,
  //           },
  //           800
  //         );
  //         return false;
  //       }
  //     }
  //   });
  // });
  // // slideUp Main-Nav
  // let nav = $('.js--main-nav');
  // $('.js--menu-opener-btn').click(function () {
  //   nav.slideToggle(200);
  // });
  // if (innerWidth <= 768) {
  //   $('.js--main-nav-links').click(function () {
  //     nav.slideUp(200);
  //   });
  //   $(document).scroll(function () {
  //     nav.slideUp(200);
  //   });
  //   $(document.body).click(function (event) {
  //     if (event.screenY > 280) {
  //       nav.slideUp(200);
  //     }
  //   });
  // }
});
