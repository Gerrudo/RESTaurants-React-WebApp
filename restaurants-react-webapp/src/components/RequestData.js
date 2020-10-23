import React, { Component } from 'react';
import InfoTab from './InfoTab.js';
//const backendDir = 'https://dev.tomsnetwork.uk:1443';

function locationService(){
  return new Promise (function (resolve) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(buildUrl);
      function buildUrl(position) {
        let queryCoordinates = position.coords.latitude + ',' + position.coords.longitude;
        resolve(queryCoordinates)
      }
    } else { 
      console.error('Geolocation not supported by browser');
    }
  })
}

class RequestData extends Component {

  state = {
    info : {},
    dataReady: false
  }

  async componentWillMount() {
    let userCoordinates = await locationService();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("userCoordinates", userCoordinates);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("https://dev.tomsnetwork.uk:1443/go", requestOptions)
    .then(response => response.json())
    .then(result => 
      this.setState({ 
        info: result,
        dataReady: true
      }),
    )
    .catch(error => console.error(error));
    }

  render() {
    return(
      <div className="container">
        {
          this.state.dataReady ? <InfoTab info={this.state.info} /> : <h1> Loading </h1>
        }
      </div>
    )
  }
}  

export default RequestData;