function Person(nme) {
    this.name = 'John',
    this.greeting = function() {
        console.log('Hello', this.name);
    }
}
var p1 = new Person();
p1.greeting();//Hello John
p1.greeting.call({name: 'Rohan'}); //Hello Rohan

//Arrow function - this
function Person() {
    this.name = 'John',
    this.greeting = () => {
        console.log('Hello', this.name);
    }
}
var p1 = new Person();
p1.greeting();//Hello John
p1.greeting.call({name: 'Rohan'});//Hello John
//greeting function is still refering to parents context, even we gave new context to call method

// enclosing execution context
function Person() {
    this.name = 'John',
    this.greeting = function() {
        var fn = () => {console.log('Hello', this.name);}
        fn();
    }
}
var p1 = new Person();
p1.greeting();//Hello John
p1.greeting.call({name: 'Rohan'});//Hello Rohan
//greeting function is refering to parent's context, which we have changed using call method.

//Arrow Function - object literal
var person = {
    name: 'John',
    greeting: () => {
        console.log('Hello', this.name);
    }
}

///Can't user as constructor
var Person = (name) => {
    this.name = name;
    this.greeting = () => { console.log(this.name);}
}

///No arguments
var testArguments = () => {console.log(arguments)}

///No prototype
testArguments.prototype

//
var square = x => x * x; 
var add = (x, y) => { return x + y; };