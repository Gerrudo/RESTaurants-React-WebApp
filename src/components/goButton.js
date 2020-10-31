import React from 'react';
import { trackPromise } from 'react-promise-tracker';
import Info from './Info';
import Reviews from './Reviews';
import Photos from './Photos';
import Maps from './Maps'

class GoButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this._onButtonClick = this._onButtonClick.bind(this);
    }
  
    _onButtonClick() {
      trackPromise(
        this.apiCall()
      )
    }

    locationService(){
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

    async apiCall(){
        let userCoordinates = await this.locationService();
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
      
        fetch("https://dev.tomsnetwork.uk:1443/newlocationsearch", requestOptions)
        .then(response => response.json())
        .then(result => 
          this.setState({ 
            info: result,
            dataReady: true,
          }),
        )
        .catch(error => console.error(error));
    }

    render() {
      return (
        <div class="container">
          <button button type="button" class="btn btn-primary" onClick={this._onButtonClick}>Button</button>
                {
                this.state.dataReady ?
                <div>
                  <Info info={this.state.info} />
                  <Reviews reviews={this.state.info.result.reviews} />
                  <Photos photos={this.state.info.result.photoUrls} />
                  <Maps mapsEmbedUrls={this.state.info.result.mapsEmbedUrls} />
                </div>
                :
                null
                }
        </div>
      );
    }
  }

export default GoButton;