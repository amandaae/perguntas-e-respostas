document.addEventListener('DOMContentLoaded', function () {
    const card = document.getElementById('flapCard');
    const cardInner = card.querySelector('.card-inner');

    card.addEventListener('click', function () {
        cardInner.classList.toggle('flipped');
    });
    
    // Adicionando a classe .flipped no CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .flipped {
            transform: rotateY(180deg);
        }
    `;
    document.head.appendChild(style);
});
