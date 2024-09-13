// Get the container element
const container = document.getElementById('number-list');
// Loop through numbers from 1 to 20
// Create a new div element for each number

// Check if the number is even or odd and apply the appropriate class

// Add an event listener to highlight the number when clicked

// Remove highlight from all numbers

// Add highlight to the clicked number

// Append the new div to the container
for (let i = 1; i <= 20; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.textContent = i;
    if (i % 2 === 0) {
        numberDiv.classList.add('even');
    } else {
        numberDiv.classList.add('odd');
    }
    numberDiv.classList.add('number');
    numberDiv.addEventListener('click', function () {
        document
            .querySelectorAll('.number.highlight')
            .forEach((div) => div.classList.remove('highlight'));
        numberDiv.classList.add('highlight');
    });
    container.appendChild(numberDiv);
}
