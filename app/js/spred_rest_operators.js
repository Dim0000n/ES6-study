console.log("SPREAD and REST operators");

/*
 SPREAD
*/

//EXAMPLE1

//ES5
const num1_5 = [1, 2, 3, 4];
const num2_5 = [5, 6, 7, 8];

//concatenate
Array.prototype.push.apply(num1_5, num2_5);
console.log("Concatenate ES5", num1_5);

//ES6
const num1_6 = [1, 2, 3, 4];
const num2_6 = [5, 6, 7, 8];

console.log("Spread ES6", [...num1_6, ...num2_6]);

//EXAMPLE2

//ES5
const A_5 = {
    a: "default",
    b: "just_test"
};
const B_5 = {
    a: 'value_from_b'
};

var C_5 = Object.assign(A_5, B_5);

console.log("ES5 object assign", C_5);

//ES6
const A_6 = {
    a: "default",
    b: "just_test"
};
const B_6 = {
    a: 'value_from_b'
};

var C_6 = {
    ...A_6,
    ...B_6
};

console.log("ES6 spread objects", C_6);


//EXAMPLE3 - function

//function
function sum(a, b, c) {
    return a + b + c
}

//ES5
const arr_5 = [1, 2, 3];
var sum_5 = sum.apply(null, arr_5)

console.log("ES5 function.apply", sum_5);

//ES6
const arr_6 = [1, 2, 3];
var sum_6 = sum(...arr_6);

console.log("ES6 spread", sum_6);



//REST operator

function res(arg1, arg2, ...rest) {
    console.log(arg1, arg2, rest)
}

res(1, 2, 3, 4, 5, 6, 7, 8);
