// Select elements
const colorButton = document.getElementById('colorButton');
const greetForm = document.getElementById('greetForm');
const nameInput = document.getElementById('name');
const greetMessage = document.getElementById('greetMessage');

// Array of colors for the background
const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffcc99', '#99ccff'];

// Function to change background color
colorButton.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// Function to handle form submission
greetForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting
  const name = nameInput.value.trim();
  if (name) {
    greetMessage.textContent = `Hello, ${name}! Welcome to the webpage.`;
  } else {
    greetMessage.textContent = 'Please enter your name.';
  }
});