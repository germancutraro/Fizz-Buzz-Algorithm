function fizzBuzz (num) {
  for (i = 1; i <= num; i++) {
    let fizz = i % 3 === 0,
        buzz = i % 5 === 0;
    console.log(fizz && buzz ? 'FizzBuzz' : fizz ? 'Fizz' : buzz ? 'Buzz' : i);
  } // end for loop
}
fizzBuzz(20);
