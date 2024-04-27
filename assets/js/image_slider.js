var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: '2',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 2,
    },

  });