function add(a, b){
    return a+b;
}

function multiply(args){
    return args[0]*args[1];
}

function square(val){
    return val*val;
}

function addTwoandSquare(a, b){
    return square(add(a, b));
}

console.log(addTwoandSquare(2, 3));

// Using composite function

function compositeTwoFunction(fn1, fn2){
    return function (a,b){
        return fn2(fn1(a,b));
    }
}

const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

const task = compositeTwoFunction(add, square);
console.log(task(2, 3));

function compose(...fns){
    return function (...values){
        return fns.reduceRight((a, b) => b(a), values)
    }
}

const composeAll=(...fns) => (...val) => fns.reduce((a, b) => b(a), val)