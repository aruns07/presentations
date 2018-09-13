//Object.seal

let object1 = {
    value: 42
};
Object.getOwnPropertyDescriptors(object1);
Object.isExtensible(object1);

Object.seal(object1);
Object.getOwnPropertyDescriptors(object1);
Object.isExtensible(object1);

writable: true/false
configurable:false
enumerable: true/false
noextension