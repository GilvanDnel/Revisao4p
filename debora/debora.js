/* debora.js - Lógica Completa com Modal Customizado */

// Função principal chamada pelos botões do HTML
function verificar(botao, isCorreto, explicacao) {
  // 1. Acha o container da questão (o elemento pai <article>)
  const questaoContainer = botao.closest(".questao");

  // 2. Trava todos os botões daquela questão para impedir que o aluno clique várias vezes
  const todosBotoes = questaoContainer.querySelectorAll("button");
  todosBotoes.forEach((btn) => (btn.disabled = true));

  // 3. Verifica se acertou ou errou e chama o MODAL correspondente
  if (isCorreto) {
    // Pinta o botão de verde
    botao.classList.add("btn-correto");
    // Chama a janela bonita de sucesso
    mostrarModal("sucesso", "✅ PARABÉNS!", explicacao);
  } else {
    // Pinta o botão de vermelho
    botao.classList.add("btn-errado");
    // Chama a janela bonita de erro com a explicação
    mostrarModal(
      "erro",
      "❌ ERROU!",
      explicacao +
        "<br><br><em>(Dica: Leia o resumo no topo da página e tente novamente).</em>"
    );
  }
}

/* --- FUNÇÕES DO MODAL (JANELA DE AVISO) --- */

function mostrarModal(tipo, titulo, mensagem) {
  const modal = document.getElementById("modal-alerta");
  const header = document.getElementById("modal-header");
  const texto = document.getElementById("modal-texto");

  // Preenche o título e a mensagem
  header.innerHTML = titulo;
  texto.innerHTML = mensagem;

  // Define a cor do topo (verde ou vermelho)
  header.classList.remove("header-sucesso", "header-erro"); // Limpa cores antigas
  if (tipo === "sucesso") {
    header.classList.add("header-sucesso");
  } else {
    header.classList.add("header-erro");
  }

  // Faz o modal aparecer na tela
  modal.style.display = "flex";
}

function fecharModal(event) {
  // Fecha se clicar no botão "Continuar" OU se clicar fora da caixinha (no fundo escuro)
  if (!event || event.target.id === "modal-alerta") {
    document.getElementById("modal-alerta").style.display = "none";
  }
}

/* --- FUNÇÃO PARA AS QUESTÕES DISCURSIVAS --- */
function toggleGabarito(id) {
  const elemento = document.getElementById(id);
  // Alterna entre mostrar e esconder a resposta
  if (elemento.style.display === "block") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
}
