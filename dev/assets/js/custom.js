// _____fancybox_____
Fancybox.bind("[data-fancybox]", {});

// _____slick_____
$('.single-item').slick();


// _____niceSelect_____
$(document).ready(function() {
    $('select').niceSelect();
});

const burger = document.querySelector('#burger');
const navSection = document.querySelector('.nav_list');

function showNav(){
  navSection.classList.toggle('show');
  burger.classList.toggle('show');
}

burger.addEventListener('click', showNav);