const swiper = new Swiper('.swiper', {
    // Quantidade de cards visíveis por vez
    slidesPerView: 3,
    spaceBetween: 35,
    loop: true,

    // Paginação por bolinhas
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Setas de navegação
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsividade para dispositivos móveis
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 35
        }
    }
});