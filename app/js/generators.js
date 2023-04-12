console.log("Generators")

console.log("");
console.log("EXAMPLE1 - create generator");

function *generate() {
    console.log("first step");
    yield;
    console.log("second step");
}

let iterator = generate();
iterator.next();
iterator.next();


console.log("");
console.log("EXAMPLE2 - get value");

function *generate1() {
    console.log("first step");
    yield 1;
    yield 2;
    console.log("second step");
}

let iterator1 = generate1();
console.log(iterator1.next());
console.log(iterator1.next().value);

console.log("");
console.log("EXAMPLE3 - manipulation with value")

function *generate2() {
    console.log("start iterator");
    let res = (yield) *2;
    console.log("Result:", res);
}

let iterator2 = generate2();

console.log(iterator2.next()); //start iterator
console.log(iterator2.next(2));

console.log("");
console.log("EXAMPLE4 - return and throw");

function *generate3() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch(err) {  //catch the error
        console.log("Custom error:", err)
    }
}

let iterator3 = generate3();

console.log(iterator3.next());
console.log(iterator3.return()); //set done to true and value to "undefined"
//console.log(iterator3.throw(new Error('some error...'))); //throw the error

console.log("");
console.log("EXAMPLE4 - Range of numbers");

function *generateRange(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}

for (let number of generateRange(1, 10)) {
    console.log(number);
}

console.log("");
console.log("EXAMPLE5 - generator as method of object");

let object = {
    *generateRange(start, end) {
        let current = start;
        while (current <= end) {
            yield current ++
        }
    }
}

for (let number of object.generateRange(1, 3)) {
    console.log(number);
}