// src/components/ConditionalVisibility.js
import React from 'react';

const ConditionalVisibility = ({ paramValue, safetyValue, children }) => {
  // Check the URL for the "param" parameter
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get('param');
  const safety = urlParams.get('safety');


  const shouldShowContent = param === paramValue && safety === safetyValue;

  if (shouldShowContent) {
    return children;
  }

  return null;
};

export default ConditionalVisibility;
