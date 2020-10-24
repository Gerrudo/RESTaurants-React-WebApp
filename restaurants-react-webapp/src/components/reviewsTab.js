import React from 'react';

const RenderList = props => {
  const info = this.props.info.reviews
return (
  <div>
      {info.map(item => (
        <div class="media">
        <img src={item.reviews.profile_photo_url} class="mr-3" alt={item.reviews.profile_photo_url}></img>
          <div class="media-body">
            <h5 class="mt-0">{item.reviews.author_name}</h5>
            {item.reviews.text}
          </div>
        </div>
      ))}
  </div>
)}

class ReviewsTab extends React.Component {
    render(){
      return <div>{Renderlist}</div>
    }
  }
    export default ReviewsTab;