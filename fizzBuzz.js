function fizzBuzz() {
  let number = 1;

  while (number < 101) {
    let container = document.getElementById('container');
    let containerText = document.getElementById('container').innerText;

    let text;

    if (number % 5 === 0 && number % 3 === 0) {
      text = `The number is ${number}: Fizz Buzz.`;
      // console.log(text);
    } else if (number % 3 === 0) {
      text = `The number is ${number}: Fizz.`;
    } else if (number % 5 === 0) {
      text = `The number is ${number}: Buzz.`;
    } else {
      text = `The number is ${number}`;
    }
    console.log(text);
    console.log('innerText:', containerText);
    container.innerText = containerText + '\n' + text;

    number++;
  }
}

fizzBuzz();
