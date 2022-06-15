let weather = {
    apikey : "0c7f61ffd0be7be4014108b56f276628",
    fetchWeather: function(city){
        fetch (
            'https://api.openweathermap.org/data/2.5/weather?q=' 
            + city
            // +"goa"+
            + '&units=metric&appid='
            // + "0c7f61ffd0be7be4014108b56f276628",
            + this.apikey,
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        const { name } = data;
        const { icon , description } = data.weather[0];
        const { temp ,humidity} = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        const visibility = data.visibility;
        const timezone = data.timezone;

        console.log(name ,visibility,timezone, icon ,description,temp, humidity,speed ,country);

        // document.querySelector('.city').innerText = "Weather in " + name;

        document.title = name;

        document.querySelector(".city").innerText = "Weather in " + name  +"(" + country +")" ;
        document.querySelector(".timezone").innerText = "Timezone: " + timezone; 
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind: " + speed + "km/h";
        document.querySelector(".description").innerText =  description;
        document.querySelector(".range").innerText = on ;
        document.querySelector(".weather").classList.remove("Loading");

    },

    search : function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    },
};

//For button
document.querySelector('.search button').addEventListener("click",function(){
    weather.search();
});


//For Enter key
document.querySelector('.search-bar').addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

//on loading the page

// weather.fetchWeather("Ahmedabad");