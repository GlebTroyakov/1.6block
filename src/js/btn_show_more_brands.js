export default function showMoreBrands () {
    let btnShowMore = document.querySelector('.brands__btn-show-more');
    let btnClose = document.querySelector('.brands__btn-close');
    let brandsSwiper = document.querySelector('.brands__swiper');

    if (btnShowMore !== 'none') {
        btnClose.style.display = 'inline';
        brandsSwiper.style.height = '100%';
        btnShowMore.style.display = 'none';
    }

    btnShowMore.addEventListener('click', function () {
        btnClose.style.display = 'inline';
        brandsSwiper.style.height = '100%';
        btnShowMore.style.display = 'none';
    });

    btnClose.addEventListener('click', function () {
        btnShowMore.style.display = 'inline';
        brandsSwiper.style.height = '145px';
        btnClose.style.display = 'none';
    });
}

function sm() {

}
