import React from 'react';
import Songs from './Songs';

const SingleAlbum = (props) => {

  const { album } = props;

  console.log('single album >>> ', album)

  return (
    <div className="album">
      <a>
        <img src={album.artworkUrl} />
        <p>{album.name}</p>
        <small>{album.artist.name}</small>
      </a>
      <Songs album={album} songs={album.songs} play={props.play} />
    </div>
  )
}

export default SingleAlbum;
