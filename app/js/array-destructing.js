console.log("Array destructing");

let people = ['Jack', 'Max', 'Leo'];

//ES5
let jack_5 = people[0];
let max_5 = people[1];
let leo_5 = people[1];

console.log(jack_5, max_5, leo_5);

//ES6 - array destructing
let [jack_6, max_6, leo_6] = people;

console.log(jack_6, max_6, leo_6);


//EXAMPLE 2 - deafult value
console.log("EXAMPLE 3 - default value")
const rate = [1, 50, 100];

//variables are fewer than elements
let [low1, middle1] = rate;

console.log('variables are fewer than elements', low1, middle1);

//variables are more than elements

let [low2, middle2, high2, higher2] = rate;
console.log("variables are more than elements", low2, middle2, high2, higher2);


//more but default value
let [low3, middle3, high3, higher3 = 1000] = rate;
console.log("more but default value", low3, middle3, high3, higher3);

//EXAMPLE4 multidimensional array
const rate2 = [1, 50, 100, [1000, 2000]];
let [low4, middle4, high4, [higher4, highest]] = rate2;
console.log("EXAMPLE4 multidimensional array", low4, middle4, high4, higher4, highest);

//EXAMPLE 5 -function

function calculate([a, b]) { //destructing input values
    return [a, b]   //destructing return
}

let [a, b] = calculate([1, 10]); //destructing output value

console.log("EXAMPLE 5 - function", a, b);
