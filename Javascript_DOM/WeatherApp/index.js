const cityInput=document.querySelector(".cityInput");
const weatherForm=document.querySelector(".weatherForm");
const card=document.querySelector('.card');
const apiKey='c44a210ba01443791f28a50c5f0d932d';

weatherForm.addEventListener('submit',async event=>{
    event.preventDefault()

    const city=cityInput.value;

    if(city)
    {
        try {
            const weatherData = await getWeatherData(city)
            displayWeatherInfo(weatherData)
            
        } catch (error) {
            displayError(error)
            console.log(error)
        }

    }
    else{
        displayError("Please Enter a City")
    }

});

async function getWeatherData(city){
    const apiUrl='http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apikey}'
}

function displayWeatherInfo(data){

}

function displayError(message)
{
    const errormessage=document.createElement('p')
    errormessage.textContent=message
    errormessage.classList.add('error')

    card.textContent=""
    card.style.display="flex"
    card.appendChild(errormessage)
}