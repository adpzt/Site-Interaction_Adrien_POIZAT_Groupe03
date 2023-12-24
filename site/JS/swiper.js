const swiper = new Swiper(".mySwiper", {
    autoplay: {           /* tourne automatiquement */
        delay: 2000,      /* tourne au bout de 2 secondes */
    },
    loop: true,                    /* faire une boucle */
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });