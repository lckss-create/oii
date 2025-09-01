function traduzir() {
  document.getElementById("texto").innerHTML = `
    Oi Isabel! <br><br>

    Por alguns dias fiquei pensando se deveria escrever isso ou não, mas decidi que é melhor colocar no papel do que deixar apenas na minha cabeça. Às vezes imagino de mil formas como poderia te dizer isso, mas nenhuma parece tão certa quanto simplesmente escrever.<br><br>

    Desde que nos conhecemos, percebi que você consegue deixar tudo mais divertido. Seja quando você acha que estou mentindo sobre alguma coisa (mesmo quando não 😅), ou quando tento planejar jogar 99 noites e, como sempre, nunca dá certo porque você nunca consegue ( ou eu rsrs). Essas pequenas coisas acabam se tornando especiais para mim e fazem cada dia ser mais divertido.<br><br>

    A verdade é que eu gosto de você. Gosto de conversar com você, de rir junto, da forma como você me faz sentir bem sem eu nem perceber. E fica impossível não admitir isso.<br><br>

    Então... eu queria saber: você quer namorar comigo?<br><br>

    De: Baldacci
  `;

  // Esconde botão "Traduzir"
  document.querySelector(".heart-btn").style.display = "none";

  // Cria botão 💌
  let novoBotao = document.createElement("button");
  novoBotao.classList.add("heart-btn", "big");
  novoBotao.innerText = "💌";
  novoBotao.onclick = mostrarFinal;
  document.querySelector(".scene").appendChild(novoBotao);
}

function mostrarFinal() {
  document.querySelector(".final").style.display = "block";
}

function verificarResposta() {
  let resposta = document.querySelector('input[name="resposta"]:checked');
  if (!resposta) {
    alert("Escolha uma opção antes de enviar! 💕");
    return;
  }
  if (resposta.value === "sim") {
    confete();
    setTimeout(() => {
      alert("💖 Obrigado! Eu te amo muito! 💖");
    }, 500);
  } else {
    alert("😢 Tudo bem... eu sempre vou gostar de você!");
  }
}

// 🎉 Efeito confete
function confete() {
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    const confetti = document.createElement("div");
    confetti.innerText = "💖";
    confetti.style.position = "fixed";
    confetti.style.fontSize = "30px";
    confetti.style.top = Math.random() * window.innerHeight + "px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.transition = "2s";
    confetti.style.zIndex = "9999";
    document.body.appendChild(confetti);

    setTimeout(() => { confetti.remove(); }, 2000);

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
