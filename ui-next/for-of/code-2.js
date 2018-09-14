//Why Iterable
/*
    The iterable protocol allows JavaScript objects to define 
    or customize their iteration behavior, 
    such as what values are looped over in a for..of construct. 
*/

let arr = [10,20,30];
let it = arr[Symbol.iterator]();
it.next();
it.next();
it.next();
it.next();