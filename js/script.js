// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site carregado!");
});

// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site carregado!");

    const carrossel = document.querySelector('.carrossel');
    const setaEsquerda = document.querySelector('.seta.esquerda');
    const setaDireita = document.querySelector('.seta.direita');

    let deslocamento = 0;

    setaDireita.addEventListener('click', () => {
        const larguraProduto = carrossel.querySelector('.produto').offsetWidth + 20; // 20px para margem
        const maxDeslocamento = carrossel.scrollWidth - carrossel.offsetWidth;

        if (Math.abs(deslocamento) < maxDeslocamento) {
            deslocamento -= larguraProduto;
            carrossel.style.transform = `translateX(${deslocamento}px)`;
        }
    });

    setaEsquerda.addEventListener('click', () => {
        const larguraProduto = carrossel.querySelector('.produto').offsetWidth + 20;

        if (deslocamento < 0) {
            deslocamento += larguraProduto;
            carrossel.style.transform = `translateX(${deslocamento}px)`;
        }
    });
});