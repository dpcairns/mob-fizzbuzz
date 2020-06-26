// IMPORT MODULES under test here:
import { makeFizzBuzz } from '../utils.js';

const test = QUnit.test;

test('it should take in 16 and return the appropriate fizzbuzz as a string', (expect) => {
    //Arrange
    // Set up your arguments and expectation
    const input = 16;
    const expected = ' 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeFizzBuzz(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should take in 10 and return the appropriate fizzbuzz as a string', (expect) => {
    //Arrange
    // Set up your arguments and expectation
    const input = 10;
    const expected = ' 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeFizzBuzz(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('it should take in 7 and return the appropriate fizzbuzz as a string', (expect) => {
    //Arrange
    // Set up your arguments and expectation
    const input = 7;
    const expected = ' 1 2 Fizz 4 Buzz Fizz 7';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeFizzBuzz(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

