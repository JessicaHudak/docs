// src/components/ConditionalVisibility.js
import React from 'react';

const ConditionalVisibility = ({ paramValue, children }) => {
  // Check the URL for the "param" parameter
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get('param');

  if (param === paramValue) {
    return children;
  }

  return null;
};

export default ConditionalVisibility;
