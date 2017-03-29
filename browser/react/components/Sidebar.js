import React from 'react';
import { Link } from 'react-router'

const Sidebar = (props) => {

  const getArtists = props.getArtists;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to={`/albums/`}>ALBUMS
            {/*<a href="#" >ALBUMS</a>*/}
          </Link>
        </h4>
        <section>
          <h4 className="menu-item">
            <Link to={'/artists/'} onClick={() => getArtists()} >ARTISTS</Link>
          </h4>
        </section>
      </section>
    </sidebar>
  );
}

export default Sidebar;
