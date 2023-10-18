// src/components/ConditionalVisibility.js
import React from 'react';

const ConditionalVisibility = ({ ctrlValue, safetyValue, children }) => {
  // Check the URL for the "param" parameter
  const urlParams = new URLSearchParams(window.location.search);
  const ctrl = urlParams.get('ctrl');
  const safety = urlParams.get('safety');


  const shouldShowContent = ctrl === ctrlValue && safety === safetyValue;

  if (shouldShowContent) {
    return children;
  }

  return null;
};

export default ConditionalVisibility;
