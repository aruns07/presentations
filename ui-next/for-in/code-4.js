//Can we make a property non-enumerable

function Person() {
    this.name = 'ABC';
}

Object.defineProperty(Person.prototype, 'greeting', {
    value: function() {
        console.log(this.name);
    },
    configurable: true,
    writable: false,
    enumerable: false
});