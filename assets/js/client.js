var swiper = new Swiper(".client-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".client-pagination",
      clickable: true,
    },
 
    
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      992:{
slidesPerView:2
      }
    }
  });