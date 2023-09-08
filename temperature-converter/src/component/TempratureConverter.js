import React, { useState } from 'react'

const TempratureConverter = () => {

    const [celsius, setCelsius] = useState("")
    const [fahrenheit, setFahrenheit] = useState("")

    const handleCelsiusChange = (value) => {
        const convert = (value * 9 / 5) + 32;
        setFahrenheit(convert || "");
        console.log("clickes")
    };



    return (
        <div>
            <label>
                Celsius:
                <input
                    type="number"
                    value={celsius}
                    className='cel'
                    onChange={(e) => setCelsius(e.target.value)}
                    onBlur={(e) => handleCelsiusChange(e.target.value)}
                />
            </label>
            <label>
                Fahrenheit:
                <input
                    type="number"
                    value={fahrenheit}
                    className='cel'
                    onChange={(e) => setFahrenheit(e.target.value)}
                    onBlur={(e) => {
                        const converted = (e.target.value - 32) * 5 / 9;
                        setCelsius(converted || '');
                    }}
                />
            </label>
            <h3>{fahrenheit} Fahrenheit is equal to {celsius} Celsius.</h3>
        </div>
    );
}

export default TempratureConverter
