

const Benchmark = require('benchmark');



///////////////////////////////////////////////////////////////////////////////////////
// For the linear search tests.
// const { linearSearch, binarySearch } = require( './search' );


// // Setup the array of data so we can utilize the search algorithms
// const numbers = [];
// for (let i = 1; i <= 2000000; i++) {
//   // Populate the array with values 1 to 1,000,000
//   numbers.push(i);
// }

// // Set the last number in the array as the number we want to find
// const target = numbers[numbers.length-1] / 2;


// const suite = new Benchmark.Suite;

// suite
//   .add('Linear search', function() {
//     // Benchmark based on a liner search
//     linearSearch(numbers, target);;
//   })
//   .add('Binary search', function() {
//     // Benchmark based on a binary search
//     binarySearch(numbers, target, 0, numbers.length-1)
//   })
//   .on('complete', function() {
//     // Loop over and print each result
//     this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
//   })
//   .run();


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// For the sorting tests
const { bubbleSort } = require('./sort');

const numbers = [];
for (let i = 0; i < 20000; i++) {
  numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite;

suite
  .add('Bubble sort', function() {
    const testArray = [...numbers];
    bubbleSort(testArray);
  })
  .on('complete', function() {
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
  })
  .run();