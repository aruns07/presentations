//Credit - MDN

//Spread - 
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 

//Spread - copy
var arr = [1, 2, 3];
var arr2 = [...arr];

//Spread - copy is shallow
var a = [[1], [2], [3]];
var b = [...a];
a
b
a[0][0] = 10;
a
b

//Spread - object literal
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };

var mergedObj = { ...obj1, ...obj2 };

//Spread - 
var array = [...obj1];