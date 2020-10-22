import React, { Component } from 'react';
import InfoTab from './InfoTab.js';

class RequestData extends Component {
    //We will store api data here
  state = {
    info : {
      address: '1 Manchester Road, Manchester, M1 5BT',
      phoneNumber: '0744869586',
      url: 'https://www.tastyplace.com',
      openingHours: 'Monday: Closed'
    }
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