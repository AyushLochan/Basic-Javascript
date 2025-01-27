// High Order Array

const students = ["Piyush", "John", "Aakash", "Parth"];

for(let i=0; i<students.length; i++){
    console.log(students[i]);
}

function print(n){
    console.log(n);
}

// students.forEach(print);

// students.forEach((val) => console.log(val));

// students.map((val) => console.log(val));

// forEach not return any val
// map returns value

const num = [1, 2, 3, 4, 5];

function double(n){
    return n*2;
}

let newArr=num.forEach(double);
console.log(newArr);

let newArr1=num.map(double);
console.log(newArr1);

let ans=num.find((num) => num==4);
console.log(ans)

ans=num.findIndex((num) => num==4);
console.log(ans)

const even=num.filter((num) => num%2==0);
console.log(even);

let arr2=num.slice(1,5);
console.log(arr2);

let arr3=num.splice(2,5);
console.log(arr3);