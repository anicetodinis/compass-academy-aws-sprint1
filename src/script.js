const numero = document.getElementById("numero");
const botao = document.getElementById("botao");

const valorEsperado = Math.floor(Math.random() * 9999) + 1;

let tentativas = 0;

alert(valorEsperado);
function adivinhar() {
    const numeroDigitado = numero.value;
  
    try {

      if (numeroDigitado === "") {
        throw new Error("Preencha o campo!");
      }else if(numeroDigitado.length < 4){
        throw new Error("O número deve ter pelo menos quatro dígitos");
      }  
      
      if (numeroDigitado == valorEsperado) {
        alert("Parabéns! Você acertou em " + tentativas + " tentativas");
      } else {
        
        const diferenca = numeroDigitado - valorEsperado;
        const ehMuito = diferenca > 500;
        const ehMenosMuito = diferenca < -500;
        
        if (ehMuito) {
          alert("O próximo número deve ser muito menor");
        } else if (ehMenosMuito) {
          alert("O próximo número deve ser muito maior");
        } else if (diferenca > 0) {
          alert("O próximo número deve ser menor");
        } else {
          alert("O próximo número deve ser maior");
        }  
        tentativas++;
      }
    } catch (error) {
      alert(error.message);
    }
}

botao.addEventListener("click", adivinhar);