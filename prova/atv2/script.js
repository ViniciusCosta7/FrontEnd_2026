function revelar() {
    // Alterar imagem principal
    const imagem = document.querySelector("img");
    imagem.src = "img/_vinicius_junior.png";

    // Atualizar os spans
    const spans = document.querySelectorAll("span");

    spans[0].textContent = "Vinícius José Paixão de Oliveira Júnior";
    spans[1].textContent = "12/07/2000 (25 anos)";
    spans[2].textContent = "1,76 m";
    spans[3].textContent = "Ponta-esquerda / Atacante";
    spans[4].textContent = "9,5";

    // Alterar classes
    const elementos = document.querySelectorAll(".placeholder");

    elementos.forEach(function(el) {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });
}