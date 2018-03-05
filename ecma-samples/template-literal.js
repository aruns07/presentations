//Credit - MDN

/*
 * Multi line
 */
console.log('string text line 1\n' +
'string text line 2');

console.log(`string text line 1
string text line 2`);

/*
 * Expression interpolation
 */
var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

/*
 * Tagged Template
 */
function preProcess(...rest) {
    console.log(rest)
}
preProcess`Fifteen is ${a + b} and \n not ${2 * a + b}.`

function formatNumbers(strings, number1, number2) {
    return strings[0] + number1.toFixed(2) + strings[1] + number2.toFixed(2) + strings[2];
}