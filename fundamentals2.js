const string = "The revolution will not be televised";
console.log(string);

const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

const name = "Davor";
const greeting = "Hello";
console.log(`${greeting}, ${name}`);


const song = "Fight the youth";
const score = 9;
const hightestScore = 10;
const output = `I like the song ${song}. I give it a score of ${(score/hightestScore)*100}%`;
console.log(output);

const newLine = `One day finally knew
what you have to do, and began,`;
console.log(newLine);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = String(myNum);
console.log(typeof myString2);  //Number() and String are constructs

//----STRING METHODS----//
//>>length method<<//

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; //returns the length of the string text and save the value in length
console.log(length);

//>>slice method<<//
let text1 = "Apple, banana, kiwi";
let part1 = text1.slice(7,13);  //slice out a portion of a string from position 7 to position 13
console.log(part1); 

let part2 = text1.slice(7); //if the second parameter is omited, the method will slice out to the rest of the string
console.log(part2);

let part3 = text1.slice(-12);   //if a parameter is negative, the position is counted from the end of the string.
console.log(part3);

let part4 = text1.slice(-12, -6); //this example slices out a portion of a string from position  -12 to position -6
console.log(part4);

//>>substring method<<//
let part5 = text1.substring(7,13);
console.log(`The substring is: ${part5}`); //substring is similar to slice, the difference is that start and end values less than 0 are treated as 0 in substring

let part6 = text1.substring(7);     //if the second parameter is omited, the method will slice out to the rest of the string
console.log(part5);

//<<substr method>>>//
let part7 = text1.substr(7,6);  //is similar to slice(), the difference is that the second parameter specifies the length of the extracted part
console.log(`substr is: ${part7}`);


//<<replace method>>//
let text2 = "Please visit Microsoft!";
//The replace() method replaces a specified value with another value in a string
//The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set.
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work
let newtext1 = text2.replace("Microsoft","W3Schools");
console.log(newtext1);


//<<replaceAll method>>//
//the replaceAll method allow us to specify a regular expression instead of a string to be replaced
//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

let text3 = "I love cats. Cats are very easy to love. Cats are very popular.";
text3 = text3.replaceAll("Cats","Dogs");
text3 = text3.replaceAll("cats","dogs");
console.log(text3);

//<<toUpperCase method>>//
let text4 = "Hello, world!";

text4 = text4.toUpperCase();    //String is converted to uppercase
console.log(text4);

//<<toLowerCase method>>//

text4 = text4.toLowerCase();
console.log(text4);     //string is converted to lowercase

//<<concat() method>>//

let text5 = "hello";
let text6 = "world";

let text7 = text5.concat(" ",  text6);     //concat() methdo can be used  instead of the plus operator
console.log(text7);

/* NOTES ABOUT STRINGS
*   All string methods return a new string. They don't modify the origal string
*   Strings are immutable: Strings cannot be changed, only replaced.
*/


//<<trim() method>>//

let myString3= "    Hello world!    ";
console.log(myString3);

myString3 = myString3.trim();      //removes whitespace from both sides of the string
console.log(myString3);

//<<trimStart() method>>//

let myString4 = "    DAVOR    ";
myString4 = myString4.trimStart();  //removes whitespace only from the start of a string
console.log(myString4);

//<<trimEnd() method>>//

myString4 = "     hola   ";
myString4 = myString4.trimEnd();    //removes whitespace only from the end of a string
console.log(myString4);


//<<padStart() method>>//
//It pads a string from the start with another string (multiple times) until it reaches a given length
myString4 = "5";
let padded = myString4.padStart(4, "0");    //pad a string with "0" until it reaches the length 4 (the length of the string including the string to be padded)
console.log(padded);

//<<padEnd() method>>//
//It pads a string from the ennd with another string (multiple times) until it reaches a given length
myString4 = "D";
padded = myString4.padEnd(4,"r");   //pad a string with "r" until it reaches the length 4 (the length of the string including the string to be padded)
console.log(padded);

//<<charAt() method>>//
myString4 = "HELLO WORLD";
let char = myString4.charAt(1);     //returns the character at a specified index (position) in a string
console.log(char);


//<<charCodeAt() method>>//
//The method returns a UTF-16 code(and integer between 0 and 65535)
char = myString4.charCodeAt(0); //returns the unicode of the character at a specified index in a string
console.log(char);  

//<<property access>>//
char =myString4[0];
console.log(char);

/*NOTE
*It makes strings look like arrays (but they are not)
*If no character is found, [] returns undefined, whiler charAt() returns an empty string
*It is read only. str[0] = "A" gives no error but does not work
*/

//<<split() method>>//
//string is converted to an array with the split method
myString4 = myString4.split("")    //split on single characters
console.log(myString4);
myString4 = "Hello world";
myString4 = myString4.split(" ") //split on single characters
console.log(myString4);

