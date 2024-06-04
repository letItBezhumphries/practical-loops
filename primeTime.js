/*
Function that accepts a number and returns whether the provided number is a prime number - meaning a number that is only able to be divided by itself and 1
*/

function primeTime(num) {
  // grab the container element for the page
  let container = document.getElementById('container');

  // helper function that takes a number and returns true if number is prime
  var checkIfNumIsPrime = function (n) {
    // check that n is not less than 1 or that the remainder doesn't equal zero if it does return false
    if (n < 1 || n % 1 !== 0) {
      return false;
    }

    // create variable to store boolean flag, set initially to true
    let isPrime = true;

    // store the largest possible square root divisor
    let root = Math.floor(Math.sqrt(n));

    // loop over root, decrementing by 1 as long as its greater than or equal to 2
    while (root >= 2) {
      // check if there is remainder
      if (n % root === 0) {
        isPrime = false;
        return isPrime;
      }

      root--;
    }

    return isPrime;
  };

  while (num < 100) {
    let isPrime = checkIfNumIsPrime(num);
    if (isPrime === true) {
      console.log(`The number ${num} is a prime number`);
      container.innerText = `The number ${num} is a prime number`;
      break;
    }
    num++;
  }
}

primeTime(8);
