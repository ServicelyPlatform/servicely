document.addEventListener("DOMContentLoaded", function () {
  const btnCliente = document.getElementById('btnCliente');
  const btnProveedor = document.getElementById('btnProveedor');
  const respuestaInput = document.getElementById('respuesta');
  const form = document.querySelector("form");

  function activarSeleccion(botonSeleccionado, otroBoton, valor) {
    botonSeleccionado.classList.add('active');
    otroBoton.classList.remove('active');
    respuestaInput.value = valor;
  }

  if (btnCliente && btnProveedor) {
    btnCliente.addEventListener('click', function () {
      activarSeleccion(btnCliente, btnProveedor, 'cliente');
    });

    btnProveedor.addEventListener('click', function () {
      activarSeleccion(btnProveedor, btnCliente, 'proveedor');
    });
  }

  form.addEventListener("submit", function (e) {
    if (!respuestaInput.value) {
      e.preventDefault(); // Evita el envío del formulario
      alert("Por favor, selecciona si eres Cliente o Proveedor.");
    }
  });
});
