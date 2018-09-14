//Const vs Symbol

//const allows to have a unique variable name, but not the value.
const FRUIT_ORANGE = 'ORANGE';
const FRUIT_LIKE_ORANGE = 'ORANGE';

function mocktail(input) {
    if (input === FRUIT_ORANGE ) {
        console.log('ADDED ORANGE')
    } else {
        console.log('Fruit in the list');
    }
}

mocktail(FRUIT_ORANGE)
mocktail(FRUIT_LIKE_ORANGE)


//symbol makes the value unique 
const FRUIT_ORANGE = Symbol();
const FRUIT_LIKE_ORANGE = Symbol();

function mocktail(input) {
    if (input === FRUIT_ORANGE ) {
        console.log('ADDED ORANGE')
    } else {
        console.log('Fruit in the list');
    }
}

mocktail(FRUIT_ORANGE)
mocktail(FRUIT_LIKE_ORANGE)