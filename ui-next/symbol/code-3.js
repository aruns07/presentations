//UseCase
//When we don't want name clash

//create a formal Object
var formalFactory = (function() {
    const greetingMethod = Symbol('CasualGreeting');

    const formal = function(name) {
        return {
            name,
            [greetingMethod]() { return `Hello ${this.name}` }
        };
    }

    formal.greetingMethod = greetingMethod;

    return formal;

})()


//create a casual object
var casualFactory = (function() {
    const greetingMethod = Symbol('CasualGreeting');

    const casual = function(name) {
        return {
                name,
                [greetingMethod]() { return `Hi ${this.name}` }
        }
    }

    casual.greetingMethod = greetingMethod;

    return casual;
})()

var c1 = casualFactory('casual')
var f1 = formalFactory('formal')

var composed = Object.assign({}, c1, f1)
composed.name = 'composed'


composed[casualFactory.greetingMethod]()
composed[formalFactory.greetingMethod]()
