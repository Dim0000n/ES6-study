//Cycle for...of
console.log("Cycle for...of");

//ES5
console.log("ES5");

let arr_5 = ["One", "Two", "Three"];

for (let index in arr_5) {
    let value = arr_5[index]; //Cycle for..in gives us indexes rather than values
    console.log(value);
}

//ES6

console.log("ES6");
let arr_6 = ["Four", "Five", "Six"];

for (let value of arr_6) {
    //cycle for...of gives us values
    console.log(value);  
}