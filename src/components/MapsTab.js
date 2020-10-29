import React from 'react';

class MapsTab extends React.Component {

  render(){
    const maps = this.props.mapsEmbedUrls
    if (!maps || maps.length === 0) return <p>No Maps data, sorry</p>;
    return (
        <div class="container">
            <h3>Maps</h3>
              <div class="text-center">
                <iframe
                  src={maps.URL}
                  title="MapsEmbed"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{border:0}}
                  aria-hidden="false"
                  tabIndex="0"
                  allowFullScreen="">
                </iframe>
              </div>
        </div>
      )
    }
  }

export default MapsTab;