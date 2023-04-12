console.log("Set And Map");

console.log("");
console.log("EXAMPLE1 - Map");

let map = new Map(); //create map

//set key-value pairs
map
    .set('str', 'string')
    .set(1, 'number')
    .set(true, 'boolean');

//get values
console.log(map.get(1));
console.log(map.get(true));
//get size
console.log(map.size);


console.log("");
console.log("EXAMPLE2 - create map without 'set'-method");

let map1 = new Map([
    ['str', 'string'],
    [1, 'number'],
    [true, 'boolean']
]);

//get values
console.log(map1.get(1));
console.log(map1.get(true));
//get size
console.log(map1.size);
//check if there is element with certain key
console.log(map1.has(1));
//delete value by certain key
console.log(map1.delete('str'));
console.log(map1.size);
//delete all elements
console.log(map1.clear());
console.log(map1.size);
//Methods
// keys() - get iterator of keys
// values() - get iterator of values
// entries() - get iterator of pairs key-value

console.log("");
console.log("EXAMPLE3 - Set"); 

//create objects
let jack = {name: 'Jack'};
let max = {name: 'Max'};
let leo = {name: 'Leo'};


//create Set
let users = new Set();

//add objects into
users
    .add(jack)
    .add(max)
    .add(leo)
    .add(max) //try to add twice 
    .add(jack)

console.log(users.size); //size = 3, because Set contains only unique value
users.forEach(user => console.log(user));

//Methods
//add() - add element to collection
//delete(item) - delete element from collection
// has(ietm) - return 'true' if collection have certain element otherwise 'false'
// clear() - delete all elements from collection

