//Generator

function* giveIterator() {
    yield 10;
    yield 20;
    yield 30;
}
let it = giveIterator();
it.next();
it.next();
it.next();