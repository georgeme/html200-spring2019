
// code for adding an item to the end of the array
let greeting = ['hello', 'bonjour', 'hallo', 'hola', 'hej', 'ciao'];

greeting.push('salve');

console.log(greeting);
// end code
// EXPECTED RESULT:
// ["hello", "bonjour", "hallo", "hola", "hej", "ciao", "salve"] - added 'salve' at the end which is Latin for 'hello'



// code for removing the third item
let greeting = ['hello', 'bonjour', 'hallo', 'hola', 'hej', 'ciao'];

greeting.splice(2, 1);

console.log(greeting);
// end code
// EXPECTED RESULT:
// ["hello", "bonjour", "hola", "hej", "ciao"] - removed 'hallo' which is the third item in the list of greetings


// code for creating a single string with comma separated values
let greeting = ['hello', 'bonjour', 'hallo', 'hola', 'hej', 'ciao'];

const greetingList=greeting.join(',');

console.log(greetingList);
// end code
// EXPECTED RESULT:
// "hello,bonjour,hallo,hola,hej,ciao" - created as one string with comma separated values



// code for doing ALL tasks in one result
let greeting = ['hello', 'bonjour', 'hallo', 'hola', 'hej', 'ciao'];

greeting.push('salve');

greeting.splice(2, 1);

const greetingList=greeting.join(',');

console.log(greetingList);
// end code
// EXPECTED RESULT: 
// "hello,bonjour,hola,hej,ciao,salve" - added 'salve' to the end of the strings of greetings, removed 'hallo' as the third item in the list, wrote them all as one comma separated string

