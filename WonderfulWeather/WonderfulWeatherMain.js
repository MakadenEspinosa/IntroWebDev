let currentCity = null;  

document.getElementById('check-button').addEventListener('click', function() { 
    const city = document.getElementById('city-input').value.trim();
    if (!city) {
        showError('Please enter a valid city name');
        return;
    }
    getWeather(city);
});
function showLoading() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('error').style.display = 'none';
    document.getElementById('weather-section').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function showError(message) {
    document.getElementById('error').textContent = message;
    document.getElementById('error').style.display = 'block';
    document.getElementById('weather-section').style.display = 'none';
}