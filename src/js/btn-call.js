export default function callback() {
  const feedback = document.querySelector('.callback');
  const overlay = document.querySelector('.overlay');
  const btnFeedback = document.querySelector('.btn-call-back');
  const btnClose = document.querySelector('.callback-close');
  const menu = document.querySelector('.menu');
  feedback.style.display = 'flex';
  overlay.style.display = 'inline';
  if (window.innerWidth <= 1440) {
    menu.style.display = 'none';
  }
  // menu.style.display = 'none';

  btnFeedback.addEventListener('click', function() {
    feedback.style.display = 'flex';
    overlay.style.display = 'inline';
    if (window.innerWidth <= 1440) {
      menu.style.display = 'none';
    }
  });

  btnClose.addEventListener('click', function() {
    feedback.style.display = 'none';
    overlay.style.display = 'none';
  })

  overlay.addEventListener('click', function() {
    feedback.style.display = 'none';
    overlay.style.display = 'none';
  })
}
