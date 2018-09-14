//Well-known symbols

/*
    The Symbol class has some static properties that have the ironic effect of naming the anonymous.
    There are only a few of these; 
    they are for some so-called ""well known"" symbols.
    These are symbols for some selected method properties that are found in certain built-in objects. 
    The exposure of these symbols makes it possible to have direct access to these behaviors; 
    such access might be useful, for example, in the definition of a custom class. 
    Examples of well-known symbols are: ""Symbol.iterator"" for array-like objects, and ""Symbol.search"" for string objects. 

*/

Object.getOwnPropertyDescriptors(Symbol)
