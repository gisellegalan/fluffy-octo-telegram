function showweatherDetails(event) {
    event.preventDefault(); // Prevents the default behavior of an event, such as form submission

    const city = document.getElementById('city').value;
    const apiKey = '4518d9adb948793d99d727050f62c7f0';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl) // returns promise object
        .then(response => response.json()) // Convert response to JSON format
        .then(data => { // Access data and generate HTML
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;

        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

