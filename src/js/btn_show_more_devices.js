export default function showMoreDevices () {
  let btnShowMore = document.querySelector('.devices__btn-show-more');
  let btnClose = document.querySelector('.devices__btn-close');
  let brandsSwiper = document.querySelector('.devices-swiper');

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
    brandsSwiper.style.height = '155px';
    btnClose.style.display = 'none';
  });
}
