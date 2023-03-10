export default function callback() {
  const callback = document.querySelector('.callback');
  const overlay = document.querySelector('.overlay');
  const btnFeedback = document.querySelector('.btn-call-back');
  const btnClose = document.querySelector('.callback-close');
  const menu = document.querySelector('.menu');
  callback.style.display = 'flex';
  overlay.style.display = 'inline';
  overlay.style.zIndex = '11';

  btnFeedback.addEventListener('click', function() {
    callback.style.display = 'flex';
    overlay.style.display = 'inline';
    overlay.style.zIndex = '11';
  });

  btnClose.addEventListener('click', function() {
    callback.style.display = 'none';
    overlay.style.zIndex = '9';
    if (window.innerWidth >= 1440) {
      overlay.style.display = 'none';
    }
  })

  overlay.addEventListener('click', function() {
    callback.style.display = 'none';
    overlay.style.zIndex = '9';
    if (window.innerWidth >= 1440) {
      overlay.style.display = 'none';
    }
  })
}
