class Task {
    //constructor
    constructor(title = '') {
        this.title = title,
        this.isCompleted = false
    }

    //method
    complete() {
        this.isCompleted = true;
    }
}

class SubTask extends Task {
    constructor(title) {
        //parent's constructor
        super(title)
    }

    //redefine method
    complete() {
        super.complete();
        console.log(`Task ${this.title} is completed!`)
    }
}

//create instances 
let task = new Task('Learn Vue.js');
let subTask = new SubTask('Learn ES6');

console.log('task', task);
console.log('subTask', subTask);

//complete subTask
subTask.complete();