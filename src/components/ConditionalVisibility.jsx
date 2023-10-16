import React from 'react';

const ConditionalVisibility = (props) => {
  // Check the URL for the showContent parameter
  const urlParams = new URLSearchParams(window.location.search);
  const r30ia = urlParams.get('r30ia');

  // Define the condition based on the parameter value
  const filter_r30ia = r30ia === 'true';

  if (filter_r30ia) {
    return <div>{props.children}</div>;
  }
  return null; // Hide content if the condition is not met
};

export default ConditionalVisibility;
