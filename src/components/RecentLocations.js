import React from 'react';
import { trackPromise } from 'react-promise-tracker';

class RecentLocations extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    async apiCall(){
        var urlencoded = new URLSearchParams();

        var requestOptions = {
        method: 'GET',
        body: urlencoded,
        redirect: 'follow'
        };

        fetch("https://localhost:1443/recentlocations", requestOptions)
        .then(response => response.json())
        .then(result => 
            this.setState({ 
                recentLocationsData: result,
                dataReady: false,
            }),
          )
        .catch(error => console.log('error', error));
        }

    async componentDidMount(){
        trackPromise(
            this.apiCall() 
        )
        console.log(this.state)       
    }
            
  render(){
    const recentLocationsData = this.state.recentLocationsData
    
    return( 
     <div class="container">
        <h3>Recent Places</h3>
        {
        this.state.dataReady ?
        <div>
            {recentLocationsData.map(item => (
                <div class="card" style={{width: "18rem"}}>
                    <img class="card-img-top" src="{item..googleImageUrl.URL[0]}" alt="Card"></img>
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">{item.address}</p>
                            <a href="{item.googleMapsUrl}" class="btn btn-primary">Open in Google Maps</a>
                        </div>
                </div>    
            ))}    
        </div>
        :
        null   
        }
     </div>
    )
  }
}

export default RecentLocations;