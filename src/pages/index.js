const aboutSwiper = new Swiper('.news-swiper', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,  // Если true, то активный слайд будет центрирован, а не всегда слева.
  centeredSlidesBounds: true,  // Если true, то активный слайд будет центрирован без добавления пробелов в начале и конце слайдера. Требуется centeredSlides: true.
  grabCursor: true,

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    720: {

      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    1100: {
      slidesPerGroup: 3,
      spaceBetween: 20,
    }
  },

  pagination: {
    el: '.news-swiper__pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.news-swiper__button_type_next',
    prevEl: '.news-swiper__button_type_prev',
  },

});
