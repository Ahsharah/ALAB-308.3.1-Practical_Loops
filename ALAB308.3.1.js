// const names=['john', 'ada', 'james', 'henry'];

// console.log(names[0]);// john
// console.log(names[1])// ada
// console.log(names[2])// james
// console.log(names[3])// henry
// // console.log(names[10000])// henry
// for(count=0; count<4;count++){
//     console.log(count)
//     // console.log(names[count]);
// }

// 9/3
// Part 1
const numbers = [];
for (count = 0; count <= 100; count++) {
  numbers.push(count);
}
console.log(numbers);

for (i = 0; i <= 100; i++) {
  if (numbers[i] % 3) {
    console.log('Fizz');
  }

  if (numbers[i] % 5) {
    console.log('Buzz');
  }

  if (numbers[i] % 3 && numbers[i] % 5) {
    console.log('Fizz Buzz');
  }
  if (numbers[i] % 3!==0 && numbers[i] % 5!==0) {
    console.log(numbers[i]);
  }
  //   else {
  //     console.log(numbers[i]);
  //   }
}
// console.log(9%2)

// i am coming  
// coming i am

// Part 2 

// Step 1: Declare an arbitrary number n
let n = 10;

// Step 2: Define a function to check if a number is prime
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Step 3: Create aloop to find the next prime number
while (true) {
  if (isPrime(n)) {
    console.log('The next prime number is: ${n}');
    break;
  }
  n++;
}