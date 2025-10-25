// UD3 · Nivel 1 (Starter)
// Objetivo: implementar los manejadores para usar Date, Math, document.title, window.open y localStorage.
// RAs: RA2 (verificación en navegador), RA3 (objetos predefinidos).

const panel = document.getElementById("panel");

/**
 * TODO 1: Implementa la función log(mensaje) que cree un <p> y lo añada a #panel
 */
function log(mensaje) {
  // TODO: crear elemento <p>, asignar textContent con 'mensaje' y añadirlo a panel

  const p = document.createElement("p");
  p.textContent = mensaje;

  panel.appendChild(p);
}

// TODO 2: Botón "Mostrar hora" → usar new Date() y toLocaleTimeString()
document.getElementById("btnHora").addEventListener("click", () => {
  //Creo un obj fecha y de él saco las horas, min y seg con toLocaleTime...
  let fecha = new Date();
  //Mostrar con func log()
  log(fecha.toLocaleTimeString());
});

// TODO 3: Botón "Número aleatorio" → usar Math.random() en rango 1..100 (entero)
document.getElementById("btnAleatorio").addEventListener("click", () => {
  let num = Math.floor(Math.random() * 100) + 1;
  log(num);
});

// TODO 4: Botón "Cambiar título" → pedir nuevo título con prompt y asignar a document.title
document.getElementById("btnTitulo").addEventListener("click", () => {
  //Castear el nuevo titulo a un String
  let nuevoTitulo = String(prompt("Introduce un nuevo título:"));
  document.title = nuevoTitulo;
  log("Nombre actualizado");
});

// TODO 5: Botón "Abrir ayuda" → window.open('about:blank','ayuda','width=400,height=300')
document.getElementById("btnAbrir").addEventListener("click", () => {
  // TODO (recuerda que puede estar bloqueado; compruébalo)
  //Los nav modernos bloquean los window.open si no hay una acción directa del usuario.
  //En este caso como pulsa click si la hay
  let nuevaVentana = window.open(
    "about:blank",
    "Ayuda",
    "width=400, height=300"
  );
  nuevaVentana.document.title = "Ayuda";
  nuevaVentana.document.writeln("<h1>Nueva ventana de ayuda</h1>");
});

// TODO 6: Guardar y recuperar nombre en localStorage (clave 'nombre')
const iNombre = document.getElementById("nombre");
document.getElementById("btnGuardar").addEventListener("click", () => {
  // TODO: localStorage.setItem('nombre', iNombre.value)
  localStorage.setItem(`nombre`, iNombre.value);

  // TODO: log de confirmación
  log(`${iNombre.value} guardado en local storage`);
});

document.getElementById("btnRecuperar").addEventListener("click", () => {
  // TODO: leer localStorage.getItem('nombre') y mostrar con log
  //Recuperar el valor del localstorage
  const nombreGuardado = localStorage.getItem("nombre");

  if (nombreGuardado) {
    log(`Nombre recuperado: ${nombreGuardado}`);
  } else {
    log("No hay ningun nombre guardado en LocalStorage");
  }
});
