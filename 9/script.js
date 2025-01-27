// High Order Functions and Callback

function add(a, b, cb){
    let result=a+b;
    cb(result)
}

add(2, 4, function(val){
    console.log(val);
});

add(2, 4, val => console.log(val));

function add(a, b, cb){
    let result=a+b;
    cb(result)

    return () => console.log(result);
}

add(2, 4, () => {});

let res=add(2, 4, () => {});
res();

function mul(a, b){
    let ans=a*b;
    return () => console.log(ans);
}

let answer=mul(4, 5);
answer();