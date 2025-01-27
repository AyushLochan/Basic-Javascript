// Promisification

// Without Promise
// function loadScript(src, callback){
//     const script = document.getElementById('script');
//     script.src=src;

//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error('Error Loading'));

//     document.head.appendChild(script);
// }

// loadScript("test.js", (err, script) => {
//     if(err) {
//         console.log(err);
//     }else{
//         console.log("Script Loaded");
//     }
// })

// Promisification

function promisify(fn){
    return function(...args){
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) =>{
                if(error) return reject(error);
                return resolve(result);
            })
        })
    }
}

function loadScript(src, callback){

}

const loadScriptNew = promisify(loadScript);

// loadScriptNew('test.js').then(() => console.log("Done: ")).catch(() => console.log("Error"));

(async () => {
    try{
        const result=await loadScriptNew("text.js")
        console.log("Done: ");
    }
    catch(error){
        console.log(error);
    }
})();