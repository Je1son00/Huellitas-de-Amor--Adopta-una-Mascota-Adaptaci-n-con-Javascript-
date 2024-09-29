var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 2.5,  // Muestra parcialmente las tarjetas laterales
    spaceBetween: 20,     // Ajusta el espacio entre tarjetas
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,        // Reduce el efecto de profundidad
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2.5,  // Ajuste para pantallas pequeñas
      },
      1024: {
        slidesPerView: 3.5,  // En pantallas grandes, muestra 3 tarjetas completas y parte de las laterales
      },
    },
  });
  