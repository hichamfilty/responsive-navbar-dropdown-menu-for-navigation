const menu = document.querySelector('.menu')
const auth = document.querySelector('.auth li')
const navbar = document.querySelector('.nav-lists')


menu.addEventListener('click', show)
close.addEventListener('click', close)

function show(){
  navbar.classList.toggle('active')
  
}

// navbar.style.display = 'block'
//   auth.style.display = 'block'