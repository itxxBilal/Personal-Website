import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import lod from "./Bilal.svg"

const LoadingContainer = styled.div`
background: #3d0cb6a3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingImage = styled.img`
  width: 100px; /* Adjust the width as needed */
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImage src={lod} alt="Loading" />
    </LoadingContainer>
  );
};

export default Loading;
