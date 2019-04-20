
// code for adding an item to the end of the array
let greeting = ["hello", "bonjour", "hallo", "hola", "hej", "ciao"];

greeting.push("salve");

console.log(greeting);
// end code


// code for removing the third item
let greeting = ["hello", "bonjour", "hallo", "hola", "hej", "ciao"];

greeting.splice(2, 1);

console.log(greeting);
// end code


// code for creating a single string with comma separated values
let greeting = ["hello", "bonjour", "hallo", "hola", "hej", "ciao"];

const greetingList=greeting.join(',');

console.log(greetingList);
// end code


// code for doing ALL tasks in one result
let greeting = ["hello", "bonjour", "hallo", "hola", "hej", "ciao"];

greeting.push("salve");

greeting.splice(2, 1);

const greetingList=greeting.join(',');

console.log(greetingList);
// end code