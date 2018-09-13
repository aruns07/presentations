//For-in over object created using class

class Person {
    constructor() {
        this.name = 'ABC';
    }
    greeting() {
        console.log(this.name);
    }
}

let person = new Person();

for (let a in person ) {
    console.log(a)
}

/// Question : Why different
person.propertyIsEnumerable('greeting')