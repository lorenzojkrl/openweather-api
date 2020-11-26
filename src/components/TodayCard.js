import React, { useEffect } from 'react';
import Date from './Date'
import Icon from './Icon'
import Temperature from './Temperature'

const TodayCard = ({ weatherData, setBackgroundImage }) => {
    const todayStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        fontWeight: 'bold',
        fontSize: '26px',
        border: '1px solid grey',
        borderRadius: '10px',
        backgroundColor: 'rgba(228, 232, 241, 0.6)',
        margin: '0 5px'
    }

    useEffect(() => {
        if (weatherData.length !== 0) {
            // console.log('In bg change');
            let weatherState = weatherData[0].weather[0].main
            let today = new window.Date()
            let timeNow = today.getHours();

            if (timeNow > 8 && timeNow < 18) {
                if (weatherState === "Clouds") {
                    setBackgroundImage('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
                } else if (weatherState === "Rain") {
                    setBackgroundImage('https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
                } else if (weatherState === "Clear") {
                    setBackgroundImage('https://images.unsplash.com/photo-1530530824905-661c2bb787f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
                }
            } else {
                if (weatherState === "Clouds") {
                    setBackgroundImage('https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
                } else if (weatherState === "Rain") {
                    setBackgroundImage('https://images.unsplash.com/photo-1517632298125-355d911c3a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
                } else if (weatherState === "Clear") {
                    setBackgroundImage('https://images.unsplash.com/photo-1535536609565-9675cafeff32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')
                }
            }

        }
    }, [weatherData, setBackgroundImage])

    if (weatherData.length !== 0) {
        return (
            <div style={todayStyle}>
                <Date unixDate={weatherData[0].dt} />
                <Icon iconObj={weatherData[0].weather[0]} />
                <Temperature tempData={weatherData[0].main} />
            </div>
        );
    }
    return <></>
};

export default TodayCard;