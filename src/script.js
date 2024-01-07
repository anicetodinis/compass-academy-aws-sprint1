//variaveis para capturar o dado digitado e executar a acao do botao
const numero = document.getElementById("numero");
const botao = document.getElementById("botao");

//gerando o numero que o usuario devera acertar
const valorEsperado = Math.floor(Math.random() * 9999) + 1;

//variavel que armazena o numero de tentativas
let tentativas = 0;

//funcao adivinhar que verifica se o valor digitado e igual ao gerado pelo codigo
function adivinhar() {
    const numeroDigitado = numero.value;
  
    try {
      //verificando se o valor digitado tem mais de 4 digitos
      if (numeroDigitado === "") {
        throw new Error("Preencha o campo!");
      }else if(numeroDigitado.length < 4){
        throw new Error("O número deve ter pelo menos quatro dígitos");
      }
      //verificado se o valor informado eh igual oa gerado pelo codigo
      if (numeroDigitado == valorEsperado) {
        alert("Parabéns! Você acertou em " + tentativas + " tentativas");
      } else {
        /**
         * Logica para difinir se o valor digitado eh maior, muito maior, menor ou muito menor que o gerado pelo codigo:
         * 1. Primeiro, calculamos a diferença entre o número digitado e o valor esperado;
         * 2. Em seguida, verificamos se a diferença é maior ou menor que 500;
         */
        const diferenca = numeroDigitado - valorEsperado;
        const ehMuito = diferenca > 500;
        const ehMenosMuito = diferenca < -500;
        /**
         * 3. Se a diferença for maior que 500, o número digitado é muito menor que o valor esperado;
         * 4. Se a diferença for menor que -500, o número digitado é muito maior que o valor esperado;
         * 5. Caso contrário, o número digitado está dentro da faixa de 500, então é apenas menor ou maior que o valor esperado.
         */
        if (ehMuito) {
          alert("O próximo número deve ser muito menor");
        } else if (ehMenosMuito) {
          alert("O próximo número deve ser muito maior");
        } else if (diferenca > 0) {
          alert("O próximo número deve ser menor");
        } else {
          alert("O próximo número deve ser maior");
        }  
        //incrementando o numero de tentativas
        tentativas++;
      }
    } catch (error) {
      alert(error.message);
    }
}

//chamando a funcao adivinhar atarves do click do botao
botao.addEventListener("click", adivinhar);