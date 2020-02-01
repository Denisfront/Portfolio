const body = document.querySelector('body');
const btnHumburger = document.querySelector('.humburger-menu');
const popupWrapper = document.querySelector('.popup__wrapper');
const popup = document.querySelector('.popup');
const hiddenBlockUserinfo = document.querySelector('.user-info');
const hiddenBlockHomelinks = document.querySelector('.home__links');
const crossPopupbtn = document.querySelector('.popup__btn');

btnHumburger.addEventListener('click', e => {
   body.classList.add('body__hidden');
   popupWrapper.style.right = 0;
   hiddenBlockUserinfo.style.display = "none";
   hiddenBlockHomelinks.style.display = "none";
});
popup.addEventListener('click', e => {
   if (e.target === popup) {
      crossPopupbtn.click();
   }  
});

crossPopupbtn.addEventListener('click', e => {
   body.classList.remove('body__hidden');
   popupWrapper.style.right = -100 + "%";
   hiddenBlockUserinfo.style.display = "block";
   hiddenBlockHomelinks.style.display = "flex";
});