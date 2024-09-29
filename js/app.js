function alterarStatus(id){
    let elemento_clicado = document.getElementById(`game-${id}`);
    let botao = elemento_clicado.querySelector("a");
    let imagem = elemento_clicado.querySelector("div");

    if (botao.classList.contains("dashboard__item__button--return")) {
        botao.classList.remove("dashboard__item__button--return");
        imagem.classList.remove("dashboard__item__img--rented");
        botao.textContent = "Alugar"
    } else {
        botao.classList.add("dashboard__item__button--return");
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
    }
}