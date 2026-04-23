function revelar() {

    // trocar imagem
    const img = document.querySelector("img");
    img.src = "_vinicius_junior.png";

    // atualizar spans
    const spans = document.querySelectorAll("span");

    spans[0].textContent = "Vinícius José Paixão de Oliveira Júnior";
    spans[1].textContent = "12/07/2000 (25 anos)";
    spans[2].textContent = "1,76 m";
    spans[3].textContent = "Ponta-esquerda / Atacante";
    spans[4].textContent = "9,5";

    // trocar classes
    const elementos = document.querySelectorAll(".placeholder");

    elementos.forEach(function(el) {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });
}