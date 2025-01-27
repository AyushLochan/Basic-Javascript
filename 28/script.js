// Iterators

//for of loops
for(const val of [1, 2, 3, 4, 5]){
    console.log(val);
}

function makeIterator(start=0, end=Infinity, step=1){
    let nextStart = start;
    let iterationCount=0;

    return {
        next() {
            let result;
            if(iterationCount<end){
                result = {value : nextStart, done : false};
                nextStart+=step;
                iterationCount++;
                return result;
            }

            return {value : nextStart, done : true};
        }
    }
}
const myIterator=makeIterator(1, 10, 1);
let result=myIterator.next();

while(!result.done){
    console.log(result.value);
    result=myIterator.next();
}


// Generators

function* count() {
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
}

const even=count()

for(const v of even){
    console.log(v);
}


function* makeMyIterator(start, end, step){
    for(let i=start; i<=end; i+=step){
        yield i;
    }
}

const one=makeMyIterator(1, 10, 2);
for(const val of one){
    console.log(val);
}