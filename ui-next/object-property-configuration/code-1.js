let obj = {};
Object.defineProperty(
    obj, 
    'property1', 
    { 
        value: 100, 
        configurable: true, 
        writable: true, 
        enumerable: true
    });

//Data descriptor
Object.defineProperty(
    obj, 
    'property1', 
    {
        value: 100,
        writable: true
    });

//Accessor descriptor
Object.defineProperty(
    obj, 
    'property1', 
    {
        get: function() {
            return 100 * 2;
        },
        set: function(value) {
            console.log('setting', value);
        }
    });

//Miscellaneous
let obj = {
    get name() {
        return 'abc';
    },
    set name(value) {
        console.log('setting', value);
    }
}

