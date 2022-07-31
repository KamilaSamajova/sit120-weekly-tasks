const today = new Date();
console.log(today.toString());

const date = new Date(2020, 8, 17, 10, 50, 22, 15);
console.log(date.toString());

const stringDate = new Date("November 23, 2022 15:40:23");
console.log(stringDate.toString());

console.log(today.toUTCString());
console.log(date.toISOString());

console.log(Date.parse("March 21, 2012"));      // returns the number of miliseconds between the date and January 1, 1970

console.log(date.getFullYear());                // returns the year
console.log(date.getDay());                     // returns number of a weekday

console.log(today.setDate(1));                  // sets the day of the date
console.log(today.toString());

console.log(date.setSeconds(34));               // sets the seconds of the date
console.log(date.toString());