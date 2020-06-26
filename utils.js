export function makeFizzBuzz(number) {
    let fizzbuzz = '';
 
    for (let i = 1; i <= number; i++) {
        // evaluate fizzbuzz and add it to a string
        if (i % 15 === 0) {
            fizzbuzz = fizzbuzz + ' FizzBuzz';
        } else if (i % 3 === 0) {
            fizzbuzz = fizzbuzz + ' Fizz';
        } else if (i % 5 === 0) {
            fizzbuzz = fizzbuzz + ' Buzz';
        } else {
            fizzbuzz = fizzbuzz + ' ' + i;
        }
    }

    return fizzbuzz;
}