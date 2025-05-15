const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = [];
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        card.style.backgroundColor = '#ddd';
        card.addEventListener('click', handleCardClick);
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
    const card = event.target;
    // Prevent clicking already matched or already flipped cards
    if (
        !card.classList.contains('card') ||
        card.classList.contains('matched') ||
        selectedCards.includes(card) ||
        selectedCards.length === 2
    ) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        // Temporarily disable further clicks
        gameContainer.style.pointerEvents = 'none';
        setTimeout(() => {
            checkMatch();
            gameContainer.style.pointerEvents = 'auto';
        }, 500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    // Reset timer and score
    clearInterval(gameInterval);
    timeLeft = 30;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    timerElement.textContent = `Time Left: ${timeLeft}`;
    startbtn.disabled = true;

    // Prepare cards (duplicate colors array for pairs)
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    startGameTimer();
}

function startGameTimer() {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            alert('Game Over!');
            startbtn.disabled = false;
            // Optionally disable further card clicks
            Array.from(document.getElementsByClassName('card')).forEach(card => {
                card.removeEventListener('click', handleCardClick);
            });
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);
