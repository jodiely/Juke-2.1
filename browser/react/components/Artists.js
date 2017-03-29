import React from 'react';
import initialState from '../initialState';
import { Link } from 'react-router'


export default class Artists extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <div>
                <h3>Artists</h3>
                <div className="list-group">
                    {
                        this.props.artists.map(artist => {
                            return (
                                <div className="list-group-item" key={artist.id}>
                                    {/* determine where to actually Link to later! */}
                                    <Link to={'/artists/:artistId/'}>{artist.name}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}
