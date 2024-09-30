let contagem = 0;

function alterarStatus(id){
    let elemento_clicado = document.getElementById(`game-${id}`);
    let botao = elemento_clicado.querySelector("a");
    let imagem = elemento_clicado.querySelector("div");

    if (botao.classList.contains("dashboard__item__button--return")) {
        let confirmacao = confirm("Você tem certeza que deseja devolver?");
        if (confirmacao) {
            botao.classList.remove("dashboard__item__button--return");
            imagem.classList.remove("dashboard__item__img--rented");
            botao.textContent = "Alugar"

            contagem -= 1;
        }
    } else {
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";

        contagem = contagem + 1;
        console.log(contagem);
        
    }

    let palavra = contagem == 1 ? "jogo alugado" : "jogos alugados";

    if (contagem == 0) {
        document.getElementById("contador").innerText = "";    
    } else {
        document.getElementById("contador").innerText = `Você possui ${contagem} ${palavra}!`;
    } 
}