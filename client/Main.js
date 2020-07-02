import React from 'react';
import Sidebar from './Sidebar';
import AllAlbums from './AllAlbums';
import Player from './Player';

const state = {
  albums: [
    {
      "id": 1,
      "name": "No Dummy",
      "artworkUrl": "default-album.jpg",
      "artistId": 1,
      "artist": {
        "id": 1,
        "name": "The Crash Test Dummies"
      }
    },
    {
      "id": 2,
      "name": "I React to State",
      "artworkUrl": "default-album.jpg",
      "artistId": 1,
      "artist": {
        "id": 1,
        "name": "The Crash Test Dummies"
      }
    }
  ]
}

export default class Main extends React.Component {
  // constructor() {

  //   this.state = {
  //     albums: []
  //   }
  // }

  // componentDidMount() {

  // }

  render () {
    return (
      <div id='main' className='row container'>

        <Sidebar />

        <div className='container'>
          <AllAlbums albums={state.albums} />
        </div>

        <Player />

      </div>
    )
  }
}
