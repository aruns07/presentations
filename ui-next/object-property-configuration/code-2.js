//Object.freeze

let object1 = {
    value: 42
};

Object.getOwnPropertyDescriptors(object1);
Object.isExtensible(object1)

Object.freeze(object1);
Object.getOwnPropertyDescriptors(object1);
Object.isExtensible(object1)

writable:false
configurable:false
enumerable: true/false
noextension