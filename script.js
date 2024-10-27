const messages = [
    "Houston, we have a problem! This page is lost in the VOID.",
    "OOPS, seems like we've traveled into the unknown.",
    "404? Where am I?",
    "This page doesn't exist."];

//function to select a random message 
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Set a random message in the speech bubble on page load
document.addEventListener('DOMContentLoaded', () => {
    const speechBubble = document.querySelector('.speech-bubble');
    speechBubble.textContent = getRandomMessage();
});