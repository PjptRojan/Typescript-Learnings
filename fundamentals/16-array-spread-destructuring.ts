const numbers = [1, 2, 3, 4];

const moreNumbers = [...numbers, 5, 6] // the array spread operator also makes a shallow copy of the array. primitive values like numbers, strings or booleans are copied acros, but objects and arrays are going to be shallow copied.

console.log(moreNumbers)

//array destructuring:

const [first, second, third] = moreNumbers

console.log(first, second, third);
