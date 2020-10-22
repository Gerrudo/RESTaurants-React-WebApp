import React from 'react';

function TabSelect() {
    return (
      <div class="container">
        <h2></h2>
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#menu0">Information</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#menu1">Reviews</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#menu2">Photos</a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#menu3">Maps</a></li>
          </ul>
        <div class="tab-content">
        </div>
      </div>
      )
    }

    export default TabSelect;