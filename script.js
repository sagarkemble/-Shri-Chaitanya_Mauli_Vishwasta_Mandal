function initializeSlider(sliderId) {
    let slider = document.querySelector(`#${sliderId} .list`);
    let items = document.querySelectorAll(`#${sliderId} .list .item`);
    let next = document.querySelector(`#${sliderId} #next`);
    let prev = document.querySelector(`#${sliderId} #prev`);
    let dots = document.querySelectorAll(`#${sliderId} .dots li`);

    let lengthItems = items.length;
    let active = 0;
    let isTransitioning = false;

    // Clone first and last slides
    let firstClone = items[0].cloneNode(true);
    let lastClone = items[lengthItems - 1].cloneNode(true);
    slider.appendChild(firstClone);  // Append first clone to the end
    slider.insertBefore(lastClone, items[0]);  // Prepend last clone at the beginning

    let totalItems = document.querySelectorAll(`#${sliderId} .list .item`).length;
    slider.style.left = `-${items[active].offsetLeft}px`;

    next.onclick = function() {
        if (isTransitioning) return;
        active++;
        moveSlider();
    };

    prev.onclick = function() {
        if (isTransitioning) return;
        active--;
        moveSlider();
    };

    let refreshInterval = setInterval(() => { next.click(); }, 3000);

    function moveSlider() {
        isTransitioning = true;
        slider.style.transition = "left 1s";
        slider.style.left = `-${(active + 1) * items[0].offsetWidth}px`;

        slider.addEventListener('transitionend', handleTransitionEnd);
        
        updateDots();
    }

    function handleTransitionEnd() {
        isTransitioning = false;

        if (active === lengthItems) {
            slider.style.transition = "none";
            active = 0;
            slider.style.left = `-${(active + 1) * items[0].offsetWidth}px`;
        } else if (active === -1) {
            slider.style.transition = "none";
            active = lengthItems - 1;
            slider.style.left = `-${(active + 1) * items[0].offsetWidth}px`;
        }

        slider.removeEventListener('transitionend', handleTransitionEnd);
    }

    function updateDots() {
        document.querySelector(`#${sliderId} .dots li.active`).classList.remove('active');
        dots[active === lengthItems ? 0 : active].classList.add('active');
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            if (isTransitioning) return;
            active = key;
            moveSlider();
        });
    });

    window.onresize = function() {
        slider.style.left = `-${(active + 1) * items[0].offsetWidth}px`;
    };
}

// Initialize sliders
initializeSlider('slider1');
initializeSlider('slider2');


function toggleMenu() {
    const menuLinks = document.querySelector('.links');
    menuLinks.classList.toggle('active');
}

window.onload = function() {
    document.getElementById("preloader").style.display = "none";
};




//out team slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
        delay: 2500, // Optional: Automatically slide every 2.5 seconds
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










