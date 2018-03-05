
/*
 * Call
 */
function length() {
    if (this.constructor.name === 'Array') {
        return this.length;
    } else if (this.constructor.name === 'Object') {
        return Object.keys(this).length;
    }
}
length.call({'a':1})
length.call({'a':1, 'b':2})
length.call([10,20,30])

/*
 * Call vs Apply
 */
function Sphere(radius) {
    this.radius = radius;
}

function Ball(radius) {
    Sphere.call(this, radius);//pass parameters comma separated
    this.material = "plastic";
}

////
function Sphere(radius) {
    this.radius = radius;
}

function Ball(radius) {
    Sphere.apply(this, arguments);//pass parameters in an array (arguments is array like)
    this.material = "plastic";
}

/*
 * Call vs Apply - 2
 */
var list = document.querySelectorAll('div');//here list is NodeList (array like)
Array.prototype.find.call(list, function(ele){ return true;})
Array.prototype.find.call(list, function(ele, index){ if (index === 1){return true;}})


/*
 * Bind
 */
function oscillator(timer) {
    window.setTimeout(timer.callback, timer.period);
}

var timer1 = {
    period: 1000,
    passed: 10,
    callback: function() {
        this.passed++;
        console.log('Period passed', this.passed);
    }
}

var timer2 = {
    period: 5000,
    passed: 20,
    callback: function() {
        this.passed++;
        console.log('Period passed', this.passed);
    }
}
timer2.callback = timer2.callback.bind(timer1);