//Iterator Protocol
/*
    The iterator protocol defines a standard way to produce a sequence of values 
    (either finite or infinite), 
    and potentially a return value when all values have been generated.

    An object is an iterator when it implements a next()
*/

//Protocol example
var iterator = {
                next: function() {
                    if (self.index > self.list.length) { 
                            return {done:true, value: undefined}
                    } else {
                            return {done:false, value:self.list[self.index++]};
                    }
                },
                return: function() { 
                    return {done:true, value:undefined}
                }
            };

//Here obj is iterable where [Symbol.iterator] returns an iterator
var obj = {
    index: 0,
    list: [10,20,30],
        [Symbol.iterator]: function() { 
        let self = this; 
        return {
            next: function() {
                if (self.index > self.list.length) { 
                        return {done:true, value: undefined}
                } else {
                        return {done:false, value:self.list[self.index++]};
                }
            },
            return: function() { 
                return {done:true, value:undefined}
            }
        }
    }
}
