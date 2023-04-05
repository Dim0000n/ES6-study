console.log("Object Destructing");

console.log('');

console.log("EXAPLE1");

let person = {          //create object
    name: 'Jack',
    age: 20
}

let {name, age} = person; //get props by destruction
console.log(name, age);

console.log("");
console.log("EXAMPLE2 - default values");

let {nameDef = "Max", ageDef=10} = {}
console.log(nameDef, ageDef);

console.log("");
console.log("EXAMPLE3 - rename variables");

let {name: personName, age: personAge} = person;
console.log(personName, personAge);

console.log("")
console.log("EXAMPLE4 - inserted object");

let personIns = {          //create object
    name: 'Jack',
    age: 20,
    address: {
        city: "Minsk"
    }
}

let {address: {city}} = personIns;
console.log(city);

console.log("");
console.log("EXAMPLE5 - parameters of function");

function getData({name, age}) { //destructing parameters
    console.log(name, age);
}

getData(person);