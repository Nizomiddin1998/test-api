import React from 'react';
import { Watch } from 'react-loader-spinner';
import styled from 'styled-components'

export default function MyLoader () {
  return (
    <Bg>
      <Watch heigth="100" width="100" color="#226A47" ariaLabel="loading" />
    </Bg>
  );
};

const Bg = styled.div`
margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  z-index: 9999;
`;