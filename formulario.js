var formulario = document.querySelector(".formulario") // mando a llamar al formulario por clase
// Formulario
formulario.onsubmit = function (e) {

  e.preventDefault();

  // cambio el nombre de la variables para una mejor lectura en general usando palabras en ingles :3 por que tenia conflicto la e de formulario con la e de edad

  var name = formulario.elements[0];
  var age = formulario.elements[1];
  var nationality = formulario.elements[2];

  var nombre = name.value;
  var edad = age.value;

  var i = nationality.selectedIndex;
  var nacionalidad = nationality.options[i].value;
  console.log(nombre, edad)
  console.log(nacionalidad)

  // Faltan "elses" dentro de los "ifs" que nos retornen si estan correctos o no
  if (nombre.length === 0) {
    name.classList.add("error");
  } else {
    name.classList.remove("error");
  }

  if (edad < 18 || edad > 100) {
    age.classList.add("error");
  } else {
    age.classList.remove("error");
  }
  if (nacionalidad === "") {
    nationality.classList.add("error");
  } else {
    nationality.classList.remove("error");
  }
  // Si los datos son validos, se agrega el invitado
  if (nombre.length > 0 && edad >= 18 && edad <= 100) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }
  // mando a llamar al div con un id
  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  // Cambio added por add 
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.classList.add("boton-borrar"); // Uso class en vez de id
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}