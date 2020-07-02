import React from 'react';

const SingleAlbum = (props) => {

  const { album } = props;

  return (
    <div className="album">
      <a>
        <img src={album.artworkUrl} />
        <p>{album.name}</p>
        <small>{album.artist.name}</small>
      </a>
    </div>
  )
}

export default SingleAlbum;
