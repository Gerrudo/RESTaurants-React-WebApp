import React from 'react';

class ReviewsTab extends React.Component {

  render(){
    const reviews = this.props.reviews
    return (
      <div>
        <h3>Reviews</h3>
          {reviews.map(item => (
            <div class="media">
            <img src={item.profile_photo_url} class="mr-3" alt={item.profile_photo_url}></img>
              <div class="media-body">
                <h5 class="mt-0">{item.author_name}</h5>
                {item.text}
              </div>
            </div>
          ))}
      </div>
    )
  }
}
export default ReviewsTab;