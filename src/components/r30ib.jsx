import React from 'react';

const r30ia = (props) => {
  // Check the URL for the showContent parameter
  const urlParams = new URLSearchParams(window.location.search);
  const param_r30ia = urlParams.get('param_r30ia');

  // Define the condition based on the parameter value
  const show_r30ia = param_r30ia === 'true';

  if (show_r30ia) {
    return <div>{props.children}</div>;
  }
  return null; // Hide content if the condition is not met
};

const r30ib_fanuc = (props) => {
  // Check the URL for the showContent parameter
  const urlParams = new URLSearchParams(window.location.search);
  const param_r30ib_fanuc = urlParams.get('param_r30ib_fanuc');

  // Define the condition based on the parameter value
  const show_r30ib_fanuc = param_r30ib_fanuc === 'true';

  if (show_r30ib_fanuc) {
    return <div>{props.children}</div>;
  }
  return null; // Hide content if the condition is not met
};

export default r30ia;
