//For-in over object created using constructor

function Person() {
    this.name='ABC';
}

Person.prototype.greeting = function(){ console.log(this.name)}

let p = new Person();

for (let a in p ) {
  console.log(a)
}