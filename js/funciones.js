function traducir() {
  const entrada = document.getElementById("entrada").value.toLowerCase();
  const resultado = diccionario[entrada];
  document.getElementById("resultado").textContent = resultado || "Palabra no encontrada.";
}

function agregarPalabra() {
  const esp = document.getElementById("espanol").value.trim().toLowerCase();
  const awa = document.getElementById("awajun").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (esp && awa) {
    diccionario[esp] = awa;
    mensaje.textContent = `'${esp}' fue agregada correctamente.`;
    mensaje.style.color = "green";
    document.getElementById("espanol").value = "";
    document.getElementById("awajun").value = "";
  } else {
    mensaje.textContent = "Completa ambos campos.";
    mensaje.style.color = "red";
  }
}

function mostrarDiccionario() {
  const lista = document.getElementById("lista-diccionario");
  lista.innerHTML = "";

  Object.keys(diccionario)
    .sort()
    .forEach(palabra => {
      const item = document.createElement("li");
      item.textContent = `${palabra} -> ${diccionario[palabra]}`;
      lista.appendChild(item);
    });
}
