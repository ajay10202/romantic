const container = document.querySelector('.reveal-container');
const topImage = document.querySelector('.top-image');

// Calculates coordinates and updates the CSS variables
const updateEraserPosition = (e) => {
    // Get the exact dimensions and position of the container
    const rect = container.getBoundingClientRect();
    
    // Determine if this is a touch event or a mouse event
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    // Calculate X and Y relative to the container itself
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    // Push the coordinates to the CSS
    topImage.style.setProperty('--x', `${xPos}px`);
    topImage.style.setProperty('--y', `${yPos}px`);
};

// Resets the image back to solid when interaction ends
const resetImage = () => {
    topImage.style.setProperty('--x', `-1000px`);
    topImage.style.setProperty('--y', `-1000px`);
};

// --- Desktop Mouse Events ---
container.addEventListener('mousemove', updateEraserPosition);
container.addEventListener('mouseleave', resetImage);

// --- Mobile Touch Events ---
container.addEventListener('touchmove', (e) => {
    e.preventDefault(); // Extra safety to prevent screen dragging
    updateEraserPosition(e);
});
container.addEventListener('touchend', resetImage);
