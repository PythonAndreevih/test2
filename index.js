//hidden and add button
const rightHidden = document.querySelector('.wrap');
const leftHidden = document.querySelector('.opaciti');
const add = document.querySelector('.big__img')



// header__fixed
const header = document.querySelector('.header');
const headerHight = document.querySelector('.header').clientHeight;



// open menu and delete scroll
const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.header__mobile-list');
const scrollOff = document.querySelector('body');
const closeMenu = document.querySelector('.header__mobile-close');


//hidden and add button
rightHidden.addEventListener('click',()=>{
  add.classList.add('add')
  add.classList.remove('hidden')
  rightHidden.classList.remove('opaciti')
  leftHidden.classList.add('opaciti')
  
  
})


leftHidden.addEventListener('click',()=>{
  add.classList.remove('add')
  add.classList.add('hidden')
  rightHidden.classList.add('opaciti')
  leftHidden.classList.remove('opaciti')
  
})


// header__fixed
window.addEventListener("scroll", () => {
  scroll = window.scrollY;
  
  if(scroll > headerHight){
    menu.classList.remove('active');
    scrollOff.classList.remove('hidden');
    header.classList.add('header__fixed');
    document.body.style.paddingTop = headerHight + 'px';
  }else{
    header.classList.remove('header__fixed');
    document.body.removeAttribute('style');
  }


});


// open menu and delete scroll
burgerBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  scrollOff.classList.toggle('hidden');
});
// close menu
closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
  scrollOff.classList.remove('hidden');
});




// swiper

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },
});


var swiper2 = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".s-button-next-lock",
    prevEl: ".s-button-prev-lock",
  },
});

//swiper