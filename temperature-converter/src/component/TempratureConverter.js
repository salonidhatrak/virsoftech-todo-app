import React from 'react'

const TempratureConverter = () => {
    return (
        <div>
            <div><input
                type='number'
                placeholder='Enter a Temprature'
                className='input' />
            </div>
            <br />
            <div>
                <button>Fahrenheit to Celsius</button>
            </div>
            <div>
                <button>Celsius to Fahrenheit</button>
            </div>
        </div>
    )
}

export default TempratureConverter
