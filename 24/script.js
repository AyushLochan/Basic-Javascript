// Currying

function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        };
    };
}

console.log(add(2)(3)(4));

// function sendAutoEmail(to){
//     return function (subject){
//         return function(body){
//             console.log(`Sending Email to ${to} with subject ${subject}: ${body}`)
//         };
//     };
// }

// Using another method

const sendAutoEmail = (to) => (subject) => (body) =>
    `Sending Email to ${to} with subject ${subject}: ${body}`;


let step1 = sendAutoEmail("abc@gmail.com");
let step2 = step1("New Order Confirmation:");

step2("Hey, There");
