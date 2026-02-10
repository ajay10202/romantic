// Wait for the button click
document.getElementById('startBtn').addEventListener('click', function() {
    
    // 1. Hide the start button
    this.style.display = 'none';
    
    // 2. Reveal the main content
    const content = document.getElementById('mainContent');
    content.style.display = 'flex';
    
    // 3. Play the Background Music
    const audio = document.getElementById("bgMusic");
    audio.volume = 0.6; // Set volume (0.0 to 1.0)
    
    // Browser policy requires user interaction to play audio, 
    // which is why we do this inside the click event.
    audio.play().catch(error => {
        console.log("Playback failed: " + error);
    });

    // 4. Start the Floating Hearts Animation
    setInterval(createHeart, 300); // Create a new heart every 300ms
});

// Function to generate a floating heart
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Randomize horizontal position (0 to 100vw)
    heart.style.left = Math.random() * 100 + "vw";
    
    // Randomize animation speed (between 3s and 5s)
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    // Randomize size
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    
    document.body.appendChild(heart);

    // Remove the heart element after 5 seconds to keep the page clean
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
