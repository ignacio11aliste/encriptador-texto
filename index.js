const textArea = document.getElementById("textEncriptar");
const enseñarTexto = document.getElementById("textProcesado");

function btnEncriptarTexto() {
  const texto = textArea?.value.toLowerCase();

  if (texto) {
    const textoEncriptado = encriptar(texto);
    enseñarTexto.value = textoEncriptado;
    limpiarTextarea();
    actualizarInterfaz(true);
  } else {
    alert("No ha ingresado un valor.");
  }
}

function btnDesencriptar() {
  const texto = textArea?.value.toLowerCase();

  if (texto) {
    const textoDesencriptado = desencriptar(texto);
    enseñarTexto.value = textoDesencriptado;
    limpiarTextarea();
  } else {
    alert("No ha ingresado un valor.");
  }
}

function encriptar(textoEntrada) {
  const reemplazos = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  return reemplazos.reduce(
    (texto, [original, reemplazo]) => texto.replaceAll(original, reemplazo),
    textoEntrada
  );
}

function desencriptar(textoEntrada) {
  const reemplazos = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  return reemplazos.reduce(
    (texto, [reemplazo, original]) => texto.replaceAll(reemplazo, original),
    textoEntrada
  );
}

function btnCopiar() {
  const texto = enseñarTexto.value;
  if (texto) {
    navigator.clipboard.writeText(texto);
  }
}

function limpiarTextarea() {
  textArea.value = "";
}

function actualizarInterfaz(visible) {
  document.getElementById("muneco").style.display = visible ? "none" : "block";
  document.getElementById("msjNegativa").style.display = visible
    ? "none"
    : "block";
  document.getElementById("parrafo").style.display = visible ? "none" : "block";
  document.getElementById("textProcesado").style.display = visible
    ? "block"
    : "none";
  document.getElementById("btbCopiar").style.display = visible
    ? "block"
    : "none";
}
