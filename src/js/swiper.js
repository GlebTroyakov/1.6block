// let swiper = new Swiper(".mySwiper", {
//     spaceBetween: 16,
//     mousewhell: true,
//     keyboard: true,
//     pagination: { // показывает не количество картинок, а количество сайпов до конца
//         el: ".swiper-pagination",
//         clickable: true, // переход по клику на пагинатор
//     },
//     slidesPerView: 'auto', // количество слайдов на экране
//     watchOverflow: true, // отключает свайпер, если в не нет надобности (количество слайдов)
//     slidesPerGroup: 1, // количество пролистываемых слайдов за 1 свайп
//     // freeMode: true, // свайп на произвольное место, а не на начало картинки
//     // loop:true, // бесконечная карусель
// });

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            enabled: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            mousewhell: true,
            keyboard: true,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 'auto',
            enabled: false,
        },
    },
});

export default swiper
