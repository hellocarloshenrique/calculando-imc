// variaveis ----------------------------------

let niveis = ["Muito abaixo do peso",
              "Abaixo do peso",
              "Peso normal",
              "Acima do peso",
              "Obesidade grau I",
              "Obesidade grau II",
              "Obesidade grau III"]

function calcularIMC (massa, altura) {
  let IMC = massa / (altura ** 2);

  return IMC;
}

// funcoes --------------------------------------
function verificaNivel (IMC) {
  let nivel = 0;

  if(IMC < 17) {
    nivel = 0
  } else if (IMC < 18.5) {
    nivel = 1
  } else if (IMC < 25) {
    nivel = 2
  } else if (IMC < 30) {
    nivel = 3
  } else if (IMC < 35) {
    nivel = 4
  } else if (IMC < 40) {
    nivel = 5
  } else {
    nivel = 6
  }

  return nivel
}

// execucao --------------------------------------

let nivel = verificaNivel(calcularIMC(150,1.90))
console.log(niveis[nivel])