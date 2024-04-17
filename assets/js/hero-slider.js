var swiper = new Swiper(".hero-slider", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    mousewheel: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });