//Arrow functions
console.log("Arrow Functions")
//Context

//ES5
let person_5 = {
    userName: 'Jack',
    greet: function() {
        var _this = this; //lock context otherwise next line return 'undefined' as userName
        window.setTimeout(function() {
            console.log(this.userName, this);
        }, 1000)
    }
}