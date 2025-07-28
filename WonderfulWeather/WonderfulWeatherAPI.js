async function getWeather(city) {
    showLoading();
    
    try {
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3dc63db5365804e5044cf1e81335fcca`);
        
        if (!response.ok) {
            throw new Error('Weather data not found. Please check the city name');
        }   
        const weatherData = await response.json();
        console.log(weatherData); 
       
        displayWeather(weatherData);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }

}

function displayWeather(weatherData) {
    currentCity = weatherData.name;  
    document.getElementById('weather-section').style.display = 'block';

    const city = weatherData.name;
    const country = weatherData.sys && weatherData.sys.country;
    const temp = weatherData.main && weatherData.main.temp;
    const desc = weatherData.weather && weatherData.weather[0] && weatherData.weather[0].description;

    const tempF = ((temp - 273.15) * 9/5 + 32).toFixed(1);
    document.getElementById('weather-result').textContent = `${city}, ${country} | ${tempF}°F | ${desc}`;

    const img = document.getElementById('weather-image');
    
        const condition = (weatherData.weather && weatherData.weather[0] && weatherData.weather[0].main) ? weatherData.weather[0].main.toLowerCase() : '';
        console.log(condition);
        let imgSrc = '';
        if (condition === 'clear') imgSrc = 'sunny.gif';
        else if (condition === 'rain') imgSrc = 'drop.gif';
        else if (condition === 'clouds') imgSrc = 'cloudy.webp';
        else if (condition === 'snow') imgSrc = 'snowy.gif';
        else if (condition === 'thunderstorm') imgSrc = 'stormy.gif';
        img.src = imgSrc;
        console.log(imgSrc);
        img.style.display = 'block';
}