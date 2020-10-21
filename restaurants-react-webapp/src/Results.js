import React from 'react';
import './Results.css';

function Results() {
    return (
      <div id="resultsdiv" class="container">
        <h2></h2>
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#menu0">Information</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#menu1">Reviews</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#menu2">Photos</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#menu3">Maps</a></li>
          </ul>
        <div class="tab-content">
          <div id="menu0" class="tab-pane fade">
            <ul class="list-group">
              <h4>Address</h4>
                <li class="list-group-item"></li>
              <h4>Phone Number</h4>
                <li class="list-group-item"></li>
              <h4>Website</h4>
                <a class="list-group-item"></a>
              <h4>Opening Hours</h4>
                <ul class="list-group"></ul>
            </ul>
          </div>
          <div id="menu1" class="tab-pane fade">
          </div>
          <div id="menu2" class="tab-pane fade">
          </div>
          <div id="menu3" class="tab-pane fade">
            <div id="mapsembed" class="text-center">
            </div>
          </div>
        </div>
      </div>
      )
    }

    export default Results;