import React from 'react';

const Songs = (props) => {

  const { album, } = props;

  console.log('song comp props >>> ', album.songs)

  return (
    <div className="songs">
      <table id="songs">
        <tbody>
          <tr className="gray">
            <td />
            <td>#</td>
            <td>Name</td>
            <td>Artist</td>
            <td>Genre</td>
          </tr>
          {
            album.songs.map((song, idx) => {
              idx++;
              return (
                <tr key={song.id}>
                <td><i className="fa fa-play-circle"
                   onClick={() => props.play()}

                   /></td>
                <td>{idx}</td>
                <td>{song.name}</td>
                <td>{album.artist.name}</td>
                <td>{song.genre}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Songs;
