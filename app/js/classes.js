class Task {
    //constructor
    constructor(title = Task.getDefaultTitle(), isCompleted = false) {
        this.title = title,
        this._isCompleted = isCompleted,
        Task.counter += 1
    }

    //static method
    static getDefaultTitle() {
        return "Default title";
    }

    //method
    complete() {
        this._isCompleted = true
    }

    //getter
    get isCompleted() {
        return this._isCompleted ? "Task is completed" : "Task is NOT completed"
    }
}

//initialize static property
Task.counter = 0;

//get Object
let task1 = new Task('Learn ES6', false);
console.log("task1", task1);

console.log("Check to complete\n", task1.isCompleted);
console.log("completing...");
task1.complete();
console.log("Check again\n", task1.isCompleted);

let task2 = new Task();
console.log("Create task2 with deafault params", task2);

console.log("Get static property", Task.counter);

