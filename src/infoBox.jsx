import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox( { info } ) {
    const Image_URL = "https://images.unsplash.com/photo-1673191898498-9bac443b2407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
    const HOT_URL = "https://images.unsplash.com/photo-1548017560-7fda8a680404?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwdGVtcGVyYXR1cmV8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1549752448-38f4d94420f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGNvbGQlMjB0ZW1wZXJhdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB0ZW1wZXJhdHVyZXxlbnwwfHwwfHx8MA%3D%3D";


    return (
        <div className="InfoBox">
            <h1>WeatherInfo- {info.weather} </h1>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity> 80? RAIN_URL: info.temp > 15? HOT_URL: COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity> 80? <ThunderstormIcon/>: info.temp > 15? <WbSunnyIcon/>: <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <p>Temperature = {info.temp}&deg;C </p>
                            <p>Humidity = {info.humidity} </p>
                            <p>Min Temp = {info.tempMin}&deg;C </p>
                            <p>Max = {info.tempMax}&deg;C </p>
                            <p>
                                The weather can be described as <i> {info.weather} </i> and feels like {info.feelslike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}
