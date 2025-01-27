const button=document.getElementById("get-location-button");

async function getData(){
    const promise=await fetch(``);
    return await promise.json()
}

async function gotLocation(position){
    await getData(position.coords.latitude, position.coords.longitude)
}

function failedToGet(){
    console.log('There was some issue');
}

button.addEventListener('click', async () =>{
    const result=navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
})