import React from 'react';

const Date = ({ unixDate, index }) => {
    const dateStyle = {
        padding: '10px'
    }
    const converter = (unixDate) => {

        let dateObject = new window.Date(unixDate * 1000)
        // let humanDateFormat = dateObject.toLocaleString("en-US")

        dateObject.toLocaleString("en-US", { weekday: "short" }) // Mon
        let month = dateObject.toLocaleString("en-US", { month: "short" }) // Dec
        let day = dateObject.toLocaleString("en-US", { day: "numeric" }) // 9
        dateObject.toLocaleString("en-US", { year: "numeric" }) // 2019
        dateObject.toLocaleString("en-US", { hour: "numeric" }) // 10 AM
        dateObject.toLocaleString("en-US", { minute: "numeric" }) // 30
        dateObject.toLocaleString("en-US", { second: "numeric" }) // 15
        dateObject.toLocaleString("en-US", { timeZoneName: "short" })

        let shortDate = `${month} ${day}`

        return shortDate

    }

    return (
        <div key={index} style={dateStyle}>
            <b>{converter(unixDate)}</b>
        </div>
    );
};

export default Date;