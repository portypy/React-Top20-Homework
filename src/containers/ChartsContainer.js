import React, { useState } from 'react';
import ChartsButton from '../components/ChartsButton';
import ChartsDetails from '../components/ChartsDetails';

const ChartsContainer = () => {

    const [charts, setCharts] = useState({})
    const [loaded ,setLoaded] = useState(false)


    const getCharts = () => {
        console.log("fetch");
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setCharts(data))
        .then(() => setLoaded(true));
    }
    if(!loaded){
        return <ChartsButton onSelectedGetCharts={() => getCharts()}/>
    }
    return(
        <ChartsDetails  charts={charts}
                        loaded={loaded}/>    
    )

}


export default ChartsContainer;