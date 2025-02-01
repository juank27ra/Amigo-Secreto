let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigo() {
  let capturaInput = document.getElementById("amigo").value;
  if (!capturaInput) alert("Por favor, inserte un nombre.");
  else {
    amigos.push(capturaInput);
    let limpiarInput = document.getElementById("amigo");
    limpiarInput.value = "";
  }
  recorrerArray();
  return console.log(amigos);
}

function recorrerArray() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li"); // Crear <li>
    li.textContent = amigos[i]; // Asignar el nombre del amigo
    lista.appendChild(li); // Agregar <li> a la lista <ul>
  }
  //   console.log(lista);
  //   console.log(agregarAmigo());
}

function sortearAmigo() {
  if (!amigos.length) return alert("primero agrega amigos a la Lista");

  let numeroRamdon = Math.floor(Math.random() * amigos.length);

  const amigoAleatorio = amigos[numeroRamdon];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `Tu Amigo Secreto es ${amigoAleatorio}`;

  return;
}
