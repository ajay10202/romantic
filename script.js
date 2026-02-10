document.getElementById('startBtn').addEventListener('click', function() {
    // 1. Hide the button
    this.style.display = 'none';
    
    // 2. Show the content
    document.getElementById('mainContent').style.display = 'flex';
    
    // 3. Play the music
    var audio = document.getElementById("bgMusic");
    audio.volume = 0.5;
    audio.play().catch(error => {
        console.log("Audio playback failed (browser policy): ", error);
    });

    // 4. Start the heart rain
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Randomize position and speed
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    
    document.body.appendChild(heart);

    // Remove heart after it floats up
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
