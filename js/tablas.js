console.log('Tablas');

let numeroIngresado = document.getElementById('number')
// numeroIngresado.addEventListener('input',function() {
//     const valor = this.value
// })
// console.log(valor)



let limiteIngresado = document.getElementById('limit')

let boton = document.getElementById('generar-tabla')

let resultado = document.getElementById('result')



boton.addEventListener('click', () => {
  let numero = parseInt(numeroIngresado.valueOf());
  let limite = parseInt(limiteIngresado.valueOf());

  if (isNaN(numero) || isNaN(limite)) {
    resultado.value = "No ingreso nada.";
    return;
  }


  let texto = "";
  for (let i = 1; i <= limite; i++) {
    texto += `${numero} x ${i} = ${numero * i}\n`;
  }

  resultado.value = texto;
});



