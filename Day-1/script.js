let cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener("click", () => {
        removeClassActive();
        card.classList.add('active');
    })
});

function removeClassActive() {
    cards.forEach(card => {
        card.classList.remove('active');
    })
}