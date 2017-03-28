import React from 'react';
import { Link } from 'react-router'

const Albums = (props) => {

  const albums = props.albums;
  const selectAlbum = props.selectAlbum;

  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
      {
        albums.map(album => (
          <div className="col-xs-4" key={ album.id }>
            <Link to={`/albums/${this.props.params.albumId}`}>Go to an Album</Link>
              <img src={ album.imageUrl } />
              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>

          </div>
        ), this)
      }
      </div>
    </div>
  );
}

export default Albums;

// <Link to="/albums">Go to Albums</Link>
// <Link to={`/albums/${this.props.albumId}`}>Go to an Album</Link>
// <a className="thumbnail" href="#" onClick={() => selectAlbum(album.id)}>
//   </a>
