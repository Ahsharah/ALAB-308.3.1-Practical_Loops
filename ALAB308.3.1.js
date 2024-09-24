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

