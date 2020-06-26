// import functions and grab DOM elements
import { makeFizzBuzz } from './utils.js';

// initialize state

const input = document.getElementById('input');
const button = document.getElementById('button');

// set event listeners to update state and DOM

button.addEventListener('click', () => {

    const resultSpan = document.getElementById('output');
    const inputValue = Number(input.value);

    resultSpan.textContent = makeFizzBuzz(inputValue);

});

