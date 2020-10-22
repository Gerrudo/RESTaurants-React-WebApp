import React from 'react';
import RequestData from './RequestData'
class GoButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }
  
    _onButtonClick() {
      this.setState({
        showComponent: true,
      });
    }
  
    render() {
      return (
        <div class="container">
          <button button type="button" class="btn btn-primary" onClick={this._onButtonClick}>Button</button>
          {this.state.showComponent ?
             <RequestData /> :
             null
          }
        </div>
      );
    }
  }

export default GoButton;