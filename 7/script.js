function hello(){
    console.log("hello");
}

hello();
hello();

function add(){
    let ans=0;
    for(let i=0;i<arguments.length;i++){
        ans+=arguments[i];
    }
    return ans; 
}

let res=add(4,6,5)
console.log(res)

function add(...nums){
    let ans=0;
    for(let i=0;i<mums.length;i++){
        ans+=nums[i];
    }
    return ans; 
}

res=add(4,6,5)
console.log(res)