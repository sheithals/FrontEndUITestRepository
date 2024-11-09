$(document).ready(function () {
    const username = 'na_sindhe_sheithal'; // Replace with your Meteomatics username
    const password = 'lUTC99jn58'; // Replace with your Meteomatics password
    const baseUrl = 'https://api.meteomatics.com';

    $('#getWeather').click(function () {
        const location = $('#location').val();
        if (!location) {
            alert('Please enter a location.');
            return;
        }

        const now = new Date().toISOString().split('.')[0] + 'Z';
        const parameters = 't_2m:C'; // 2-meter temperature in Celsius
        const apiUrl = `${baseUrl}/${now}/${parameters}/${location}/json`;
        alert(apiUrl)
        
        $.ajax({
            url: "https://api.meteomatics.com/2024-11-09T21:07:25Z/t_2m:C/52.5200,13.4050/json",
            type: 'GET',
            dataType: 'json',
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            },
            success: function (response) {
                const data = response.data[0];
                const temperature = data.coordinates[0].dates[0].value;
                const result = `
                    <h2>Weather for ${location}</h2>
                    <p><strong>Temperature:</strong> ${temperature} °C</p>
                `;
                $('#weatherResult').html(result);
            },
            error: function (xhr, status, error) {
                alert('Error: ' + xhr.responseText);
            }
        });
    });
});
