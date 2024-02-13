const header = document.getElementById('header');
window.onscroll = function() {
  if (window.scrollY >= 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

  // Obtiene el año actual
  var fechaActual = new Date();
  var anioActual = fechaActual.getFullYear();

  // Muestra el año actual en un elemento HTML
  document.getElementById("anioActual").innerHTML =  anioActual;