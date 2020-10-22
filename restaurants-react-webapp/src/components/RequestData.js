import React, { Component } from 'react';
import InfoTab from './InfoTab.js';


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.error('Geolocation not supported by browser');
  }
}

function showPosition(position) {
  return position.coords.latitude + ', ' + position.coords.longitude
}

class RequestData extends Component {
    //We will store api data here
  state = {
    info : {},
  }

  componentDidMount() {
    let userCoordinates = getLocation()

    fetch(`https://localhost:3000/go#${userCoordinates}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ info: data })
    })
    .catch(console.log)
  }

  render() {
    return(
      <div className="container">
        <InfoTab info={this.state.info} />
      </div>
    )
  }
}

export default RequestData;