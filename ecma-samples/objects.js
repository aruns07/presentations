/*
 * Object
 */
//Simplest way of creating an object
//Not having any member variable or functions
var person = {};

//Explain context

function greeting() {
    console.log('Hello', this.firstName);
}
window.greeting //function
window.firstName //undefined
//In above two lines of code, greeting function is in windows context
//when called 'this' is refering to window context, where firstName is not present

window.firstName = "Rohan";
window.greeting()

// bluePrint to create multiple objects
function createPerson(name) {
    var person = {};
    person.name = name
    person.greeting = function() {
        console.log('Hello ' + this.name);
    }
    return person;
}


/*
 * Constructor Function 
 */
function Person(name) {
    this.name = name;
    this.greeting = function() {
        console.log('Hello ' + this.name);
    }
}



/*
 * Methods has different copy
 */
var p1 = new Person('P1')
var p2 = new Person('P2')



/*
 * Prototype
 */ 
function Person(name) {
    this.name = name;
}

Person.prototype.greeting = function() {
    console.log('Hello ' + this.name);
}

var p1 = new Person('P1');

dir(p1);


/*
 * Inheritance
 */
function Sphere() {
    this.radius = 10;
}
Sphere.prototype.getVolume = function() {
    var volume = (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    console.log(volume);
}

function Ball() {
    Sphere.call(this);//call Sphere function on current context.
    this.material = "plastic";
}

var b1 = new Ball();

dir(b1);//We can find radius, and material, but not getVolume



/*
 * Inheritance - II
 */
function Sphere() {
    this.radius = 10;
}
Sphere.prototype.getVolume = function() {
    var volume = (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    console.log(volume);
}

function Ball() {
    Sphere.call(this);
    this.material = "plastic";
}
Ball.prototype = Object.create(Sphere.prototype);
Ball.prototype.constructor = Ball;


/*
 * Class
 */
class Sphere {
    constructor() {
        this.radius = 10;
    }

    getVolume() {
        var volume = (4 / 3) * Math.PI * Math.pow(this.radius, 3);
        console.log(volume);
    }
}

class Ball extends Sphere {
    constructor() {
        super();
        this.material = "plastic";
    }
}
