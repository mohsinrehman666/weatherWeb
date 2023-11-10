const api_key = 'ff32f01f98c9043e30b6fcdbfb2efdf6'
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
var searchIcon=document.getElementById('searchIcon')


// const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

// const img_url = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const getWeather = async (city) =>{
    weather.innerHTML = `<h3> Loading... <h3>`


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${api_key}&units=metric`

  const response = await fetch(url)
  const data = await response.json()
  return showWeather(data)
//   console.log(data)
}

const showWeather =(data)=>{
   if(data.cod == "404"){
weather.innerHTML=`<h3> City Not Found </h3>`
;
   }
    weather.innerHTML = `
    <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp}°C</h2>
            <h4>${data.weather[0].main}</h4>
            
        </div>
        `

     

}


form.addEventListener("submit", (event) => { 
   
    getWeather(search.value)
    event.preventDefault();

})


searchIcon.addEventListener('click',(event)=>
{
    getWeather(search.value)
    event.preventDefault()
}
)