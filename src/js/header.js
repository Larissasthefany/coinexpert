window.onscroll = function() {
  const nav = document.getElementById('navbar');
  if (window.pageYOffset > 0) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
}

const menu = document.querySelector('nav ul')
const menuIcon = document.querySelector('.menu-icon')

function abrirMenu(){
    menu.classList.toggle('open')
}



