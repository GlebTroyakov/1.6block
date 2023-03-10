import '../scss/style.scss'
import readMore from './btn_read_more'
import showMoreBrands from './btn_show_more_brands'
import showMoreDevices from './btn_show_more_devices'
import swiper from './swiper'
import burgerMenu from './btn_burger_menu'
import feedback from './btn-feedback'
import callback from './btn-call'

window.readMore = readMore;
window.swiper = swiper;
window.showMoreBrands = showMoreBrands;
window.showMoreDevices = showMoreDevices;
window.burgerMenu = burgerMenu;
window.feedback = feedback;
window.callback = callback;

window.addEventListener('resize', function() {
  if (window.innerWidth >= 1440) {
    document.querySelector('.menu').style.display = 'inline';
  } else {
    document.querySelector('.menu').style.display = 'none';
  }

  if (window.innerWidth < 768) {
    document.querySelector('.brands__btn-show-more').style.display = 'none';
    document.querySelector('.devices__btn-show-more').style.display = 'none';

  } else {
    document.querySelector('.brands__btn-show-more').style.display = 'inline';
    document.querySelector('.devices__btn-show-more').style.display = 'inline';
  }
})
