import React from 'react'
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress &&
    <div class="container">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );  
}

export default LoadingIndicator