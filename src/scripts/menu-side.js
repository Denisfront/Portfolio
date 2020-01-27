const btnhumburger = document.querySelector('.humburger-menu');
const popupWrapper = document.querySelector('.popup__wrapper');
const hiddenBlockUserinfo = document.querySelector('.user-info');
const hiddenBlockHomelinks = document.querySelector('.home__links');
const crossPopupbtn =document.querySelector('.popup__btn');

btnhumburger.addEventListener('click', e=> {
   console.log('ура');
   popupWrapper.style.right = 0;
   hiddenBlockUserinfo.style.display = "none";
   hiddenBlockHomelinks.style.display = "none";
});

crossPopupbtn.addEventListener('click', e=> {
   popupWrapper.style.right = -100 + "%";
   hiddenBlockUserinfo.style.display = "block";
   hiddenBlockHomelinks.style.display = "flex";
});