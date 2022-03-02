const btnHamburger = document.querySelector('#buttonHamburger');
const header = document.querySelector('.app__header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function() {
  console.log('click Hamburger');
  
  if(header.classList.contains('open')){      //close Hamburger menu
    header.classList.remove('open');
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');
  }
  else{
    header.classList.add('open');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
  }
})