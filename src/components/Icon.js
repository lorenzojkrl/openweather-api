import React from 'react';

const Icon = ({ iconObj, index }) => {
    const iconStyle = {
        padding: '10px'
    }
    const showIcon = (iconObj) => {
        // console.log(iconObj)


        return <>
            <img
                src={`http://openweathermap.org/img/wn/${iconObj.icon}@2x.png`}
                alt={`${iconObj.description}`}
            />
            <div>{iconObj.main}</div>
        </>
    }
    return (
        <div key={index} style={iconStyle}>
            {showIcon(iconObj)}
        </div>
    );
};

export default Icon;