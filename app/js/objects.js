//Objects
console.log("Objects");


//create objects
console.log(`Create object


            `);

//ES5
console.log("ES6")
let name_5 = 'Jack_5';
let sex_5 = "male_5";
let age_5 = 5;

var person_5 = {
    name_5: name_5,
    sex_5: sex_5,
    age_5: age_5 
};
console.log(person_5);

console.log("");

//ES6
console.log("ES6")

let name_6 = 'Jack_6';
let sex_6 = 'male_6';
let age_6 = 6;

let person_6 = {
    name_6,
    sex_6,
    age_6,
    get password () {
        return this.name_6 + this.age_6
    }
}

console.log(person_6);

//methods
console.log(`Methods


            `);


let person_func = {
    greet() {  //greet: function() {...} in ES5
        console.log("Hello from ES6!");
    }
}

person_func.greet();

//dynamic properties
let prop = "one"

let dynamic_obj = {
    [prop]: "Prop"
}

console.log(dynamic_obj);



//getters and setters
console.log(`getters and setters


            `);


//ES5

console.log("ES5");
Object.defineProperty(person_5, 'password', {
    get: function() {
        return this.name_5 + this.age_5 
    }
});

console.log(person_5.password);

//ES6
//look at line 37
console.log("ES6")
console.log(person_6.password);