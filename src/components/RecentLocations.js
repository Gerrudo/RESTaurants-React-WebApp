import React from 'react';
import { trackPromise } from 'react-promise-tracker';

class RecentLocations extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    async apiCall(){

        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        fetch("https://dev.tomsnetwork.uk:1443/recentlocations", requestOptions)
        .then(response => response.json())
        .then(result => 
            this.setState({ 
                recentLocationsData: result,
                dataReady: true,
            }),
          )
        .catch(error => console.log('error', error));
        }

    componentDidMount(){
        trackPromise(
            this.apiCall() 
        )
    }
            
  render(){
    const recentLocationsData = this.state.recentLocationsData
    
    return( 
     <div class="container">
        <h3>Recent Places</h3>
        {
        this.state.dataReady ?
        <div class="row">
            {recentLocationsData.map(item => (
                <div class="card" style={{width: "18rem"}}>
                    <img class="card-img-top" src={`https://dev.tomsnetwork.uk:1443/images#photo_reference=${item.result.photos[0].photo_reference}`} alt="Card"></img>
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">{item.address}</p>
                            <a href={item.result.url} class="btn btn-primary">Open in Google Maps</a>
                        </div>
                </div>    
            ))}    
        </div>
        :
        <div class="container">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        }
     </div>
    )
  }
}

export default RecentLocations;