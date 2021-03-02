import React from 'react';

const ChartsDetails = ({charts, loaded}) => {
    const chartsNodes = charts.feed.entry.map(song => {
        return (
            <ul id="songs">
                <img src={song.["im:image"][0]["label"]} />
                {song.["im:name"]["label"]}
            </ul>
        )
    })

    return(
        
        <>{chartsNodes}</>
    )
}


export default ChartsDetails;