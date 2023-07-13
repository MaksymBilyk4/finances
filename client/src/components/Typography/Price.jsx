import React from 'react';

const Price = ({price}) => {
    return <p style={{
        fontSize: "16px",
        textAlign: "center",
        fontWeight: "bold",
        background: price >= 0 ? "#73d13d" : "#ffa39e",
        borderRadius: "20px"
    }}>
        {price}
    </p>
};

export default Price;