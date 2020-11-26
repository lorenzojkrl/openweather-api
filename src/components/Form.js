import React from 'react';
import TextField from '@material-ui/core/TextField';

const Form = ({ setWeatherData, setUserLocation, userLocation }) => {
    const formContainer = {
        margin: '10px',
    }
    const inputStyle = {
        backgroundColor: 'rgba(228, 232, 241, 0.8)',
        borderRadius: '10px',
    }
    const fetchWeatherData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${userLocation}&units=metric&appid={SECRET-KEY}`)
            .then(async response => {
                if (response.ok) {
                    response.json()
                        .then(json => setWeatherData(json.list))
                }
                else {
                    throw new Error(response.status + " Failed Fetch ");
                }
            }).catch(e => {
                console.error('EXCEPTION Mona!: ', e)
                alert('Invalid city')
            })
    }
    const handleChange = (e) => {
        setUserLocation(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        fetchWeatherData()
    }

    return (

        <form onSubmit={e => handleSubmit(e)} style={formContainer}>
            <TextField
                label="Your City"
                style={inputStyle}
                inputProps={{
                    style: {
                        padding: 5
                    }
                }}
                InputLabelProps={{
                    style: {
                        padding: 5,
                    }
                }}
                onChange={handleChange}
            />
        </form>

    );
};

export default Form;