//Object.preventExtensions

let object1 = {
    value: 42
};

Object.preventExtensions(object1);
Object.getOwnPropertyDescriptors(object1);


object1.value2 = 200;
console.log(object1);