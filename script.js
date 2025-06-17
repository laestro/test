document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;

    // Aumentar fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Diminuir fonte
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');
    diminuirFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Alternar contraste
    const alternarContrasteBotao = document.getElementById('alternar-contraste');
    alternarContrasteBotao.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });
});
