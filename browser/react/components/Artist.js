import React from 'react';
import Artists from '../components/Artists';
import {convertAlbums, convertAlbum} from '../utils';
import axios from 'axios';

export default class Artist extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;
    const artistAlbums =
    axios.get(`/api/artists/${artistId}/albums`)
      .then(res => res.data)
      .then(albums => convertAlbums(albums))
      .then(albums => albums)
    }

    render(){
         console.log('artists albums', artistAlbums)
        return (
            <div>
                <h3>{this.props.selectedArtist.name}</h3>
                <h4>ALBUMS</h4>

                <h4>SONGS</h4>
            </div>
        )
    }
}
