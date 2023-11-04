//--> Le pongo 1 por defecto a la cantidad <--//

document.addEventListener("DOMContentLoaded", function () {
  const inputCant = document.getElementById("inputCant");
  inputCant.value = "1";
});

//--> Cuando abro el documento hace foco en el primer input de nombre <--//

document.addEventListener("DOMContentLoaded", function () {
  const inputName = document.getElementById("inputName");

  inputName.focus();
});

//--> No dejo que se carguen datos que no sean numeros en la cantidad <--//

document.addEventListener("DOMContentLoaded", function () {
  const inputCant = document.getElementById("inputCant");

  inputCant.addEventListener("input", function (event) {
    const inputValue = inputCant.value;

    if (!/^\d*$/.test(inputValue)) {
      inputCant.value = inputValue.slice(0, -1);
    }
  });
});

//--> Funcion para calcular total <--//

function calcularTotal() {
  var categoria = document.getElementById("inputCategory").value;

  var cantidad = document.getElementById("inputCant").value || 0;

  var descuentos = {
    Estudiante: 0.8,
    Trainee: 0.5,
    Junior: 0.15,
  };

  var valorTicket = 200;

  var total = cantidad * (1 - descuentos[categoria]) * valorTicket;
  total = total.toFixed(2);

  document.getElementById("inputCeleste").textContent =
    "Total a pagar: $" + total;
}

//--> Me fijo que todos los campos esten completos y que la cantidad no sea cero <--//

document.getElementById("botonSubmit").addEventListener("click", function (e) {
  e.preventDefault();

  const inputName = document.getElementById("inputName");
  const inputSurname = document.getElementById("inputSurname");
  const inputEmail = document.getElementById("inputEmail");
  const inputCant = document.getElementById("inputCant");


  const nombre = inputName.value.trim();
  const apellido = inputSurname.value.trim();
  const email = inputEmail.value.trim();
  const cantidad = inputCant.value.trim();

  if (nombre === "" || apellido === "" || email === "" || cantidad === "") {
    alert(
      "Todos los campos son obligatorios. Por favor, complete todos los campos."
    );
  } else if (isNaN(cantidad) || parseInt(cantidad, 10) <= 0) {
    alert("La cantidad debe ser un número mayor que 0");
  } else {
    calcularTotal();
  }
});

//--> Eventos para calcular total y resetear el formulario <--//

document.getElementById("botonSubmit").addEventListener("click", function (e) {
  e.preventDefault();

  calcularTotal();
});

document.getElementById("botonReset").addEventListener("click", function () {
  document.getElementById("inputCeleste").textContent = "Total a pagar: $0.00";
  const inputName = document.getElementById("inputName");
  inputName.focus();
});
