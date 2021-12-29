//slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    // Navigation arrows
    navigation: {
      nextEl: '.submain__navigation-item-right',
      prevEl: '.submain__navigation-item-left',
    },

    breakpoints: {
        300:{
            slidesPerView: 1,
            spaceBetween: 0,
            slidesPerGroup: 1,
        },
        500:{
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
          slidesPerGroup: 3,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 4,
          },
    },
});

 //tabs
