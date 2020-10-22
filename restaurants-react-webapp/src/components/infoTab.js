import React from 'react';

class InfoTab extends React.Component {
  render() {
    const info = this.props.info;

    return(
      <div>
        <h2>{info.name}</h2>
        <ul class="list-group">
          <h4>Address</h4>
            <li class="list-group-item">{info.address}</li>
                  <h4>Phone Number</h4>
            <li class="list-group-item">{info.phoneNumber}</li>
                  <h4>Website</h4>
            <a class="list-group-item">{info.url}</a>
                  <h4>Opening Hours</h4>
            <ul class="list-group">{info.openingHours}</ul>
        </ul>
      </div>
    )
  }
}

export default InfoTab;

    