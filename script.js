
// function toggleMenu() {
//     const menuLinks = document.querySelector('.links');
//     menuLinks.classList.toggle('active');
// }
function showlinks(){
  const links=document.querySelector('.links');
  const hamburger=document.querySelector('.hamburger');
  const crossicon=document.querySelector('.crossicon');
  links.style.display='initial';
  hamburger.style.display='none';
  crossicon.style.display='initial';
};
function hidelinks(){
  const links=document.querySelector('.links');
  const hamburger=document.querySelector('.hamburger');
  const crossicon=document.querySelector('.crossicon');
  links.style.display='none';
  hamburger.style.display='initial';
  crossicon.style.display='none';
};


window.onload = function() {
  document.getElementById("preloader").style.display = "none";
  document.documentElement.style.overflow = "auto"; 
  document.body.style.overflow = "auto"; 
};




//out team slider


const swiper = new Swiper("#swiper-1", {
    // Optional parameters
    direction: 'horizontal',
    effect:"fade",
    loop: true,
    
    autoplay: {
        delay:5000,
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
    //     autoplay: {
    //     delay:2500,
    // },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
            // dynamicBullets: true,

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





// toggle
// scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

