// import functions and grab DOM elements

// initialize state

const input = document.getElementById('input');
const button = document.getElementById('button');
// set event listeners to update state and DOM

button.addEventListener('click', () => {
  console.log(input.value);
});
