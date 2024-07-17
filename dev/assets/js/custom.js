// _____fancybox_____
Fancybox.bind("[data-fancybox]", {});

// _____niceSelect_____
$(document).ready(function() {
    $('select').niceSelect();
});

// _____burger_____
const burger = document.querySelector('#burger');
const body = document.querySelector('body');
const navSection = document.querySelector('.nav_list');

function showNav(){
  navSection.classList.toggle('show');
  burger.classList.toggle('show');
  body.classList.toggle('overflow_hidden');
}

burger.addEventListener('click', showNav);

var navLink = $(".nav_link"); 

$(navLink).click(function(){
  body.classList.remove('overflow_hidden');
  navSection.classList.remove('show');
  burger.classList.remove('show');
});



// _____queryFunction_____
const parent = document.querySelector(".use_page_container");
const child_1 = document.querySelector(".use_title_container");
const child_3 = document.querySelector(".use_content_container");

const mediaQuery = window.matchMedia("(max-width: 991px)")
function queryFunction(mediaQuery) {
  if (mediaQuery.matches) { 
    parent.prepend(child_1)
    navSection.style.transition = '0.3s';
     
  } else {
    navSection.removeAttribute('style')
    child_3.prepend(child_1)
  }
}

queryFunction(mediaQuery);

mediaQuery.addEventListener("change", function() {
  queryFunction(mediaQuery);
});

// _____swiper_use_____
const swiperUse = new Swiper('.slider_phone', {  
  spaceBetween: 40,
  loop: true,
  speed: 500,
  pagination: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: false,
});

// _____swiper_about_us_____
const swiperAboutUs = new Swiper('.about_us_slider', {  
  spaceBetween: 20,
  loop: true,
  speed: 600,
  pagination: false,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: false,
});