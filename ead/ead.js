/* ead.js - Lógica Padrão do Projeto */

function verificar(botao, isCorreto, explicacao) {
  const questaoContainer = botao.closest(".questao");
  const todosBotoes = questaoContainer.querySelectorAll("button");
  todosBotoes.forEach((btn) => (btn.disabled = true));

  if (isCorreto) {
    botao.classList.add("btn-correto");
    mostrarModal("sucesso", "✅ PARABÉNS!", explicacao);
  } else {
    botao.classList.add("btn-errado");
    mostrarModal(
      "erro",
      "❌ ERROU!",
      explicacao + "<br><br><em>(Dica: Revise o conceito de Paradigmas).</em>"
    );
  }
}

function mostrarModal(tipo, titulo, mensagem) {
  const modal = document.getElementById("modal-alerta");
  const header = document.getElementById("modal-header");
  const texto = document.getElementById("modal-texto");

  header.innerHTML = titulo;
  texto.innerHTML = mensagem;

  header.classList.remove("header-sucesso", "header-erro");
  if (tipo === "sucesso") {
    header.classList.add("header-sucesso");
  } else {
    header.classList.add("header-erro");
  }
  modal.style.display = "flex";
}

function fecharModal(event) {
  if (!event || event.target.id === "modal-alerta") {
    document.getElementById("modal-alerta").style.display = "none";
  }
}

function toggleGabarito(id) {
  const elemento = document.getElementById(id);
  if (elemento.style.display === "block") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
}
