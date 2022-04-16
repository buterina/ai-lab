const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,  // Если true, то активный слайд будет центрирован, а не всегда слева.
  centeredSlidesBounds: true,  // Если true, то активный слайд будет центрирован без добавления пробелов в начале и конце слайдера. Требуется centeredSlides: true.


  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },




});
