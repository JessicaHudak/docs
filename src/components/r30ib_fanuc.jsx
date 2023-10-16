import React from 'react';

const r30ib = (props) => {
  // Check the URL for the showContent parameter
  const urlParams = new URLSearchParams(window.location.search);
  const param_r30ib = urlParams.get('param_r30ib');

  // Define the condition based on the parameter value
  const show_r30ib = param_r30ib === 'true';

  if (show_r30ib) {
    return <div>{props.children}</div>;
  }
  return null; // Hide content if the condition is not met
};

export default r30ib;
