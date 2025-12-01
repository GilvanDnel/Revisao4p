/* debora.js - Lógica com Resumos Ricos */

// Função Principal
function verificar(botao, isCorreto) {
  // 1. Acha o container da questão (o elemento pai <article>)
  const questaoContainer = botao.closest(".questao");

  // 2. Busca o resumo oculto DENTRO dessa questão específica
  // O .innerHTML pega todo o texto, negrito e listas que criamos no HTML
  const conteudoResumo =
    questaoContainer.querySelector(".mini-aula-oculta").innerHTML;

  // 3. Trava todos os botões daquela questão
  const todosBotoes = questaoContainer.querySelectorAll("button");
  todosBotoes.forEach((btn) => (btn.disabled = true));

  // 4. Lógica do Modal com Feedback Rico
  if (isCorreto) {
    // Pinta o botão de verde
    botao.classList.add("btn-correto");
    // Chama o modal passando o resumo (mesmo acertando, é bom reforçar)
    mostrarModal("sucesso", "✅ Resposta Correta!", conteudoResumo);
  } else {
    // Pinta o botão de vermelho
    botao.classList.add("btn-errado");
    // Chama o modal de erro com o resumo para a pessoa aprender
    mostrarModal("erro", "❌ Ops, não foi dessa vez!", conteudoResumo);
  }
}

/* --- FUNÇÕES DO MODAL (JANELA DE AVISO) --- */

function mostrarModal(tipo, titulo, mensagem) {
  const modal = document.getElementById("modal-alerta");
  const header = document.getElementById("modal-header");
  const texto = document.getElementById("modal-texto");

  // Preenche o título e a mensagem (innerHTML permite usar negrito/listas)
  header.innerHTML = titulo;
  texto.innerHTML = mensagem;

  // Define a cor do topo (verde ou vermelho)
  header.classList.remove("header-sucesso", "header-erro");
  if (tipo === "sucesso") {
    header.classList.add("header-sucesso");
  } else {
    header.classList.add("header-erro");
  }

  // Faz o modal aparecer
  modal.style.display = "flex";
}

function fecharModal(event) {
  // Fecha se clicar no botão ou fora da caixa
  if (!event || event.target.id === "modal-alerta") {
    document.getElementById("modal-alerta").style.display = "none";
  }
}

/* --- FUNÇÃO PARA AS QUESTÕES DISCURSIVAS --- */
function toggleGabarito(id) {
  const elemento = document.getElementById(id);
  if (elemento.style.display === "block") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
}
