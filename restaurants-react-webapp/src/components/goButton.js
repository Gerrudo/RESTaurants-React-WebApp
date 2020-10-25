import React from 'react';
import InfoTab from './InfoTab.js';
import { trackPromise } from 'react-promise-tracker';
import ReviewsTab from './ReviewsTab.js';
import NoData from './NoData'


class GoButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        info: {},
      };
      // This binding is necessary to make `this` work in the callback
      this._onButtonClick = this._onButtonClick.bind(this);
    }
  
    _onButtonClick() {
        this.setState({
            dataReady: false
    })
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
      
        fetch("https://dev.tomsnetwork.uk:1443/go", requestOptions)
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
            <div>
                {
                this.state.dataReady ?
                <div>
                <InfoTab info={this.state.info} />
                {this.state.info.result.reviews === undefined ? (
                <div>
                  <h3>Information</h3>
                  <NoData />
                </div>
                ) : (
                  <ReviewsTab reviews={this.state.info.result.reviews} />
                )}
                </div>
                :
                null
                }
            </div>
        </div>
      );
    }
  }

export default GoButton;