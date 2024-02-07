const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function ActColor(params) {
  const colorRGB = `rgb(${rojo},${verde},${azul})`; //plantillas literales de javascript
  document.body.style.backgroundColor = colorRGB;
}
///Para actualizar input rojo
inputRojo.addEventListener("change", () => {
  //rojo = e.target.value;
  rojo = inputRojo.value;
  textoRojo.innerText = rojo;
  ActColor(rojo, verde, azul);
});
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  ActColor(rojo, verde, azul);
});
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  ActColor(rojo, verde, azul);
});
