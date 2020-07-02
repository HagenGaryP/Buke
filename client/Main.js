import React from 'react';
import Sidebar from './Sidebar';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Player from './Player';
import axios from 'axios';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      selectedAlbum: {}
    }
    // this.albumSelector = this.albumSelector.bind(this);
  }

  async componentDidMount() {
    console.log('MOUNTEDDDDDD!!!')
    try {
      const response = await axios.get('/api/albums')
      const albums = response.data;
      this.setState({
        albums: albums
      })
    } catch (error) {
      console.log('did not mount! err = ', error);
    }
  }

  async albumSelector(id) {
    try {
      const response = await axios.get(`/api/albums/${id}`);
      const selectedAlbum = response.data;
      console.log('this is the selectedAlbummmmm >>> ', selectedAlbum)
      this.setState({
        selectedAlbum
      })
    } catch (error) {
      console.log('error with album selection ', error);
    }
  }

  render () {
    return (
      <div id='main' className='row container'>

        <Sidebar />

        <div className='container'>
        {
          this.state.selectedAlbum.id ?
            <SingleAlbum album={this.state.selectedAlbum} /> :
            <AllAlbums
              albums={this.state.albums}
              albumSelector={this.albumSelector}
            />
        }

        </div>

        <Player />

      </div>
    )
  }
}

// const albums = [
//   {
//     "id": 1,
//     "name": "No Dummy",
//     "artworkUrl": "default-album.jpg",
//     "artistId": 1,
//     "artist": {
//       "id": 1,
//       "name": "The Crash Test Dummies"
//     }
//   },
//   {
//     "id": 2,
//     "name": "I React to State",
//     "artworkUrl": "default-album.jpg",
//     "artistId": 1,
//     "artist": {
//       "id": 1,
//       "name": "The Crash Test Dummies"
//     }
//   }
// ];
