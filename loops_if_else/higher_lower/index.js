const randomNumber = Math.floor(Math.random() * 100) + 1;
const input = document.getElementById('guess');
const submit = document.getElementById('submit');
const numberOfGuesses = document.getElementById('number-of-guesses');
const message = document.getElementById('message');
const previousGuesses = document.getElementById('previous-guesses');

let wrongGuesses = 0;
const guesses = [];

function updateMessage(text, color = 'black') {
    message.innerText = text;
    message.style.color = color;
}

function displayGuesses() {
    numberOfGuesses.innerText = `Number of guesses: ${wrongGuesses}`;
    previousGuesses.innerText = `Previous guesses: ${guesses.join(', ')}`;
}

function handleGuess() {
    const currentGuess = parseInt(input.value, 10);

    if (isNaN(currentGuess) || currentGuess < 1 || currentGuess > 100) {
        updateMessage('Please enter a valid number between 1 and 100.');
        input.value = '';
        return;
    }

    wrongGuesses++;
    guesses.push(currentGuess);
    displayGuesses();

    if (currentGuess > randomNumber) {
        updateMessage(`${currentGuess} is too high!`);
    } else if (currentGuess < randomNumber) {
        updateMessage(`${currentGuess} is too low!`);
    } else {
        updateMessage('You guessed correctly!', 'green');

        submit.disabled = true;
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }

    input.value = '';
}

submit.addEventListener('click', handleGuess);

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleGuess();
    }
});
