// Closures

// function main(){
//     const name = "Ayush";

//     function sayMyName(){
//         console.log(name);
//     }

//     sayMyName();
// }

// main();

function main(name) {

    function sayMyName() {
        console.log(name);
    }

    return sayMyName();
}

let name1=main("Ayush");

name1();

function adder(num){
    function add(b){
        console.log(num+b);
    }

    return add;
}

const addTo5=adder(5);

addTo5(2);
addTo5(4);

const myName = document.getElementById('my-name');
const button = document.getElementById('my-btn');

function makeTextSizer(size) {
    function changeSize(){
        myName.style.fontSize=`${size}px`;       
    }
    return changeSize;
}

const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size52 = makeTextSizer(52);

button.addEventListener("click", size12);