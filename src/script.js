const numero = document.getElementById("numero");
const botao = document.getElementById("botao");

const valorEsperado = Math.floor(Math.random() * 9999) + 1;

alert(valorEsperado);
function adivinhar() {
    const numeroDigitado = numero.value;
  
    try {
      
      if (numeroDigitado == valorEsperado) {
        alert("Parabéns! Você acertou!");
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
        
      }
    } catch (error) {
      alert(error.message);
    }
}

botao.addEventListener("click", adivinhar);