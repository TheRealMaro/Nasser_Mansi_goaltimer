const goalDate = new Date('2024-09-27T22:47:00'); // Goal date and time in 2024
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const timeSinceGoal = Math.floor((now - goalDate) / 1000); // Time in seconds

    const days = Math.floor(timeSinceGoal / (3600 * 24));
    const hours = Math.floor((timeSinceGoal % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeSinceGoal % 3600) / 60);
    const seconds = timeSinceGoal % 60;

    countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);
