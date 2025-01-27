// IIFE - Immediately Invoked Function Expression

(function add(a, b){
    console.log(a+b);
})(2, 4);

(function say(){
    console.log("Hello");
})();

(() => console.log("Hi"));

const data = (async () => await fetch())();

const atm = (function (initialBalance){
    let balance = initialBalance;
    function withdraw(amt){
        if(amt>balance){
            console.log("Error");
        }else{
            balance-=amt;
            return balance;
        }
    }
    return { withdraw };
})

const abc=atm(1000);
console.log(abc.withdraw(100))
