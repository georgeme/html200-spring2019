
// Declare the variables
let greeting = ['hello', 'bonjour', 'hallo', 'hola', 'hej', 'ciao'];
// Add an item to the end and console log the result
greeting.push('salve');
console.log(greeting);
// Expected Result: ["hello", "bonjour", "hallo", "hola", "hej", "ciao", "salve"] - original 6 items plus "salve" at the end

// Remove the third item in the list and console log the result
greeting.splice(2, 1);
console.log(greeting);
// Expected Results ["hello", "bonjour", "hola", "hej", "ciao", "salve"] - removed the third item in the list which was "hallo"

// Create a single, comma-separated list and console log the result
const greetingList = greeting.join(',');
console.log(greetingList);
// Expected Result: "hello,bonjour,hola,hej,ciao,salve" - which is a comma-separated string of the list with the item added at the end and the third item removed


