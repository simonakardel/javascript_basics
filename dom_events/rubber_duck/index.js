// Easter egg hover effect
const logo = document.querySelector('.logo');

const setLogoTransform = (deg, duration = '2s') => {
    logo.style.transform = `rotateY(${deg}deg)`;
    logo.style.transition = `transform ${duration}`;
};

logo.addEventListener('mouseover', () => setLogoTransform(360));
logo.addEventListener('mouseout', () => setLogoTransform(0));

// Saving messages to local storage
const submitBtn = document.querySelector('#submit-btn');
const textArea = document.querySelector('.text');
const previousMessages = document.querySelector('.previous-messages');

// Save messages to localStorage
const saveMessagesToLocalStorage = (messages) => {
    localStorage.setItem('messages', JSON.stringify(messages));
};

// Display message in the DOM
const displayMessage = (messageObj) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = messageObj.text;
    // Add timestamp as the title for the hover effect
    messageElement.setAttribute('title', `${messageObj.timestamp}`);
    previousMessages.appendChild(messageElement);
};

// Retrieving existing messages from localStorage
let messages = JSON.parse(localStorage.getItem('messages')) || [];

// Displaying previous messages
window.addEventListener('load', () => {
    if (messages.length > 0) {
        messages.forEach(displayMessage);
    }
});

// Asking user for name
/*
window.addEventListener('load', () => {

    const name = prompt('What is your name?');
    const greetingElement = document.getElementById('greeting');
  
  if (name) {
    greetingElement.textContent = `Hello, ${name}! 🐥 Mr. Duck is happy to see you!`;
  } else {
    greetingElement.textContent = `Hello, mysterious guest! 🐥 Mr. Duck is happy to see you!`;
  }
});*/

// Timestamp
const getCurrentTimestamp = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
};

// Saving messages
submitBtn.addEventListener('click', () => {
    const messageText = textArea.value;
    if (messageText) {
        const timestamp = getCurrentTimestamp();
        const messageObj = { text: messageText, timestamp: timestamp };
        messages.push(messageObj);
        saveMessagesToLocalStorage(messages);
        displayMessage(messageObj);
        textArea.value = '';
    } else {
        console.error('Message cannot be empty');
    }
});

// Pressing enter saves message
textArea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitBtn.click();
    }
});

// Select dropdown

const selectMenu = document.querySelector('#select-menu');
const list = document.querySelector('#list');

selectMenu.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    const existingItem = document.getElementById(selectedValue);
    if (existingItem) {
        list.removeChild(existingItem);
    } else {
        const newItem = document.createElement('li');
        newItem.id = selectedValue;
        newItem.textContent = selectedValue;
        list.appendChild(newItem);
    }
});

// User
const userBtn = document.querySelector('#user-btn');

userBtn.addEventListener('click', () => {
    window.location.href = 'user.html';
});

// Jokes

const forceAnswerBtn = document.querySelector('#force-answer-btn');
const jokeContainer = document.querySelector('.joke');

forceAnswerBtn.addEventListener('click', async () => {
    try {
        const response = await fetch(
            'https://v2.jokeapi.dev/joke/Programming?type=single'
        );
        const data = await response.json();
        const jokeElement = document.createElement('p');
        jokeElement.textContent = data.joke;

        jokeContainer.appendChild(jokeElement);
    } catch (error) {
        console.error('Error fetching the joke:', error);
    }
});
