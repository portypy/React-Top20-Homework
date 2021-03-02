import React from 'react';
import '../Style.css'

const Charts = ({onSelectedGetCharts}) => {
    return(

        <button class="button" onClick={onSelectedGetCharts}>Get UK top 20 songs</button>

    )
}

export default Charts;