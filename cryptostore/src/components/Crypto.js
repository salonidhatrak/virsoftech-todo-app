import React from 'react'

const Crypto = ({ name, icon, price, symbol }) => {
    return (
        <div className="coin">
            <h2> Name: {name}</h2>
            <img src={icon} />
            <h3> Price: {price}</h3>
            <h3> Symbol: {symbol}</h3>
        </div>
    )
}

export default Crypto
