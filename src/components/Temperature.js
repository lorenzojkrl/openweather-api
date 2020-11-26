import React from 'react';

const Temperature = ({ tempData, index }) => {
    const tContainer = {
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: '10px'
    }
    return (
        <div key={index} style={tContainer}>
            <div className="t_min-container">
                <div>Min</div>
                <div>{parseInt(tempData.temp_min)} <span>&#176;</span>C</div>
            </div>
            <div className="t_max-container">
                <div>Max</div>
                <div>{parseInt(tempData.temp_max)} <span>&#176;</span>C</div>
            </div>
        </div>
    );
};

export default Temperature;