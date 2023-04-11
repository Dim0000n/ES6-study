console.log("Iterators");

console.log("");
console.log("EXAMPLE1 - array");

let names = ['jack', 'max', 'leo'];

for (let name of names) {
    console.log(name);
}

console.log("");
console.log("EXAMPLE2 - custom iterator");


//init object
let generateNumbers = {
    start: 1,
    end: 10
}

//create iterator via Symbol
generateNumbers[Symbol.iterator] = function() {
    let current = this.start;
    let last = this.end;

    return {
        //iterator must have the method "next"
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++  
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

for (let number of generateNumbers) {
    console.log(number);
}