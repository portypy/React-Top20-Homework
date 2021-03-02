import React, { useState } from 'react';
import Charts from '../components/Charts';

const ChartsContainer = () => {

    const [charts, setCharts] = useState({})

    const getCharts = () => {
        console.log('getting charts');
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setCharts(data));
    }

    return(
        <Charts onSelectedGetCharts={() => getCharts()}/>
    )

}


export default ChartsContainer;