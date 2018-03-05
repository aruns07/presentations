//Credit - MDN

//let - scoping
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}


function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

//let - Redeclaring
if (true) {
  let foo;
  let foo; // SyntaxError thrown.
}

//let - declare before refering 
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}

//const - same as let

//What extra
//const - must initialise with a value
const a;

//const - can't reassign
const a = 1;
a = 2;

//const - global not window
var a = 1;
const b = 2;
window.a;
window.b;

//const - can't reassign, but can mutate
const list = [1,2,3];
list[0] = 10;