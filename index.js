const emoji = document.getElementById('emoji');
const emoRay = ['✋','🤞','👊','😊','❤','🤣','😂','😘','😁','💕','🙌','🤦‍♀️','👏','😜','💖','🌹','💋','🎉','🎂','🤳','👀','✔','🐱‍🚀','🐱‍👓','🐱‍🐉','🐱‍💻','🐱‍🏍','🐱‍👤'];
const emUser = document.getElementById('emuser');
const scoreElement = document.getElementById('score'); // Element to display the score

let score = 0;

// Function to get two random emojis
function getRandomEmojis() {
    let firstEmojiIndex = Math.floor(Math.random() * emoRay.length);
    let secondEmojiIndex;
    do {
        secondEmojiIndex = Math.floor(Math.random() * emoRay.length);
    } while (secondEmojiIndex === firstEmojiIndex); // Ensure the two emojis are different
    return [emoRay[firstEmojiIndex], emoRay[secondEmojiIndex]];
}

// Function to update the emoji display
function updateEmojis() {
    const [emoji1, emoji2] = getRandomEmojis();
    emUser.textContent = `${emoji1} vs ${emoji2}`;
}

// Function to select a winner and update the score
function selectWinner(winnerEmoji) {
    if (emUser.textContent.includes(winnerEmoji)) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
        updateEmojis();
    }
}

// Event listener to start the game when the emoji is clicked
emoji.addEventListener('click', updateEmojis);

// Initial update of the emojis when the page loads
updateEmojis();

// Example: If you want the user to click on one of the emojis to select the winner, you can add an event listener like this:

emUser.addEventListener('click', (event) => {
    const selectedEmoji = event.target.textContent.trim();
    selectWinner(selectedEmoji);
});
