function toggleDarkMode() {
    var body = document.getElementById("my-body");
    var darkBtn = document.querySelector(".dark-mode-btn");
  
    if (body.classList.contains("dark-mode")) {
      // Si el body tiene la clase "dark-mode", removerla
      body.classList.remove("dark-mode");
      // Cambiar la clase del icono a luna creciente
      darkBtn.querySelector("i").classList.remove("fas");
      darkBtn.querySelector("i").classList.add("far");
      // Eliminar la clase "light" del botón
      darkBtn.classList.toggle("light", false);
    } else {
      // Si el body no tiene la clase "dark-mode", agregarla
      body.classList.add("dark-mode");
      // Cambiar la clase del icono a luna llena
      darkBtn.querySelector("i").classList.remove("far");
      darkBtn.querySelector("i").classList.add("fas");
      // Agregar la clase "light" al botón
      darkBtn.classList.toggle("light", true);
    }
  }