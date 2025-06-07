document.addEventListener("DOMContentLoaded", function () {
  const btnCliente = document.getElementById('btnCliente');
  const btnProveedor = document.getElementById('btnProveedor');

  function activarSeleccion(botonSeleccionado, otroBoton) {
    botonSeleccionado.classList.add('active');
    otroBoton.classList.remove('active');
  }

  if (btnCliente && btnProveedor) {
    btnCliente.addEventListener('click', () => activarSeleccion(btnCliente, btnProveedor));
    btnProveedor.addEventListener('click', () => activarSeleccion(btnProveedor, btnCliente));
  }
});