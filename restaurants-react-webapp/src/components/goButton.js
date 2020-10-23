import React from 'react';
import RequestData from './RequestData'

class GoButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggle: false,
      };
      // This binding is necessary to make `this` work in the callback
      this._onButtonClick = this._onButtonClick.bind(this);
    }
  
    _onButtonClick() {
      this.setState({
        toggle: true,
        runAgain: true
      });
    }

    componentDidMount(){
        this.setState({
            toggle: false,
            runAgain: false
        });
    }
  
    render() {
      return (
        <div class="container">
          <button button type="button" class="btn btn-primary" onClick={this._onButtonClick}>Button</button>
          {this.state.toggle ?
             <RequestData /> :
             null
          }
        </div>
        
      );
    }
  }

export default GoButton;