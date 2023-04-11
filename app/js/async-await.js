
console.log("Async Await");

console.log("");


const fetchData = () => Promise.resolve({   //create promise
    data: ['Jack', 'Max', 'Leo']
});

//get data through promise
const getNamesData = () => {
    fetchData()
        .then(data => {
            console.log(data);
            return 'done';
        })
}


//get data through async/await

const getNamesData2 = async () => {
    console.log(await fetchData());
    return 'done';
}

getNamesData();
getNamesData2();


//EXAMPLE3 - try catch

const fetchTryCatch = () => Promise.reject('Try Catch error...'); //create promise with error

const tryCatchExample = async () => {
    try {
        console.log(await fetchTryCatch());
    } catch(error) {
        console.log(error)
    }
}

tryCatchExample();

//EXAMPLE4

//promise
const load = () => {
    Promise.resolve(5)
        .then(a => {
            Promise.resolve(10)
                .then(b => console.log(a + b))
        })
}

load();

//async-await
const load2 = async () => {
    const a = await Promise.resolve(5);
    const b = await Promise.resolve(10);
    console.log(a + b)
}

load2();