const button = document.getElementById("search-button");
const input = document.getElementById("city-input")

async function getData(){
    const promise=await fetch(``);
    return await promise.json()
}

button.addEventListener('click',async () =>{
    const value = input.value;
    const result = await getData();
    console.log(result);
});