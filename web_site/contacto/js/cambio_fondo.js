// homeBackground.js

document.addEventListener("DOMContentLoaded", () => {
  const homeSection = document.querySelector(".home");

  // Lista de rutas de imágenes (ajusta las rutas según tu estructura)
  const backgrounds = [
    "./images/duda.webp",
    "./images/duda_2.webp",
  ];

  let index = 0;

  function changeBackground() {
    homeSection.style.backgroundImage = `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('${backgrounds[index]}')
    `;

    index = (index + 1) % backgrounds.length; // ciclo infinito
  }

  // Cambia imagen cada 10 segundos (10000 ms)
  changeBackground(); // inicializa
  setInterval(changeBackground, 10000);
});
