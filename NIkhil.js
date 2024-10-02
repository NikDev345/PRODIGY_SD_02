// script.js
let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const feedback = document.getElementById("feedback");
    const attemptsDisplay = document.getElementById("attempts");
    
    attempts++;

    if (isNaN(userGuess)) {
        feedback.textContent = "Please enter a valid number!";
        return;
    }

    if (userGuess === numberToGuess) {
        feedback.textContent = `Congratulations! You've guessed the correct number ${numberToGuess} in ${attempts} attempts.`;
        feedback.style.color = "green";
    } else if (userGuess > numberToGuess) {
        if (userGuess - numberToGuess <= 10) {
            feedback.textContent = "Your guess is too high, but you're very close!";
        } else {
            feedback.textContent = "Your guess is too high!";
        }
        feedback.style.color = "red";
    } else {
        if (numberToGuess - userGuess <= 10) {
            feedback.textContent = "Your guess is too low, but you're very close!";
        } else {
            feedback.textContent = "Your guess is too low!";
        }
        feedback.style.color = "red";
    }

    attemptsDisplay.textContent = `Number of attempts: ${attempts}`;
}
