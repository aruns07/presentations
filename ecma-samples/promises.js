/*
 * Promises - 1
 */
ajax('', function(response_1) {
    ajax('' + response_1, function(response_2) {
        ajax('' + response_2, function(response_3) {
            //Final code
        })  
    })
})

/*
 * Promises - 2
 */
ajax('')
.then(function(response_1) {
    return ajax('' + response_1);
})
.then(function(response_2) {
    return ajax('' + response_2);
})
.then(function(response_2) {
    //Final code
})

/*
 * Promises - 3
 */
function newSetTimeout(time) {
    return new Promise(function(res, rej) {
        window.setTimeout(res, time);
    })
}

newSetTimeout(1000)
.then(function() { 
    console.log('First timeout')
})

/*
 * Promises - 4
 */
newSetTimeout(1000)
.then(function() { 
    console.log('First timeout');
    return newSetTimeout(1000);
})
.then(function() { 
    console.log('Second timeout');
    return newSetTimeout(1000);
})
.then(function() { 
    console.log('Third timeout');
})

/*
 * Promises - 5
 */
.then(function() { 
    throw "Error in promise"
})
.catch(function(err) {
    console.log(err);
})

Promise.all([newSetTimeout(1000), newSetTimeout(2000)])
.then(function(...rest){ console.log(rest)})

Promise.race([newSetTimeout(1000), newSetTimeout(2000)])
.then(function(...rest){ console.log(rest)})