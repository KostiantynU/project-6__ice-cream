// змінна - індикатор факту прокрутки сторінки
const offset = 100;
// змінна для звернення до обгортки
const scrollUp = document.querySelector('.scroll-up');
// змінна для звернення до path
const scrollUpSvgPath = document.querySelector('.scroll-up__path');
// змінна для звернення довжини path
const pathLength = scrollUpSvgPath.getTotalLength();

// стилі для довжини path
scrollUpSvgPath.style.strokeDashrray = `${pathLength} ${pathLength}`;
// плавна заливка path
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

// змінна яка повертає нам значення прокрутки сторінки по осі Y
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// розрахунок скролу
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// дії при скролі
window.addEventListener('scroll', () => {
  updateDashoffset();

  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active');
  } else {
    scrollUp.classList.remove('scroll-up--active');
  }
});

// дії при кліці
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
