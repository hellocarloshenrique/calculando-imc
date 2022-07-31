// variaveis --------------------------------------

let niveis = ["Muito abaixo do peso",
              "Abaixo do peso",
              "Peso normal",
              "Acima do peso",
              "Obesidade grau 1",
              "Obesidade grau 2",
              "Obesidade grau 3"]

let pessoas = ["Carlos Henrique", "Elizabeth", "Elias", "Marcos"];
let massas = [80, 70, 60, 90];
let alturas = [1.70, 1.90, 1.80, 2.10];            

// funcoes ----------------------------------------

function calcularIMC (massa, altura) {
  let IMC = massa / (altura ** 2);

  return IMC;
}

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

// execucao ----------------------------------------

/*let indice = 0*/

for(let indice = 0; indice < pessoas.length; indice++) {
  let pessoa = pessoas[indice]
  let massa = massas[indice]
  let altura = alturas[indice]
  
  let IMC = calcularIMC(massa,altura)
  let nivel = verificaNivel(IMC)
  
  console.log("Nome: "+ pessoa)
  console.log("Peso: "+ massa)
  console.log("Altura: "+ altura)
  console.log("IMC: "+ IMC.toFixed(2))
  // to.fixed para reduzir a dízima
  
  console.log("Nível: " + niveis[nivel])
  console.log(" ")
}
