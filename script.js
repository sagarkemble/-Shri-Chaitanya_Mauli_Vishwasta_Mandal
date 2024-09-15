
function toggleMenu() {
    const menuLinks = document.querySelector('.links');
    menuLinks.classList.toggle('active');
}

window.onload = function() {
    document.getElementById("preloader").style.display = "none";
};




//out team slider


const swiper = new Swiper("#swiper-1", {
    // Optional parameters
    direction: 'horizontal',
    effect:"fade",
    loop: true,
    
    autoplay: {
        delay:2500,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
const swiper2 = new Swiper("#swiper-2", {
    // Optional parameters
    direction: 'horizontal',
    effect:"fade",
    loop: true,
        autoplay: {
        delay:2500,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const swiper3 = new Swiper("#swiper-3", {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
        autoplay: {
        delay:2500,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });





