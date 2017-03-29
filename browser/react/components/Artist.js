import React from 'react';
import Artists from '../components/Artists';

const Artist = (props) => {
    console.log('propsForArtist ', props)

    return (
        <div>
            <h3>ARTIST NAME</h3>
            <h4>ALBUMS</h4>
            <h4>SONGS</h4>
        </div>
    )

}

export default Artist