import React from 'react';
import NoData from './NoData'

class InfoTab extends React.Component {
  render() {
    const info = this.props.info;
    if (!info || info.length === 0) return <NoData />;
    return(
      <div>
        <h2>{info.result.name}</h2>
          <h3>Information</h3>
          <ul class="list-group">
            
            <h4>Address</h4>
            {info.result.formatted_address === undefined ? (
                <NoData />
              ) : (
                <li class="list-group-item">{info.result.formatted_address}</li>
              )}
             
            <h4>Phone Number</h4>
            {info.result.international_phone_number === undefined ? (
                <NoData />
              ) : (
                <li class="list-group-item">{info.result.international_phone_number}</li>
              )}
             
            <h4>Website</h4>
              {info.result.website === undefined ? (
                <NoData />
              ) : (
                <a href={info.website} class="list-group-item">{info.result.website}</a>
              )}
             
            <h4>Opening Hours</h4>
              {info.result.opening_hours === undefined ? (
                <NoData />
              ) : (
                <ul class="list-group">{info.result.opening_hours.weekday_text}</ul>
              )}
              
          </ul>
      </div>
    )
  }
}

export default InfoTab;

    