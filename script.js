const celebrateBtn = document.getElementById('celebrate-btn');
const card = document.querySelector('.card');

celebrateBtn.addEventListener('click', () => {
    createConfetti();
    createBalloons();
});

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    card.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * -100 + 'vh';
        confetti.style.backgroundColor = getRandomPastelColor();
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

function createBalloons() {
    const balloonContainer = document.createElement('div');
    balloonContainer.className = 'balloon-container';
    card.appendChild(balloonContainer);

    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.top = Math.random() * 100 + 100 + 'vh';
        balloon.style.backgroundColor = getRandomPastelColor();
        balloon.style.animationDuration = Math.random() * 5 + 5 + 's';
        balloonContainer.appendChild(balloon);
    }
}

function getRandomPastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
}
