"use strict";

let divContador = <HTMLDivElement>document.getElementById("divContador");
let InputAgregarClicks = <HTMLInputElement>(
  document.getElementById("InputAgregarClicks")
);
let btnAgregarClicks = <HTMLButtonElement>(
  document.getElementById("btnAgregarClicks")
);
let divMuestraResultado = <HTMLDivElement>(
  document.getElementById("divMuestraResultado")
);

let clicks: number = 0;

function sumarCliks() {
  clicks = clicks + 1;
  return Number(clicks);
}

function agregarClicksMasivo(agregar: number) {
  clicks = clicks + agregar;
  return Number(clicks);
}

divContador.addEventListener("click", () => {
  sumarCliks();
  divMuestraResultado.innerHTML = `Realizaste ${clicks} clicks`;
});

btnAgregarClicks.addEventListener("click", () => {
  agregarClicksMasivo(Number(InputAgregarClicks.value));
  divMuestraResultado.innerHTML = `Realizaste ${clicks} clicks`;
});
