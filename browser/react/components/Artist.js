import React from 'react';
import Artists from '../components/Artists';
import Albums from './Albums';
import {convertAlbums, convertAlbum} from '../utils';
import axios from 'axios'; 

export default class Artist extends React.Component {

    constructor(props) {
        super(props);

    }



    render(){
        console.log('Artist Props', this.props);
        return (
            <div>
                <h3>{this.props.selectedArtist.name}</h3>
                <h4>Albums</h4>
                     <Albums albums={this.props.artistAlbums} />
                <h4>SONGS</h4>
            </div>
        )
    }
}
