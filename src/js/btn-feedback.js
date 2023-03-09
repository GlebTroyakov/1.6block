export default function feedback() {
  const feedback = document.querySelector('.feedback');
  const overlay = document.querySelector('.overlay');
  const btnFeedback = document.querySelector('.btn-feedback');
  const btnClose = document.querySelector('.feedback-close');
  const menu = document.querySelector('.menu');
  feedback.style.display = 'flex';
  overlay.style.display = 'inline';
  menu.style.display = 'none';

  btnFeedback.addEventListener('click', function() {
    feedback.style.display = 'flex';
    overlay.style.display = 'inline';
    menu.style.display = 'none';
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
