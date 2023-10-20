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
