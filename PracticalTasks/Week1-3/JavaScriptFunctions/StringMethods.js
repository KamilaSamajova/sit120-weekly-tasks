let text = "Europe America Australia Africa Asia";

console.log(text.length);                           // returns the text length
console.log(text.slice(7, 14));                     // returns the slice from 8th to 14th character
console.log(text.slice(-5));                        // returns the last 5 chars
console.log(text.substring(-2, 20));                // returns the substring from 1st to 20th character
console.log(text.substr(14, 5));                    // returns 5 characters starting with the 15th character
console.log(text.replace("Africa", "Antarctica"));  // replaces Antarctica in the place of the word Africa
console.log(text);
console.log(text.toLowerCase());                    // returns the text all in lower case
console.log(text.concat(" + ", "world"));           // returns a concatenated string 
console.log(text.padStart(40, "-"));                // pads the first characters with the padding character until reaching the total length together with text
console.log(text.charAt(20));                       // returns char at 21st position

console.log(text.indexOf("Africa"));                // returns position of the 1st character of a given word
console.log(text.search("Australia"));              // returns position of the 1st character of the searched word
console.log(text.search("Antarctica"));             // returns -1 if the word is not in the text
console.log(text.match(a/gi));                      // returns substring according to the regex
console.log(text.includes("Asia", 20));             // returns true if Asia is included in the first 20 characters