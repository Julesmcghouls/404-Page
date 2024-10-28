const messages = [
    "Houston, we have a problem! This page is lost in the VOID.",
    "OOPS, seems like we've traveled into the unknown.",
    "404? Where am I?",
    "This page doesn't exist."
];

// Function to select a random message 
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Set a random message in the speech bubble on page load
document.addEventListener('DOMContentLoaded', () => {
    const speechBubble = document.querySelector('.speech-bubble');
    speechBubble.textContent = getRandomMessage();

    // Show the Easter egg planet after a random delay
    setTimeout(() => {
        const planet = document.getElementById('planet');
        planet.style.display = 'block';
        // Random position on the screen
        planet.style.top = Math.random() * window.innerHeight + 'px';
        planet.style.left = Math.random() * window.innerWidth + 'px';
    }, Math.random() * 5000 + 1000); // Delay between 1s to 6s
});

document.getElementById('planet').addEventListener('click', () => {
    const spaceFeedUrl = 'https://www.youtube.com/watch?v=DfEr5XCFNWM'; // Replace with actual space live feed URL
    const newWindow = window.open(spaceFeedUrl, '_blank');

    // Attempt to make the new window go full screen
    newWindow.onload = () => {
        if (newWindow.document.body) {
            newWindow.document.body.requestFullscreen().catch(err => {
                console.error("Failed to enter full screen:", err);
            });
        }
    };
});
