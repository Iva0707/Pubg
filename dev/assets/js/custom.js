// _____fancybox_____
Fancybox.bind("[data-fancybox]", {});

// _____niceSelect_____
$(document).ready(function() {
    $('select').niceSelect();
});

// _____burger_____
const burger = document.querySelector('#burger');
const navSection = document.querySelector('.nav_list');

function showNav(){
  navSection.classList.toggle('show');
  burger.classList.toggle('show');
}

burger.addEventListener('click', showNav);


// _____nav_menu_____
const mediaQuery = window.matchMedia("(min-width: 991px)")
function myFunction(mediaQuery) {
  if (mediaQuery.matches) { 
    navSection.removeAttribute('style')
  } else {
    navSection.style.transition = '0.3s';
  }
}

myFunction(mediaQuery);

mediaQuery.addEventListener("change", function() {
  myFunction(mediaQuery);
});


// _____swiper_____
const swiper = new Swiper('.slider_phone', {  
  spaceBetween: 40,
  loop: true,
  pagination: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: false,
});