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
    this.albumSelector = this.albumSelector.bind(this);
    this.reset = this.reset.bind(this);
    this.start = this.start.bind(this);
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

  async albumSelector(albumId) {

    try {
      const response = await axios.get(`/api/albums/${albumId}`);
      const selectedAlbum = response.data;
      this.setState({
        selectedAlbum: selectedAlbum,
      })
    } catch (error) {
      console.log('error with album selection ', error);
    }
  }

  reset() {
    this.setState({ selectedAlbum: {} });
  }

  start() {
    const audio = document.createElement('audio');
    audio.src = 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3';
    audio.load();
    audio.play();
    // for now, reload the page if you want to stop the music

  }

  render () {
    return (
      <div id='main' className='row container'>

        <Sidebar reset={this.reset} />

        <div className='container'>
        {
          this.state.selectedAlbum.id ?
            <SingleAlbum
              album={this.state.selectedAlbum}
              play={this.start}
            /> :
            <AllAlbums
              albums={this.state.albums}
              albumSelector={this.albumSelector}
            />
        }

        </div>

        <Player play={this.start} />

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
