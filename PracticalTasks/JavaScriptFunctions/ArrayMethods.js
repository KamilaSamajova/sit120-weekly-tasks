const numberArray = [10, 0, 1.3, -20.7, 55, 6.457];
const stringArray = ["Melbourne", "Sydney", "Brisbane", "Canberra", "Perth"];

console.log(stringArray.toString());
console.log(numberArray.join(" #"));        // returns the number array joined with #
console.log(stringArray.pop());             // popped string
console.log(stringArray);                   // string array without the last element
console.log(numberArray.push(-99));         // returns the length of the new array
console.log(numberArray);                   // number array with a new number
console.log(numberArray.shift());           // shifted number
console.log(numberArray);                   // shifted number array without the first element
console.log(stringArray.unshift("Perth"));  // inserts an element at the beginning of an array and returns the length of the new array
console.log(stringArray);                   // unshifted array
console.log(numberArray.length);            // return array length
console.log(numberArray.concat([1, 2, 3])); // merges 2 arrays and returns a new merged array
console.log(numberArray.splice(1, 3));      // removes elements from the middle of the array and returns them
console.log(numberArray);                   // array without the removed elements
console.log(stringArray.sort());            // sorts the array alphabetically
console.log(stringArray.reverse());         // reverses the array
console.log(Math.max.apply(null, numberArray)); // returns the maximum value
console.log(numberArray.map(x => x*2));     // returns an array with each element multiplied by 2
