import React from 'react'

const AllAlbums = (props) => {
  const { albums, albumSelector } = props;

  // console.log('albums >>> ', albumSelector)

  return (
    <div id='albums' className='row wrap'>
      {
        Array.isArray(albums) &&
        albums.map(album => {
          return (
            <div
              className='album'
              key={album.id}
              // onClick={() => albumSelector(album.id)}
            >
              <a onClick={() => albumSelector(album.id)}>
                <img src={album.artworkUrl} />
                <p>{album.name} </p>
                <small>{album.artist.name} </small>
              </a>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllAlbums;
