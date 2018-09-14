//A use case

let arr = [10,20,30]
{...arr};

let obj = {a:10, b:20, c:30}
[...obj];

//Making an object iterable allows to spread it in an array
var obj = {
    a:1,
    b:2,
    [Symbol.iterator]: function* () {
        let values = Object.values(this);
        for(let value of values) {
          yield value;
        }
    }
}
[...obj];
