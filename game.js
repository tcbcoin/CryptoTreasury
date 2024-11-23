document.addEventListener('DOMContentLoaded', (event) => {
    let coins = 0;
    const tapButton = document.getElementById('tap-button');
    const coinsDisplay = document.getElementById('coins');

    tapButton.addEventListener('click', () => {
        coins++;
        coinsDisplay.textContent = `Coins: ${coins}`;
    });
});
