console.log("Promise");

console.log("");
console.log("EXAMPLE1 -  create promise");

const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('promise completed!');  //function for success
    } else {
        reject();   //function for error
    }
});

promise
    .then(data => console.log(data)) //if success
    .catch(() => console.log('error')) //if error


console.log("");
console.log("EXMPLE2 - trow");
const promiseTrow = new Promise((resolve, reject) => {
    throw new Error('some error...');
    //if there is a throw code below won't be completed
    if(true) {
        resolve('promise completed!');
    } else {
        reject();
    }
});

promise
    .then(data => console.log(data))
    .catch(error => console.log(error)); //promise will return error because of throw


console.log("");
console.log("EXAMPLE3 - http request");
    
fetch('https://jsonplaceholder.typicode.com/posts/') //send http request that will return promise
    .then(res => res.json()) //convert data to json
    .then(data => console.log('!!!', data)) //print data in console
    .catch(() => console.log('some error...'));