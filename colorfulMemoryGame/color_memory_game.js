const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', ,'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = []; // When a player clicks on a card, it gets added to this array to enable match comparisons.
let score = 0;
let timeLeft = 30;
let gameInterval;

// DOM element selection
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
        gameContainer.appendChild(card);
    }
}

// shuffle function: employs the Fisher-Yates algorithm to randomize the order of the colors 
// and then duplicates these colors to create pairs, forming the set of cards for gameplay.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { // iterate in reverse
        const j = Math.floor(Math.random() * (i + 1)); // random index selection for each iteration
        [array[i], array[j]] = [array[j], array[i]]; // swap
    }
    return array;
}

function handleCardClick(event) {
    const card = event.target; // Retrieves the element that triggered the event (i.e., a clicked card) and assigns it to the 'card' variable.
    
    // If the element is not a card or has already matched, the function returns early, ignoring any further actions for this particular click.
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    
    // If the element is a card and has not been matched:
    card.textContent = card.dataset.color; // reveal color
    card.style.backgroundColor = card.dataset.color;
    
    selectedCards.push(card);

    // Checks if two cards have been selected. 
    // If two cards have been chosen, it uses 'setTimeout()' to delay 
    // the execution of the 'checkMatch()' function by 500 milliseconds. 
    // This brief delay allows the player to see both selected cards 
    // before their comparison briefly.
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color == card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        // hide colors
        card1.textContent = '?'; 
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = []; // reset selection
}

function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; 
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick)
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    // Initiates an interval that triggers a function every second 
    // (1000 milliseconds) to update the timer.
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);