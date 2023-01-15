const scrolBtn = document.querySelector('.is-vissible');
window.onscroll = () => {
  if (window.scrollY > 700) {
    scrolBtn.classList.remove('is-vissible--hide');
  } else if (window.scrollY < 700) {
    scrolBtn.classList.add('is-vissible--hide');
  }
};
