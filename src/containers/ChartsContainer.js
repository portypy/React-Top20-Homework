import React, { useState } from 'react';

const ChartsContainer = () => {

    const [charts, setCharts] = useState({})

    const getCharts = () => {
        console.log('getting charts');
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setCharts(data));
    }

    return(
        <button onClick={getCharts}>Get Charts</button>
    )

}


export default ChartsContainer;