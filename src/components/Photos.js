import React from 'react';

class PhotosTab extends React.Component {

  render(){
    const photos = this.props.photos
    if (!photos || photos.length === 0) return <p>No Photos, sorry</p>;
    return (
      <div>
        <h3>Photos</h3>
        {photos.map(item => (
            <div>
              <img class="img-thumbnail" src={item.URL} alt={item.URL}>
              </img>
            </div>
          ))}
      </div>
    )
  }
}

export default PhotosTab;