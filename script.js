function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Bem-vindo ao meu site! 💪✨";
  mensagem.style.transition = "transform 0.3s ease";
  mensagem.style.transform = "scale(1.1)";
  setTimeout(() => {
    mensagem.style.transform = "scale(1)";
  }, 300);
}

function mostrarDescricao(hobbie) {
  const desc = {
    Futebol: "Jogo com os amigos nos fins de semana!",
    Filmes: "Gosto de suspense, ação e aventura 🎬",
    Igreja: "Participo de grupos, células e eventos comunitários 🙏"
  };

  document.getElementById("descricao-hobbie").textContent =
    desc[hobbie] || "Hobbie não encontrado.";
}


