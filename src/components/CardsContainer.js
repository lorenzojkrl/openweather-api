import React from 'react';
import Date from './Date'
import Icon from './Icon'
import Temperature from './Temperature'

const CardsContainer = ({ weatherData }) => {
    const cardsStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        marginTop: '10px',
    }
    const cardStyle = {
        border: '1px solid grey',
        margin: '5px',
        backgroundColor: 'rgba(228, 232, 241, 0.8)',
        borderRadius: '10px',
    }

    return (
        <div style={cardsStyle}>
            {
                weatherData.length !== 0 && weatherData
                    .filter((w) => w.dt_txt.slice(-8) === '12:00:00' || weatherData.indexOf(w) === 0)
                    .map((w, index) => {
                        return <div style={cardStyle} className="card" key={400 + index}>
                            <Date unixDate={w.dt} index={100 + index} />
                            <Icon iconObj={w.weather[0]} index={200 + index} />
                            <Temperature tempData={w.main} index={300 + index} />
                        </div>
                    })
            }


        </div>
    );
};

export default CardsContainer;