const btnHamburger = document.querySelector('#buttonHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.app__header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
  
  if(header.classList.contains('open')){      //close Hamburger menu
    body.classList.remove('noScroll');
    header.classList.remove('open');
    fadeElements.forEach(function(element){
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
    });
  }
  else{                                     //open Hamburger menu
    header.classList.add('open');
    body.classList.add('noScroll');
    fadeElements.forEach(function(element){
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    });
  }
})