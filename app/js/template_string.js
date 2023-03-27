console.log("Template String");

//Example1 - string

function greet(name) {
    //console.log('Hello ' + name + "!"); //ES5
    console.log(`Hello ${name}!`); //ES6
}

greet('Dimon');

//Example2 - URL API string

const URL = '/api';
let path1 = 'test1';
let path2 = 'test2';
let path3 = 'test3';

const API_URL = `${URL}/${path1}/${path2}/${path3}`;
console.log("URL via template string", API_URL);


//EXAMPLE 3 - multiple string
function emailMessage(name, mail, status) {
    return `
        Hello ${name},
        Your email ${mail} has been ${status}!
        Thank you for subscription!
    `
}

console.log(emailMessage('Dimon', 'dimon@mail.com', 'approved'));

//EXAMPLE 4 - tagging

const name = 'Jack';
console.log(toUppercase`Hello ${name}!`);

function toUppercase(litArr, value) {
    //litArr - array of words and punctuation without target word
    // value - target
    console.log('arguments', litArr, value);
    return litArr[0] + value.toUpperCase() + litArr[1];
}