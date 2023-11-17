import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";



export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "12e65f3c7a0cab456a4b3fd78f8f4175";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }



    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }

    }

    return (
        <div className='SearchBox' >
            <h3>Search for the weather</h3>

            <form onSubmit={handleSubmit} >
                <TextField id="city" label="City Name" onChange={handleChange} value={city} variant="outlined" required />
                <br></br>
                <br></br>
                <Button variant="contained" type='submit' >Search</Button>
                {error && <p style={{color: "red"}} >No such place exists in our data!</p>}
            </form>
        </div>
    );
}