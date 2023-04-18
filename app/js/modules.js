console.log("Modules");

//export variable
export let one = 1;

//export few variables
let two = 2;
let three = 3;

export {two, three};

//export class
export class Person {
    constructor(name) {
        this.name = name;
    }
}

//export function
export function sayHello() {
    console.log('hello!')
}

//export few 

class Person1 {
    constructor(name) {
        this.name = name;
    }
}

function sayHello1() {
    console.log('hello!')
}

export { Person1, sayHello1};

//rename while export
export {one as once, two as twice};


//Import
import {one, two} from "./file.js";

//Remane while import 
import {one as num1, two as num2} from "./file.js";

//one import for all exports in file
import * as numbers from './file.js';

//deafult export
export default class Person2 {
    constructor(name) {
        this.name = name
    }
}

//import from 'default export'
import Person2 from '.file.js'