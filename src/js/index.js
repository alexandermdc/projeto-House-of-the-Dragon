const botaoCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")

botaoCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();
        MostrarBotaoSelecionado(botao);

        destivarImagemAtiva();
        MostrarImagemdeFundo(indice);

        DestivarInformacaoAtiva();
        MostrarInformacaes(indice);
    })
})

function MostrarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function MostrarInformacaes(indice) {
    informacoes[indice].classList.add("ativa");
}

function MostrarImagemdeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function DestivarInformacaoAtiva() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function destivarImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa"); imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
