/* --- SETUP & VARIABLES --- */
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const messageElement = document.getElementById('dynamic-message');
const card = document.querySelector('.card');

const successMessages = [
    "I knew you'd say yes! 🥰",
    "Great choice! 💖",
    "You just made my day! 🌹",
    "Forever and always. ✨"
];

/* --- EVENT LISTENERS --- */

// 1. Mouse Trail Effect
document.addEventListener('mousemove', function(e) {
    createHeart(e.clientX, e.clientY);
});

// 2. Runaway "No" Button
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton); // Backup for mobile taps

// 3. "Yes" Button Interaction
yesBtn.addEventListener('click', handleYesClick);


/* --- FUNCTIONS --- */

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    
    // Add some randomness to position so it feels natural
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;

    heart.style.left = (x + offsetX) + 'px';
    heart.style.top = (y + offsetY) + 'px';
    
    // Randomize size slightly
    const size = Math.random() * 1 + 0.5;
    heart.style.transform = `scale(${size})`;

    document.body.appendChild(heart);

    // Remove element after animation finishes to keep site fast
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

function moveButton() {
    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculate random position but keep it inside the screen
    const newX = Math.random() * (windowWidth - btnWidth);
    const newY = Math.random() * (windowHeight - btnHeight);
    
    // Apply new position
    noBtn.style.position = 'fixed'; // Detach from layout flow
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
}

function handleYesClick() {
    // 1. Trigger heart explosion
    createExplosion();
    
    // 2. Change the text with a fade effect
    messageElement.style.opacity = 0;
    
    setTimeout(() => {
        const randomMsg = successMessages[Math.floor(Math.random() * successMessages.length)];
        messageElement.innerText = randomMsg;
        messageElement.style.opacity = 1;
    }, 500);

    // 3. Shake the card for emphasis
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 500);
}

function createExplosion() {
    // Center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createHeart(centerX, centerY);
        }, i * 50); // Stagger the creation for a burst effect
    }
}
