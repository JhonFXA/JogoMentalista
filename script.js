var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = document.getElementById("chances").innerHTML = 3;
 

function Chutar() {
  tentativas--;
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");
  var tntvsRestantes = document.getElementById("tntvsRestantes");
  
  
  if (tentativas == 0 && chute != numeroSecreto) {
    elementoResultado.innerHTML =
      "Suas tentativas acabaram. O número correto era " + numeroSecreto;
     desativar();
    return;
  }
 
  if(chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
    desativar();
  }
  
  else if(chute > 10 || chute < 0){
    elementoResultado.innerHTML = "Escolha um número de 0 a 10 apenas!";
  }
  
  else if(chute < numeroSecreto) {
    elementoResultado.innerHTML = "Você errou, tente um número mais alto - " + tentativas + " tentativa(s) restantes";
  }
  
  else if(chute > numeroSecreto) {
    elementoResultado.innerHTML = "Você errou, tente um número mais baixo - tentativa " + tentativas;
  }
  
  function desativar() {
  var botao = document.getElementById("botao");
  botao.disabled = true;
}

}