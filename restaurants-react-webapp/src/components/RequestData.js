import React, { Component } from 'react';
import InfoTab from './InfoTab.js';
const backendDir = 'https://dev.tomsnetwork.uk:1443';

function locationService(){
  return new Promise (function (resolve) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(buildUrl);
      function buildUrl(position) {
        let queryCoordinates = position.coords.latitude + ',' + position.coords.longitude;
        let requestUrl = `${backendDir}/go#${queryCoordinates}`;
        resolve(requestUrl)
      }
    } else { 
      console.error('Geolocation not supported by browser');
    }
  })
}
async function onMount(){
  let requestUrl = await locationService();
  console.log(requestUrl);
  fetch(requestUrl)
  .then(res => res.json())
  .then((data) => {
    this.setState({ info: data })
  })
  .catch(console.log)
}

class RequestData extends Component {
    //We will store api data here
  state = {
    info : {},
  }

  componentDidMount() {
    onMount()
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