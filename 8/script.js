// Arrow functions

const sayHello = () =>{
    console.log("Hello");
};

const add =(a,b) =>{
    return a+b;
};

const addNumber = () => a+b;

const addNum = (...nums) =>{
    console.log(nums);
}

addNum(5,6,7);

const obj ={
    value: 20,
    myFunction: function (){
        console.log(this);
    },
};

obj.myFunction();