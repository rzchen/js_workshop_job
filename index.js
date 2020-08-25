window.addEventListener('DOMContentLoaded', function() {
  const idNavburger = document.querySelector('#navbar-burger')
  const idNavMenu = document.querySelector('#navbar-menu')


  idNavburger.addEventListener('click', function() {
    idNavMenu.classList.toggle('is-active')
    idNavburger.classList.toggle('is-active')
  })
  
})