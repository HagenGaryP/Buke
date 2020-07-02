import React from 'react'

const AllAlbums = (props) => {
  // maybe some sort destructuring from props?

  return (
    <div id='player-container'>
      <div id='player-controls'>
        <div className='row center'>
          <i className='fa fa-step-backward'></i>
          <i className='fa fa-pause-circle'></i>
          <i className='fa fa-step-forward'></i>
        </div>
      </div>
    </div>
  )
}

export default AllAlbums;
