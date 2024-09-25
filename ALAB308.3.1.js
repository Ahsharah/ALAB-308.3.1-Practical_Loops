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
    console.log(`The next prime number is: ${n}`); 
    break;
  }
  n++;
}

// Part 3

function processCSV(csvString) {
  let cell = '';
  let row = ['', '', '', ''];
  let cellIndex = 0;
  let inQuotes = false;

  for (let i = 0; i < csvString.length; i++) {
    const char = csvString[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      row[cellIndex] = cell.trim();
      cell = '';
      cellIndex++;
    } else if (char === '\n' || (char === '\r' && csvString[i + 1] === '\n')) {
      row[cellIndex] = cell.trim();
      console.log(row[0], row[1], row[2], row[3]);
      cell = '';
      row = ['', '', '', ''];
      cellIndex = 0;
      if (char === '\r') i++; // Skip the next \n
    } else {
      cell += char;
    }
  }

  // Handle the last row if it doesn't end with a newline
  if (cell !== '' || row.some(c => c !== '')) {
    row[cellIndex] = cell.trim();
    console.log(row[0], row[1], row[2], row[3]);
  }
}

// Test withn the provided CSV strings
const csvString1 = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26';
const csvString2 = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232';

console.log("Processing first CSV string:");
processCSV(csvString1);

console.log("\nProcessing second CSV string:");
processCSV(csvString2);