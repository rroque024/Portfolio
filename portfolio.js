function toggleDarkMode() {
  var body = document.getElementById("my-body");
  var darkBtn = document.querySelector(".dark-mode-btn");

  if (body.classList.contains("dark-mode")) {
    // Si el body tiene la clase "dark-mode", removerla
    body.classList.remove("dark-mode");
    // Cambiar la clase del icono a fa-sun
    darkBtn.querySelector("i").classList.remove("fa-sun");
    darkBtn.querySelector("i").classList.add("fa-moon");
    // Eliminar la clase "light" del botón
    darkBtn.classList.toggle("light", false);
  } else {
    // Si el body no tiene la clase "dark-mode", agregarla
    body.classList.add("dark-mode");
    // Cambiar la clase del icono a fa-moon
    darkBtn.querySelector("i").classList.remove("fa-moon");
    darkBtn.querySelector("i").classList.add("fa-sun");
    // Agregar la clase "light" al botón
    darkBtn.classList.toggle("light", true);
  }
}