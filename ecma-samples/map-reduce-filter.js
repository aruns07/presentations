//Map
[1,2,3,4].map((ele)=>{ return ele % 2 === 0;})

//Map - size
var input = [1,2,3,4];
var result = input.map((value, index) => { return input.pop(); });

//Map - modifed value
var input = [1,2,3,4];
var result = input.map((value, index) => { 
    if (index === 0) { 
        input[1] = 9;
        input[2] = 99;
        input[3] = 999;
    } 
    return value;
});

//Filter
[1,2,3,4,5,6].filter((ele)=>{ return ele % 2 === 0;})


//Reduce
[1,2,3,4].reduce((acc,ele)=>{ 
    return acc + ele; 
});

//Reduce - accu not just a number
[1,2,3,4].reduce((acc,ele)=>{ 
    if (ele % 2 === 0) { 
        acc.push(ele)
    }; 
    return acc; 
}, []);


