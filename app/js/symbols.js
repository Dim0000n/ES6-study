console.log("Symbols");

console.log("");
console.log("EXAMPLE1 - Symbol()");

let symbol = Symbol("mySymbol");
let symbol1 = Symbol("mySymbol");
console.log("symbol", symbol);
console.log("symbol1", symbol1);
//false - because they are unique 
console.log("symbol === symbol1", symbol == symbol1); 

console.log("");
console.log("Example2 -Symbol.for()");
//Symbol.for() - looking for name of symbol and give a link if there is one.
let symbol3 = Symbol.for("mySymbol");
let symbol2 = Symbol.for("mySymbol");

console.log("symbol3", symbol3);
console.log("symbol2", symbol2);

//true //wherein symbol3 != symbol
console.log("symbol3 === symbol2", symbol3 === symbol2);

console.log("");
console.log("EXAMPLE3 - Symbol.keyFor");

//it works only with symbols, which were created with Symbol.for()  
let symbolName = Symbol.keyFor(symbol2); //get name of symbol
console.log(symbolName);

console.log("");
console.log("EXAMPLE4 - Objects");

let person = {
    name: 'Jack',
    age: 20,
    [Symbol.for('password')]: 'Jack20',
    [Symbol.for('nickname')]: 'Freeman'
}

console.log('person', person);
console.log('get symbols from object', Object.getOwnPropertySymbols(person));
console.log(person[Symbol.for('password')])